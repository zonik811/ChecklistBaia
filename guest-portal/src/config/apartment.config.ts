/**
 * CONFIGURACIÓN CENTRALIZADA DEL APARTAMENTO
 * 
 * Modifica estos valores cuando te entreguen las llaves y te instalen el internet.
 * Toda la web de huéspedes (en español, inglés y la tarjeta para imprimir) se actualizará automáticamente.
 */

export const apartmentConfig = {
  // Información de la propiedad
  complexName: "Conjunto Residencial Baia Kabo",
  propertyName: "Baia Kabo - Apartamento Turístico",
  tower: "Torre 1",
  apartmentNumber: "504",
  parkingSlot: "Sótano 1 - Espacio 42",

  // Conexión a Internet WiFi
  wifiNetwork: "BaiaKabo_Guest_5G",
  wifiPassword: "CaribeKristal2026",

  // Datos del Anfitrión para asistencia
  hostName: "Oscar",
  hostPhone: "+57 300 000 0000",
  // Número de WhatsApp en formato internacional sin signos ni espacios (ej: 573001234567)
  hostWhatsappClean: "573000000000",

  // Horarios oficiales de copropiedad
  checkinTime: "2:00 PM – 9:00 PM",
  checkoutTime: "8:00 AM – 12:00 M",

  // Enlace web público una vez desplegado (para generar el QR de la tarjeta impresa)
  publicWebUrl: "https://baia-kabo-guest.vercel.app",
};
