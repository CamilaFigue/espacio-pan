// Acá están todos los textos del sitio.
// Para cambiar lo que se ve en la página, editá este archivo:
// no hace falta tocar el diseño.

export const departamento = {
  nombre: 'Espacio PAN',
  lema: 'Tu lugar para descansar en Villa Carlos Paz',
  ubicacion: 'Villa Carlos Paz, Córdoba, Argentina',

  descripcion:
    'Departamento cómodo y luminoso, ideal para escaparte unos días a las sierras. ' +
    '(Texto de ejemplo: reemplazalo por tu propia descripción.)',

  // Datos rápidos que se muestran como "tarjetas"
  datos: [
    { icono: '👥', texto: 'Hasta 4 huéspedes' },
    { icono: '🛏️', texto: '1 dormitorio' },
    { icono: '🛁', texto: '1 baño' },
    { icono: '📍', texto: 'A pasos del centro' },
  ],

  comodidades: [
    'Wi-Fi',
    'Aire acondicionado',
    'Cocina equipada',
    'Ropa de cama y toallas',
    'Estacionamiento',
    'Smart TV',
  ],

  // Fotos: guardalas en la carpeta public/fotos y agregá el nombre del archivo acá.
  // Ejemplo: { archivo: 'living.jpg', descripcion: 'Living comedor' }
  fotos: [],

  // Fechas ocupadas (formato AAAA-MM-DD). Más adelante esto se va a llenar
  // solo, leyendo los calendarios de Airbnb y Booking.
  ocupado: [
    { desde: '2026-10-10', hasta: '2026-10-13' },
    { desde: '2026-10-24', hasta: '2026-10-27' },
  ],

  contacto: {
    whatsapp: '5493510000000', // número con código de país, sin + ni espacios
    email: 'hola@ejemplo.com',
    instagram: '',
    airbnb: '',
    booking: '',
  },
};
