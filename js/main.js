/* ============================================================
   MAIN.JS — Kemas Irfan Portfolio
   ============================================================ */

/* ============ ICONS ============ */
const ICONS = {
  send:     '<path d="m3 11 19-9-9 19-2-8-8-2z"/>',
  mail:     '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>',
  github:   '<path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.37-3.87-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.04 1.78 2.72 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.26 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>',
  linkedin: '<path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45Z"/>',
  whatsapp: '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>',
  image:    '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
  award:    '<circle cx="12" cy="8" r="6"/><path d="m8.21 13.89-1.42 7.11 5.21-3 5.21 3-1.42-7.12"/>',
  globe:    '<path d="M2 12h20M12 2v20"/><circle cx="12" cy="12" r="10"/>',
  book:     '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  star:     '<path d="M12 2 15 9l7 .5-5.5 4.5L18 21l-6-3.5L6 21l1.5-7L2 9.5 9 9z"/>',
};

function icon(name, size, filled) {
  const path = ICONS[name] || '';
  const fill = filled ? 'currentColor' : 'none';
  const stroke = filled ? 'none' : 'currentColor';
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="' + fill + '" stroke="' + stroke + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + path + '</svg>';
}

/* ============ RENDER: TECH STACK ============ */
function renderTechStack() {
  const el = document.getElementById('techStack');
  if (!el) return;
  el.innerHTML = CONFIG.techStack.map(function(t) {
    const url = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/' + t.icon + '/' + t.icon + '-original.svg';
    return '<div class="tech-item">' +
      '<img src="' + url + '" alt="' + t.name + '" onerror="this.style.display=\'none\';" />' +
      '<span>' + t.name + '</span>' +
      '</div>';
  }).join('');
}

/* ============ RENDER: JOURNEY ============ */
function renderJourney() {
  const el = document.getElementById('journeyList');
  if (!el) return;
  el.innerHTML = CONFIG.journey.map(function(item) {
    return '<div class="timeline-item reveal ' + (item.active ? 'active' : '') + '">' +
      '<div class="timeline-dot"><span></span></div>' +
      '<div class="timeline-year">' + item.year + '</div>' +
      '<h3 class="timeline-title">' + item.title + '</h3>' +
      '<div class="timeline-org">' + item.org + '</div>' +
      '<p class="timeline-desc">' + item.desc + '</p>' +
      '</div>';
  }).join('');
}

/* ============================================================
   RENDER: WORK GALLERY — Carousel 3D
   ============================================================ */
let galleryIndex = 0;
let galleryItems = [];

function renderProjects() {
  const stage = document.getElementById('galleryStage');
  const dotsEl = document.getElementById('galleryDots');
  if (!stage || !dotsEl) return;

  galleryItems = CONFIG.projects;

  // Buat kartu
  stage.innerHTML = galleryItems.map(function(p, i) {
    return '<div class="gallery-card" data-index="' + i + '">' +
      '<img src="' + p.image + '" alt="' + p.title + '" ' +
      'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'grid\';" />' +
      '<div class="gallery-card-placeholder" style="display:none;">' + icon('image', 56) + '</div>' +
      '</div>';
  }).join('');

  // Buat dots
  dotsEl.innerHTML = galleryItems.map(function(_, i) {
    return '<button class="gallery-dot" data-index="' + i + '" aria-label="Go to project ' + (i + 1) + '"></button>';
  }).join('');

  // Event klik kartu
  stage.querySelectorAll('.gallery-card').forEach(function(card) {
    card.addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-index'), 10);
      if (idx !== galleryIndex) {
        galleryIndex = idx;
        updateGallery();
      } else {
        const link = galleryItems[idx].link;
        if (link && link !== '#') window.open(link, '_blank');
      }
    });
  });

  // Event klik dots
  dotsEl.querySelectorAll('.gallery-dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      galleryIndex = parseInt(this.getAttribute('data-index'), 10);
      updateGallery();
    });
  });

  updateGallery();
}

