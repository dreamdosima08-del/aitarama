// Ana sayfadaki statik bölümlerin İngilizce metinleri (data-i anahtarları)
const I18N_EN = {
 "k1t": "AI bot access (9 checks)",
 "k1p": "We check whether your robots.txt blocks ChatGPT search's OAI-SearchBot, the GPTBot training crawler, ChatGPT-User, Anthropic's ClaudeBot, PerplexityBot and Perplexity-User, Googlebot and Bingbot. Bing access, HTTPS and a sitemap together determine your Copilot readiness.",
 "k2t": "Technical setup (7 checks)",
 "k2p": "Whether the site loads over HTTPS, the homepage returns a 200 response, robots.txt, sitemap and llms.txt exist, there is no noindex or X-Robots-Tag block, and a canonical tag is present. Without this foundation no bot can reach your content.",
 "k3t": "Structured data (5 checks)",
 "k3p": "Schema.org markup, a JSON-LD block and whether it parses without errors, Open Graph tags and a share image. Structured data tells AI in machine language what your page is: an article, a product, a business or an FAQ.",
 "k4t": "Content and meta signals (11 checks)",
 "k4p": "A title of 10-70 characters, meta description, H1 heading, language and hreflang tags, a mobile viewport, favicon, text-to-HTML ratio, sufficient content length, question-and-answer FAQ blocks and consistency between the title and social sharing tags.",
 "k0": "What does Scanliq check? All 32 checks",
 "k0p": "Every analysis runs the same 32 checks in four groups. Each check has a weight based on its impact on AI visibility; together they produce your 0-100 GEO Score.",
 "x1": "Guide Hub",
 "x2": "Everything about AI visibility, grouped by topic. Start with the fundamentals, then fix the technical setup and optimize engine by engine.",
 "x3": "GEO Fundamentals",
 "x4": "What is GEO? Core guide",
 "x5": "GEO vs SEO: what's the difference?",
 "x6": "GEO SEO strategy",
 "x7": "What is AEO?",
 "x8": "AI SEO checklist",
 "x9": "7 most common mistakes",
 "x10": "Technical Setup",
 "x11": "What is llms.txt?",
 "x12": "How to write llms.txt",
 "x13": "Is robots.txt blocking AI bots?",
 "x14": "Schema.org structured data",
 "x15": "JavaScript & ghost pages",
 "x16": "AI Engines",
 "x17": "Showing up in ChatGPT",
 "x18": "Why ChatGPT cites some sites",
 "x19": "Google AI Overview",
 "x20": "Perplexity SEO",
 "x21": "Bing Copilot",
 "x22": "Claude",
 "x23": "Content & Trust",
 "x24": "Writing content for AI",
 "x25": "What is E-E-A-T?",
 "x26": "Building trust signals",
 "x27": "Industry & Data",
 "x28": "20-brand GEO score report",
 "x29": "GEO for e-commerce",
 "x30": "Local businesses",
 "x31": "Measuring AI traffic",
 "x32": "Frequently Asked Questions",
 "x33": "What is GEO and how is it different from SEO?",
 "x34": "GEO (Generative Engine Optimization) is the practice of making a website readable and citable by AI search engines such as ChatGPT, Google AI Overview, Perplexity and Copilot. SEO focuses on ranking in search results; GEO focuses on being cited as a source inside the AI's answer. They complement each other: solid SEO is the foundation of GEO.",
 "x35": "What does Scanliq check?",
 "x36": "Scanliq runs 32 checks in four groups. Bot access: whether your robots.txt blocks GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, PerplexityBot, Googlebot or Bingbot. Technical files: llms.txt, sitemap, HTTPS and indexability. Structured data: Schema.org, JSON-LD validity and Open Graph tags. Content signals: title, meta description, H1, text-to-HTML ratio, FAQ blocks, language and hreflang tags.",
 "x37": "How is the GEO Score calculated?",
 "x38": "Each check has a weight based on its impact on AI visibility. For example, access for AI search bots and structured data carry the highest weights, while small signals such as a favicon carry low weights. The weights of passed checks are summed and scaled to 0-100. The GEO Score is Scanliq's own methodology, not an official industry standard.",
 "x39": "Does a high score guarantee I will appear in ChatGPT?",
 "x40": "No. The score measures whether your site is technically readable and ready to be cited. AI systems decide which sources to show; the quality and trustworthiness of your content and your competitors also matter. A high score means the door is open; good content is what gets you in.",
 "x41": "Is Scanliq free?",
 "x42": "Site analysis, GEO Score, PDF report, llms.txt generator and AI content analysis are free. An account is only needed to save analyses and view your history.",
 "x43": "Are the sites I analyze stored?",
 "x44": "For analyses done without an account, the site address is not stored; only an anonymous statistic without the domain (score, extension and check results) is kept. Analyses you save to your account can be deleted at any time.",
 "x45": "Do I need an llms.txt file?",
 "x46": "llms.txt is a proposed standard that summarizes your site for AI. Some AI tools and agents read it, but Google has stated it does not use it for Search or AI Overviews. It takes a few minutes to add and does no harm, but it does not replace bot access, content quality or structured data."
};

/* ===== LANG ===== */
let lang = 'tr';

