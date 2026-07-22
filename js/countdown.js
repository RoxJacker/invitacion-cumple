/* ==========================================================
   CONTADOR REGRESIVO
   Función pura: recibe una fecha destino y una función callback
   que se ejecuta cada segundo con los valores calculados.
   No conoce el HTML — solo hace el cálculo. Así se puede
   reutilizar en cualquier parte del proyecto.
   ========================================================== */

/**
 * Calcula días, horas, minutos y segundos restantes hasta targetDate.
 * @param {string|Date} targetDate - fecha destino (ISO string o Date)
 * @returns {{days:number, hours:number, minutes:number, seconds:number, ended:boolean}}
 */
function getTimeRemaining(targetDate) {
  const target = new Date(targetDate).getTime();
  const diff = target - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, ended: true };
  }

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
    ended: false
  };
}

/**
 * Arranca un contador regresivo en vivo.
 * @param {string|Date} targetDate - fecha destino
 * @param {function} onTick - callback(remaining) llamado cada segundo
 * @returns {number} el intervalId, por si se quiere detener con clearInterval
 */
function startCountdown(targetDate, onTick) {
  const tick = () => onTick(getTimeRemaining(targetDate));
  tick(); // primer render inmediato, sin esperar 1s
  return setInterval(tick, 1000);
}