function updateGallery() {
  const stage = document.getElementById('galleryStage');
  const dotsEl = document.getElementById('galleryDots');
  const titleEl = document.getElementById('galleryTitle');
  const descEl = document.getElementById('galleryDesc');
  const linkEl = document.getElementById('galleryLink');
  if (!stage) return;

  const total = galleryItems.length;
  const cards = stage.querySelectorAll('.gallery-card');

  cards.forEach(function(card) {
    const i = parseInt(card.getAttribute('data-index'), 10);
    let diff = i - galleryIndex;

    // Normalisasi diff ke range [-total/2, total/2]
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    // Reset semua class posisi
    card.classList.remove('is-active','is-prev','is-next','is-prev2','is-next2','is-hidden');

    // Terapkan class sesuai posisi
    if (diff === 0)       card.classList.add('is-active');
    else if (diff === -1) card.classList.add('is-prev');
    else if (diff === 1)  card.classList.add('is-next');
    else if (diff === -2) card.classList.add('is-prev2');
    else if (diff === 2)  card.classList.add('is-next2');
    else                  card.classList.add('is-hidden');
  });

  // Update dots
  if (dotsEl) {
    dotsEl.querySelectorAll('.gallery-dot').forEach(function(dot) {
      const i = parseInt(dot.getAttribute('data-index'), 10);
      dot.classList.toggle('is-active', i === galleryIndex);
    });
  }

  // Update info teks dengan fade transition
  const current = galleryItems[galleryIndex];
  if (titleEl && current) {
    titleEl.style.opacity = '0';
    descEl.style.opacity = '0';
    setTimeout(function() {
      titleEl.textContent = current.title;
      descEl.textContent = current.desc;
      titleEl.style.opacity = '1';
      descEl.style.opacity = '1';
    }, 150);
  }
  if (linkEl && current) linkEl.href = current.link || '#';
}

/* ============================================================
   GALLERY NAVIGATION — panah, keyboard
   ============================================================ */
document.addEventListener('DOMContentLoaded', function() {
  const prev = document.getElementById('galleryPrev');
  const next = document.getElementById('galleryNext');
  const stage = document.getElementById('galleryStage');

  if (prev) prev.addEventListener('click', function() {
    galleryIndex = (galleryIndex - 1 + galleryItems.length) % galleryItems.length;
    updateGallery();
  });
  if (next) next.addEventListener('click', function() {
    galleryIndex = (galleryIndex + 1) % galleryItems.length;
    updateGallery();
  });

  // Keyboard navigation
  document.addEventListener('keydown', function(e) {
    if (!stage) return;
    if (e.key === 'ArrowLeft' && prev) prev.click();
    if (e.key === 'ArrowRight' && next) next.click();
  });
});

/* ============================================================
   RENDER: AWARDS — Foto grid masonry + List
   ============================================================ */
