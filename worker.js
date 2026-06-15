export default {
  async fetch(request) {
    const corsHeaders = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
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
      try {
        const res = await fetch(targetUrl, { headers: UA, redirect: "follow" });
        const buf = await res.arrayBuffer();
        htmlBytes = buf.byteLength;
        html = new TextDecoder("utf-8", { fatal: false }).decode(buf);
        results.https = targetUrl.startsWith("https://");
      } catch {
        results.https = false;
      }

      // ── robots.txt + AI bot kontrolü ────────────────────────────
      let robotsTxt = "";
      try {
        const res = await fetch(baseUrl + "/robots.txt", { headers: UA });
        robotsTxt = res.ok ? await res.text() : "";
        results.robots = res.ok && robotsTxt.length > 5;
      } catch {
        results.robots = false;
      }

      // GPTBot / ClaudeBot / PerplexityBot engellenmiş mi?
      results.aibots = true;
      if (robotsTxt) {
        const lower = robotsTxt.toLowerCase();
        const botBlocked = (bot) => {
          let idx = lower.indexOf("user-agent: " + bot);
          if (idx === -1) idx = lower.indexOf("user-agent:" + bot);
          if (idx === -1) return false;
          const section = lower.substring(idx, idx + 300);
          return /disallow:\s*\/(\s|$)/.test(section);
        };
        if (botBlocked("gptbot") || botBlocked("claudebot") || botBlocked("perplexitybot")) {
          results.aibots = false;
        }
      }

      // ── llms.txt ────────────────────────────────────────────────
      try {
        const res = await fetch(baseUrl + "/llms.txt", { headers: UA });
        const txt = res.ok ? await res.text() : "";
        results.llms = res.ok && txt.length > 5 && !txt.trim().startsWith("<");
      } catch {
        results.llms = false;
      }

      // ── sitemap.xml — DÜZELTME: robots.txt'ten de ara ──────────
      // BUG FIX 4: Çok kanallı sitemap keşfi
      let sitemapFound = false;
      // Adım 1: robots.txt içinde "Sitemap:" yönergesi var mı?
      if (robotsTxt) {
        const sitemapMatch = robotsTxt.match(/Sitemap:\s*(https?:\/\/[^\s]+)/i);
        if (sitemapMatch) sitemapFound = true;
      }
      // Adım 2: Doğrudan /sitemap.xml dene
      if (!sitemapFound) {
        try {
          const res = await fetch(baseUrl + "/sitemap.xml", { headers: UA, method: "HEAD" });
          if (res.status === 200) sitemapFound = true;
        } catch {}
      }
      // Adım 3: /sitemap_index.xml dene
      if (!sitemapFound) {
        try {
          const res = await fetch(baseUrl + "/sitemap_index.xml", { headers: UA, method: "HEAD" });
          if (res.status === 200) sitemapFound = true;
        } catch {}
      }
      results.sitemap = sitemapFound;

      // ── HTML kontrolleri ────────────────────────────────────────
      if (html) {

        // Meta description
        results.desc = /<meta[^>]+name=["']description["'][^>]+content=["'][^"']{10,}["']/i.test(html) ||
                       /<meta[^>]+content=["'][^"']{10,}["'][^>]+name=["']description["']/i.test(html);

        // Open Graph
        results.og = /<meta[^>]+property=["']og:/i.test(html);

        // og:image
        results.ogimage = /<meta[^>]+property=["']og:image["']/i.test(html);

        // Canonical
        results.canonical = /<link[^>]+rel=["']canonical["']/i.test(html);

        // Schema.org
        results.schema = /schema\.org/i.test(html) || /itemtype=/i.test(html);

        // JSON-LD
        results.jsonld = /<script[^>]+type=["']application\/ld\+json["']/i.test(html);

        // Viewport
        results.viewport = /<meta[^>]+name=["']viewport["']/i.test(html);

        // BUG FIX 1: lang — DOM nitelik bazlı, ek attribute'lere dayanıklı
        // <html lang="tr">, <html class="x" lang="tr">, <html xmlns="..." lang="tr"> hepsini yakalar
        const langMatch = html.match(/<html[^>]+lang=["']([a-zA-Z]{2,})/i);
        results.lang = !!(langMatch && langMatch[1] && langMatch[1].trim().length >= 2);

        // BUG FIX 2: Title — UTF-8 güvenli karakter sayımı (emoji, Türkçe, uzun çizgi dahil)
        const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
        if (titleMatch) {
          // HTML entity decode (basit)
          const raw = titleMatch[1]
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&nbsp;/g, " ")
            .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
            .replace(/&[a-z]+;/g, "")
            .trim();
          // Unicode-aware karakter sayımı (spread ile)
          const charCount = [...raw].length;
          results.title = charCount >= 10 && charCount <= 70;
          results.titleLength = charCount;
          results.titleText = raw.substring(0, 80);
        } else {
          results.title = false;
          results.titleLength = 0;
        }

        // H1 kontrolü
        const h1Count = (html.match(/<h1[\s>]/gi) || []).length;
        results.h1 = h1Count >= 1;
        results.h1Count = h1Count;

        // BUG FIX 3: Favicon — genişletilmiş arama (icon, shortcut icon, apple-touch-icon, mask-icon)
        results.favicon = /<link[^>]+rel=["'][^"']*icon[^"']*["']/i.test(html);

        // ── YENİ: Text-to-HTML Oranı (Rapor 2.2) ─────────────────
        // Saf metin: tüm HTML taglerini sil
        const textOnly = html
          .replace(/<script[\s\S]*?<\/script>/gi, "")
          .replace(/<style[\s\S]*?<\/style>/gi, "")
          .replace(/<[^>]+>/g, " ")
          .replace(/\s+/g, " ")
          .trim();
        const textBytes = new TextEncoder().encode(textOnly).length;
        const textRatio = htmlBytes > 0 ? Math.round((textBytes / htmlBytes) * 100) : 0;
        results.textRatio = textRatio;
        results.textRatioPass = textRatio >= 25; // İdeal oran ≥ %25

        // ── YENİ: FAQ / Soru Bloğu Analizi (Rapor 2.2) ───────────
        // H2 veya H3 içinde soru işareti (?) geçiyor mu?
        const headings = html.match(/<h[23][^>]*>([\s\S]*?)<\/h[23]>/gi) || [];
        const faqHeadings = headings.filter(h => h.includes("?"));
        results.faqBlocks = faqHeadings.length;
        results.faqPass = faqHeadings.length >= 1;

      } else {
        results.desc = false;
        results.og = false;
        results.ogimage = false;
        results.canonical = false;
        results.schema = false;
        results.jsonld = false;
        results.viewport = false;
        results.lang = false;
        results.title = false;
        results.titleLength = 0;
        results.h1 = false;
        results.h1Count = 0;
        results.favicon = false;
        results.textRatio = 0;
        results.textRatioPass = false;
        results.faqBlocks = 0;
        results.faqPass = false;
      }

      // ── Toplam skor (18 kriter) ──────────────────────────────────
      const scoreKeys = [
        "https","robots","aibots","llms","sitemap",
        "title","desc","h1","og","ogimage","canonical",
        "schema","jsonld","viewport","lang","favicon",
        "textRatioPass","faqPass"
      ];
      const passed = scoreKeys.filter(k => results[k] === true).length;
      results._score = Math.round((passed / scoreKeys.length) * 100);
      results._passed = passed;
      results._total = scoreKeys.length;

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
