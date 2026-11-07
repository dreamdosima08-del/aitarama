function esc(s){ return (s||'').trim(); }

function updateLlms() {
  const name = esc(document.getElementById('f-name').value) || '[Site Adı]';
  const domain = esc(document.getElementById('f-domain').value).replace(/^https?:\/\//,'').replace(/\/$/,'') || 'siteniz.com';
  const desc = esc(document.getElementById('f-desc').value) || '[Sitenizi 1-2 cümleyle tanımlayın: ne yapar, kime hizmet eder]';
  const email = esc(document.getElementById('f-email').value) || 'info@' + domain;
  const servicesRaw = esc(document.getElementById('f-services').value);
  let services = '- [Ana hizmet veya konu 1]\n- [Ana hizmet veya konu 2]\n- [Ana hizmet veya konu 3]';
  if (servicesRaw) {
    services = servicesRaw.split('\n').map(s => s.trim()).filter(s => s).map(s => '- ' + s).join('\n');
  }

  const out = `# llms.txt
# ${domain}

## Site Adı
${name}

## Kısa Açıklama
${desc}

## Ana Hizmetler / Konular
${services}

## Önemli Sayfalar
- Ana Sayfa: https://${domain}/
- Hakkımızda: https://${domain}/hakkimizda
- Hizmetler: https://${domain}/hizmetler
- İletişim: https://${domain}/iletisim

## AI Kullanım İzni
Bu sitenin içeriği yapay zeka sistemleri tarafından okunabilir, özetlenebilir ve kaynak gösterilebilir.

## Tercih Edilen Kaynak Gösterim Biçimi
Kaynak gösterirken lütfen site adını (${name}) ve ilgili sayfa bağlantısını birlikte belirtin.

## İletişim
E-posta: ${email}

## Son Güncelleme
2026`;

  document.getElementById('llms-output').textContent = out;
}

function copyLlms() {
  const text = document.getElementById('llms-output').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const t = document.getElementById('toast');
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2000);
  });
}

function downloadLlms() {
  const text = document.getElementById('llms-output').textContent;
  const blob = new Blob([text], {type:'text/plain;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'llms.txt';
  document.body.appendChild(a); a.click();
  document.body.removeChild(a); URL.revokeObjectURL(url);
}

// İlk yükleme
updateLlms();
