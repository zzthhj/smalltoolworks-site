/* SmallToolWorks — minimal vanilla JS.
   Mobile navigation only. No dependencies, no tracking, no cookies. */

(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------------------ */
  var toggle = document.querySelector('[data-nav-toggle]');
  var nav = document.querySelector('[data-nav]');

  if (toggle && nav) {
    var setOpen = function (open) {
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      nav.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      setOpen(!open);
    });

    // Close after tapping a link (same-page anchors included).
    nav.addEventListener('click', function (event) {
      if (event.target.closest('a')) {
        setOpen(false);
      }
    });

    // Close on Escape.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        setOpen(false);
        toggle.focus();
      }
    });

    // Close when leaving mobile breakpoint.
    var desktop = window.matchMedia('(min-width: 821px)');
    var onChange = function (event) {
      if (event.matches) {
        setOpen(false);
      }
    };

    if (desktop.addEventListener) {
      desktop.addEventListener('change', onChange);
    } else if (desktop.addListener) {
      desktop.addListener(onChange);
    }
  }

  /* ------------------------------------------------------------------
     Current-year in footer
     ------------------------------------------------------------------ */
  var yearNodes = document.querySelectorAll('[data-year]');
  var year = String(new Date().getFullYear());

  Array.prototype.forEach.call(yearNodes, function (node) {
    node.textContent = year;
  });
})();