// Otomatik dil tespiti
(function() {
  // URL parametresi öncelikli
  const urlParams = new URLSearchParams(window.location.search);
  const urlLang = urlParams.get('lang');
  if (urlLang === 'en') { lang = 'en'; return; }
  if (urlLang === 'tr') { lang = 'tr'; return; }
  // NOT: Tarayıcı diline göre otomatik çeviri YAPILMIYOR.
  // Googlebot İngilizce ayarla geldiği için kök URL'nin (Türkçe sayfa) Google'a
  // İngilizce görünmesine yol açıyordu. Kök URL her zaman Türkçe; İngilizce = ?lang=en.
  // Türkçe olmayan ziyaretçilere sadece küçük bir öneri gösterilir (showLangSuggest).
})();
const T = {
  tr: {
    badge: 'SEO + GEO + AI Uyumluluk Analizi',
    h1: 'ChatGPT, Google AI, Perplexity ve <em>Copilot</em> sitenizi görebiliyor mu?',
    p: 'URL\'nizi girin; AI bot erişimi, yapılandırılmış veri, llms.txt, sitemap ve citation readiness sinyallerini saniyeler içinde analiz edin.',
    btnText: '→',
    placeholder: 'https://siteniz.com',
    stat1: 'Kontrol Noktası', stat2: 'GEO Uyum Skoru', stat3: 'Anında Sonuç',
    aboutLabel: 'Scanliq Nedir?',
    about1t: 'AI Optimizasyon Aracı',
    about1p: 'Scanliq, web sitenizi yapay zeka için optimize eden bir GEO (Generative Engine Optimization / Üretken Motor Optimizasyonu) ve AI Search Visibility aracıdır. ChatGPT, Google AI, Perplexity ve Copilot bu yapay zeka arama motorlarında ne kadar görünür olduğunuzu ölçer ve optimize eder.',
    about2t: '30+ Kritik Kontrol',
    about2p: 'ChatGPT Search, Google AI, Perplexity ve Bing Copilot bot erişimleri; llms.txt, Schema.org, JSON-LD, sitemap, canonical, citation readiness ve daha fazlası — hepsi tek tıkla.',
    about3t: 'Skorla ve Optimize Et',
    about3p: 'Saniyeler içinde 0-100 arası GEO Skoru alırsınız. Yapay zeka optimizasyonu için eksik noktalar tespit edilir ve tek tıkla düzeltilebilir çözümler sunulur.',
    about4t: 'Türkçe ve İngilizce',
    about4p: 'Arayüz, PDF raporlar ve rehberler Türkçe ve İngilizce. Yapay zeka optimizasyonu (AI optimization) ve GEO analizini kendi dilinizde yapın.',
    howLabel: 'Nasıl Çalışır?',
    toolsLabel: 'Ücretsiz Araçlar',
    tool1t: 'AI Görünürlük Analizi', tool1p: 'Sitenizin ChatGPT, Google AI, Perplexity ve Copilot\'taki görünürlüğünü ölçün. GEO skorunuzu ve eksiklerinizi görün.', tool1cta: 'Analiz Et →', tool1b: 'ANA ARAÇ',
    tool2t: 'AI İçerik Analizi', tool2p: 'Makalenizin yapay zeka tarafından kaynak gösterilmeye ne kadar uygun olduğunu ölçün. Citation readiness skoru ve öneriler alın.', tool2cta: 'Makaleyi Analiz Et →', tool2b: 'YAPAY ZEKA',
    tool3t: 'llms.txt Oluşturucu', tool3p: 'Web sitenizi yapay zekaya tanıtan llms.txt dosyasını saniyeler içinde oluşturun ve indirin.', tool3cta: 'Oluştur →', tool3b: 'ÜCRETSİZ',
    latestLabel: 'Son Yazılar',
    latest1t: 'Yapay Zeka Hangi Sitelere Güvenir? E-E-A-T Rehberi', latest1url: '/blog10.html',
    latest2t: 'ChatGPT Neden Bazı Siteleri Kaynak Gösterir?', latest2url: '/blog9.html',
    latest3t: '2026 Marka GEO Skor Raporu: 20 Dünya Devi', latest3url: '/blog24.html',
    latestRead: 'Okumaya Devam Et →', latestAll: 'Tüm Yazıları Gör →',
    step1t: 'URL Gir', step1p: 'Analiz etmek istediğiniz sitenin adresini girin.',
    step2t: 'Tara', step2p: 'Scanliq 30\'dan fazla kontrol noktasını otomatik olarak tarar.',
    step3t: 'Skor Al', step3p: '0-100 arası AI hazırlık skoru ve öneriler alın.',
    step4t: 'İyileştir', step4p: 'Eksik noktaları giderin, AI görünürlüğünüzü artırın.',
    loadingLabel: 'TARAMA BAŞLADI',
    loadingSteps: ['robots.txt kontrol ediliyor…', 'Meta etiketler taranıyor…', 'Yapısal veri aranıyor…', 'AI görünürlüğü ölçülüyor…'],
    tipsTitle: '💡 İyileştirme Önerileri',
    promptTitle: '🤖 Yapay Zeka Düzeltme Komutu',
    promptDesc: 'Aşağıdaki komutu kopyalayıp ChatGPT, Claude veya kullandığınız yapay zeka asistanına yapıştırın — eksiklerinizi sizin için düzeltsin.',
    promptCopy: '📋 Kopyala',
    promptCopied: '✅ Kopyalandı!',
    fixDownload: '⬇ Dosyayı İndir',
    fixCopy: '📋 Kopyala',
    fixCopied: '✅ Kopyalandı!',
    promptIntro: 'Web sitem için AI/SEO uyumluluk analizi yaptırdım. Aşağıdaki eksikler tespit edildi. Lütfen her birini düzeltmem için gerekli kodları üret ve nereye ekleyeceğimi adım adım açıkla. Sitem: ',
    promptFixes: {
      https: 'HTTPS aktif değil — sitemi HTTPS\'ye taşımam için yol göster.',
      robots: 'robots.txt dosyası yok — AI botlarına (GPTBot, ClaudeBot, PerplexityBot) izin veren bir robots.txt oluştur.',
      aibots: 'robots.txt dosyam AI botlarını engelliyor — OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, bingbot ve Googlebot engellerini kaldıracak şekilde düzenle.',
      oaiSearchBot: 'robots.txt içinde OAI-SearchBot erişimini aç — ChatGPT Search görünürlüğü için en kritik bot budur.',
      gptBot: 'OpenAI GPTBot erişimini açmak istiyorsanız robots.txt içinde GPTBot engelini kaldır.',
      chatgptUser: 'ChatGPT kullanıcı tetiklemeli erişimleri için robots.txt içinde ChatGPT-User engelini kaldır.',
      bingbot: 'robots.txt içinde bingbot erişimini aç — Bing ve Copilot görünürlüğü için gerekli.',
      copilotReady: 'Bing/Copilot görünürlüğü için sitemap.xml, canonical, meta description ve JSON-LD yapılandırmasını güçlendir.',
      googlebot: 'Googlebot erişimini aç; aksi halde Google AI ve Google Search görünürlüğü düşer.',
      perplexityBot: 'robots.txt içinde PerplexityBot erişimini aç.',
      perplexityUser: 'robots.txt içinde Perplexity-User erişimini aç.',
      claudeBot: 'robots.txt içinde ClaudeBot erişimini aç.',
      indexable: 'Sayfada noindex var — meta robots veya X-Robots-Tag içindeki noindex direktifini kaldır.',
      structuredDataValidBasic: 'Geçerli JSON-LD yok — ayrıştırılabilir, hatasız bir JSON-LD bloğu ekle.',
      hreflang: 'Çok dilli site iseniz hreflang etiketleri ekle (her dil sürümü için).',
      responseStatusOk: 'Ana sayfam 200 OK dönmüyor — sunucu/yönlendirme yapılandırmasını kontrol et.',
      contentLengthOk: 'Sayfada yeterli metin yok — AI bağlam çıkarabilmesi için anlamlı metin içeriği ekle.',
      llms: 'llms.txt dosyası yok — kök dizine markayı, önemli sayfaları ve AI kullanım izinlerini açıklayan bir llms.txt dosyası ekle.',
      sitemap: 'sitemap.xml yok — sayfalarımı listeleyen bir sitemap.xml oluştur.',
      title: 'Title etiketi eksik veya uygunsuz — 10-70 karakter arası, anahtar kelime içeren title etiketi yaz.',
      desc: 'Meta description eksik — 120-160 karakter arası açıklama etiketi yaz.',
      h1: 'H1 başlığı yok — sayfama uygun bir H1 başlığı ekle.',
      og: 'Open Graph etiketleri eksik — og:title, og:description, og:url etiketlerini oluştur.',
      ogimage: 'og:image etiketi yok — paylaşım görseli meta etiketi ekle.',
      canonical: 'Canonical URL tanımlı değil — canonical link etiketi ekle.',
      schema: 'Schema.org yapısal verisi yok — siteme uygun schema işaretlemesi oluştur.',
      jsonld: 'JSON-LD yok — Google\'ın önerdiği JSON-LD formatında yapısal veri ekle.',
      viewport: 'Viewport meta etiketi yok — mobil uyum için viewport etiketi ekle.',
      lang: 'HTML lang etiketi yok — html etiketine dil tanımı ekle.',
      favicon: 'Favicon yok — siteme favicon ekle ve link etiketini oluştur.',
      textRatioPass: 'Metin/HTML oranı düşük — sayfamdaki gereksiz kod miktarını azaltıp anlamlı metin içeriğini artıracak öneriler ver.',
      faqPass: 'Soru-cevap (FAQ) bloğu yok — sayfama uygun, H2/H3 başlıklarında soru formatında 3-4 soru-cevap bloğu oluştur.'
    },
    disclaimerText: 'ℹ️ Bu analiz, sitenizin kamuya açık HTML içeriğini ve teknik dosyalarını okuyarak gerçekleştirilir. Tespit edilen eksikler (llms.txt, meta etiketler, yapısal veri vb.) kesin bulgulardır ve giderilmeleri sitenize zarar vermez. Ancak yüksek skor, yapay zeka sistemlerinde görünürlük garantisi vermez — AI algoritmaları sürekli gelişmektedir. Scanliq, sektörce kabul görmüş en iyi uygulamalara uygunluğunuzu ölçer.',
    btnReset: '↩ Yeni Test',
    footerBlog: 'Blog', footerLegal: 'Yasal', footerPrivacy: 'Gizlilik', footerContact: 'İletişim',
    footerCopy: '© 2026 Scanliq',
    errInvalid: 'Geçerli bir URL girin (https:// ile başlamalı).',
    errFetch: 'Site analiz edilemedi. Bazı siteler CORS kısıtlaması nedeniyle taranamaz.',
    scoreLabels: ['Kritik Eksikler', 'Geliştirme Gerekli', 'Orta Düzey', 'Oldukça İyi', 'Mükemmel'],
    scoreTitles: ['Hazır Değil', 'Zayıf', 'Gelişiyor', 'İyi', 'AI Hazır! 🚀'],
    scoreDescs: [
      'Siteniz yapay zeka tarayıcılarına <span class="hl hl-bad">büyük ölçüde görünmez</span>. Acil iyileştirme gerekli.',
      '<span class="hl hl-warn">Temel eksikler</span> mevcut. Birkaç kritik düzenlemeyle sıralama yükselir.',
      'Ortalama düzeyde. <span class="hl hl-mid">Doğru adımlarla öne çıkabilir</span>.',
      'Siteniz AI araçlarına <span class="hl hl-good">büyük ölçüde görünür</span>. Küçük dokunuşlar yeterli.',
      'Siteniz yapay zeka aramalarına <span class="hl hl-great">mükemmel şekilde optimize edilmiş</span>!'
    ],
    visTitle: 'AI Motoru Görünürlüğü',
    visLabels: { chatgpt: 'ChatGPT Search', google: 'Google AI', perplexity: 'Perplexity', copilot: 'Bing Copilot' },
    visStatus: { ok: 'Görünür', warn: 'Kısmen', fail: 'Görünmez' },
    checks: {
      robots: { title: 'robots.txt', ok: 'Mevcut ve okunaklı', warn: 'robots.txt bulunamadı', detail_ok: 'Yapay zeka botlarına yönlendirme yapılabilir.', detail_warn: 'AI tarayıcıları hangi sayfaları okuyacağını bilemez.' },
      aibots: { title: 'AI Bot İzinleri', ok: 'AI botları engellenmemiş', warn: 'AI botları engellenmiş!', detail_ok: 'OpenAI, Claude, Perplexity, Google ve Bing botları sitenizi okuyabilir.', detail_warn: 'robots.txt dosyanız bir veya daha fazla AI botunu engelliyor — AI motorları sitenizi kaynak gösteremez.' },
      oaiSearchBot: { title: 'ChatGPT Search Bot', ok: 'OAI-SearchBot erişebiliyor', warn: 'OAI-SearchBot engelli', detail_ok: 'ChatGPT Search sitenizi tarayıp kaynak gösterebilir.', detail_warn: 'OAI-SearchBot engelli — ChatGPT Search görünürlüğü için en kritik bot budur.' },
      gptBot: { title: 'OpenAI GPTBot', ok: 'GPTBot erişebiliyor', warn: 'GPTBot engelli', detail_ok: 'OpenAI içerik tarayıcısı (training) sitenize erişebiliyor.', detail_warn: 'GPTBot engelli — OpenAI veri tarayıcısı sitenizi okuyamaz (ChatGPT Search için OAI-SearchBot ayrıdır).' },
      chatgptUser: { title: 'ChatGPT Kullanıcı Erişimi', ok: 'ChatGPT-User erişebiliyor', warn: 'ChatGPT-User engelli', detail_ok: 'Kullanıcı tetiklemeli ChatGPT erişimleri açık.', detail_warn: 'ChatGPT-User engelli — kullanıcı bir linki paylaştığında ChatGPT sitenizi açamaz.' },
      bingbot: { title: 'Bing / Copilot Bot', ok: 'bingbot erişebiliyor', warn: 'bingbot engelli', detail_ok: 'Microsoft Bing ve Copilot sitenizi tarayabilir.', detail_warn: 'bingbot engelli — Bing ve Copilot görünürlüğünüz olmaz.' },
      copilotReady: { title: 'Microsoft Copilot Hazırlığı', ok: 'Copilot için hazır', warn: 'Copilot hazırlığı eksik', detail_ok: 'HTTPS, bingbot erişimi ve yapısal sinyaller mevcut.', detail_warn: 'Copilot görünürlüğü için sitemap, canonical, meta description ve yapısal veri güçlendirilmeli.' },
      googlebot: { title: 'Googlebot Erişimi', ok: 'Googlebot erişebiliyor', warn: 'Googlebot engelli', detail_ok: 'Google Search ve Google AI sitenizi tarayabilir.', detail_warn: 'Googlebot engelli — Google AI ve arama görünürlüğünüz ciddi düşer.' },
      perplexityBot: { title: 'Perplexity Bot', ok: 'PerplexityBot erişebiliyor', warn: 'PerplexityBot engelli', detail_ok: 'Perplexity sitenizi tarayıp kaynak gösterebilir.', detail_warn: 'PerplexityBot engelli — Perplexity sitenizi kaynak gösteremez.' },
      perplexityUser: { title: 'Perplexity Kullanıcı Erişimi', ok: 'Perplexity-User erişebiliyor', warn: 'Perplexity-User engelli', detail_ok: 'Kullanıcı tetiklemeli Perplexity erişimleri açık.', detail_warn: 'Perplexity-User engelli — kullanıcı sorgularında siteniz çekilemeyebilir.' },
      claudeBot: { title: 'Claude Bot Erişimi', ok: 'ClaudeBot erişebiliyor', warn: 'ClaudeBot engelli', detail_ok: 'Anthropic Claude sitenizi okuyabilir.', detail_warn: 'ClaudeBot engelli — Claude sitenizi kaynak olarak kullanamaz.' },
      indexable: { title: 'İndekslenebilirlik', ok: 'Sayfa indekslenebilir', warn: 'noindex tespit edildi', detail_ok: 'Sayfada noindex engeli yok — arama ve AI motorlarına açık.', detail_warn: 'Meta robots veya X-Robots-Tag noindex içeriyor — sayfa görünmez kalır.' },
      structuredDataValidBasic: { title: 'Geçerli Yapısal Veri', ok: 'JSON-LD geçerli', warn: 'Geçerli JSON-LD yok', detail_ok: 'JSON-LD bloğu hatasız ayrıştırılabiliyor.', detail_warn: 'Ayrıştırılabilir geçerli bir JSON-LD bulunamadı.' },
      hreflang: { title: 'Hreflang (Çok Dilli)', ok: 'hreflang tanımlı', warn: 'hreflang yok', detail_ok: 'Çok dilli hedefleme sinyali mevcut.', detail_warn: 'Çok dilli site iseniz hreflang ekleyin (tek dilli siteler için zorunlu değil).' },
      responseStatusOk: { title: 'Sunucu Yanıtı (200)', ok: 'Sayfa 200 dönüyor', warn: 'Sayfa 200 dönmüyor', detail_ok: 'Ana URL başarıyla yükleniyor.', detail_warn: 'Ana URL 200 OK dönmüyor — botlar içeriğe ulaşamayabilir.' },
      contentLengthOk: { title: 'İçerik Yeterliliği', ok: 'Yeterli metin var', warn: 'Metin içeriği az', detail_ok: 'Sayfada AI için yeterli metin içeriği var.', detail_warn: 'Sayfada çok az metin var — AI bağlam çıkaramayabilir.' },
      sitemap: { title: 'sitemap.xml', ok: 'Site haritası mevcut', warn: 'sitemap.xml bulunamadı', detail_ok: 'Botlar tüm sayfalarınızı keşfedebilir.', detail_warn: 'Sayfalarınızın keşfedilmesi zorlaşır.' },
      title: { title: 'Title Etiketi', ok: 'Başlık optimize', warn: 'Title eksik veya uygunsuz', detail_ok: 'Başlık mevcut ve ideal uzunlukta (10-70 karakter).', detail_warn: 'Başlık yok, çok kısa veya çok uzun.' },
      h1: { title: 'H1 Başlığı', ok: 'H1 mevcut', warn: 'H1 bulunamadı', detail_ok: 'AI içerik hiyerarşisini anlayabilir.', detail_warn: 'Sayfanın ana konusu AI için belirsiz kalır.' },
      ogimage: { title: 'OG Görseli', ok: 'og:image tanımlı', warn: 'og:image eksik', detail_ok: 'AI önizlemelerinde görsel çıkar.', detail_warn: 'Paylaşımlarda görselsiz görünürsünüz.' },
      favicon: { title: 'Favicon', ok: 'Favicon mevcut', warn: 'Favicon eksik', detail_ok: 'Marka güvenilirlik sinyali tamam.', detail_warn: 'Tarayıcı ve AI listelerinde ikonsuz görünürsünüz.' },
      textRatioPass: { title: 'Metin/HTML Oranı', ok: 'Metin oranı yeterli (%25+)', warn: 'Metin oranı düşük (<%25)', detail_ok: 'Sayfanın metin yoğunluğu AI için ideal düzeyde.', detail_warn: 'Çok fazla kod, az içerik — AI sayfayı anlamakta güçlük çeker.' },
      faqPass: { title: 'Soru Blokları (FAQ)', ok: 'Soru blokları mevcut', warn: 'Soru bloğu bulunamadı', detail_ok: 'H2/H3 başlıklarında soru formatı var — AI alıntılamayı sever.', detail_warn: 'Soru-cevap formatı ekleyin, AI alıntı oranı artar.' },
      llms: { title: 'llms.txt', ok: 'llms.txt mevcut', warn: 'llms.txt bulunamadı', detail_ok: 'LLM\'ler için özel içerik kılavuzu var.', detail_warn: 'AI botları için yeni standarttır, eklenmesi önerilir.' },
      desc: { title: 'Meta Description', ok: 'Açıklama mevcut', warn: 'Meta açıklama eksik', detail_ok: 'Sayfa özeti AI\'ya aktarılabilir.', detail_warn: 'AI içerik özetleyemez, atlayabilir.' },
      og: { title: 'Open Graph', ok: 'OG etiketleri var', warn: 'OG etiketleri eksik', detail_ok: 'Paylaşım ve AI önizleme için hazır.', detail_warn: 'Sosyal ve AI paylaşımında düşük görünürlük.' },
      canonical: { title: 'Canonical URL', ok: 'Canonical tanımlı', warn: 'Canonical eksik', detail_ok: 'Kopya içerik riski minimize edilmiş.', detail_warn: 'Kopya URL sorunu yaşanabilir.' },
      schema: { title: 'Schema.org', ok: 'Yapısal veri mevcut', warn: 'Schema bulunamadı', detail_ok: 'AI içeriği yapılandırılmış okuyabilir.', detail_warn: 'AI içeriği düz metin olarak işler.' },
      jsonld: { title: 'JSON-LD', ok: 'JSON-LD mevcut', warn: 'JSON-LD yok', detail_ok: 'Google önerilen format kullanılıyor.', detail_warn: 'Zengin snippet fırsatı kaçırılıyor.' },
      viewport: { title: 'Mobile Uyum', ok: 'Viewport tanımlı', warn: 'Viewport eksik', detail_ok: 'Mobil uyumlu — AI mobil skorlar.', detail_warn: 'Mobil uyumsuzluk AI sıralamasını düşürür.' },
      lang: { title: 'Dil Etiketi', ok: 'Dil tanımlı', warn: 'Dil etiketi eksik', detail_ok: 'Dil bağlamı AI\'ya iletilmiş.', detail_warn: 'AI içerik dilini tahmin etmek zorunda.' },
      https: { title: 'HTTPS', ok: 'Güvenli bağlantı', warn: 'HTTPS yok', detail_ok: 'Şifreli bağlantı — AI güvenli bulur.', detail_warn: 'HTTP siteler AI tarafından güvensiz sayılır.' }
    },
    tips: {
      llms: { title: 'llms.txt oluşturun', text: 'Sitenizin kök dizinine llms.txt ekleyin. AI botları için içerik kılavuzu sağlar.' },
      aibots: { title: 'AI bot engelini kaldırın', text: 'robots.txt dosyanızdan GPTBot, ClaudeBot ve PerplexityBot Disallow satırlarını silin.' },
      textRatioPass: { title: 'İçerik yoğunluğunu artırın', text: 'Sayfanızdaki metin miktarını artırın. Script ve stil kodları azaltın, anlamlı paragraf içeriği ekleyin.' },
      faqPass: { title: 'Soru-cevap bölümü ekleyin', text: 'H2 veya H3 başlıklarınızı soru formatında yazın ("X nedir?", "X nasıl yapılır?") — AI bu yapıyı öncelikli alıntılar.' },
      sitemap: { title: 'sitemap.xml ekleyin', text: 'Tüm sayfalarınızı listeleyen bir site haritası oluşturup kök dizine koyun.' },
      title: { title: 'Title etiketini düzeltin', text: 'Her sayfaya 10-70 karakter arası, anahtar kelime içeren benzersiz başlık ekleyin.' },
      h1: { title: 'H1 başlığı ekleyin', text: 'Her sayfada bir adet H1 başlığı bulunmalı — sayfanın ana konusunu özetler.' },
      robots: { title: 'robots.txt ekleyin', text: 'GPTBot, ClaudeBot, PerplexityBot gibi AI tarayıcılarına izin verin.' },
      desc: { title: 'Meta açıklama yazın', text: 'Her sayfa için 120–160 karakter arası, anahtar kelime içeren açıklama ekleyin.' },
      schema: { title: 'Schema.org işaretlemesi', text: 'JSON-LD formatında Article, Organization veya WebSite şeması ekleyin.' },
      og: { title: 'Open Graph etiketleri', text: 'og:title, og:description ve og:image etiketlerini ekleyin.' },
      canonical: { title: 'Canonical URL tanımlayın', text: '<link rel="canonical"> etiketi kopya içerik sorunlarını önler.' }
    }
  },
  en: {
    badge: 'SEO + GEO + AI Readiness Analysis',
    h1: 'Can ChatGPT, Google AI, Perplexity and <em>Copilot</em> see your website?',
    p: 'Enter your URL and analyze AI bot access, structured data, llms.txt, sitemap and citation readiness signals in seconds.',
    btnText: '→',
    placeholder: 'https://yoursite.com',
    stat1: 'Check Points', stat2: 'GEO Score', stat3: 'Instant Result',
    aboutLabel: 'What is Scanliq?',
    about1t: 'AI Optimization Tool',
    about1p: 'Scanliq is a GEO (Generative Engine Optimization) and AI Search Visibility tool that optimizes your website for artificial intelligence. It measures and optimizes how visible you are to ChatGPT, Google AI, Perplexity and Copilot.',
    about2t: '30+ Critical Checks',
    about2p: 'ChatGPT Search, Google AI, Perplexity and Bing Copilot bot access; llms.txt, Schema.org, JSON-LD, sitemap, canonical, citation readiness and more — all in one click.',
    about3t: 'Score and Optimize',
    about3p: 'Get a 0-100 GEO Score in seconds. Gaps in your AI optimization are detected and one-click fixes are provided.',
    about4t: 'Turkish & English',
    about4p: 'A complete AI optimization (web AI optimization) and GEO analysis tool. Full support in both Turkish and English.',
    howLabel: 'How It Works',
    toolsLabel: 'Free Tools',
    tool1t: 'AI Visibility Analysis', tool1p: 'Measure your site\'s visibility in ChatGPT, Google AI, Perplexity and Copilot. See your GEO score and gaps.', tool1cta: 'Analyze →', tool1b: 'MAIN TOOL',
    tool2t: 'AI Content Analysis', tool2p: 'Measure how citation-ready your article is for AI. Get a citation readiness score and suggestions.', tool2cta: 'Analyze Article →', tool2b: 'AI-POWERED',
    tool3t: 'llms.txt Generator', tool3p: 'Create and download the llms.txt file that introduces your website to AI in seconds.', tool3cta: 'Generate →', tool3b: 'FREE',
    latestLabel: 'Latest Posts',
    latest1t: 'Which Sites Does AI Trust? E-E-A-T Guide', latest1url: '/blog10-en.html',
    latest2t: 'Why Does ChatGPT Cite Some Sites?', latest2url: '/blog9-en.html',
    latest3t: '2026 Brand GEO Score Report: 20 Global Giants', latest3url: '/blog24-en.html',
    latestRead: 'Read More →', latestAll: 'View All Posts →',
    step1t: 'Enter URL', step1p: 'Enter the address of the site you want to analyze.',
    step2t: 'Scan', step2p: 'Scanliq automatically runs 30+ checks.',
    step3t: 'Get Score', step3p: 'Receive a 0-100 AI readiness score and recommendations.',
    step4t: 'Improve', step4p: 'Fix missing points and boost your AI visibility.',
    loadingLabel: 'SCAN STARTED',
    loadingSteps: ['Checking robots.txt…', 'Scanning meta tags…', 'Looking for structured data…', 'Measuring AI visibility…'],
    tipsTitle: '💡 Improvement Tips',
    promptTitle: '🤖 AI Fix Prompt',
    promptDesc: 'Copy the prompt below and paste it into ChatGPT, Claude or your AI assistant — let it fix the issues for you.',
    promptCopy: '📋 Copy',
    promptCopied: '✅ Copied!',
    fixDownload: '⬇ Download File',
    fixCopy: '📋 Copy',
    fixCopied: '✅ Copied!',
    promptIntro: 'I ran an AI/SEO readiness analysis on my website. The following issues were found. Please generate the code to fix each one and explain step by step where to add it. My site: ',
    promptFixes: {
      https: 'HTTPS is not active — guide me to migrate my site to HTTPS.',
      robots: 'No robots.txt file — create one that allows AI bots (GPTBot, ClaudeBot, PerplexityBot).',
      aibots: 'My robots.txt blocks AI bots — edit it to remove OAI-SearchBot, GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot, bingbot and Googlebot blocks.',
      oaiSearchBot: 'Allow OAI-SearchBot access in robots.txt — this is the most critical bot for ChatGPT Search visibility.',
      gptBot: 'If you want OpenAI GPTBot access, remove the GPTBot block in robots.txt.',
      chatgptUser: 'Remove the ChatGPT-User block in robots.txt for user-triggered ChatGPT access.',
      bingbot: 'Allow bingbot access in robots.txt — required for Bing and Copilot visibility.',
      copilotReady: 'For Bing/Copilot visibility, strengthen sitemap.xml, canonical, meta description and JSON-LD configuration.',
      googlebot: 'Allow Googlebot access; otherwise Google AI and Google Search visibility will drop.',
      perplexityBot: 'Allow PerplexityBot access in robots.txt.',
      perplexityUser: 'Allow Perplexity-User access in robots.txt.',
      claudeBot: 'Allow ClaudeBot access in robots.txt.',
      indexable: 'The page has noindex — remove the noindex directive in meta robots or X-Robots-Tag.',
      structuredDataValidBasic: 'No valid JSON-LD — add a parseable, error-free JSON-LD block.',
      hreflang: 'If you run a multilingual site, add hreflang tags (for each language version).',
      responseStatusOk: 'My homepage does not return 200 OK — check server/redirect configuration.',
      contentLengthOk: 'Not enough text on the page — add meaningful text content so AI can extract context.',
      llms: 'No llms.txt file — add an llms.txt to the root describing your brand, key pages and AI usage permissions.',
      sitemap: 'No sitemap.xml — create a sitemap listing my pages.',
      title: 'Title tag missing or improper — write a 10-70 character keyword-rich title tag.',
      desc: 'Meta description missing — write a 120-160 character description tag.',
      h1: 'No H1 heading — add an appropriate H1 to my page.',
      og: 'Open Graph tags missing — create og:title, og:description, og:url tags.',
      ogimage: 'No og:image tag — add a share image meta tag.',
      canonical: 'Canonical URL not defined — add a canonical link tag.',
      schema: 'No Schema.org structured data — create appropriate schema markup for my site.',
      jsonld: 'No JSON-LD — add structured data in Google-recommended JSON-LD format.',
      viewport: 'No viewport meta tag — add it for mobile compatibility.',
      lang: 'No HTML lang attribute — add language definition to the html tag.',
      favicon: 'No favicon — add a favicon and create its link tag.',
      textRatioPass: 'Low text/HTML ratio — give suggestions to reduce unnecessary code and increase meaningful text content on my page.',
      faqPass: 'No FAQ block — create 3-4 question-answer blocks in H2/H3 question format suited to my page.'
    },
    disclaimerText: 'ℹ️ This analysis reads your site\'s publicly available HTML content and technical files. Detected gaps (llms.txt, meta tags, structured data, etc.) are factual findings and fixing them will not harm your site. However, a high score does not guarantee visibility in AI systems — AI algorithms evolve constantly. Scanliq measures your compliance with industry-accepted best practices.',
    btnReset: '↩ New Test',
    footerBlog: 'Blog', footerLegal: 'Legal', footerPrivacy: 'Privacy', footerContact: 'Contact',
    footerCopy: '© 2026 Scanliq',
    errInvalid: 'Please enter a valid URL (must start with https://).',
    errFetch: 'Could not analyze site. Some sites cannot be scanned due to CORS restrictions.',
    scoreLabels: ['Critical Issues', 'Needs Work', 'Average', 'Good', 'Excellent'],
    scoreTitles: ['Not Ready', 'Weak', 'Improving', 'Good', 'AI Ready! 🚀'],
    scoreDescs: [
      'Your site is <span class="hl hl-bad">largely invisible</span> to AI crawlers. Urgent improvements needed.',
      '<span class="hl hl-warn">Key issues found</span>. A few critical fixes will boost your ranking.',
      'Average level. <span class="hl hl-mid">Right steps can make you stand out</span>.',
      'Your site is <span class="hl hl-good">largely visible</span> to AI tools. Small touches are enough.',
      'Your site is <span class="hl hl-great">perfectly optimized</span> for AI search!'
    ],
    visTitle: 'AI Engine Visibility',
    visLabels: { chatgpt: 'ChatGPT Search', google: 'Google AI', perplexity: 'Perplexity', copilot: 'Bing Copilot' },
    visStatus: { ok: 'Visible', warn: 'Partial', fail: 'Not Visible' },
    checks: {
      robots: { title: 'robots.txt', ok: 'Present and readable', warn: 'robots.txt not found', detail_ok: 'AI bots can be directed properly.', detail_warn: 'AI crawlers cannot know which pages to read.' },
      aibots: { title: 'AI Bot Access', ok: 'AI bots not blocked', warn: 'AI bots are blocked!', detail_ok: 'OpenAI, Claude, Perplexity, Google and Bing bots can read your site.', detail_warn: 'Your robots.txt blocks one or more AI bots — AI engines cannot cite your site.' },
      oaiSearchBot: { title: 'ChatGPT Search Bot', ok: 'OAI-SearchBot allowed', warn: 'OAI-SearchBot blocked', detail_ok: 'ChatGPT Search can crawl and cite your site.', detail_warn: 'OAI-SearchBot is blocked — this is the most critical bot for ChatGPT Search visibility.' },
      gptBot: { title: 'OpenAI GPTBot', ok: 'GPTBot allowed', warn: 'GPTBot blocked', detail_ok: 'OpenAI content crawler (training) can access your site.', detail_warn: 'GPTBot is blocked — OpenAI data crawler cannot read your site (OAI-SearchBot is separate for ChatGPT Search).' },
      chatgptUser: { title: 'ChatGPT User Access', ok: 'ChatGPT-User allowed', warn: 'ChatGPT-User blocked', detail_ok: 'User-triggered ChatGPT access is open.', detail_warn: 'ChatGPT-User is blocked — ChatGPT cannot open your site when a user shares a link.' },
      bingbot: { title: 'Bing / Copilot Bot', ok: 'bingbot allowed', warn: 'bingbot blocked', detail_ok: 'Microsoft Bing and Copilot can crawl your site.', detail_warn: 'bingbot is blocked — you will have no Bing or Copilot visibility.' },
      copilotReady: { title: 'Microsoft Copilot Readiness', ok: 'Ready for Copilot', warn: 'Copilot readiness incomplete', detail_ok: 'HTTPS, bingbot access and structural signals are present.', detail_warn: 'For Copilot visibility, strengthen sitemap, canonical, meta description and structured data.' },
      googlebot: { title: 'Googlebot Access', ok: 'Googlebot allowed', warn: 'Googlebot blocked', detail_ok: 'Google Search and Google AI can crawl your site.', detail_warn: 'Googlebot is blocked — your Google AI and search visibility drops sharply.' },
      perplexityBot: { title: 'Perplexity Bot', ok: 'PerplexityBot allowed', warn: 'PerplexityBot blocked', detail_ok: 'Perplexity can crawl and cite your site.', detail_warn: 'PerplexityBot is blocked — Perplexity cannot cite your site.' },
      perplexityUser: { title: 'Perplexity User Access', ok: 'Perplexity-User allowed', warn: 'Perplexity-User blocked', detail_ok: 'User-triggered Perplexity access is open.', detail_warn: 'Perplexity-User is blocked — your site may not be fetched on user queries.' },
      claudeBot: { title: 'Claude Bot Access', ok: 'ClaudeBot allowed', warn: 'ClaudeBot blocked', detail_ok: 'Anthropic Claude can read your site.', detail_warn: 'ClaudeBot is blocked — Claude cannot use your site as a source.' },
      indexable: { title: 'Indexability', ok: 'Page is indexable', warn: 'noindex detected', detail_ok: 'No noindex block on the page — open to search and AI engines.', detail_warn: 'Meta robots or X-Robots-Tag contains noindex — the page stays invisible.' },
      structuredDataValidBasic: { title: 'Valid Structured Data', ok: 'JSON-LD is valid', warn: 'No valid JSON-LD', detail_ok: 'JSON-LD block parses without errors.', detail_warn: 'No parseable valid JSON-LD was found.' },
      hreflang: { title: 'Hreflang (Multilingual)', ok: 'hreflang defined', warn: 'No hreflang', detail_ok: 'Multilingual targeting signal is present.', detail_warn: 'Add hreflang if you run a multilingual site (not required for single-language sites).' },
      responseStatusOk: { title: 'Server Response (200)', ok: 'Page returns 200', warn: 'Page not returning 200', detail_ok: 'Main URL loads successfully.', detail_warn: 'Main URL does not return 200 OK — bots may not reach the content.' },
      contentLengthOk: { title: 'Content Sufficiency', ok: 'Sufficient text', warn: 'Low text content', detail_ok: 'The page has enough text content for AI.', detail_warn: 'Very little text on the page — AI may not extract context.' },
      sitemap: { title: 'sitemap.xml', ok: 'Sitemap present', warn: 'sitemap.xml not found', detail_ok: 'Bots can discover all your pages.', detail_warn: 'Page discovery becomes harder.' },
      title: { title: 'Title Tag', ok: 'Title optimized', warn: 'Title missing or improper', detail_ok: 'Title exists and is ideal length (10-70 chars).', detail_warn: 'Title missing, too short or too long.' },
      h1: { title: 'H1 Heading', ok: 'H1 present', warn: 'No H1 found', detail_ok: 'AI can understand content hierarchy.', detail_warn: 'Main topic stays unclear to AI.' },
      ogimage: { title: 'OG Image', ok: 'og:image defined', warn: 'og:image missing', detail_ok: 'Image appears in AI previews.', detail_warn: 'You appear without visuals in shares.' },
      favicon: { title: 'Favicon', ok: 'Favicon present', warn: 'Favicon missing', detail_ok: 'Brand trust signal complete.', detail_warn: 'You appear icon-less in browsers and AI lists.' },
      textRatioPass: { title: 'Text/HTML Ratio', ok: 'Text ratio sufficient (25%+)', warn: 'Text ratio low (<25%)', detail_ok: 'Page text density is at ideal level for AI.', detail_warn: 'Too much code, too little content — AI struggles to understand the page.' },
      faqPass: { title: 'FAQ / Question Blocks', ok: 'Question blocks found', warn: 'No question blocks found', detail_ok: 'H2/H3 headings include questions — AI loves to cite these.', detail_warn: 'Add Q&A format content to increase AI citation rate.' },
      llms: { title: 'llms.txt', ok: 'llms.txt present', warn: 'llms.txt not found', detail_ok: 'Custom content guide for LLMs exists.', detail_warn: 'Emerging standard for AI bots, recommended.' },
      desc: { title: 'Meta Description', ok: 'Description present', warn: 'Meta description missing', detail_ok: 'Page summary can be passed to AI.', detail_warn: 'AI cannot summarize content, may skip.' },
      og: { title: 'Open Graph', ok: 'OG tags present', warn: 'OG tags missing', detail_ok: 'Ready for sharing and AI preview.', detail_warn: 'Low visibility in social and AI sharing.' },
      canonical: { title: 'Canonical URL', ok: 'Canonical defined', warn: 'Canonical missing', detail_ok: 'Duplicate content risk minimized.', detail_warn: 'Duplicate URL issues may occur.' },
      schema: { title: 'Schema.org', ok: 'Structured data found', warn: 'No schema found', detail_ok: 'AI can read content structurally.', detail_warn: 'AI processes content as plain text.' },
      jsonld: { title: 'JSON-LD', ok: 'JSON-LD present', warn: 'No JSON-LD', detail_ok: 'Google-recommended format in use.', detail_warn: 'Missing rich snippet opportunity.' },
      viewport: { title: 'Mobile Ready', ok: 'Viewport defined', warn: 'Viewport missing', detail_ok: 'Mobile-friendly — AI scores mobile.', detail_warn: 'Mobile issues lower AI ranking.' },
      lang: { title: 'Language Tag', ok: 'Language defined', warn: 'Language tag missing', detail_ok: 'Language context passed to AI.', detail_warn: 'AI must guess content language.' },
      https: { title: 'HTTPS', ok: 'Secure connection', warn: 'No HTTPS', detail_ok: 'Encrypted — AI considers it trustworthy.', detail_warn: 'HTTP sites are considered unsafe by AI.' }
    },
    tips: {
      llms: { title: 'Create llms.txt', text: 'Add llms.txt to your root directory. Provides a content guide for AI bots.' },
      aibots: { title: 'Unblock AI bots', text: 'Remove GPTBot, ClaudeBot and PerplexityBot Disallow lines from your robots.txt.' },
      textRatioPass: { title: 'Increase content density', text: 'Add more text content to your page. Reduce script/style code and add meaningful paragraph content.' },
      faqPass: { title: 'Add FAQ / question blocks', text: 'Write H2 or H3 headings in question format ("What is X?", "How to do X?") — AI prioritizes citing this structure.' },
      sitemap: { title: 'Add sitemap.xml', text: 'Create a sitemap listing all your pages and place it in the root directory.' },
      title: { title: 'Fix your title tag', text: 'Add a unique 10-70 character keyword-rich title to every page.' },
      h1: { title: 'Add an H1 heading', text: 'Every page should have one H1 heading summarizing the main topic.' },
      robots: { title: 'Add robots.txt', text: 'Allow AI crawlers like GPTBot, ClaudeBot, PerplexityBot.' },
      desc: { title: 'Write meta description', text: 'Add 120–160 character keyword-rich descriptions for each page.' },
      schema: { title: 'Add Schema.org markup', text: 'Add Article, Organization or WebSite schema in JSON-LD format.' },
      og: { title: 'Add Open Graph tags', text: 'Add og:title, og:description and og:image tags.' },
      canonical: { title: 'Define canonical URL', text: '<link rel="canonical"> tag prevents duplicate content issues.' }
    }
  }
};

