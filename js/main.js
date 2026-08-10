/* Jolly Nail Printing — small progressive enhancements only.
   Everything on the site is readable and navigable without this file. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* --- Header: switch to the solid state once the hero starts scrolling --- */
  var header = document.querySelector('.site-header');
  if (header) {
    var stick = function () {
      header.classList.toggle('is-stuck', window.scrollY > 24);
    };
    stick();
    window.addEventListener('scroll', stick, { passive: true });
  }

  /* --- Mobile menu --- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    // Stagger the links as the panel opens.
    Array.prototype.forEach.call(nav.children, function (link, i) {
      link.style.setProperty('--d', 120 + i * 55 + 'ms');
    });

    var setMenu = function (open) {
      document.body.classList.toggle('nav-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    };

    toggle.addEventListener('click', function () {
      setMenu(!document.body.classList.contains('nav-open'));
    });

    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) setMenu(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
        setMenu(false);
        toggle.focus();
      }
    });

    // Reset if the viewport grows past the mobile breakpoint while open.
    window.matchMedia('(min-width: 901px)').addEventListener('change', function (m) {
      if (m.matches) setMenu(false);
    });
  }

  /* --- Reveal on scroll --- */
  var targets = document.querySelectorAll('[data-reveal]');

  if (!targets.length) return;

  if (reduced || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(targets, function (el) {
      el.classList.add('is-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  Array.prototype.forEach.call(targets, function (el) {
    // Children of a group stagger in sequence.
    var group = el.parentElement;
    if (group && group.hasAttribute('data-reveal-group')) {
      var index = Array.prototype.indexOf.call(group.children, el);
      el.style.setProperty('--reveal-delay', Math.min(index, 6) * 90 + 'ms');
    }
    observer.observe(el);
  });
})();
