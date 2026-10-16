// ── İÇERİK ANALİZİ (Claude API) ─────────────────────────────
// Anahtar tarayıcıya hiç gitmez: Cloudflare'de ANTHROPIC_API_KEY secret'ı olarak durur.
const ALLOWED_ORIGINS = ["https://scanliq.com", "https://www.scanliq.com"];
const MAX_CHARS = 15000;
const RATE_LIMIT = 10;              // IP başına
const RATE_WINDOW_MS = 60 * 60 * 1000; // 1 saat
const rateMap = new Map();          // en iyi çaba: aynı isolate içinde geçerli

function contentCors(origin) {
  return {
    "Access-Control-Allow-Origin": ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0],
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
    "Content-Type": "application/json",
  };
}

function jsonResp(obj, status, headers) {
  return new Response(JSON.stringify(obj), { status, headers });
}

function buildPrompt(text, lang) {
  if (lang === "en") {
    return `You are a GEO (Generative Engine Optimization) and AI citation readiness expert. Analyze the text below for how suitable it is to be CITED by AI systems like ChatGPT and Perplexity.

Criteria:
1. Clear, direct answers
2. Specific, verifiable data and statistics
3. Structure and organization (headings, logical flow)
4. Authority and trust signals
5. Citability (can AI easily lift sentences?)

Text:
"""${text}"""

Respond ONLY with this JSON, nothing else. Write all strings in English:
{"score": <0-100>, "verdict": "<one sentence>", "strengths": ["2-4 short items"], "weaknesses": ["2-4 short items"], "suggestions": ["3-5 concrete suggestions, with an example where possible"]}`;
  }
  return `Sen bir GEO (Generative Engine Optimization) ve AI citation readiness uzmanısın. Aşağıdaki metni, ChatGPT ve Perplexity gibi yapay zeka sistemleri tarafından KAYNAK GÖSTERİLMEYE ne kadar uygun olduğu açısından analiz et.

Kriterler:
1. Net ve doğrudan cevaplar
2. Spesifik, doğrulanabilir veri ve istatistikler
3. Yapı ve organizasyon (başlıklar, mantıklı akış)
4. Otorite ve güven sinyalleri
5. Alıntılanabilirlik (AI kolayca cümle çekebilir mi?)

Metin:
"""${text}"""

SADECE şu JSON ile yanıt ver, başka hiçbir şey yazma. Tüm metinler Türkçe olsun:
{"score": <0-100>, "verdict": "<tek cümle>", "strengths": ["2-4 kısa madde"], "weaknesses": ["2-4 kısa madde"], "suggestions": ["3-5 somut öneri, mümkünse örnekle"]}`;
}

