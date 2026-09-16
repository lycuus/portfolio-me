/* ============ TYPING EFFECT ============ */
const typedEl = document.getElementById('typedText');
const roles = (window.CONFIG && CONFIG.roles) || ['Developer'];
let roleIdx = 0, charIdx = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIdx];
  typedEl.textContent = current.slice(0, charIdx);

  if (!deleting && charIdx < current.length) {
    charIdx++;
    setTimeout(typeLoop, 55);
  } else if (deleting && charIdx > 0) {
    charIdx--;
    setTimeout(typeLoop, 25);
  } else if (!deleting) {
    setTimeout(() => { deleting = true; typeLoop(); }, 1800);
  } else {
    deleting = false;
    roleIdx = (roleIdx + 1) % roles.length;
    setTimeout(typeLoop, 350);
  }
}

if (typedEl) typeLoop();