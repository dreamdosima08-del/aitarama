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
    