async function handleContentAnalysis(request, env) {
  const origin = request.headers.get("Origin") || "";
  const headers = contentCors(origin);

  if (request.method === "OPTIONS") return new Response(null, { headers });
  if (request.method !== "POST") return jsonResp({ error: "method_not_allowed" }, 405, headers);
  if (!ALLOWED_ORIGINS.includes(origin)) return jsonResp({ error: "forbidden_origin" }, 403, headers);
  if (!env || !env.ANTHROPIC_API_KEY) return jsonResp({ error: "missing_api_key" }, 500, headers);

  // Basit hız sınırı (IP başına saatte 10)
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const now = Date.now();
  const hits = (rateMap.get(ip) || []).filter(t => now - t < RATE_WINDOW_MS);
  if (hits.length >= RATE_LIMIT) return jsonResp({ error: "rate_limited" }, 429, headers);
  hits.push(now);
  rateMap.set(ip, hits);

  let body;
  try { body = await request.json(); } catch { return jsonResp({ error: "bad_json" }, 400, headers); }
  const text = String(body.text || "").trim();
  const lang = body.lang === "en" ? "en" : "tr";
  const words = text ? text.split(/\s+/).length : 0;
  if (words < 30) return jsonResp({ error: "too_short" }, 400, headers);
  if (text.length > MAX_CHARS) return jsonResp({ error: "too_long" }, 400, headers);

  let apiRes;
  try {
    apiRes = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 1200,
        messages: [{ role: "user", content: buildPrompt(text, lang) }],
      }),
    });
  } catch {
    return jsonResp({ error: "upstream_unreachable" }, 502, headers);
  }
  if (!apiRes.ok) return jsonResp({ error: "upstream_" + apiRes.status }, 502, headers);

  const data = await apiRes.json();
  const raw = (data.content || []).filter(b => b.type === "text").map(b => b.text).join("");
  const start = raw.indexOf("{"), end = raw.lastIndexOf("}");
  let result;
  try { result = JSON.parse(raw.slice(start, end + 1)); }
  catch { return jsonResp({ error: "parse_failed" }, 502, headers); }

  const list = (a, n) => (Array.isArray(a) ? a : []).slice(0, n).map(s => String(s).slice(0, 400));
  const clean = {
    score: Math.max(0, Math.min(100, Math.round(Number(result.score) || 0))),
    verdict: String(result.verdict || "").slice(0, 400),
    strengths: list(result.strengths, 4),
    weaknesses: list(result.weaknesses, 4),
    suggestions: list(result.suggestions, 5),
  };
  return jsonResp({ success: true, result: clean }, 200, headers);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // İçerik analizi ucu (Claude API, anahtar sunucuda)
    if (url.pathname === "/analyze-content") {
      return handleContentAnalysis(request, env);
    }

    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const targetUrl = url.searchParams.get("url");

    if (!targetUrl) {
      return new Response(JSON.stringify({ error: "URL parametresi eksik" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    try {
      const baseUrl = new URL(targetUrl).origin;
      const results = {};
      const UA = { "User-Agent": "Scanliq-Bot/1.0" };

      // ── Ana sayfa HTML ──────────────────────────────────────────
      let html = "";
      let htmlBytes = 0;
      let responseStatusOk = false;
      let xRobotsTag = "";
      try {
        const res = await fetch(targetUrl, { headers: UA, redirect: "follow" });
        const buf = await res.arrayBuffer();
        htmlBytes = buf.byteLength;
        html = new TextDecoder("utf-8", { fatal: false }).decode(buf);
        results.https = targetUrl.startsWith("https://");
        responseStatusOk = res.status === 200;
        xRobotsTag = (res.headers.get("x-robots-tag") || "").toLowerCase();
      } catch {
        results.https = false;
      }
      results.responseStatusOk = responseStatusOk;

      // ── robots.txt ──────────────────────────────────────────────
      let robotsTxt = "";
      try {
        const res = await fetch(baseUrl + "/robots.txt", { headers: UA });
        robotsTxt = res.ok ? await res.text() : "";
        results.robots = res.ok && robotsTxt.length > 5;
      } catch {
        results.robots = false;
      }

      // ── Bot engel tespiti (genişletilmiş) ───────────────────────
      const lower = robotsTxt.toLowerCase();
      // Bir botun engellenip engellenmediğini bul.
      // Dönüş: true = engelli, false = izinli/belirsiz (varsayılan crawl edilebilir)
      const botBlocked = (bot) => {
        if (!robotsTxt) return false; // robots yoksa varsayılan: erişilebilir
        const b = bot.toLowerCase();
        // Önce spesifik bot kuralını ara
        let idx = lower.indexOf("user-agent: " + b);
        if (idx === -1) idx = lower.indexOf("user-agent:" + b);
        if (idx !== -1) {
          let end = lower.indexOf("user-agent:", idx + 10);
          if (end === -1) end = lower.length;
          const section = lower.substring(idx, end);
          return /disallow:\s*\/(\s|$)/.test(section);
        }
        // Spesifik kural yoksa, User-agent: * bloğunda tüm site engelli mi bak
        let starIdx = lower.indexOf("user-agent: *");
        if (starIdx === -1) starIdx = lower.indexOf("user-agent:*");
        if (starIdx !== -1) {
          let end = lower.indexOf("user-agent:", starIdx + 10);
          if (end === -1) end = lower.length;
          const section = lower.substring(starIdx, end);
          return /disallow:\s*\/(\s|$)/.test(section);
        }
        return false; // hiçbir kural yok → izinli
      };
      const botAllowed = (bot) => !botBlocked(bot);

      // Tekil bot sinyalleri
      results.oaiSearchBot = botAllowed("oai-searchbot");
      results.gptBot       = botAllowed("gptbot");
      results.chatgptUser  = botAllowed("chatgpt-user");
      results.claudeBot    = botAllowed("claudebot");
      results.claudeUser   = botAllowed("claude-user");
      results.perplexityBot  = botAllowed("perplexitybot");
      results.perplexityUser = botAllowed("perplexity-user");
      results.googlebot    = botAllowed("googlebot");
      results.bingbot      = botAllowed("bingbot");
      // Google-Extended: opt-out sinyali (engellenmişse AI training'e kapalı demek;
      // görünürlük puanı DEĞİL, sadece bilgi olarak taşınır)
      results.googleExtendedBlocked = botBlocked("google-extended");

      // Genel AI bot izinleri — herhangi biri tamamen engelliyse uyarı
      const anyAIBlocked =
        botBlocked("oai-searchbot") || botBlocked("gptbot") || botBlocked("chatgpt-user") ||
        botBlocked("claudebot") || botBlocked("claude-user") ||
        botBlocked("perplexitybot") || botBlocked("perplexity-user") ||
        botBlocked("bingbot") || botBlocked("googlebot");
      results.aibots = !anyAIBlocked;

      // ── llms.txt ────────────────────────────────────────────────
      try {
        const res = await fetch(baseUrl + "/llms.txt", { headers: UA });
        const txt = res.ok ? await res.text() : "";
        results.llms = res.ok && txt.length > 5 && !txt.trim().startsWith("<");
      } catch {
        results.llms = false;
      }

      // ── sitemap.xml — çok kanallı keşif ─────────────────────────
      let sitemapFound = false;
      if (robotsTxt) {
        const sitemapMatch = robotsTxt.match(/Sitemap:\s*(https?:\/\/[^\s]+)/i);
        if (sitemapMatch) sitemapFound = true;
      }
      if (!sitemapFound) {
        try {
          const res = await fetch(baseUrl + "/sitemap.xml", { headers: UA, method: "HEAD" });
          if (res.status === 200) sitemapFound = true;
        } catch {}
      }
      if (!sitemapFound) {
        try {
          const res = await fetch(baseUrl + "/sitemap_index.xml", { headers: UA, method: "HEAD" });
          if (res.status === 200) sitemapFound = true;
        } catch {}
      }
      results.sitemap = sitemapFound;

      // ── HTML kontrolleri ────────────────────────────────────────
      if (html) {
        results.desc = /<meta[^>]+name=["']description["'][^>]+content=["'][^"']{10,}["']/i.test(html) ||
                       /<meta[^>]+content=["'][^"']{10,}["'][^>]+name=["']description["']/i.test(html);
        results.og = /<meta[^>]+property=["']og:/i.test(html);
        results.ogimage = /<meta[^>]+property=["']og:image["']/i.test(html);
        results.canonical = /<link[^>]+rel=["']canonical["']/i.test(html);
        results.schema = /schema\.org/i.test(html) || /itemtype=/i.test(html);
        results.jsonld = /<script[^>]+type=["']application\/ld\+json["']/i.test(html);
        results.viewport = /<meta[^>]+name=["']viewport["']/i.test(html);

        const langMatch = html.match(/<html[^>]+lang=["']([a-zA-Z]{2,})/i);
        results.lang = !!(langMatch && langMatch[1] && langMatch[1].trim().length >= 2);

        const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        if (titleMatch) {
          const raw = titleMatch[1]
            .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
            .replace(/&nbsp;/g, " ")
            .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
            .replace(/&[a-z]+;/g, "").trim();
          const charCount = [...raw].length;
          results.title = charCount >= 10 && charCount <= 70;
          results.titleLength = charCount;
          results.titleText = raw.substring(0, 80);
        } else {
          results.title = false;
          results.titleLength = 0;
        }

        const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
        results.h1 = h1Count >= 1;
        results.h1Count = h1Count;

        results.favicon = /<link[^>]+rel=["'][^"']*icon[^"']*["']/i.test(html);

        // Text-to-HTML oranı
        const textOnly = html
          .replace(/<script[\s\S]*?<\/script>/gi, "")
          .replace(/<style[\s\S]*?<\/style>/gi, "")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ").trim();
        const textBytes = new TextEncoder().encode(textOnly).length;
        const textRatio = htmlBytes > 0 ? Math.round((textBytes / htmlBytes) * 100) : 0;
        results.textRatio = textRatio;
        results.textRatioPass = textRatio >= 25;
        results.contentLengthOk = textOnly.length >= 600; // yeterli metin

        // FAQ / soru bloğu
        const headings = html.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi) || [];
        const faqHeadings = headings.filter(h => h.includes("?"));
        results.faqBlocks = faqHeadings.length;
        results.faqPass = faqHeadings.length >= 1;

        // indexable — meta robots noindex var mı?
        const metaRobots = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i);
        const metaRobotsContent = metaRobots ? metaRobots[1].toLowerCase() : "";
        const noindexMeta = /noindex/.test(metaRobotsContent);
        const noindexHeader = /noindex/.test(xRobotsTag);
        results.indexable = !(noindexMeta || noindexHeader);
        results.xRobotsTag = !noindexHeader; // true = header temiz

        // structuredDataValidBasic — JSON-LD parse edilebilir mi?
        let sdValid = false;
        const ldMatches = html.match(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
        if (ldMatches && ldMatches.length) {
          for (const block of ldMatches) {
            const inner = block.replace(/<script[^>]*>/i, "").replace(/<\/script>/i, "").trim();
            try { JSON.parse(inner); sdValid = true; break; } catch {}
          }
        }
        results.structuredDataValidBasic = sdValid;

        // hreflang
        results.hreflang = /<link[^>]+hreflang=["'][^"']+["']/i.test(html) ||
                           /hreflang=["'][^"']+["']/i.test(html);

        // socialConsistency — OG title/desc, meta title/desc ile tutarlı mı (ikisi de var mı)
        const ogTitle = /<meta[^>]+property=["']og:title["']/i.test(html);
        const ogDesc = /<meta[^>]+property=["']og:description["']/i.test(html);
        results.socialConsistency = ogTitle && ogDesc && results.title && results.desc;

      } else {
        const htmlKeys = ["desc","og","ogimage","canonical","schema","jsonld","viewport",
          "lang","title","h1","favicon","textRatioPass","faqPass","indexable","xRobotsTag",
          "structuredDataValidBasic","hreflang","socialConsistency","contentLengthOk"];
        htmlKeys.forEach(k => results[k] = false);
        results.titleLength = 0;
        results.h1Count = 0;
        results.textRatio = 0;
        results.faqBlocks = 0;
      }

      // ── copilotReady (Bing/Copilot hazırlığı) ───────────────────
      results.copilotReady =
        results.https === true &&
        results.bingbot === true &&
        (results.sitemap === true || results.schema === true || results.jsonld === true);

      // ── AĞIRLIKLI GEO SCORE ──────────────────────────────────────
      // Ağırlıklar — yüksek değer = AI görünürlüğü için daha kritik
      const WEIGHTS = {
        oaiSearchBot: 10, aibots: 10, llms: 9, schema: 9,
        bingbot: 8, copilotReady: 8, jsonld: 8, faqPass: 8,
        sitemap: 7, title: 7, desc: 7, googlebot: 7,
        h1: 6, canonical: 6, textRatioPass: 6,
        robots: 5, https: 5,
        og: 4, ogimage: 4, lang: 4, chatgptUser: 4, perplexityUser: 4, claudeBot: 4,
        gptBot: 3, viewport: 3,
        indexable: 3, structuredDataValidBasic: 3,
        favicon: 2, hreflang: 2, socialConsistency: 2,
        responseStatusOk: 2, contentLengthOk: 2
      };

      let earned = 0, totalWeight = 0;
      for (const key in WEIGHTS) {
        const w = WEIGHTS[key];
        totalWeight += w;
        if (results[key] === true) earned += w;
      }
      results._score = Math.round((earned / totalWeight) * 100);
      results._passed = Object.keys(WEIGHTS).filter(k => results[k] === true).length;
      results._total = Object.keys(WEIGHTS).length;

      // ── AI MOTORU GÖRÜNÜRLÜĞÜ (4 motor) ──────────────────────────
      // ok / warn / fail
      const engineVisibility = {};
      // ChatGPT Search — OAI-SearchBot kritik
      if (results.oaiSearchBot && results.https) engineVisibility.chatgpt = "ok";
      else if (results.oaiSearchBot && !results.https) engineVisibility.chatgpt = "warn";
      else engineVisibility.chatgpt = "fail";

      // Google AI / Gemini
      const googleSignals = [results.googlebot, results.https,
        (results.schema || results.jsonld), results.sitemap].filter(Boolean).length;
      if (results.googlebot && results.https && (results.schema || results.jsonld) && results.sitemap)
        engineVisibility.google = "ok";
      else if (results.googlebot && googleSignals >= 2)
        engineVisibility.google = "warn";
      else engineVisibility.google = "fail";

      // Perplexity
      const perplexAccess = results.perplexityBot || results.perplexityUser;
      if (perplexAccess && results.llms) engineVisibility.perplexity = "ok";
      else if (perplexAccess && !results.llms) engineVisibility.perplexity = "warn";
      else engineVisibility.perplexity = "fail";

      // Bing Copilot
      if (results.copilotReady) engineVisibility.copilot = "ok";
      else if (results.bingbot && results.https) engineVisibility.copilot = "warn";
      else engineVisibility.copilot = "fail";

      results._engineVisibility = engineVisibility;

      return new Response(JSON.stringify({ success: true, results }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });

    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
  },
};