function setLang(l) {
  lang = l;
  window.currentLang = l;
  document.getElementById('btn-tr').classList.toggle('active', l === 'tr');
  document.getElementById('btn-en').classList.toggle('active', l === 'en');
  const t = T[l];
  const certBtn = document.getElementById('cert-btn-text');
  if (certBtn) certBtn.textContent = l === 'tr' ? '🏆 Sertifika Al' : '🏆 Get Certificate';
  const pdfBtn = document.getElementById('pdf-btn-text');
  if (pdfBtn) pdfBtn.textContent = l === 'tr' ? 'PDF Rapor' : 'PDF Report';
  document.getElementById('hero-badge').textContent = t.badge;
  document.getElementById('hero-h1').innerHTML = t.h1;
  document.getElementById('hero-p').textContent = t.p;
  document.getElementById('btn-text').textContent = t.btnText;
  document.getElementById('url-input').placeholder = t.placeholder;
  document.getElementById('stat1-label').textContent = t.stat1;
  document.getElementById('stat2-label').textContent = t.stat2;
  document.getElementById('stat3-label').textContent = t.stat3;
  document.getElementById('about-label').childNodes[0].textContent = t.aboutLabel;
  document.getElementById('about1-title').textContent = t.about1t;
  document.getElementById('about1-text').textContent = t.about1p;
  document.getElementById('about2-title').textContent = t.about2t;
  document.getElementById('about2-text').textContent = t.about2p;
  document.getElementById('about3-title').textContent = t.about3t;
  document.getElementById('about3-text').textContent = t.about3p;
  document.getElementById('about4-title').textContent = t.about4t;
  document.getElementById('about4-text').textContent = t.about4p;
  document.getElementById('how-label').childNodes[0].textContent = t.howLabel;
  // Araçlar bölümü
  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  setTxt('tools-label', t.toolsLabel);
  setTxt('tool1-title', t.tool1t); setTxt('tool1-text', t.tool1p); setTxt('tool1-cta', t.tool1cta); setTxt('tool1-badge', t.tool1b);
  setTxt('tool2-title', t.tool2t); setTxt('tool2-text', t.tool2p); setTxt('tool2-cta', t.tool2cta); setTxt('tool2-badge', t.tool2b);
  setTxt('tool3-title', t.tool3t); setTxt('tool3-text', t.tool3p); setTxt('tool3-cta', t.tool3cta); setTxt('tool3-badge', t.tool3b);
  // Son yazılar / Latest posts
  setTxt('latest-label', t.latestLabel);
  setTxt('latest1-title', t.latest1t); setTxt('latest1-read', t.latestRead);
  setTxt('latest2-title', t.latest2t); setTxt('latest2-read', t.latestRead);
  setTxt('latest3-title', t.latest3t); setTxt('latest3-read', t.latestRead);
  setTxt('latest-all', t.latestAll);

  // HTML'de Türkçe duran bölümler (kontroller, Rehber Merkezi, SSS): data-i anahtarıyla İngilizceye çevrilir
  document.querySelectorAll('[data-i]').forEach(el => {
    if (el.dataset.tr === undefined) el.dataset.tr = el.textContent;
    el.textContent = l === 'en' ? (I18N_EN[el.dataset.i] || el.dataset.tr) : el.dataset.tr;
  });
  document.querySelectorAll('#hub-section a[href^="/blog"]').forEach(el => {
    const h = el.getAttribute('href').replace(/-en\.html$/, '.html');
    el.setAttribute('href', l === 'en' ? h.replace(/\.html$/, '-en.html') : h);
  });
  const w1 = document.getElementById('latest-lang-wrap-1'); if (w1) w1.href = t.latest1url;
  const w2 = document.getElementById('latest-lang-wrap-2'); if (w2) w2.href = t.latest2url;
  const w3 = document.getElementById('latest-lang-wrap-3'); if (w3) w3.href = t.latest3url;
  document.getElementById('step1-title').textContent = t.step1t;
  document.getElementById('step1-text').textContent = t.step1p;
  document.getElementById('step2-title').textContent = t.step2t;
  document.getElementById('step2-text').textContent = t.step2p;
  document.getElementById('step3-title').textContent = t.step3t;
  document.getElementById('step3-text').textContent = t.step3p;
  document.getElementById('step4-title').textContent = t.step4t;
  document.getElementById('step4-text').textContent = t.step4p;
  document.getElementById('btn-reset').textContent = t.btnReset;
  document.getElementById('nav-blog').textContent = l === 'tr' ? 'Blog' : 'Blog';
  document.getElementById('footer-legal').textContent = t.footerLegal;
  document.getElementById('footer-privacy').textContent = t.footerPrivacy;
  { const fd = document.getElementById('footer-delete'); if (fd) fd.textContent = l === 'en' ? 'Delete account' : 'Hesap silme';
    const hd = document.getElementById('history-delete-link'); if (hd) hd.textContent = l === 'en' ? 'Delete my account and data' : 'Hesabımı ve verilerimi sil'; }
  document.getElementById('footer-contact').textContent = t.footerContact;
  document.getElementById('footer-copy').textContent = t.footerCopy;
  document.documentElement.lang = l;
  // Canonical'ı aktif dile göre eşitle (?lang=en kendi adresini gösterir)
  const canonEl = document.querySelector('link[rel="canonical"]');
  if (canonEl) canonEl.href = l === 'en' ? 'https://scanliq.com/?lang=en' : 'https://scanliq.com/';
  // Auth butonu metnini de güncelle
  if (typeof updateAuthUI === 'function') updateAuthUI(window.currentUser);
  // URL'yi güncelle (sayfa yenilenmeden)
  const url = new URL(window.location.href);
  if (l === 'en') { url.searchParams.set('lang','en'); }
  else { url.searchParams.delete('lang'); }
  window.history.replaceState({}, '', url.toString());
}

