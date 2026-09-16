/* ============ NAVBAR SCROLL EFFECT ============ */
const navbar = document.getElementById('navbar');
const navInner = document.getElementById('navInner');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navInner.classList.add('shadow-2xl', 'shadow-black/40');
  } else {
    navInner.classList.remove('shadow-2xl', 'shadow-black/40');
  }
}, { passive: true });

/* ============ MOBILE MENU ============ */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
const lines = burger ? burger.querySelectorAll('.burger-line') : [];
let menuOpen = false;

function toggleMenu() {
  menuOpen = !menuOpen;
  burger.setAttribute('aria-expanded', menuOpen);

  if (menuOpen) {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    mobileMenu.style.opacity = '1';
    lines[0].style.transform = 'translateY(6.5px) rotate(45deg)';
    lines[1].style.opacity = '0';
    lines[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
  } else {
    mobileMenu.style.maxHeight = '0';
    mobileMenu.style.opacity = '0';
    lines[0].style.transform = '';
    lines[1].style.opacity = '';
    lines[2].style.transform = '';
  }
}

if (burger) burger.addEventListener('click', toggleMenu);
document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => { if (menuOpen) toggleMenu(); });
});