/* ============================================================
   REVEAL — scroll reveal animation
   Bisa dipanggil ulang lewat window.initReveal() setelah
   konten baru di-render oleh main.js
   ============================================================ */

let revealObserver = null;

function initReveal() {
  // Hapus observer lama kalau ada
  if (revealObserver) revealObserver.disconnect();

  const revealEls = document.querySelectorAll('.reveal');

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  revealEls.forEach(el => revealObserver.observe(el));
}

// Expose ke global supaya main.js bisa panggil ulang
window.initReveal = initReveal;

// Fallback: kalau main.js tidak dipakai, tetap jalan otomatis
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initReveal);
} else {
  initReveal();
}