/* ===== WORKER API ===== */
const WORKER_URL = 'https://scanliq-api.dreamdosima08.workers.dev';

async function analyzeWithWorker(url) {
  try {
    const res = await fetch(`${WORKER_URL}/?url=${encodeURIComponent(url)}`, {
      signal: AbortSignal.timeout(15000)
    });
    if (res.ok) {
      const data = await res.json();
      if (data.success) return data.results;
    }
  } catch (_) {}
  return null;
}

/* ===== ANALYZE ===== */
async function runCheck() {
  const raw = document.getElementById('url-input').value.trim();
  const errEl = document.getElementById('error-msg');
  const t = T[lang];

  if (!raw.startsWith('http')) {
    errEl.textContent = t.errInvalid; errEl.classList.add('active'); return;
  }
  errEl.classList.remove('active');

  try { new URL(raw); }
  catch (_) { errEl.textContent = t.errInvalid; errEl.classList.add('active'); return; }

  document.getElementById('results').classList.remove('active');
  document.getElementById('results').style.display = 'none';
  document.getElementById('about-section').style.display = 'none';
  document.getElementById('how-section').style.display = 'none';
  document.getElementById('stats-bar').style.display = 'none';

  const loadEl = document.getElementById('loading');
  const stepsEl = document.getElementById('loading-steps');
  loadEl.classList.add('active');
  document.getElementById('btn-check').disabled = true;
  document.getElementById('loading-label').textContent = t.loadingLabel;

  stepsEl.innerHTML = t.loadingSteps.map(s => `<div class="loading-step">${s}</div>`).join('');
  const stepEls = stepsEl.querySelectorAll('.loading-step');
  [300, 900, 1600, 2400].forEach((d, i) => setTimeout(() => stepEls[i] && stepEls[i].classList.add('done'), d));

  await new Promise(r => setTimeout(r, 3200));

  window.lastAnalyzedUrl = raw;

  // Google Analytics: analiz olayı
  if (typeof gtag === 'function') {
    gtag('event', 'site_analiz', {
      'analiz_edilen_site': raw
    });
  }

  const workerResults = await analyzeWithWorker(raw);

  loadEl.classList.remove('active');

  if (!workerResults) {
    errEl.textContent = t.errFetch; errEl.classList.add('active');
    document.getElementById('btn-check').disabled = false;
    document.getElementById('about-section').style.display = 'block';
    document.getElementById('how-section').style.display = 'block';
    document.getElementById('stats-bar').style.display = 'flex';
    return;
  }

  const checks = {
    https:         { pass: workerResults.https === true },
    robots:        { pass: workerResults.robots === true },
    aibots:        { pass: workerResults.aibots === true },
    oaiSearchBot:  { pass: workerResults.oaiSearchBot === true },
    gptBot:        { pass: workerResults.gptBot === true },
    chatgptUser:   { pass: workerResults.chatgptUser === true },
    bingbot:       { pass: workerResults.bingbot === true },
    copilotReady:  { pass: workerResults.copilotReady === true },
    googlebot:     { pass: workerResults.googlebot === true },
    perplexityBot: { pass: workerResults.perplexityBot === true },
    perplexityUser:{ pass: workerResults.perplexityUser === true },
    claudeBot:     { pass: workerResults.claudeBot === true },
    llms:          { pass: workerResults.llms === true },
    sitemap:       { pass: workerResults.sitemap === true },
    title:         { pass: workerResults.title === true },
    desc:          { pass: workerResults.desc === true },
    h1:            { pass: workerResults.h1 === true },
    og:            { pass: workerResults.og === true },
    ogimage:       { pass: workerResults.ogimage === true },
    canonical:     { pass: workerResults.canonical === true },
    schema:        { pass: workerResults.schema === true },
    jsonld:        { pass: workerResults.jsonld === true },
    viewport:      { pass: workerResults.viewport === true },
    lang:          { pass: workerResults.lang === true },
    favicon:       { pass: workerResults.favicon === true },
    textRatioPass: { pass: workerResults.textRatioPass === true },
    faqPass:       { pass: workerResults.faqPass === true },
    indexable:     { pass: workerResults.indexable === true },
    structuredDataValidBasic: { pass: workerResults.structuredDataValidBasic === true },
    hreflang:      { pass: workerResults.hreflang === true },
    responseStatusOk: { pass: workerResults.responseStatusOk === true },
    contentLengthOk:  { pass: workerResults.contentLengthOk === true }
  };

  // ===== GEO SCORE — Ağırlıklı Puanlama (worker ile aynı) =====
  const WEIGHTS = {
    oaiSearchBot: 10, aibots: 10, llms: 9, schema: 9,
    bingbot: 8, copilotReady: 8, jsonld: 8, faqPass: 8,
    sitemap: 7, title: 7, desc: 7, googlebot: 7,
    h1: 6, canonical: 6, textRatioPass: 6,
    robots: 5, https: 5,
    og: 4, ogimage: 4, lang: 4, chatgptUser: 4, perplexityUser: 4, claudeBot: 4,
    gptBot: 3, viewport: 3, indexable: 3, structuredDataValidBasic: 3,
    favicon: 2, hreflang: 2, responseStatusOk: 2, contentLengthOk: 2
  };
  // Worker zaten skoru hesaplıyor; varsa onu kullan, yoksa burada hesapla
  let score;
  if (typeof workerResults._score === 'number') {
    score = workerResults._score;
  } else {
    let earned = 0, totalWeight = 0;
    for (const key in WEIGHTS) {
      const w = WEIGHTS[key];
      totalWeight += w;
      if (checks[key] && checks[key].pass) earned += w;
    }
    score = Math.round(earned / totalWeight * 100);
  }
  // Worker'dan gelen motor görünürlüğünü sakla
  window.lastEngineVis = workerResults._engineVisibility || null;
  showResults(score, checks, t);
  document.getElementById('btn-check').disabled = false;
}

