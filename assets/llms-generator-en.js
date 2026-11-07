function esc(s){ return (s||'').trim(); }

function updateLlms() {
  const name = esc(document.getElementById('f-name').value) || '[Site Name]';
  const domain = esc(document.getElementById('f-domain').value).replace(/^https?:\/\//,'').replace(/\/$/,'') || 'siteniz.com';
  const desc = esc(document.getElementById('f-desc').value) || '[Describe your site in 1-2 sentences: what it does, who it serves]';
  const email = esc(document.getElementById('f-email').value) || 'info@' + domain;
  const servicesRaw = esc(document.getElementById('f-services').value);
  let services = '- [Ana hizmet veya konu 1]\n- [Ana hizmet veya konu 2]\n- [Ana hizmet veya konu 3]';
  if (servicesRaw) {
    services = servicesRaw.split('\n').map(s => s.trim()).filter(s => s).map(s => '- ' + s).join('\n');
  }

  const out = `# llms.txt
# ${domain}

## Site Name
${name}

## Short Description
${desc}

## Main Services / Topics
${services}

## Important Pages
- Home: https://${domain}/
- About: https://${domain}/about
- Services: https://${domain}/services
- Contact: https://${domain}/contact

## AI Usage Permission
The content of this site may be read, summarized and cited by artificial intelligence systems.

## Preferred Citation Format
When citing, please include the site name (${name}) and the relevant page link together.

## Contact
Email: ${email}

## Last Updated
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
