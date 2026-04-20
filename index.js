// ═══════════════════════════════════════
//   Errand Logix — Main Script
// ═══════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {

  // ── Nav scroll effect ──
  const nav = document.querySelector('.nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });
  }

  // ── Active nav link ──
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // ── Mobile menu ──
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      mobileNav.classList.toggle('open');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.remove('open'));
    });
  }

  // ── Scroll animations ──
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // ── Track order ──
  window.trackOrder = function () {
    const input = document.getElementById('trackInput');
    if (!input) return;
    const id = input.value.trim();
    if (!id) {
      input.style.borderColor = '#e74c3c';
      input.placeholder = 'Please enter an Errand ID';
      setTimeout(() => {
        input.style.borderColor = '';
        input.placeholder = 'Enter Errand ID e.g. EL-20001';
      }, 2500);
      return;
    }
    const msg = encodeURIComponent(
      `Hello Errand Logix! I'd like to track my order.\n\n*Errand ID:* ${id}\n\nCould you please give me an update?`
    );
    window.open('https://wa.me/2349050412857?text=' + msg, '_blank');
  };

});