function showResults(score, checks, t) {
  const tier = score < 30 ? 0 : score < 50 ? 1 : score < 70 ? 2 : score < 85 ? 3 : 4;
  const colors = ['#ff4d4d','#f5a623','#f5d023','#00b8d9','#00e87a'];
  const color = colors[tier];
  document.documentElement.style.setProperty('--score-color', color);

  document.getElementById('score-num').textContent = score;
  document.getElementById('score-title').textContent = t.scoreTitles[tier];
  document.getElementById('score-desc').innerHTML = t.scoreDescs[tier];
  const lbl = document.getElementById('score-label');
  lbl.textContent = t.scoreLabels[tier];
  lbl.style.background = color + '22';
  lbl.style.color = color;

  // AI Motoru Görünürlük Dökümü — worker'dan gelen 4 motorlu sonuç
  const pass = (k) => checks[k] && checks[k].pass === true;
  let vis = window.lastEngineVis;
  // Worker _engineVisibility vermemişse yerel hesapla.
  // Worker eski olabilir (yeni bot alanları gelmeyebilir); bu yüzden
  // yeni bot sinyali yoksa genel "aibots" sinyaline güvenli şekilde düşeriz.
  if (!vis) {
    const hasNewBots = ('oaiSearchBot' in workerResults) || ('googlebot' in workerResults) || ('bingbot' in workerResults);
    if (hasNewBots) {
      // Yeni worker — spesifik bot sinyalleriyle hesapla
      vis = {
        chatgpt: pass('oaiSearchBot') && pass('https') ? 'ok' : pass('oaiSearchBot') ? 'warn' : 'fail',
        google: (pass('googlebot') && pass('https') && (pass('schema')||pass('jsonld')) && pass('sitemap')) ? 'ok'
                : (pass('googlebot') && [pass('https'),(pass('schema')||pass('jsonld')),pass('sitemap')].filter(Boolean).length>=2) ? 'warn' : 'fail',
        perplexity: ((pass('perplexityBot')||pass('perplexityUser')) && pass('llms')) ? 'ok' : (pass('perplexityBot')||pass('perplexityUser')) ? 'warn' : 'fail',
        copilot: pass('copilotReady') ? 'ok' : (pass('bingbot') && pass('https')) ? 'warn' : 'fail'
      };
    } else {
      // Eski worker — genel sinyallerden mantıklı tahmin (asla topluca 'fail' verme)
      const ai = pass('aibots'), https = pass('https'), structured = pass('schema') || pass('jsonld');
      const llms = pass('llms'), sitemap = pass('sitemap');
      vis = {
        chatgpt: (ai && https) ? 'ok' : (ai || https) ? 'warn' : 'fail',
        google: (ai && https && structured && sitemap) ? 'ok' : (https && (structured || sitemap)) ? 'warn' : 'fail',
        perplexity: (ai && llms) ? 'ok' : (ai || llms) ? 'warn' : 'fail',
        copilot: (https && (sitemap || structured)) ? 'ok' : (https) ? 'warn' : 'fail'
      };
    }
  }
  window.lastEngineVis = vis;
  const visIcons = { ok: '✅', warn: '⚠️', fail: '❌' };
  const visRow = document.getElementById('vis-row');
  const engineOrder = ['chatgpt','google','perplexity','copilot'];
  visRow.innerHTML = engineOrder.map((engine) => {
    const status = vis[engine] || 'fail';
    return `
    <span class="vis-pill vis-${status}">
      <span class="vis-icon">${visIcons[status]}</span>
      ${t.visLabels[engine]} · ${t.visStatus[status]}
    </span>`;
  }).join('');

  const circ = 213.6;
  setTimeout(() => {
    document.getElementById('score-arc').style.strokeDashoffset = circ - (circ * score / 100);
  }, 100);

  const grid = document.getElementById('checks-grid');
  grid.innerHTML = '';
  const icons = { pass: '✅', fail: '❌' };
  const barColors = { pass: '#00e87a', fail: '#ff4d4d' };

  // Kontrol → Kategori eşlemesi (4 kategori)
  const CATS = lang === 'tr' ? {
    crawl: { name: 'AI Tarama Uyumluluğu', icon: '🤖' },
    geo:   { name: 'GEO & İçerik', icon: '🎯' },
    seo:   { name: 'Teknik SEO', icon: '⚙️' },
    trust: { name: 'İçerik Kalitesi & Güven', icon: '🛡️' }
  } : {
    crawl: { name: 'AI Crawl Compatibility', icon: '🤖' },
    geo:   { name: 'GEO & Content', icon: '🎯' },
    seo:   { name: 'Technical SEO', icon: '⚙️' },
    trust: { name: 'Content Quality & Trust', icon: '🛡️' }
  };
  const CAT_OF = {
    robots:'crawl', aibots:'crawl', oaiSearchBot:'crawl', gptBot:'crawl', chatgptUser:'crawl',
    bingbot:'crawl', copilotReady:'crawl', googlebot:'crawl', perplexityBot:'crawl',
    perplexityUser:'crawl', claudeBot:'crawl', indexable:'crawl', responseStatusOk:'crawl',
    llms:'geo', faqPass:'geo', textRatioPass:'geo', title:'geo', desc:'geo', h1:'geo',
    sitemap:'seo', canonical:'seo', hreflang:'seo', viewport:'seo', lang:'seo',
    https:'seo', contentLengthOk:'seo',
    schema:'trust', jsonld:'trust', structuredDataValidBasic:'trust', og:'trust',
    ogimage:'trust', favicon:'trust'
  };
  const catColor = (pct) => pct >= 70 ? '#00e87a' : pct >= 40 ? '#f5a623' : '#ff4d4d';

  // Kontrolleri kategorilere ayır
  const grouped = { crawl:[], geo:[], seo:[], trust:[] };
  Object.entries(checks).forEach(([key, data]) => {
    if (!t.checks[key]) return;
    const cat = CAT_OF[key] || 'seo';
    grouped[cat].push([key, data]);
  });

  const botFixKeys = ['oaiSearchBot','gptBot','chatgptUser','bingbot','googlebot','perplexityBot','perplexityUser','claudeBot','copilotReady'];
  let animIndex = 0;

  // Her kategoriyi grup olarak render et
  ['crawl','geo','seo','trust'].forEach(catKey => {
    const items = grouped[catKey];
    if (!items.length) return;
    const passed = items.filter(([,d]) => d.pass).length;
    const pct = Math.round((passed / items.length) * 100);
    const col = catColor(pct);

    const group = document.createElement('div');
    group.className = 'cat-group';
    group.innerHTML = `
      <div class="cat-head">
        <span class="cat-name">${CATS[catKey].icon} ${CATS[catKey].name}</span>
        <div class="cat-bar"><div class="cat-bar-fill" style="background:${col};width:0%"></div></div>
        <span class="cat-score" style="background:${col}22;color:${col}">${passed}/${items.length}</span>
      </div>
      <div class="checks-grid"></div>
    `;
    grid.appendChild(group);
    setTimeout(() => { group.querySelector('.cat-bar-fill').style.width = pct + '%'; }, 300);

    const subGrid = group.querySelector('.checks-grid');
    items.forEach(([key, data]) => {
      const info = t.checks[key];
      const status = data.pass ? 'pass' : 'fail';
      const effectiveFixer = botFixKeys.includes(key) ? FIXERS['aibots'] : FIXERS[key];
      const hasFix = !data.pass && effectiveFixer;
      const fixBtn = hasFix
        ? `<button class="fix-btn" data-fix="${key}" onclick="openFix('${key}')">${effectiveFixer.btn[lang]}</button>`
        : '';
      const card = document.createElement('div');
      card.className = 'check-card';
      card.innerHTML = `
        <div class="check-head">
          <span class="check-title">${info.title}</span>
          <span class="check-status">${icons[status]}</span>
        </div>
        <div class="check-detail">${data.pass ? info.detail_ok : info.detail_warn}</div>
        <div class="check-bar"><div class="check-bar-fill" style="background:${barColors[status]};width:0%"></div></div>
        ${fixBtn}
      `;
      subGrid.appendChild(card);
      setTimeout(() => {
        card.classList.add('visible');
        card.querySelector('.check-bar-fill').style.width = data.pass ? '100%' : '20%';
      }, 60 * animIndex + 300);
      animIndex++;
    });
  });

  const failed = Object.entries(checks).filter(([,d]) => !d.pass).map(([k]) => k);
  const tipKeys = ['aibots','llms','robots','sitemap','faqPass','textRatioPass','title','h1','desc','schema','og','canonical'];
  const relevantTips = tipKeys.filter(k => failed.includes(k));
  const tipsSection = document.getElementById('tips-section');
  if (relevantTips.length > 0) {
    document.getElementById('tips-title').textContent = t.tipsTitle;
    document.getElementById('tips-list').innerHTML = relevantTips.map(k => {
      const tip = t.tips[k];
      if (!tip) return '';
      return `<div class="tip-item"><span class="tip-icon">⚡</span><div class="tip-text"><strong>${tip.title}</strong>${tip.text}</div></div>`;
    }).join('');
    tipsSection.style.display = 'block';
  } else {
    tipsSection.style.display = 'none';
  }

  // Son analiz verisini kaydet (Kaydet butonu için)
  window.lastChecks = checks;
  window.lastScore = score;
  // Anonim istatistik topla (kişisel veri yok — sadece toplu rapor için)
  logAnonymousStat(score, checks);
  // Android uygulamasına analiz bitti sinyali (reklam sayacı); tarayıcıda etkisiz
  if (window.scanliqAppEvent) window.scanliqAppEvent('scan_done');
  // Kaydet butonunu sıfırla
  const sBtn = document.getElementById('save-analysis-btn');
  const sBtnText = document.getElementById('save-btn-text');
  if (sBtn) {
    sBtn.disabled = false;
    sBtn.innerHTML = '💾 <span id="save-btn-text">'+(lang==='tr'?'Kaydet':'Save')+'</span>';
  }

  // AI Prompt kutusu
  const promptSection = document.getElementById('prompt-section');
  if (failed.length > 0) {
    document.getElementById('prompt-title').textContent = t.promptTitle;
    document.getElementById('prompt-desc').textContent = t.promptDesc;
    document.getElementById('prompt-copy-btn').textContent = t.promptCopy;
    const fixLines = failed
      .filter(k => t.promptFixes[k])
      .map((k, i) => (i + 1) + '. ' + t.promptFixes[k])
      .join('\n');
    document.getElementById('prompt-box').textContent =
      t.promptIntro + (window.lastAnalyzedUrl || '') + '\n\n' + fixLines;
    promptSection.style.display = 'block';
  } else {
    promptSection.style.display = 'none';
  }

  document.getElementById('disclaimer').textContent = t.disclaimerText;
  const results = document.getElementById('results');
  results.style.display = 'block';
  results.classList.add('active');
  results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// TEK-TIK ÇÖZÜM MOTORU (One-Click Fixes)
// Her eksik için siteye özel hazır dosya/kod üretir
// ============================================================
const FIXERS = {
  llms: {
    btn: { tr: '⬇ llms.txt Oluştur', en: '⬇ Generate llms.txt' },
    title: { tr: 'Hazır llms.txt Dosyanız', en: 'Your Ready llms.txt File' },
    type: 'download', filename: 'llms.txt',
    desc: { tr: 'Bu dosyayı indirin ve sitenizin kök dizinine (ana klasör) yükleyin.', en: 'Download this file and upload it to your site root directory.' },
    gen: (host) => `# llms.txt\n# ${host}\n\n## Site Adi\n${host}\n\n## Kisa Aciklama\n[Sitenizi 1-2 cumleyle tanimlayin: ne yapar, kime hizmet eder]\n\n## Ana Hizmetler / Konular\n- [Ana hizmet veya konu 1]\n- [Ana hizmet veya konu 2]\n- [Ana hizmet veya konu 3]\n\n## Onemli Sayfalar\n- Ana Sayfa: https://${host}/\n- Hakkimizda: https://${host}/hakkimizda\n- Hizmetler: https://${host}/hizmetler\n- Iletisim: https://${host}/iletisim\n\n## AI Kullanim Izni\nBu sitenin icerigi yapay zeka sistemleri tarafindan okunabilir, ozetlenebilir ve kaynak gosterilebilir.\n\n## Tercih Edilen Kaynak Gosterim Biceci\nKaynak gosterirken lutfen site adini (${host}) ve ilgili sayfa baglantisini birlikte belirtin.\n\n## Iletisim\nE-posta: info@${host}\n\n## Son Guncelleme\n2026\n`
  },
  robots: {
    btn: { tr: '⬇ robots.txt Oluştur', en: '⬇ Generate robots.txt' },
    title: { tr: 'Hazır robots.txt Dosyanız', en: 'Your Ready robots.txt File' },
    type: 'download', filename: 'robots.txt',
    desc: { tr: 'Bu dosyayı indirin ve sitenizin kök dizinine yükleyin. AI botlarına tam erişim verir.', en: 'Download and upload to your site root. Grants full access to AI bots.' },
    gen: (host) => `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: Claude-User\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Perplexity-User\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: bingbot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: https://${host}/sitemap.xml\n`
  },
  aibots: {
    btn: { tr: '⬇ robots.txt Düzelt', en: '⬇ Fix robots.txt' },
    title: { tr: 'Düzeltilmiş robots.txt', en: 'Fixed robots.txt' },
    type: 'download', filename: 'robots.txt',
    desc: { tr: 'Mevcut robots.txt dosyanızı bununla değiştirin — AI botları engeli kalkar.', en: 'Replace your current robots.txt with this — removes the AI bot block.' },
    gen: (host) => `User-agent: *\nAllow: /\n\nUser-agent: OAI-SearchBot\nAllow: /\n\nUser-agent: GPTBot\nAllow: /\n\nUser-agent: ChatGPT-User\nAllow: /\n\nUser-agent: ClaudeBot\nAllow: /\n\nUser-agent: Claude-User\nAllow: /\n\nUser-agent: PerplexityBot\nAllow: /\n\nUser-agent: Perplexity-User\nAllow: /\n\nUser-agent: Googlebot\nAllow: /\n\nUser-agent: bingbot\nAllow: /\n\nUser-agent: Google-Extended\nAllow: /\n\nSitemap: https://${host}/sitemap.xml\n`
  },
  schema: {
    btn: { tr: '📋 Schema Kodu Al', en: '📋 Get Schema Code' },
    title: { tr: 'Siteniz İçin Schema.org Kodu', en: 'Schema.org Code for Your Site' },
    type: 'copy', filename: null,
    desc: { tr: 'Bu kodu sayfanızın <head> bölümüne yapıştırın.', en: 'Paste this code into your page <head> section.' },
    gen: (host) => `<scr`+`ipt type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Organization",\n  "name": "${host}",\n  "url": "https://${host}",\n  "description": "[sitenizin kisa aciklamasi]",\n  "sameAs": [\n    "https://twitter.com/[hesabiniz]",\n    "https://instagram.com/[hesabiniz]"\n  ]\n}\n</scr`+`ipt>`
  },
  jsonld: {
    btn: { tr: '📋 JSON-LD Kodu Al', en: '📋 Get JSON-LD Code' },
    title: { tr: 'Siteniz İçin JSON-LD', en: 'JSON-LD for Your Site' },
    type: 'copy', filename: null,
    desc: { tr: 'Bu yapısal veri kodunu sayfanızın <head> bölümüne ekleyin.', en: 'Add this structured data to your page <head>.' },
    gen: (host) => `<scr`+`ipt type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "WebSite",\n  "name": "${host}",\n  "url": "https://${host}",\n  "potentialAction": {\n    "@type": "SearchAction",\n    "target": "https://${host}/?s={search_term_string}",\n    "query-input": "required name=search_term_string"\n  }\n}\n</scr`+`ipt>`
  },
  desc: {
    btn: { tr: '📋 Meta Etiketi Al', en: '📋 Get Meta Tag' },
    title: { tr: 'Meta Description Etiketi', en: 'Meta Description Tag' },
    type: 'copy', filename: null,
    desc: { tr: 'Köşeli parantez içini doldurun, <head> bölümüne ekleyin (120-160 karakter ideal).', en: 'Fill the brackets, add to <head> (120-160 chars ideal).' },
    gen: (host) => `<meta name="description" content="[Sitenizi 120-160 karakter arasinda ozetleyin. Anahtar kelimelerinizi dogal sekilde kullanin.]">`
  },
  ogimage: {
    btn: { tr: '📋 OG Görsel Etiketi', en: '📋 Get OG Image Tag' },
    title: { tr: 'og:image Etiketi', en: 'og:image Tag' },
    type: 'copy', filename: null,
    desc: { tr: 'Görsel URL\'nizi ekleyin (1200x630px önerilir), <head> bölümüne yapıştırın.', en: 'Add your image URL (1200x630px recommended), paste in <head>.' },
    gen: (host) => `<meta property="og:image" content="https://${host}/og-image.jpg">\n<meta property="og:image:width" content="1200">\n<meta property="og:image:height" content="630">`
  },
  og: {
    btn: { tr: '📋 Open Graph Kodu', en: '📋 Get Open Graph Code' },
    title: { tr: 'Open Graph Etiketleri', en: 'Open Graph Tags' },
    type: 'copy', filename: null,
    desc: { tr: 'Bu etiketleri <head> bölümüne ekleyin, köşeli parantezleri doldurun.', en: 'Add these tags to <head>, fill the brackets.' },
    gen: (host) => `<meta property="og:title" content="[Sayfa basligi]">\n<meta property="og:description" content="[Sayfa aciklamasi]">\n<meta property="og:url" content="https://${host}/">\n<meta property="og:type" content="website">\n<meta property="og:image" content="https://${host}/og-image.jpg">`
  },
  canonical: {
    btn: { tr: '📋 Canonical Etiketi', en: '📋 Get Canonical Tag' },
    title: { tr: 'Canonical URL Etiketi', en: 'Canonical URL Tag' },
    type: 'copy', filename: null,
    desc: { tr: 'Her sayfanın <head> bölümüne, o sayfanın gerçek URL\'siyle ekleyin.', en: 'Add to each page <head> with that page real URL.' },
    gen: (host) => `<link rel="canonical" href="https://${host}/">`
  },
  title: {
    btn: { tr: '📋 Title Etiketi', en: '📋 Get Title Tag' },
    title: { tr: 'Title Etiketi', en: 'Title Tag' },
    type: 'copy', filename: null,
    desc: { tr: 'Köşeli parantezi doldurun (10-70 karakter), <head> bölümüne ekleyin.', en: 'Fill the bracket (10-70 chars), add to <head>.' },
    gen: (host) => `<title>[Ana anahtar kelimeniz - Markaniz | 10-70 karakter]</title>`
  },
  h1: {
    btn: { tr: '📋 H1 Örneği', en: '📋 Get H1 Example' },
    title: { tr: 'H1 Başlık Yapısı', en: 'H1 Heading Structure' },
    type: 'copy', filename: null,
    desc: { tr: 'Her sayfada TEK bir H1 olmalı. Bunu sayfanızın ana başlığı olarak kullanın.', en: 'Each page needs ONE H1. Use this as your page main heading.' },
    gen: (host) => `<h1>[Sayfanizin ana konusunu ozetleyen tek baslik]</h1>`
  },
  viewport: {
    btn: { tr: '📋 Viewport Etiketi', en: '📋 Get Viewport Tag' },
    title: { tr: 'Viewport Etiketi', en: 'Viewport Tag' },
    type: 'copy', filename: null,
    desc: { tr: 'Mobil uyum için <head> bölümüne ekleyin.', en: 'Add to <head> for mobile compatibility.' },
    gen: (host) => `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
  },
  lang: {
    btn: { tr: '📋 Dil Etiketi', en: '📋 Get Lang Tag' },
    title: { tr: 'HTML Dil Etiketi', en: 'HTML Lang Attribute' },
    type: 'copy', filename: null,
    desc: { tr: '<html> etiketinizi bununla değiştirin (Türkçe site için tr).', en: 'Replace your <html> tag with this (tr for Turkish, en for English).' },
    gen: (host) => `<html lang="tr">`
  },
  favicon: {
    btn: { tr: '📋 Favicon Etiketi', en: '📋 Get Favicon Tag' },
    title: { tr: 'Favicon Etiketi', en: 'Favicon Tag' },
    type: 'copy', filename: null,
    desc: { tr: 'favicon.ico dosyanızı kök dizine koyun, bu etiketi <head> bölümüne ekleyin.', en: 'Put favicon.ico in root, add this tag to <head>.' },
    gen: (host) => `<link rel="icon" type="image/x-icon" href="/favicon.ico">\n<link rel="apple-touch-icon" href="/apple-touch-icon.png">`
  },
  sitemap: {
    btn: { tr: '📋 Sitemap Rehberi', en: '📋 Sitemap Guide' },
    title: { tr: 'sitemap.xml Şablonu', en: 'sitemap.xml Template' },
    type: 'download', filename: 'sitemap.xml',
    desc: { tr: 'Bu şablonu indirin, kendi sayfalarınızla doldurun, kök dizine yükleyin.', en: 'Download, fill with your pages, upload to root.' },
    gen: (host) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>https://${host}/</loc><priority>1.0</priority></url>\n  <url><loc>https://${host}/hakkimizda</loc><priority>0.8</priority></url>\n  <url><loc>https://${host}/iletisim</loc><priority>0.5</priority></url>\n</urlset>`
  },
  faqPass: {
    btn: { tr: '📋 FAQ Şablonu', en: '📋 FAQ Template' },
    title: { tr: 'FAQ (Soru-Cevap) Şablonu', en: 'FAQ Template' },
    type: 'copy', filename: null,
    desc: { tr: 'Bu yapıyı sayfanıza ekleyin — AI alıntılama oranınız artar.', en: 'Add this structure to your page — increases AI citation rate.' },
    gen: (host) => `<h2>[Sik sorulan soru buraya? ]</h2>\n<p>[Net, dogrudan cevap - 40-60 kelime ideal.]</p>\n\n<h2>[Ikinci soru? ]</h2>\n<p>[Ikinci cevap.]</p>\n\n<!-- AI sistemleri soru-cevap formatini alintilamayi sever -->`
  },
  textRatioPass: {
    btn: { tr: '💡 Nasıl Düzeltilir', en: '💡 How to Fix' },
    title: { tr: 'Metin/HTML Oranını Artırma', en: 'Increasing Text/HTML Ratio' },
    type: 'copy', filename: null,
    desc: { tr: 'Bu adımları uygulayın — sayfanızın metin yoğunluğu artar.', en: 'Apply these steps — increases your page text density.' },
    gen: (host) => `METIN/HTML ORANINI ARTIRMA REHBERI\n\n1. Sayfaya daha fazla anlamli metin icerigi ekleyin\n2. Gereksiz inline script ve style kodlarini harici dosyalara tasiyin\n3. Asiri div ve span kullanimini azaltin\n4. Yorum satirlarini (HTML comments) temizleyin\n5. Bos ve gereksiz HTML etiketlerini kaldirin\n\nIdeal oran: %25 ve uzeri`
  }
};

function openFix(key) {
  // Bot erişim kartları aynı robots.txt çözümünü kullanır
  const botKeys = ['oaiSearchBot','gptBot','chatgptUser','bingbot','googlebot','perplexityBot','perplexityUser','claudeBot','copilotReady'];
  if (botKeys.includes(key)) key = 'aibots';
  const fixer = FIXERS[key];
  if (!fixer) return;
  let host = 'siteniz.com';
  try { host = new URL(window.lastAnalyzedUrl).hostname.replace(/^www\./,''); } catch(e){}
  const content = fixer.gen(host).replace(/\\n/g, '\n');
  document.getElementById('fix-modal-title').textContent = fixer.title[lang];
  document.getElementById('fix-modal-desc').textContent = fixer.desc[lang];
  document.getElementById('fix-modal-code').textContent = content;
  const actionBtn = document.getElementById('fix-modal-action');
  const T2 = T[lang];
  if (fixer.type === 'download') {
    actionBtn.textContent = T2.fixDownload || '⬇ İndir';
    actionBtn.onclick = () => {
      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = fixer.filename;
      a.click();
      URL.revokeObjectURL(a.href);
    };
  } else {
    actionBtn.textContent = T2.fixCopy || '📋 Kopyala';
    actionBtn.onclick = () => {
      navigator.clipboard.writeText(content).then(() => {
        actionBtn.textContent = T2.fixCopied || '✅ Kopyalandı!';
        setTimeout(() => { actionBtn.textContent = T2.fixCopy || '📋 Kopyala'; }, 2000);
      }).catch(() => {
        const ta = document.createElement('textarea');
        ta.value = content; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
        actionBtn.textContent = T2.fixCopied || '✅ Kopyalandı!';
        setTimeout(() => { actionBtn.textContent = T2.fixCopy || '📋 Kopyala'; }, 2000);
      });
    };
  }
  document.getElementById('fix-modal').classList.add('active');
}

function closeFix() {
  document.getElementById('fix-modal').classList.remove('active');
}
// ESC tuşu ve dışarı tıklama ile kapat
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeFix();
    if (document.getElementById('auth-modal').classList.contains('active')) closeAuth();
    if (document.getElementById('history-modal').classList.contains('active')) closeHistory();
  }
});
document.addEventListener('click', (e) => {
  if (e.target.id === 'fix-modal') closeFix();
  if (e.target.id === 'auth-modal') closeAuth();
  if (e.target.id === 'history-modal') closeHistory();
});

