/* ============================================================
   MARQUEE — duplikat teks supaya animasi tidak putus
   ============================================================ */
(function() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;
  const original = track.innerHTML;
  track.innerHTML = original + original;
})();