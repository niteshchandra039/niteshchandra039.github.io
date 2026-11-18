/* Dr. Nitesh Kumar — site behaviour. No dependencies; every feature degrades gracefully. */
(function () {
  'use strict';
  var root = document.documentElement;
  var reduceMotion = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  function $(s, c) { return (c || document).querySelector(s); }
  function $$(s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); }

  /* ---- Theme: light default, follows the system, manual choice remembered ---- */
  var themeBtn = $('.theme');
  function currentTheme() {
    return root.getAttribute('data-theme') || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  }
  function labelTheme() {
    if (themeBtn) themeBtn.setAttribute('aria-label', currentTheme() === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* storage unavailable */ }
      labelTheme();
    });
    labelTheme();
  }

  /* ---- Mobile menu ---- */
  var menuBtn = $('.menu-btn'), panel = $('#nav-panel');
  if (menuBtn && panel) {
    var lbl = $('.lbl', menuBtn);
    var setMenu = function (open, focusFirst) {
      menuBtn.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('open', open);
      panel.classList.toggle('glass', open);
      if (lbl) lbl.textContent = open ? 'Close' : 'Menu';
      if (open && focusFirst) { var a = $('a', panel); if (a) a.focus(); }
    };
    menuBtn.addEventListener('click', function () { setMenu(menuBtn.getAttribute('aria-expanded') !== 'true', true); });
    panel.addEventListener('click', function (e) { if (e.target.closest('a') && menuBtn.offsetParent !== null) setMenu(false); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menuBtn.getAttribute('aria-expanded') === 'true') { setMenu(false); menuBtn.focus(); }
    });
    document.addEventListener('click', function (e) {
      if (menuBtn.getAttribute('aria-expanded') === 'true' && !e.target.closest('.bar')) setMenu(false);
    });
  }

  /* ---- Publication filters (tabs + ?topic= from research cards) ---- */
  var tabs = $$('.tab[data-filter]'), pubs = $$('.pub[data-topics]'), pubStatus = $('#pub-status');
  if (tabs.length && pubs.length) {
    var names = { variables: 'RR Lyrae and variable stars', ml: 'machine learning', clusters: 'star clusters', surveys: 'observations and surveys' };
    var filterPubs = function (topic, updateUrl) {
      if (!names[topic]) topic = 'all';
      var n = 0;
      pubs.forEach(function (p) {
        var show = topic === 'all' || (' ' + p.getAttribute('data-topics') + ' ').indexOf(' ' + topic + ' ') > -1;
        p.hidden = !show; if (show) n++;
      });
      tabs.forEach(function (t) { t.setAttribute('aria-pressed', String(t.getAttribute('data-filter') === topic)); });
      if (pubStatus) pubStatus.textContent = topic === 'all' ? 'Showing all ' + n + ' papers.' : 'Showing ' + n + ' paper' + (n === 1 ? '' : 's') + ' on ' + names[topic] + '.';
      if (updateUrl && window.history && history.replaceState) {
        var u = new URL(location.href);
        if (topic === 'all') u.searchParams.delete('topic'); else u.searchParams.set('topic', topic);
        history.replaceState(null, '', u);
      }
    };
    tabs.forEach(function (t) { t.addEventListener('click', function () { filterPubs(t.getAttribute('data-filter'), true); }); });
    var initial = 'all';
    try { initial = new URLSearchParams(location.search).get('topic') || 'all'; } catch (e) { /* old browser */ }
    filterPubs(initial, false);
  }

  /* ---- Teaching resource library: search + type filter ---- */
  var search = $('#resource-search'), chips = $$('.chip[data-type]'), resources = $$('.res[data-type]'), resCount = $('#resource-count'), empty = $('#resource-empty');
  if (resources.length) {
    var activeType = 'all';
    var applyRes = function () {
      var q = (search && search.value || '').toLowerCase().trim(), n = 0;
      resources.forEach(function (r) {
        var typeOk = activeType === 'all' || r.getAttribute('data-type') === activeType;
        var text = (r.getAttribute('data-keywords') + ' ' + r.textContent).toLowerCase();
        var show = typeOk && (!q || text.indexOf(q) > -1);
        r.hidden = !show; if (show) n++;
      });
      $$('.course').forEach(function (c) { c.hidden = !$$('.res:not([hidden])', c).length; });
      if (resCount) resCount.textContent = n + ' resource' + (n === 1 ? '' : 's') + ' shown';
      if (empty) empty.hidden = n !== 0;
    };
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        activeType = c.getAttribute('data-type');
        chips.forEach(function (x) { x.setAttribute('aria-pressed', String(x === c)); });
        applyRes();
      });
    });
    if (search) search.addEventListener('input', applyRes);
    applyRes();
  }

  /* ---- Copy e-mail ---- */
  $$('.copy[data-copy], .copy[data-copy-from]').forEach(function (b) {
    b.addEventListener('click', function () {
      if (!navigator.clipboard) return;
      var src = b.getAttribute('data-copy-from');
      var text = src ? (document.getElementById(src) || {}).textContent : b.getAttribute('data-copy');
      if (!text) return;
      navigator.clipboard.writeText(text).then(function () {
        var old = b.textContent; b.textContent = 'Copied';
        setTimeout(function () { b.textContent = old; }, 1600);
      });
    });
  });

  /* ---- Lightbox for event photos (native <dialog>; links work without JS) ---- */
  var dlg = $('#lightbox');
  if (dlg && typeof dlg.showModal === 'function') {
    var img = $('img', dlg), cap = $('figcaption', dlg), group = [], idx = 0, opener = null;
    var show = function (i) {
      idx = (i + group.length) % group.length;
      var a = group[idx], thumb = $('img', a);
      img.src = a.getAttribute('href');
      img.alt = thumb ? thumb.alt : '';
      cap.textContent = (thumb ? thumb.alt : '') + (group.length > 1 ? '  ·  ' + (idx + 1) + ' / ' + group.length : '');
      $$('.lb-prev, .lb-next', dlg).forEach(function (b) { b.hidden = group.length < 2; });
    };
    $$('a[data-lightbox]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        opener = a;
        group = $$('a[data-lightbox="' + a.getAttribute('data-lightbox') + '"]');
        show(group.indexOf(a));
        dlg.showModal();
      });
    });
    $('.lb-close', dlg).addEventListener('click', function () { dlg.close(); });
    $('.lb-prev', dlg).addEventListener('click', function () { show(idx - 1); });
    $('.lb-next', dlg).addEventListener('click', function () { show(idx + 1); });
    dlg.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft') show(idx - 1);
      if (e.key === 'ArrowRight') show(idx + 1);
    });
    dlg.addEventListener('click', function (e) { if (e.target === dlg || e.target.tagName === 'FIGURE') dlg.close(); });
    dlg.addEventListener('close', function () { img.removeAttribute('src'); if (opener) opener.focus(); });
  }

  /* ---- Subtle reveal on scroll ---- */
  var els = $$('.reveal');
  if (!('IntersectionObserver' in window) || reduceMotion) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, { rootMargin: '0px 0px -6% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }
})();
