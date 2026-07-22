/* ==========================================================
   LÓGICA PRINCIPAL — conecta CONFIG con el HTML.
   No edites este archivo salvo que quieras cambiar comportamiento;
   para personalizar datos usa js/config.js
   ========================================================== */

document.addEventListener("DOMContentLoaded", () => {

  // ---------- WHATSAPP ----------
  const rsvpBtn = document.getElementById("rsvpBtn");
  const { number, message } = CONFIG.whatsapp;
  rsvpBtn.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;

  // ---------- DETALLES ----------
  document.getElementById("detail-date").textContent = CONFIG.displayDate;
  document.getElementById("detail-time").textContent = CONFIG.displayTime;
  document.getElementById("detail-address").textContent = CONFIG.address;
  document.getElementById("footer-rsvp-info").textContent =
    `${CONFIG.rsvpDeadline} · WhatsApp: ${CONFIG.whatsapp.number}`;

  // ---------- CONTADOR (usa la función de countdown.js) ----------
  const cd = {
    d: document.getElementById("cd-days"),
    h: document.getElementById("cd-hours"),
    m: document.getElementById("cd-min"),
    s: document.getElementById("cd-sec")
  };
  startCountdown(CONFIG.eventDate, (t) => {
    cd.d.textContent = String(t.days).padStart(2, "0");
    cd.h.textContent = String(t.hours).padStart(2, "0");
    cd.m.textContent = String(t.minutes).padStart(2, "0");
    cd.s.textContent = String(t.seconds).padStart(2, "0");
  });

  // ---------- MAPA ----------
  const { lat, lng } = CONFIG.map;
  document.getElementById("mapFrame").src =
    `https://www.google.com/maps?q=${lat},${lng}&output=embed`;
  document.getElementById("mapLink").href =
    `https://www.google.com/maps?q=${lat},${lng}`;

  // ---------- MESA DE REGALOS ----------
  const giftsList = document.getElementById("giftsList");
  CONFIG.gifts.forEach(gift => {
    const a = document.createElement("a");
    a.className = "gift-card";
    a.href = gift.url;
    a.target = "_blank";
    a.rel = "noopener";
    a.innerHTML = `${gift.name} <span class="arrow">→</span>`;
    giftsList.appendChild(a);
  });

  // ---------- MÚSICA ----------
  const musicBtn = document.getElementById("musicBtn");
  const bgMusic = document.getElementById("bgMusic");
  const iconPlay = document.getElementById("iconPlay");
  const iconPause = document.getElementById("iconPause");
  bgMusic.src = CONFIG.musicSrc;
  let playing = false;

  musicBtn.addEventListener("click", () => {
    if (!playing) {
      bgMusic.play().catch(() => {});
      iconPlay.style.display = "none";
      iconPause.style.display = "block";
      musicBtn.classList.add("playing");
    } else {
      bgMusic.pause();
      iconPlay.style.display = "block";
      iconPause.style.display = "none";
      musicBtn.classList.remove("playing");
    }
    playing = !playing;
  });

  // ---------- PARTÍCULAS DE FONDO ----------
  const bokeh = document.getElementById("bokeh");
  const colors = ["rgba(0,196,216,.5)", "rgba(0,150,200,.4)", "rgba(125,232,245,.45)"];
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span");
    const size = 20 + Math.random() * 50;
    s.style.width = s.style.height = size + "px";
    s.style.left = Math.random() * 100 + "%";
    s.style.top = Math.random() * 100 + "%";
    s.style.background = `radial-gradient(circle, ${colors[i % colors.length]}, transparent 70%)`;
    s.style.animationDuration = (8 + Math.random() * 8) + "s";
    s.style.animationDelay = (Math.random() * 5) + "s";
    bokeh.appendChild(s);
  }

});
