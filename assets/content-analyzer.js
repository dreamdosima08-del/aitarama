function updateCount() {
  const text = document.getElementById('ca-input').value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  document.getElementById('ca-count').textContent = words + ' kelime';
}

async function analyzeContent() {
  const text = document.getElementById('ca-input').value.trim();
  const words = text ? text.split(/\s+/).length : 0;
  const statusEl = document.getElementById('ca-status');
  const resultEl = document.getElementById('ca-result');
  const btn = document.getElementById('ca-btn');

  if (words < 30) {
    statusEl.innerHTML = '<div class="ca-error">Lütfen en az 30 kelimelik bir metin girin. Daha uzun metinler daha doğru analiz edilir.</div>';
    resultEl.classList.remove('show');
    return;
  }

  btn.disabled = true;
  btn.textContent = 'Analiz ediliyor...';
  resultEl.classList.remove('show');
  statusEl.innerHTML = '<div class="ca-loading"><div class="ca-spinner"></div>Yapay zeka makalenizi analiz ediyor...</div>';

  const ERR = {
    rate_limited: "Saatlik analiz sınırına ulaştınız. Lütfen biraz sonra tekrar deneyin.",
    too_long: "Metin çok uzun. Lütfen 15.000 karakterden kısa bir bölüm yapıştırın.",
    too_short: "Lütfen en az 30 kelimelik bir metin girin."
  };

  try {
    const response = await fetch("https://scanliq-api.dreamdosima08.workers.dev/analyze-content", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: text, lang: "tr" })
    });
    const data = await response.json();
    if (!response.ok || !data.success) {
      const err = new Error(data && data.error);
      err.code = data && data.error;
      throw err;
    }
    const result = data.result;
    renderResult(result);
    statusEl.innerHTML = "";
  } catch (e) {
    const msg = (e && e.code && ERR[e.code]) || 'Analiz sırasında bir hata oluştu. Lütfen tekrar deneyin.';
    statusEl.innerHTML = '<div class="ca-error">' + msg + '</div>';
  } finally {
    btn.disabled = false;
    btn.textContent = '✨ Analiz Et';
  }
}

function escHtml(s) {
  return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function renderResult(r) {
  const score = Math.max(0, Math.min(100, r.score || 0));
  const tier = score < 40 ? 'bad' : score < 70 ? 'warn' : 'good';
  const colors = { bad:'#ff6b6b', warn:'#f5a623', good:'#00e87a' };
  const titles = { bad:'Geliştirilmeli', warn:'İyi Yolda', good:'Kaynak Gösterilmeye Hazır' };
  const col = colors[tier];

  let html = '';
  // Skor kartı
  html += '<div class="ca-score-card">';
  html += '<div class="ca-score-circle" style="background:conic-gradient(' + col + ' ' + (score*3.6) + 'deg, rgba(255,255,255,0.06) 0deg);">';
  html += '<div style="position:absolute;inset:8px;background:#020807;border-radius:50%;display:flex;flex-direction:column;align-items:center;justify-content:center;">';
  html += '<span class="ca-score-num" style="color:' + col + '">' + score + '</span>';
  html += '<span class="ca-score-label">CITATION</span></div></div>';
  html += '<div class="ca-score-text"><h3 style="color:' + col + '">' + titles[tier] + '</h3><p>' + escHtml(r.verdict) + '</p></div>';
  html += '</div>';

  // Güçlü yönler
  if (r.strengths && r.strengths.length) {
    html += '<div class="ca-section"><h3>✅ Güçlü Yönler</h3>';
    r.strengths.forEach(s => { html += '<div class="ca-item"><div class="ca-item-body">• ' + escHtml(s) + '</div></div>'; });
    html += '</div>';
  }
  // Zayıf yönler
  if (r.weaknesses && r.weaknesses.length) {
    html += '<div class="ca-section"><h3>⚠️ Geliştirilecek Noktalar</h3>';
    r.weaknesses.forEach(s => { html += '<div class="ca-item"><div class="ca-item-body">• ' + escHtml(s) + '</div></div>'; });
    html += '</div>';
  }
  // Öneriler
  if (r.suggestions && r.suggestions.length) {
    html += '<div class="ca-section"><h3>💡 İyileştirme Önerileri</h3>';
    r.suggestions.forEach(s => { html += '<div class="ca-suggestion">' + escHtml(s) + '</div>'; });
    html += '</div>';
  }

  const resultEl = document.getElementById('ca-result');
  resultEl.innerHTML = html;
  resultEl.classList.add('show');
}