function renderAwards() {
  const gallery = document.getElementById('awardsGallery');
  const list = document.getElementById('awardsList');
  if (!gallery || !list) return;

  // Foto grid kiri (masonry)
  gallery.innerHTML = CONFIG.awards.map(function(a, i) {
    return '<div class="award-photo" data-index="' + i + '" title="' + a.title + '">' +
      '<img src="' + a.image + '" alt="' + a.title + '" ' +
      'onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'grid\';" />' +
      '<div class="award-photo-placeholder" style="display:none;">' + icon('image', 32) + '</div>' +
      '</div>';
  }).join('');

  // List kanan
  list.innerHTML = CONFIG.awards.map(function(a, i) {
    return '<a href="' + (a.link || '#') + '" class="award-row" data-index="' + i + '">' +
      '<div class="award-row-icon">' + icon('award', 20) + '</div>' +
      '<div class="award-row-info">' +
        '<div class="award-row-title">' + a.title + '</div>' +
        '<div class="award-row-meta">' + (a.meta || '') + '</div>' +
      '</div>' +
      '<div class="award-row-arrow">' + icon('send', 14) + '</div>' +
      '</a>';
  }).join('');

  // Interaksi: klik foto/list → highlight & scroll
  const photos = gallery.querySelectorAll('.award-photo');
  const rows = list.querySelectorAll('.award-row');

  function setActive(idx) {
    photos.forEach(function(p) { p.classList.remove('is-active'); });
    rows.forEach(function(r) { r.classList.remove('is-active'); });
    if (photos[idx]) photos[idx].classList.add('is-active');
    if (rows[idx]) rows[idx].classList.add('is-active');
  }

  photos.forEach(function(p) {
    p.addEventListener('click', function() {
      const idx = parseInt(this.getAttribute('data-index'), 10);
      setActive(idx);
      if (rows[idx]) rows[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  rows.forEach(function(r) {
    r.addEventListener('click', function(e) {
      e.preventDefault();
      const idx = parseInt(this.getAttribute('data-index'), 10);
      setActive(idx);
      if (photos[idx]) photos[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

/* ============ RENDER: CONTACTS ============ */
function renderContacts() {
  const el = document.getElementById('contactGrid');
  if (!el) return;
  const filled = { github: true, linkedin: true };
  el.innerHTML = CONFIG.contacts.map(function(c) {
    const target = c.link.indexOf('http') === 0 ? 'target="_blank" rel="noopener"' : '';
    return '<a href="' + c.link + '" ' + target + ' class="contact-card">' +
      '<div class="contact-card-icon">' + icon(c.icon, 18, filled[c.icon] || false) + '</div>' +
      '<div class="contact-card-label">' + c.label + '</div>' +
      '<div class="contact-card-value">' + c.value + '</div>' +
      '</a>';
  }).join('');
}

/* ============ RENDER: MISC ============ */
function renderMisc() {
  const copy = document.getElementById('footerCopy');
  if (copy) copy.textContent = '© ' + CONFIG.year + ' ' + CONFIG.name;
  const loc = document.getElementById('heroLocation');
  if (loc) loc.textContent = CONFIG.location;
}

/* ============ NAVBAR SCROLL ============ */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 20) navbar.classList.add('scrolled');
    else navbar.classList.remove('scrolled');
  }, { passive: true });
}

/* ============ MOBILE MENU ============ */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');
if (burger && mobileMenu) {
  const lines = burger.querySelectorAll('span');
  let menuOpen = false;

  burger.addEventListener('click', function() {
    menuOpen = !menuOpen;
    burger.setAttribute('aria-expanded', menuOpen);

    if (menuOpen) {
      mobileMenu.classList.add('open');
      mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
      lines[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      lines[1].style.opacity = '0';
      lines[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      mobileMenu.classList.remove('open');
      mobileMenu.style.maxHeight = '0';
      lines[0].style.transform = '';
      lines[1].style.opacity = '';
      lines[2].style.transform = '';
    }
  });

  document.querySelectorAll('.mobile-link').forEach(function(l) {
    l.addEventListener('click', function() { if (menuOpen) burger.click(); });
  });
}

/* ============ TYPING EFFECT (Hero) ============ */
const typedEl = document.getElementById('typedText');
let roleIdx = 0, charIdx = 0, deleting = false;
function typeLoop() {
  if (!typedEl) return;
  const current = CONFIG.roles[roleIdx];
  typedEl.textContent = current.slice(0, charIdx);
  if (!deleting && charIdx < current.length) { charIdx++; setTimeout(typeLoop, 55); }
  else if (deleting && charIdx > 0) { charIdx--; setTimeout(typeLoop, 25); }
  else if (!deleting) { setTimeout(function() { deleting = true; typeLoop(); }, 1800); }
  else { deleting = false; roleIdx = (roleIdx + 1) % CONFIG.roles.length; setTimeout(typeLoop, 350); }
}

/* ============ SCROLL REVEAL ============ */
function initReveal() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function(el) { el.classList.add('visible'); });
    return;
  }
  const io = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  els.forEach(function(el) { io.observe(el); });
}

/* ============ BACK TO TOP ============ */
const backTop = document.getElementById('backToTop');
if (backTop) {
  backTop.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   SCROLL-TRIGGERED TYPING (Heading)
   ============================================================ */
function initScrollTyping() {
  const els = document.querySelectorAll('.scroll-type');
  if (!els.length) return;

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        const el = entry.target;
        if (el.dataset.typed === 'true') return;
        el.dataset.typed = 'true';

        const text = el.getAttribute('data-type') || '';
        const textEl = el.querySelector('.scroll-type-text');
        if (!textEl) return;

        let i = 0;
        const speed = 45;

        function typeChar() {
          if (i <= text.length) {
            textEl.textContent = text.slice(0, i);
            i++;
            setTimeout(typeChar, speed);
          }
        }

        setTimeout(typeChar, 200);
        observer.unobserve(el);
      }
    });
  }, {
    threshold: 0.3,
    rootMargin: '0px 0px -80px 0px'
  });

  els.forEach(function(el) { observer.observe(el); });
}

/* ============================================================
   MESSAGE MODAL — Muncul dari kanan bawah + FAB toggle
   ============================================================ */
function initMessageModal() {
  const modal = document.getElementById('messageModal');
  const openBtns = document.querySelectorAll('[data-open-modal]');
  const form = document.getElementById('messageForm');
  const status = document.getElementById('formStatus');

  if (!modal || !openBtns.length) return;

  // ===== OPEN MODAL =====
  function openModal() {
    modal.classList.remove('is-closing');
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Aktifkan FAB (icon berubah jadi X)
    const fab = document.getElementById('fabMessage');
    if (fab) fab.classList.add('is-active');

    setTimeout(function() {
      const firstInput = modal.querySelector('input, textarea');
      if (firstInput) firstInput.focus();
    }, 400);
  }

  // ===== CLOSE MODAL =====
  function closeModal() {
    modal.classList.add('is-closing');
    setTimeout(function() {
      modal.classList.remove('is-open', 'is-closing');
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      if (status) {
        status.textContent = '';
        status.className = 'form-status';
      }

      // Matikan FAB (icon kembali jadi chat)
      const fab = document.getElementById('fabMessage');
      if (fab) fab.classList.remove('is-active');
    }, 300);
  }

  // Semua tombol dengan [data-open-modal] bisa buka modal
  openBtns.forEach(function(btn) {
    btn.addEventListener('click', openModal);
  });

  // Klik backdrop atau tombol close
  modal.querySelectorAll('[data-close-modal]').forEach(function(el) {
    el.addEventListener('click', closeModal);
  });

  // Tekan ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // ===== SUBMIT FORM =====
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('msgName').value.trim();
      const email = document.getElementById('msgEmail').value.trim();
      const message = document.getElementById('msgBody').value.trim();

      if (!name || !email || !message) {
        status.textContent = '⚠ Please fill in all fields.';
        status.className = 'form-status is-error';
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        status.textContent = '⚠ Please enter a valid email.';
        status.className = 'form-status is-error';
        return;
      }

      const subject = encodeURIComponent('Message from ' + name);
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message
      );
      const mailto = 'mailto:hello@kemasirfan.com?subject=' + subject + '&body=' + body;

      status.textContent = '✓ Opening your email app...';
      status.className = 'form-status is-success';

      setTimeout(function() {
        window.location.href = mailto;
        setTimeout(function() {
          form.reset();
          closeModal();
        }, 1500);
      }, 500);
    });
  }
}