function copyPrompt() {
  const txt = document.getElementById('prompt-box').textContent;
  const btn = document.getElementById('prompt-copy-btn');
  const t = T[lang];
  navigator.clipboard.writeText(txt).then(() => {
    btn.textContent = t.promptCopied;
    setTimeout(() => { btn.textContent = t.promptCopy; }, 2000);
  }).catch(() => {
    // Fallback
    const ta = document.createElement('textarea');
    ta.value = txt;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = t.promptCopied;
    setTimeout(() => { btn.textContent = t.promptCopy; }, 2000);
  });
}

// Sayfa açılışı — otomatik dil
document.addEventListener('DOMContentLoaded', function() {
  setLang(lang);
  showLangSuggest();
});

// İngilizce tarayıcı kullanan ziyaretçiye zorlamadan öneri
function showLangSuggest() {
  try {
    if (lang === 'en') return;
    const bl = (navigator.language || 'tr').toLowerCase();
    if (bl.startsWith('tr')) return;
    if (/bot|crawl|spider|lighthouse/i.test(navigator.userAgent)) return;
    try { if (localStorage.getItem('scanliq_lang_hint') === '1') return; } catch (e) {}
    const bar = document.createElement('div');
    bar.id = 'lang-suggest';
    bar.setAttribute('role', 'dialog');
    bar.innerHTML = '<span>🌐 English?</span>' +
      '<button type="button" id="lang-suggest-go">Switch to English</button>' +
      '<button type="button" id="lang-suggest-x" aria-label="Close">✕</button>';
    document.body.appendChild(bar);
    const close = () => { bar.remove(); try { localStorage.setItem('scanliq_lang_hint', '1'); } catch (e) {} };
    document.getElementById('lang-suggest-go').onclick = () => { setLang('en'); close(); };
    document.getElementById('lang-suggest-x').onclick = close;
  } catch (e) {}
}

// ============================================================
// AUTH SİSTEMİ (Firebase)
// ============================================================
let authMode = 'login'; // 'login' veya 'signup'
window.currentUser = null;

function updateAuthUI(user) {
  const btn = document.getElementById('auth-btn');
  const btnText = document.getElementById('auth-btn-text');
  const navHistory = document.getElementById('nav-history');
  const navHistoryText = document.getElementById('nav-history-text');
  if (user) {
    const name = user.displayName || user.email.split('@')[0];
    btnText.textContent = name.length > 12 ? name.substring(0,12)+'…' : name;
    btn.classList.add('logged-in');
    btn.onclick = signOutUser;
    navHistory.style.display = 'flex';
    if (navHistoryText) navHistoryText.textContent = lang === 'tr' ? 'Geçmiş' : 'History';
  } else {
    btnText.textContent = lang === 'tr' ? 'Giriş' : 'Sign In';
    btn.classList.remove('logged-in');
    btn.onclick = openAuth;
    navHistory.style.display = 'none';
  }
}

