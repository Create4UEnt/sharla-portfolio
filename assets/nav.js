/* Create4Me — mobile navigation + contact form behaviour */
(function () {
  'use strict';

  /* ---- mobile nav ---------- */
  var toggle = document.querySelector('.nav-toggle');
  var panel = document.getElementById('nav-panel');

  if (toggle && panel) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      panel.classList.toggle('is-open', open);
      document.body.style.overflow = open ? 'hidden' : '';
    };

    toggle.addEventListener('click', function () {
      toggle.setAttribute('aria-expanded') === 'true'
        ? toggle.setAttribute('aria-expanded', 'false')
        : null;
      setOpen(!panel.classList.contains('is-open'));
    });

    panel.addEventListener('click', function (e) {
      if (e.target.closest('a')) setOpen(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && panel.classList.contains('is-open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    var mq = window.matchMedia('(min-width: 1024px)');
    (mq.addEventListener ? mq.addEventListener.bind(mq, 'change') : mq.addListener.bind(mq))(function (ev) {
      if (ev.matches) setOpen(false);
    });
  }

  /* ---- preselect project type from ?type= ---- */
  var select = document.getElementById('f-type');
  if (select) {
    var type = new URLSearchParams(window.location.search).get('type');
    var map = {
      venue: 'Event backdrop',
      celebration: 'Celebration',
      storefront: 'Storefront / seasonal',
      set: 'Podcast or studio set',
      video: 'Video / film'
    };
    if (type && map[type]) {
      Array.prototype.forEach.call(select.options, function (opt) {
        if (opt.text === map[type]) select.value = opt.value || opt.text;
      });
      var msg = document.getElementById('f-msg');
      if (msg && !msg.value) msg.focus({ preventScroll: true });
    }
  }

  /* ---- static-host form: hand the brief to the mail client ---- */
  var form = document.getElementById('brief-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;

      var data = new FormData(form);
      var lines = [];
      lines.push('Project type: ' + (data.get('project_type') || '—'));
      if (data.get('target_date')) lines.push('Target date: ' + data.get('target_date'));
      if (data.get('business')) lines.push('Business: ' + data.get('business'));
      if (data.get('location')) lines.push('Location: ' + data.get('location'));
      lines.push('');
      lines.push(data.get('message') || '');
      lines.push('');
      lines.push('— ' + (data.get('name') || '') + ' · ' + (data.get('email') || ''));

      var subject = 'Project brief — ' + (data.get('project_type') || 'new project');
      window.location.href =
        'mailto:sharla@create4me.co?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));

      var note = document.getElementById('form-sent');
      if (note) note.hidden = false;
    });
  }
})();
