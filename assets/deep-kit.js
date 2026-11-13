/* deep-kit: sekmeler, kontrol listeleri, test, kopyala */
(function(){
  document.querySelectorAll('.dk-tabs').forEach(function(box){
    var btns = box.querySelectorAll('.dk-tabbar button'), panes = box.querySelectorAll('.dk-tabpanel');
    btns.forEach(function(b, i){ b.addEventListener('click', function(){
      btns.forEach(function(x, j){ x.setAttribute('aria-selected', j === i ? 'true' : 'false'); });
      panes.forEach(function(p, j){ p.hidden = j !== i; });
    }); });
  });
  document.querySelectorAll('.dk-check').forEach(function(box){
    var inputs = box.querySelectorAll('input[type=checkbox]'), bar = box.querySelector('.dk-bar i'),
        sc = box.querySelector('.sc'), msg = box.querySelector('.msg'), levels = [];
    try { levels = JSON.parse(box.getAttribute('data-levels') || '[]'); } catch(e) {}
    function upd(){
      var n = 0; inputs.forEach(function(i){ if (i.checked) n++; });
      var pct = inputs.length ? Math.round(n * 100 / inputs.length) : 0;
      bar.style.width = pct + '%'; bar.style.backgroundPosition = (100 - pct) + '% 0';
      sc.textContent = n + ' / ' + inputs.length;
      var m = ''; levels.forEach(function(l){ if (pct >= l[0]) m = l[1]; });
      msg.textContent = m;
    }
    inputs.forEach(function(i){ i.addEventListener('change', upd); }); upd();
  });
  document.querySelectorAll('.dk-quiz').forEach(function(q){
    q.querySelectorAll('button.o').forEach(function(b){ b.addEventListener('click', function(){
      if (q.classList.contains('done')) return;
      q.classList.add('done');
      q.querySelectorAll('button.o').forEach(function(x){ if (x.hasAttribute('data-right')) x.classList.add('right'); });
      if (!b.hasAttribute('data-right')) b.classList.add('wrong');
    }); });
  });
  document.querySelectorAll('.dk-code').forEach(function(c){
    var btn = document.createElement('button'); btn.className = 'cp'; btn.type = 'button';
    var lbl = document.documentElement.lang === 'en' ? ['Copy', 'Copied ✓'] : ['Kopyala', 'Kopyalandı ✓'];
    btn.textContent = lbl[0]; c.appendChild(btn);
    btn.addEventListener('click', function(){
      var t = c.querySelector('pre').innerText;
      (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).catch(function(){
        var ta = document.createElement('textarea'); ta.value = t; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      });
      btn.textContent = lbl[1]; setTimeout(function(){ btn.textContent = lbl[0]; }, 1800);
    });
  });
})();

    /* Kontrol listesi: genel puan + tarayıcıda saklama */
    (function(){
      var KEY = 'scanliq-ck15-' + (document.documentElement.lang || 'tr');
      var boxes = document.querySelectorAll('.blog-content .dk-check input[type=checkbox]');
      var tot = document.getElementById('ck-total'); if (!tot || !boxes.length) return;
      var bar = tot.querySelector('.dk-bar i'), n = tot.querySelector('.ck-total-n'), msg = tot.querySelector('.ck-total-msg');
      var en = document.documentElement.lang === 'en';
      var L = en ? [[0,'Nothing checked yet. Start with the groups below.'],[1,'Getting started: focus on the critical items first.'],[40,'Halfway there: structured data and content are next.'],[70,'Strong position: finish the rest and start measuring.'],[100,'Excellent! Keep the monthly measurement routine going.']]
                 : [[0,'Henüz madde işaretlemediniz. Aşağıdaki gruplardan başlayın.'],[1,'Başlangıç: önce kritik maddelere odaklanın.'],[40,'Yarı yoldasınız: sırada yapısal veri ve içerik var.'],[70,'Güçlü durumdasınız: kalanları tamamlayıp ölçmeye başlayın.'],[100,'Mükemmel! Aylık ölçüm rutinini sürdürün.']];
      function save(){ try { localStorage.setItem(KEY, JSON.stringify([].map.call(boxes, function(b){ return b.checked ? 1 : 0; }))); } catch(e) {} }
      function upd(){
        var c = 0; boxes.forEach(function(b){ if (b.checked) c++; });
        var p = Math.round(c * 100 / boxes.length);
        bar.style.width = p + '%'; bar.style.backgroundPosition = (100 - p) + '% 0';
        n.textContent = c + ' / ' + boxes.length + '  (%' + p + ')';
        var m = ''; L.forEach(function(l){ if (p >= l[0] && (l[0] > 0 || c === 0)) m = l[1]; }); msg.textContent = m;
        pill.textContent = '✓ ' + c + '/' + boxes.length + ' · %' + p;
        pill.classList.toggle('on', c > 0 && !vis);
      }
      var pill = document.createElement('button'); pill.type = 'button'; pill.className = 'ck-pill';
      pill.setAttribute('aria-label', en ? 'Go to overall score' : 'Genel puana git');
      pill.addEventListener('click', function(){ tot.scrollIntoView({ behavior: 'smooth', block: 'center' }); });
      document.body.appendChild(pill);
      var vis = true;
      if ('IntersectionObserver' in window) new IntersectionObserver(function(e){ vis = e[0].isIntersecting; upd(); }).observe(tot);
      try { var s = JSON.parse(localStorage.getItem(KEY) || '[]'); boxes.forEach(function(b, i){ if (s[i]) { b.checked = true; b.dispatchEvent(new Event('change')); } }); } catch(e) {}
      boxes.forEach(function(b){ b.addEventListener('change', function(){ upd(); save(); }); });
      tot.querySelector('.ck-reset').addEventListener('click', function(){ boxes.forEach(function(b){ if (b.checked) { b.checked = false; b.dispatchEvent(new Event('change')); } }); upd(); save(); });
      upd();
    })();
    
