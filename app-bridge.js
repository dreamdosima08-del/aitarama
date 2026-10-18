/* Scanliq Android uygulaması köprüsü.
   Site, Scanliq uygulamasının içinde açıldığında (WebView) tarayıcıda çalışmayan
   işleri (indirme, panoya kopyalama, Google ile giriş) uygulamaya devreder.
   Normal tarayıcıda hiçbir şey yapmaz. */
(function () {
  var ch = window.ScanliqApp;
  var inApp = !!(ch && typeof ch.postMessage === 'function') || /ScanliqApp\//.test(navigator.userAgent);
  window.SCANLIQ_IN_APP = inApp;
  if (!inApp) { window.scanliqAppEvent = function () {}; return; }

  document.documentElement.classList.add('in-app');

  function post(msg) {
    try { window.ScanliqApp.postMessage(JSON.stringify(msg)); return true; }
    catch (e) { return false; }
  }

  window.scanliqAppEvent = function (type) { post({ type: type }); };

  // Dosyayı uygulamaya gönder (uygulama paylaş/kaydet menüsünü açar)
  window.scanliqAppSaveFile = function (name, mime, base64) {
    return post({ type: 'file', name: name, mime: mime, data: base64 });
  };

  function blobToBase64(blob) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () { resolve(String(r.result).split(',')[1] || ''); };
      r.onerror = reject;
      r.readAsDataURL(blob);
    });
  }

  // Panoya kopyalama: uygulamanın kendi panosunu kullan
  var copyImpl = function (text) { post({ type: 'copy', text: String(text) }); return Promise.resolve(); };
  try {
    if (navigator.clipboard) {
      Object.defineProperty(navigator.clipboard, 'writeText', { value: copyImpl, configurable: true });
    } else {
      Object.defineProperty(navigator, 'clipboard', { value: { writeText: copyImpl }, configurable: true });
    }
  } catch (e) {}

  // blob: bağlantısıyla yapılan indirmeleri yakala (llms.txt, robots.txt vb.)
  var blobs = {};
  var origCreate = URL.createObjectURL;
  URL.createObjectURL = function (obj) {
    var u = origCreate.call(URL, obj);
    if (obj instanceof Blob) blobs[u] = obj;
    return u;
  };
  var origClick = HTMLAnchorElement.prototype.click;
  HTMLAnchorElement.prototype.click = function () {
    var href = this.getAttribute('href') || '';
    if (this.hasAttribute('download') && (href.indexOf('blob:') === 0 || href.indexOf('data:') === 0)) {
      var name = this.getAttribute('download') || 'scanliq.txt';
      if (href.indexOf('data:') === 0) {
        var m = href.match(/^data:([^;,]+)?(;base64)?,(.*)$/);
        if (m) {
          var data = m[2] ? m[3] : btoa(unescape(encodeURIComponent(decodeURIComponent(m[3]))));
          post({ type: 'file', name: name, mime: m[1] || 'application/octet-stream', data: data });
        }
        return;
      }
      var blob = blobs[href];
      if (blob) {
        blobToBase64(blob).then(function (b64) {
          post({ type: 'file', name: name, mime: blob.type || 'application/octet-stream', data: b64 });
        });
        return;
      }
    }
    return origClick.apply(this, arguments);
  };
})();