function openAuth() {
  document.getElementById('auth-modal').classList.add('active');
  authMode = 'login';
  applyAuthTexts();
  document.getElementById('auth-error').classList.remove('show');
}

function closeAuth() {
  document.getElementById('auth-modal').classList.remove('active');
  document.getElementById('auth-email').value = '';
  document.getElementById('auth-password').value = '';
}

function toggleAuthMode() {
  authMode = authMode === 'login' ? 'signup' : 'login';
  applyAuthTexts();
  document.getElementById('auth-error').classList.remove('show');
}

function applyAuthTexts() {
  const T_tr = {
    loginTitle: 'Giriş Yap', signupTitle: 'Hesap Oluştur',
    loginSub: 'Analizlerinizi kaydedin, sitelerinizi düzenli takip edin.',
    signupSub: 'Ücretsiz hesap oluşturun, analizleriniz kaydedilsin.',
    loginBtn: 'Giriş Yap', signupBtn: 'Hesap Oluştur',
    loginToggle: 'Hesabınız yok mu?', loginLink: 'Kayıt olun',
    signupToggle: 'Hesabınız var mı?', signupLink: 'Giriş yapın',
    google: 'Google ile devam et'
  };
  const T_en = {
    loginTitle: 'Sign In', signupTitle: 'Create Account',
    loginSub: 'Save your analyses, track your sites regularly.',
    signupSub: 'Create a free account, your analyses will be saved.',
    loginBtn: 'Sign In', signupBtn: 'Create Account',
    loginToggle: "Don't have an account?", loginLink: 'Sign up',
    signupToggle: 'Already have an account?', signupLink: 'Sign in',
    google: 'Continue with Google'
  };
  const tt = lang === 'tr' ? T_tr : T_en;
  document.getElementById('auth-title').textContent = authMode === 'login' ? tt.loginTitle : tt.signupTitle;
  document.getElementById('auth-sub').textContent = authMode === 'login' ? tt.loginSub : tt.signupSub;
  document.getElementById('auth-submit').textContent = authMode === 'login' ? tt.loginBtn : tt.signupBtn;
  document.getElementById('auth-toggle-text').textContent = authMode === 'login' ? tt.loginToggle : tt.signupToggle;
  document.getElementById('auth-toggle-link').textContent = authMode === 'login' ? tt.loginLink : tt.signupLink;
  document.getElementById('auth-google-text').textContent = tt.google;
}

async function submitAuth() {
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value;
  const errEl = document.getElementById('auth-error');
  const btn = document.getElementById('auth-submit');
  if (!email || !password) {
    errEl.textContent = lang === 'tr' ? 'E-posta ve şifre gerekli.' : 'Email and password required.';
    errEl.classList.add('show'); return;
  }
  if (password.length < 6) {
    errEl.textContent = lang === 'tr' ? 'Şifre en az 6 karakter olmalı.' : 'Password must be at least 6 characters.';
    errEl.classList.add('show'); return;
  }
  btn.disabled = true; errEl.classList.remove('show');
  try {
    const A = window.scanliqAuth;
    if (authMode === 'login') {
      await A.signInWithEmailAndPassword(A.auth, email, password);
    } else {
      await A.createUserWithEmailAndPassword(A.auth, email, password);
    }
    closeAuth();
  } catch (e) {
    let msg = e.message || 'Hata';
    if (e.code === 'auth/invalid-credential' || e.code === 'auth/wrong-password' || e.code === 'auth/user-not-found') {
      msg = lang === 'tr' ? 'E-posta veya şifre hatalı.' : 'Invalid email or password.';
    } else if (e.code === 'auth/email-already-in-use') {
      msg = lang === 'tr' ? 'Bu e-posta zaten kayıtlı.' : 'This email is already registered.';
    } else if (e.code === 'auth/invalid-email') {
      msg = lang === 'tr' ? 'Geçersiz e-posta.' : 'Invalid email.';
    } else if (e.code === 'auth/weak-password') {
      msg = lang === 'tr' ? 'Şifre çok zayıf.' : 'Password too weak.';
    }
    errEl.textContent = msg;
    errEl.classList.add('show');
  } finally {
    btn.disabled = false;
  }
}

async function signInGoogle() {
  const errEl = document.getElementById('auth-error');
  try {
    const A = window.scanliqAuth;
    await A.signInWithPopup(A.auth, A.provider);
    closeAuth();
  } catch (e) {
    if (e.code !== 'auth/popup-closed-by-user' && e.code !== 'auth/cancelled-popup-request') {
      errEl.textContent = e.message || 'Hata';
      errEl.classList.add('show');
    }
  }
}

async function signOutUser() {
  const A = window.scanliqAuth;
  await A.signOut(A.auth);
}

// ============================================================
// ANALİZ KAYDETME
// ============================================================
// ============================================================
// PDF RAPOR ÜRETİMİ — Premium markalı rapor
// ============================================================
function openCertificate() {
  if (window.lastScore === undefined) return;
  const score = window.lastScore;
  const lang = window.currentLang || 'tr';
  let host = 'siteniz.com';
  try { host = new URL(window.lastAnalyzedUrl).hostname.replace(/^www\./,''); } catch(e){}

  // Sertifika seviyesi
  let tier, tierColor;
  if (score >= 85) { tier = lang==='tr'?'AI READY':'AI READY'; tierColor='#00F28A'; }
  else if (score >= 60) { tier = lang==='tr'?'AI IMPROVING':'AI IMPROVING'; tierColor='#f5a623'; }
  else { tier = lang==='tr'?'AI STARTER':'AI STARTER'; tierColor='#ff6b6b'; }

  const T = lang==='tr' ? {
    title: '🏆 AI Uyumluluk Sertifikası',
    sub: `Tebrikler! <strong>${host}</strong> sitesi ${score}/100 GEO skoru aldı. Bu rozeti sitenize ekleyerek AI uyumluluğunuzu gösterin ve ziyaretçi güveni kazanın.`,
    label: 'Bu rozeti sitenize ekleyin (HTML kodu):',
    copy: '📋 Kodu Kopyala',
    note: 'Rozet, Scanliq analiz sayfanıza bağlanır. Sitenizin footer\'ına veya "hakkında" sayfasına ekleyebilirsiniz.'
  } : {
    title: '🏆 AI Readiness Certificate',
    sub: `Congratulations! <strong>${host}</strong> scored ${score}/100 GEO score. Add this badge to your site to show your AI readiness and earn visitor trust.`,
    label: 'Add this badge to your site (HTML code):',
    copy: '📋 Copy Code',
    note: 'The badge links to your Scanliq analysis. You can add it to your site footer or "about" page.'
  };

  document.getElementById('cert-title').textContent = T.title;
  document.getElementById('cert-sub').innerHTML = T.sub;
  document.getElementById('cert-embed-label').textContent = T.label;
  document.getElementById('cert-copy-btn').textContent = T.copy;
  document.getElementById('cert-note').textContent = T.note;

  // Rozet SVG (önizleme + embed aynı)
  const badge = certBadgeSVG(score, tier, tierColor);
  document.getElementById('cert-preview').innerHTML = badge;

  // Embed kodu
  const embed = `<a href="https://scanliq.com/" target="_blank" rel="noopener" title="Scanliq AI Readiness">
${badge}
</a>`;
  document.getElementById('cert-embed').value = embed;

  document.getElementById('cert-modal').classList.add('active');
}