/* AEO paragraf testi (tamamen tarayıcıda) */
(function(){
  var box = document.getElementById('aeo-test'); if (!box) return;
  var en = document.documentElement.lang === 'en';
  var q = box.querySelector('#aeo-q'), a = box.querySelector('#aeo-a'), out = box.querySelector('.aeo-out');
  var T = en ? {
    empty: 'Paste a paragraph first.', score: 'Answer readiness: ', s: ['Needs work', 'Getting there', 'Strong'],
    fl: /\b(hello|hi there|in this (article|post|guide)|we will (look|explore|cover|discuss)|let'?s (dive|start|begin)|have you ever wondered|welcome)\b/i,
    def: /\b(is|are|means|refers to|stands for)\b/i, ok: '✅', no: '⚠️',
    m: { first: ['First sentence is short and direct', 'First sentence is long; aim for under 25 words'], len: ['Length is in the commonly recommended 40-60 word range', 'Paragraph length: '], fluff: ['No filler intro phrases', 'Filler intro found: start with the answer instead'], defn: ['First sentence reads like a definition or direct answer', 'First sentence doesn\'t look like a direct answer (e.g. "X is ...")'], kw: ['First sentence repeats the key term from the question', 'First sentence doesn\'t mention the key term from the question'], num: ['Contains concrete details (numbers, dates)', 'No concrete details: a number, date or example can make it stronger'] }, words: ' words', short: 'a bit short, aim for 40-60', long: 'a bit long, aim for 40-60'
  } : {
    empty: 'Önce bir paragraf yapıştırın.', score: 'Cevap hazırlığı: ', s: ['Geliştirilmeli', 'Fena değil', 'Güçlü'],
    fl: /(bu yazı(mız)?da|bu rehberde|ele alacağız|inceleyeceğiz|anlatacağız|hazırsanız|merak ediyor musunuz|merhaba)/i,
    def: /(\S+(dır|dir|dur|dür|tır|tir|tur|tür)\b|\bdemektir\b|\banlamına gelir\b|\bkısaltmasıdır\b)/i, ok: '✅', no: '⚠️',
    m: { first: ['İlk cümle kısa ve doğrudan', 'İlk cümle uzun; 25 kelimenin altını hedefleyin'], len: ['Uzunluk sık önerilen 40-60 kelime aralığında', 'Paragraf uzunluğu: '], fluff: ['Dolgu giriş ifadesi yok', 'Dolgu giriş ifadesi var: doğrudan cevapla başlayın'], defn: ['İlk cümle bir tanım veya doğrudan cevap gibi', 'İlk cümle doğrudan bir cevap gibi görünmüyor (örnek: "X, ... -dir.")'], kw: ['İlk cümle sorudaki ana terimi tekrar ediyor', 'İlk cümlede sorudaki ana terim geçmiyor'], num: ['Somut ayrıntı var (sayı, tarih)', 'Somut ayrıntı yok: bir sayı, tarih veya örnek cevabı güçlendirir'] }, words: ' kelime', short: 'biraz kısa, hedef 40-60', long: 'biraz uzun, hedef 40-60'
  };
  var STOP = en ? /^(what|how|why|is|are|the|a|an|do|does|can|which|who|when|where|to|of|for|in|and|or)$/i
                : /^(nedir|nasıl|neden|niçin|ne|mi|mı|mu|mü|bir|ve|ile|için|hangi|kim|nerede|zaman|olan|nelerdir|yapılır)$/i;
  function words(s){ return (s.match(/[^\s.,;:!?()"'“”]+/g) || []); }
  function run(){
    var t = a.value.trim(); if (!t) { out.innerHTML = '<p>' + T.empty + '</p>'; return; }
    var first = (t.match(/^[\s\S]*?[.!?](\s|$)/) || [t])[0].trim();
    var fw = words(first).length, tw = words(t).length, r = [], pts = 0;
    function add(ok, pass, fail){ r.push([ok, ok ? pass : fail]); if (ok) pts++; }
    add(fw <= 25, T.m.first[0], T.m.first[1] + ' (' + fw + T.words + ')');
    add(tw >= 40 && tw <= 60, T.m.len[0] + ' (' + tw + T.words + ')', T.m.len[1] + tw + T.words + ' · ' + (tw < 40 ? T.short : T.long));
    add(!T.fl.test(t.slice(0, 220)), T.m.fluff[0], T.m.fluff[1]);
    add(T.def.test(first), T.m.defn[0], T.m.defn[1]);
    var keys = words(q.value).filter(function(w){ return w.length > 2 && !STOP.test(w); });
    if (keys.length) { var lf = first.toLocaleLowerCase(en ? 'en' : 'tr'); add(keys.some(function(k){ return lf.indexOf(k.toLocaleLowerCase(en ? 'en' : 'tr').slice(0, Math.max(3, k.length - 2))) > -1; }), T.m.kw[0], T.m.kw[1]); }
    add(/\d/.test(t), T.m.num[0], T.m.num[1]);
    var p = Math.round(pts * 100 / r.length), lvl = p >= 80 ? 2 : p >= 50 ? 1 : 0;
    var esc = function(s){ return s.replace(/[&<>]/g, function(c){ return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); };
    out.innerHTML = '<div class="aeo-score">' + T.score + pts + '/' + r.length + ' · ' + T.s[lvl] + '</div><div class="dk-bar"><i style="width:' + p + '%;background-position:' + (100 - p) + '% 0"></i></div><ul>' +
      r.map(function(x){ return '<li>' + (x[0] ? T.ok : T.no) + ' ' + esc(x[1]) + '</li>'; }).join('') + '</ul>';
  }
  box.querySelector('.aeo-run').addEventListener('click', run);
})();