/* ============================================================
   ID CARD — Draggable + pause animasi saat drag
   ============================================================ */
function initDraggableCard() {
  const card = document.getElementById('idcard');
  const lanyard = document.querySelector('.idcard-lanyard');
  const strap = document.querySelector('.idcard-strap');
  if (!card) return;

  let isDragging = false;
  let startX = 0, startY = 0;
  let currentX = 0, currentY = 0;
  const MAX_DRAG = 140;

  function updateTransform(x, y, rotate) {
    // Pakai translate + rotate (animation-play-state sudah di-pause)
    card.style.transform =
      'translate(' + x + 'px, ' + y + 'px) rotate(' + rotate + 'deg)';
    if (lanyard) {
      lanyard.style.transform = 'rotate(' + (rotate * 0.6) + 'deg)';
    }
    if (strap) {
      const stretch = Math.max(0, y * 0.3);
      strap.style.height = (110 + stretch) + 'px';
    }
  }

  function getPos(e) {
    if (e.touches && e.touches.length) {
      return { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
    return { x: e.clientX, y: e.clientY };
  }

  function startDrag(e) {
    isDragging = true;
    const pos = getPos(e);
    startX = pos.x - currentX;
    startY = pos.y - currentY;

    // Pause animasi CSS biar tidak konflik dengan JS
    card.style.animationPlayState = 'paused';
    if (lanyard) lanyard.style.animationPlayState = 'paused';

    card.classList.add('dragging');
    card.style.transition = 'none';
    if (lanyard) lanyard.style.transition = 'none';
  }

  function moveDrag(e) {
    if (!isDragging) return;
    e.preventDefault();
    const pos = getPos(e);

    let dx = pos.x - startX;
    let dy = pos.y - startY;

    dx = Math.max(-MAX_DRAG, Math.min(MAX_DRAG, dx));
    dy = Math.max(-MAX_DRAG, Math.min(MAX_DRAG, dy));

    currentX = dx;
    currentY = dy;

    const rotate = dx * 0.05;
    updateTransform(currentX, currentY, rotate);
  }

  function endDrag() {
    if (!isDragging) return;
    isDragging = false;
    card.classList.remove('dragging');

    const spring = 'cubic-bezier(0.34, 1.56, 0.64, 1)';
    card.style.transition = 'transform 0.6s ' + spring;
    if (lanyard) lanyard.style.transition = 'transform 0.6s ' + spring;
    if (strap) {
      strap.style.transition = 'height 0.6s ' + spring;
      strap.style.height = '110px';
    }

    currentX = 0;
    currentY = 0;
    card.style.transform = 'translate(0, 0) rotate(0deg)';
    if (lanyard) lanyard.style.transform = 'rotate(0deg)';

    // Setelah spring selesai, aktifkan lagi animasi CSS
    setTimeout(function() {
      card.style.animationPlayState = '';
      if (lanyard) lanyard.style.animationPlayState = '';
      // Reset transition setelah selesai
      card.style.transition = '';
      if (lanyard) lanyard.style.transition = '';
      if (strap) strap.style.transition = '';
    }, 650);
  }

  // Mouse
  card.addEventListener('mousedown', startDrag);
  document.addEventListener('mousemove', moveDrag);
  document.addEventListener('mouseup', endDrag);

  // Touch
  card.addEventListener('touchstart', startDrag, { passive: true });
  document.addEventListener('touchmove', moveDrag, { passive: false });
  document.addEventListener('touchend', endDrag);
}

/* ============================================================
   INIT SEMUA
   ============================================================ */
renderTechStack();
renderJourney();
renderProjects();
renderAwards();
renderContacts();
renderMisc();
initReveal();
typeLoop();
initScrollTyping();
initMessageModal();
initDraggableCard();