function certBadgeSVG(score, tier, col) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="80" viewBox="0 0 200 80" role="img" aria-label="Scanliq AI Readiness ${score}/100">
<rect width="200" height="80" rx="12" fill="#020807" stroke="#12332a" stroke-width="1.5"/>
<circle cx="40" cy="40" r="24" fill="none" stroke="${col}" stroke-width="5" stroke-linecap="round" stroke-dasharray="${Math.round(score*1.508)} 151" transform="rotate(-90 40 40)"/>
<text x="40" y="46" font-family="Arial,sans-serif" font-size="20" font-weight="800" fill="#fff" text-anchor="middle">${score}</text>
<text x="72" y="32" font-family="Arial,sans-serif" font-size="15" font-weight="800" fill="#fff">Scanliq</text>
<text x="72" y="48" font-family="monospace" font-size="9" font-weight="700" fill="${col}" letter-spacing="1">${tier}</text>
<text x="72" y="64" font-family="monospace" font-size="7.5" fill="#5a7a6e" letter-spacing="0.5">AI READINESS 2026</text>
</svg>`;
}

function closeCertificate() {
  document.getElementById('cert-modal').classList.remove('active');
}

function copyCertEmbed() {
  const el = document.getElementById('cert-embed');
  el.select();
  navigator.clipboard.writeText(el.value).then(() => {
    const btn = document.getElementById('cert-copy-btn');
    const orig = btn.textContent;
    btn.textContent = '✓ ' + (window.currentLang==='en'?'Copied!':'Kopyalandı!');
    setTimeout(() => btn.textContent = orig, 2000);
  });
}

function generatePDF() {
  if (!window.lastChecks || window.lastScore === undefined) return;
  const btn = document.getElementById('pdf-btn');
  const btnText = document.getElementById('pdf-btn-text');
  const origText = btnText.textContent;
  btn.disabled = true;
  btnText.textContent = lang === 'tr' ? 'Hazırlanıyor…' : 'Generating…';

  try {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: 'mm', format: 'a4' });
    const W = 210, H = 297;
    const t = T[lang];
    const score = window.lastScore;
    const checks = window.lastChecks;
    const url = window.lastAnalyzedUrl || '';
    let host = url;
    try { host = new URL(url).hostname.replace(/^www\./,''); } catch(e){}

    // Renkler
    const cAccent = [0, 242, 138];
    const cDark = [2, 8, 7];
    const cGray = [120, 130, 125];
    const cLight = [240, 248, 244];
    const tierColors = [[255,77,77],[245,166,35],[245,208,35],[0,184,217],[0,242,138]];
    const tier = score < 30 ? 0 : score < 50 ? 1 : score < 70 ? 2 : score < 85 ? 3 : 4;
    const sc = tierColors[tier];

    // ===== HEADER BAR =====
    doc.setFillColor(cDark[0], cDark[1], cDark[2]);
    doc.rect(0, 0, W, 42, 'F');
    // Logo metni
    doc.setTextColor(cAccent[0], cAccent[1], cAccent[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.text('Scanliq', 16, 22);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(lang === 'tr' ? 'GEO & AI Readiness Raporu' : 'GEO & AI Readiness Report', 16, 30);
    // Tarih (sağ üst)
    const dateStr = new Date().toLocaleDateString(lang === 'tr' ? 'tr-TR' : 'en-US', { year:'numeric', month:'long', day:'numeric' });
    doc.setFontSize(8);
    doc.setTextColor(160, 170, 165);
    doc.text(dateStr, W - 16, 22, { align: 'right' });
    doc.text('scanliq.com', W - 16, 28, { align: 'right' });

    // ===== ANALİZ EDİLEN SİTE =====
    let y = 56;
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text(lang === 'tr' ? 'ANALİZ EDİLEN SİTE' : 'ANALYZED SITE', 16, y);
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(15);
    doc.text(host, 16, y + 8);

    // ===== GEO SCORE DAİRESİ =====
    y = 82;
    const cx = 45, cy = y + 18, r = 22;
    // Dış halka (arka)
    doc.setDrawColor(230, 235, 232);
    doc.setLineWidth(4);
    doc.circle(cx, cy, r, 'S');
    // Skor yayı (renkli) — yaklaşık daire dilimleri ile
    doc.setDrawColor(sc[0], sc[1], sc[2]);
    doc.setLineWidth(4);
    const segments = Math.round((score/100) * 60);
    for (let i = 0; i < segments; i++) {
      const a1 = (-90 + (i/60)*360) * Math.PI/180;
      const a2 = (-90 + ((i+1)/60)*360) * Math.PI/180;
      doc.line(cx + r*Math.cos(a1), cy + r*Math.sin(a1), cx + r*Math.cos(a2), cy + r*Math.sin(a2));
    }
    // Skor sayısı
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(22);
    doc.text(String(score), cx, cy + 2, { align: 'center' });
    doc.setFontSize(7);
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.text('GEO SCORE', cx, cy + 9, { align: 'center' });

    // Skor başlığı + açıklama (dairenin sağında)
    const titles = t.scoreTitles;
    doc.setTextColor(sc[0], sc[1], sc[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    const cleanTitle = titles[tier].replace(/[^\x00-\x7F\u00C0-\u017F]/g, '').trim();
    doc.text(cleanTitle, 78, cy - 6);
    // Açıklama (HTML tag temizle)
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const descClean = t.scoreDescs[tier].replace(/<[^>]*>/g, '');
    const descLines = doc.splitTextToSize(descClean, 116);
    doc.text(descLines, 78, cy + 1);

    // ===== AI MOTORU GÖRÜNÜRLÜK (4 motor) =====
    y = 122;
    const pass = (k) => checks[k] && checks[k].pass === true;
    // Worker'dan gelen görünürlük varsa onu kullan
    const ev = window.lastEngineVis || {};
    const stMap = { ok: 2, warn: 1, fail: 0 };
    const engineData = [
      { name: 'ChatGPT Search', st: stMap[ev.chatgpt] ?? (pass('oaiSearchBot') && pass('https') ? 2 : pass('oaiSearchBot') ? 1 : 0),
        reasonOk: lang==='tr'?'OAI-SearchBot erisebiliyor':'OAI-SearchBot allowed',
        reasonBad: lang==='tr'?'OAI-SearchBot engelli veya HTTPS yok':'OAI-SearchBot blocked or no HTTPS',
        action: lang==='tr'?'robots.txt icinde OAI-SearchBot erisimini ac':'Allow OAI-SearchBot in robots.txt' },
      { name: 'Google AI / Gemini', st: stMap[ev.google] ?? 0,
        reasonOk: lang==='tr'?'Googlebot + yapisal veri + sitemap mevcut':'Googlebot + structured data + sitemap present',
        reasonBad: lang==='tr'?'Googlebot, yapisal veri veya sitemap eksik':'Googlebot, structured data or sitemap missing',
        action: lang==='tr'?'Googlebot erisimi, Schema/JSON-LD ve sitemap ekle':'Add Googlebot access, Schema/JSON-LD and sitemap' },
      { name: 'Perplexity', st: stMap[ev.perplexity] ?? 0,
        reasonOk: lang==='tr'?'PerplexityBot erisebiliyor + llms.txt var':'PerplexityBot allowed + llms.txt present',
        reasonBad: lang==='tr'?'PerplexityBot engelli veya llms.txt yok':'PerplexityBot blocked or no llms.txt',
        action: lang==='tr'?'PerplexityBot erisimini ac ve llms.txt ekle':'Allow PerplexityBot and add llms.txt' },
      { name: 'Bing Copilot', st: stMap[ev.copilot] ?? 0,
        reasonOk: lang==='tr'?'HTTPS + bingbot + yapisal sinyaller mevcut':'HTTPS + bingbot + structural signals present',
        reasonBad: lang==='tr'?'bingbot engelli veya yapisal sinyaller eksik':'bingbot blocked or structural signals missing',
        action: lang==='tr'?'bingbot erisimi, sitemap, canonical ve JSON-LD ekle':'Add bingbot access, sitemap, canonical and JSON-LD' }
    ];

    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(lang === 'tr' ? 'AI Motoru Görünürlüğü' : 'AI Engine Visibility', 16, y);
    y += 5;

    const visStatusTxt = lang === 'tr' ? ['Gorunmez','Kismen','Gorunur'] : ['Not Visible','Partial','Visible'];
    const visColors = [[255,77,77],[245,166,35],[0,200,118]];
    const rowHeight = 13;
    engineData.forEach((eng) => {
      const vc = visColors[eng.st];
      // satır kutusu
      doc.setFillColor(cLight[0], cLight[1], cLight[2]);
      doc.roundedRect(16, y, W - 32, rowHeight - 2, 2, 2, 'F');
      // durum noktası
      doc.setFillColor(vc[0], vc[1], vc[2]);
      doc.circle(22, y + 5.5, 2, 'F');
      // motor adı
      doc.setTextColor(cDark[0], cDark[1], cDark[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.text(eng.name, 27, y + 5);
      // durum etiketi (sağ)
      doc.setTextColor(vc[0], vc[1], vc[2]);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8.5);
      doc.text(visStatusTxt[eng.st], W - 20, y + 5, { align: 'right' });
      // sebep / aksiyon
      doc.setTextColor(cGray[0], cGray[1], cGray[2]);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(7.5);
      const line = eng.st === 2 ? eng.reasonOk : (eng.reasonBad + '  →  ' + eng.action);
      doc.text(line.substring(0, 95), 27, y + 9.5);
      y += rowHeight;
    });

    // ===== KONTROL LİSTESİ =====
    y += 6;
    doc.setTextColor(cDark[0], cDark[1], cDark[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(11);
    doc.text(lang === 'tr' ? 'Kontrol Sonuçları' : 'Check Results', 16, y);
    const passCount = Object.values(checks).filter(c => c.pass).length;
    const totalCount = Object.keys(checks).length;
    doc.setTextColor(cGray[0], cGray[1], cGray[2]);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text((lang==='tr'?passCount+' / '+totalCount+' başarılı':passCount+' / '+totalCount+' passed'), W - 16, y, { align: 'right' });

    y += 7;
    const entries = Object.entries(checks);
    const colW = (W - 32) / 2;
    const rowH = 6.6;
    let col = 0, startY = y;
    entries.forEach(([key, data], i) => {
      const info = t.checks[key];
      const label = info ? info.title : key;
      const colX = 16 + col * colW;
      const rowY = startY + Math.floor(i/2) * rowH - (col===1 ? 0 : 0);
      const actualRow = Math.floor(i / 2);
      const ry = startY + actualRow * rowH;
      const rx = 16 + (i % 2) * colW;
      // Durum ikonu
      if (data.pass) {
        doc.setFillColor(0, 200, 118);
        doc.circle(rx + 2, ry - 1, 1.6, 'F');
        doc.setTextColor(255,255,255);
        doc.setFont('helvetica','bold');
        doc.setFontSize(6);
        doc.text('OK', rx + 2, ry - 0.3, { align:'center' });
      } else {
        doc.setFillColor(255, 77, 77);
        doc.circle(rx + 2, ry - 1, 1.6, 'F');
        doc.setTextColor(255,255,255);
        doc.setFont('helvetica','bold');
        doc.setFontSize(7);
        doc.text('X', rx + 2, ry - 0.2, { align:'center' });
      }
      // Etiket (ASCII temizlik)
      const cleanLabel = label.replace(/[^\x00-\x7F\u00C0-\u017F]/g, '').trim();
      doc.setTextColor(data.pass ? 60 : 120, data.pass ? 60 : 60, data.pass ? 60 : 60);
      doc.setFont('helvetica', data.pass ? 'normal' : 'bold');
      doc.setFontSize(7.8);
      doc.text(cleanLabel.substring(0, 32), rx + 6, ry);
    });

    // ===== EKSİKLER / ÖNERİLER KUTUSU =====
    const failed = entries.filter(([,d]) => !d.pass).map(([k]) => k);
    let boxY = startY + Math.ceil(entries.length/2) * rowH + 6;
    if (failed.length > 0 && boxY < 250) {
      doc.setFillColor(255, 248, 240);
      const fh = Math.min(failed.length * 5 + 14, 250 - boxY);
      doc.roundedRect(16, boxY, W - 32, fh, 3, 3, 'F');
      doc.setTextColor(200, 100, 30);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(9.5);
      doc.text(lang === 'tr' ? 'Öncelikli İyileştirmeler' : 'Priority Improvements', 22, boxY + 8);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(90, 70, 50);
      let fy = boxY + 14;
      failed.slice(0, 8).forEach((k) => {
        const info = t.checks[k];
        const lbl = info ? info.title.replace(/[^\x00-\x7F\u00C0-\u017F]/g, '').trim() : k;
        doc.text('•  ' + lbl, 22, fy);
        fy += 5;
      });
    }

    // ===== FOOTER =====
    doc.setFillColor(cDark[0], cDark[1], cDark[2]);
    doc.rect(0, H - 18, W, 18, 'F');
    doc.setTextColor(160, 170, 165);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.text(lang === 'tr'
      ? 'Bu rapor Scanliq tarafından otomatik oluşturulmuştur · scanliq.com'
      : 'This report was automatically generated by Scanliq · scanliq.com', W/2, H - 10, { align: 'center' });
    doc.setTextColor(cAccent[0], cAccent[1], cAccent[2]);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.5);
    doc.text('GEO Score: ' + score + '/100', W/2, H - 5, { align: 'center' });

    // İndir
    const fileName = 'scanliq-' + host.replace(/[^a-z0-9]/gi,'-') + '-' + new Date().toISOString().slice(0,10) + '.pdf';
    if (window.SCANLIQ_IN_APP && window.scanliqAppSaveFile) {
      window.scanliqAppSaveFile(fileName, 'application/pdf', doc.output('datauristring').split(',')[1]);
    } else {
      doc.save(fileName);
    }

    btnText.textContent = lang === 'tr' ? '✓ İndirildi' : '✓ Downloaded';
    setTimeout(() => { btnText.textContent = origText; btn.disabled = false; }, 2000);
  } catch (e) {
    console.error('PDF hata:', e);
    alert((lang === 'tr' ? 'PDF oluşturulamadı: ' : 'PDF generation failed: ') + e.message);
    btnText.textContent = origText;
    btn.disabled = false;
  }
}

function handleSaveClick() {
  if (!window.lastAnalyzedUrl || !window.lastChecks) return;
  saveAnalysis(window.lastAnalyzedUrl, window.lastScore, window.lastChecks);
}

// ============================================================
// ANONİM İSTATİSTİK (toplu rapor için — kişisel veri saklanmaz)
// ============================================================
async function logAnonymousStat(score, checks) {
  try {
    const A = window.scanliqAuth;
    if (!A || !A.db) return;

    // Domain KAYDEDİLMEZ — sadece uzantı (TLD) ve ülke sinyali
    let tld = 'other';
    try {
      const host = new URL(window.lastAnalyzedUrl).hostname.replace(/^www\./,'');
      const parts = host.split('.');
      // Önce iki parçalı uzantıya (.com.tr gibi), olmazsa tek parçalıya (.com gibi) bak
      const iki = parts.length >= 3 ? '.' + parts.slice(-2).join('.') : '';
      const tek = parts.length >= 2 ? '.' + parts[parts.length - 1] : '';
      const IZINLI = /^\.(com|net|org|com\.tr|org\.tr|net\.tr|io|co|dev|app|tr|de|fr|es|it|nl|uk|co\.uk|info|biz|xyz|online|site|store|web\.tr|gen\.tr|edu\.tr|gov\.tr|bel\.tr|av\.tr)$/;
      tld = IZINLI.test(iki) ? iki : (IZINLI.test(tek) ? tek : 'other');
    } catch(e) {}

    // Sadece hangi kontrolün geçip geçmediği (true/false)
    const checkData = {};
    Object.keys(checks).forEach(k => { checkData[k] = !!checks[k].pass; });

    await A.addDoc(A.collection(A.db, 'stats'), {
      score: score,
      tld: tld,
      checks: checkData,
      lang: (window.currentLang || 'tr'),
      createdAt: A.serverTimestamp()
    });
  } catch (e) {
    // Sessizce geç — istatistik kaydı kullanıcı deneyimini asla bozmamalı
  }
}

async function saveAnalysis(url, score, checks) {
  if (!window.currentUser) { openAuth(); return; }
  const A = window.scanliqAuth;
  const btn = document.getElementById('save-analysis-btn');
  if (btn) { btn.disabled = true; btn.textContent = lang==='tr'?'Kaydediliyor…':'Saving…'; }
  try {
    const checkData = {};
    Object.keys(checks).forEach(k => checkData[k] = checks[k].pass);
    await A.addDoc(A.collection(A.db, 'analyses'), {
      userId: window.currentUser.uid,
      url, score, checks: checkData,
      createdAt: A.serverTimestamp()
    });
    if (btn) { btn.textContent = lang==='tr'?'✅ Kaydedildi':'✅ Saved'; }
  } catch (e) {
    if (btn) { btn.disabled = false; btn.textContent = lang==='tr'?'💾 Kaydet':'💾 Save'; }
    alert((lang==='tr'?'Kayıt hatası: ':'Save error: ')+e.message);
  }
}

// ============================================================
// GEÇMİŞ MODAL
// ============================================================
async function openHistory() {
  if (!window.currentUser) { openAuth(); return; }
  document.getElementById('history-modal').classList.add('active');
  document.getElementById('history-title').textContent = lang==='tr'?'Analiz Geçmişiniz':'Analysis History';
  document.getElementById('history-sub').textContent = lang==='tr'?'Kayıtlı analizlerinizi görüntüleyin.':'View your saved analyses.';
  const listEl = document.getElementById('history-list');
  listEl.innerHTML = '<div class="history-empty">'+(lang==='tr'?'Yükleniyor…':'Loading…')+'</div>';
  try {
    const A = window.scanliqAuth;
    // Index gerektirmemesi için sıralama yapmıyoruz — veriyi çekip tarayıcıda sıralıyoruz
    const q = A.query(
      A.collection(A.db,'analyses'),
      A.where('userId','==',window.currentUser.uid)
    );
    const snap = await A.getDocs(q);
    if (snap.empty) {
      listEl.innerHTML = '<div class="history-empty">'+(lang==='tr'?'Henüz kayıtlı analiz yok. Bir site analiz edip "Kaydet" butonuna basın.':'No saved analyses yet. Analyze a site and click "Save".')+'</div>';
      return;
    }
    // Belgeleri diziye al ve tarihe göre (en yeni üstte) sırala
    const docs = [];
    snap.forEach(d => docs.push({ id: d.id, data: d.data() }));
    docs.sort((a, b) => {
      const ta = a.data.createdAt?.toDate ? a.data.createdAt.toDate().getTime() : 0;
      const tb = b.data.createdAt?.toDate ? b.data.createdAt.toDate().getTime() : 0;
      return tb - ta;
    });
    listEl.innerHTML = '';
    docs.forEach(({ id, data }) => {
      const date = data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString(lang==='tr'?'tr-TR':'en-US') : '';
      const scoreColor = data.score >= 80 ? '#00e87a' : data.score >= 50 ? '#ffb84d' : '#ff6b6b';
      const item = document.createElement('div');
      item.className = 'history-item';
      item.innerHTML = `
        <div style="flex:1;min-width:200px;">
          <div class="history-item-url">${data.url}</div>
          <div class="history-item-meta">${date}</div>
        </div>
        <div class="history-item-score" style="background:${scoreColor}">${data.score}</div>
        <div class="history-item-actions">
          <button class="history-item-btn" onclick="reanalyze('${data.url.replace(/'/g,"\\'")}')">${lang==='tr'?'🔄 Yenile':'🔄 Re-scan'}</button>
          <button class="history-item-btn" onclick="deleteHistoryItem('${id}')">${lang==='tr'?'🗑':'🗑'}</button>
        </div>
      `;
      listEl.appendChild(item);
    });
  } catch (e) {
    listEl.innerHTML = '<div class="history-empty">'+(lang==='tr'?'Hata: ':'Error: ')+e.message+'</div>';
  }
}

function closeHistory() {
  document.getElementById('history-modal').classList.remove('active');
}

function reanalyze(url) {
  closeHistory();
  document.getElementById('url-input').value = url;
  resetAll();
  window.scrollTo({top: 0, behavior: 'smooth'});
  setTimeout(() => document.getElementById('btn-check').click(), 300);
}

async function deleteHistoryItem(id) {
  if (!confirm(lang==='tr'?'Bu analiz silinsin mi?':'Delete this analysis?')) return;
  try {
    const A = window.scanliqAuth;
    await A.deleteDoc(A.doc(A.db,'analyses',id));
    openHistory(); // listeyi yenile
  } catch (e) {
    alert((lang==='tr'?'Silme hatası: ':'Delete error: ')+e.message);
  }
}

function resetAll() {
  document.getElementById('prompt-section').style.display = 'none';
  document.getElementById('results').classList.remove('active');
  document.getElementById('results').style.display = 'none';
  document.getElementById('url-input').value = 'https://';
  document.getElementById('error-msg').classList.remove('active');
  document.getElementById('about-section').style.display = 'block';
  document.getElementById('how-section').style.display = 'block';
  document.getElementById('stats-bar').style.display = 'flex';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
