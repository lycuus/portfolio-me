// ============ NAVBAR SCROLL EFFECT ============
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ============ MOBILE MENU ============
const burger = document.getElementById('navBurger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// close on link click
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// ============ THEME TOGGLE ============
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Load preference
const saved = localStorage.getItem('theme');
if (saved) html.setAttribute('data-theme', saved);

themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  const next = isDark ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ============ TYPING EFFECT ============
const roles = [
  'Mahasiswa Syariah Al-Azhar 🕌',
  'Kajian Fiqih & Ushul Fiqh 📖',
  'Bahasa Arab & Kitab Turats 🗣️',
  'Based in Cairo, Egypt 🇪🇬'
];

const typedEl = document.getElementById('typedText');
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIdx];
  typedEl.textContent = current.slice(0, charIdx);

  if (!deleting && charIdx < current.length) {
    charIdx++;
    setTimeout(typeLoop, 70);
  } else if (deleting && charIdx > 0) {
    charIdx--;
    setTimeout(typeLoop, 35);
  } else {
    if (!deleting) {
      setTimeout(() => { deleting = true; typeLoop(); }, 1800);
    } else {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
      setTimeout(typeLoop, 350);
    }
  }
}
typeLoop();

// ============ SCROLL REVEAL ============
const revealEls = document.querySelectorAll('.section, .project-card, .skill-card, .stat');
revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
});

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// ============ ACTIVE NAV LINK ON SCROLL ============
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  const pos = window.scrollY + 120;
  sections.forEach(sec => {
    if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${sec.id}`);
      });
    }
  });
}, { passive: true });