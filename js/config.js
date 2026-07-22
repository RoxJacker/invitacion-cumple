/* ==========================================================
   CONFIGURACIÓN DE LA INVITACIÓN
   Este es el único archivo que necesitas editar.
   ========================================================== */
const CONFIG = {

  // Fecha y hora del evento (formato ISO: "YYYY-MM-DDTHH:MM:SS")
  eventDate: "2026-07-25T15:00:00",

  // Se muestran en la sección "Detalles" (formato libre, solo texto)
  displayDate: "Sábado 25 de julio",
  displayTime: "3:00 PM",
  address: "La Terraza",

  // WhatsApp: solo pon el número con código de país, sin +, espacios ni guiones
  whatsapp: {
    number: "523322328995",
    message: "¡Hola! Confirmo mi asistencia al cumpleaños de Claus 🎉"
  },

  // RSVP límite (se muestra en el footer)
  rsvpDeadline: "RSVP antes del 20 de julio",

  // Música de fondo: ruta o URL a un archivo mp3
  musicSrc: "assets/music.mp3",

  // Mapa: coordenadas del lugar (lat, lng) — sácalas de Google Maps
  // (clic derecho sobre el punto exacto en Google Maps > primeras dos cifras)
  map: {
    lat: 20.419754944952956,
    lng: -103.39494197418917
  },

  // Mesa de regalos: agrega o quita objetos de esta lista libremente
  gifts: [
    { name: "Amazon", url: "#" },
    { name: "Liverpool", url: "#" },
    { name: "Sears", url: "#" }
  ]
};
