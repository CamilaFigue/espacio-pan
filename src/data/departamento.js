// Acá están todos los textos del sitio.
// Para cambiar lo que se ve en la página, editá este archivo:
// no hace falta tocar el diseño.

export const departamento = {
  nombre: 'Espacio PAN',
  lema: 'Tu lugar para descansar en Villa Carlos Paz',
  ubicacion: 'Villa Carlos Paz, Córdoba, Argentina',

  // Foto de fondo de la portada (tiene que estar en src/assets/fotos)
  fotoPortada: 'atardecer.jpg',

  // Cada elemento de la lista es un párrafo
  descripcion: [
    'Departamento en el Edificio Opera (Torre I), sobre calle Moreno esquina San Martín, ' +
      'a solo 3 cuadras de la peatonal de Villa Carlos Paz, con almacenes y zona comercial cerca.',
    'Está en el 2° piso y tiene living comedor con aire acondicionado frío/calor, Smart TV, ' +
      'cocina moderna totalmente equipada, dormitorio con cama matrimonial y placard, baño completo ' +
      'y balcón con asador propio.',
    'En el último piso del edificio están los amenities de uso compartido: una pileta con vista ' +
      'al lago y terrazas con vista a las sierras.',
  ],

  // Datos rápidos que se muestran como "tarjetas"
  datos: [
    { icono: '👥', texto: 'Hasta 4 huéspedes' },
    { icono: '🚪', texto: '2 ambientes' },
    { icono: '🛏️', texto: 'Cama matrimonial + sofá marinera' },
    { icono: '🛁', texto: '1 baño' },
    { icono: '📍', texto: 'A 300 m de la peatonal' },
    { icono: '🏊', texto: 'Pileta en la terraza' },
  ],

  comodidades: [
    {
      grupo: 'Departamento',
      items: ['Wi-Fi', 'Aire acondicionado frío/calor en el living', 'Ventilador de techo en el dormitorio',
        'Smart TV (sin cable)', 'Balcón con asador propio', 'Frazadas y almohadas', 'Tender'],
    },
    {
      grupo: 'Cocina',
      items: ['Heladera', 'Cocina con horno', 'Microondas', 'Pava eléctrica y tostadora',
        'Vajilla, cubiertos, asaderas y fuentes'],
    },
    {
      grupo: 'Baño',
      items: ['Bañera y ducha', 'Bidet', 'Secador de pelo'],
    },
    {
      grupo: 'Edificio',
      items: ['Ascensor', 'Pileta con vista al lago', 'Terraza con vista a las sierras',
        'Puerta de ingreso con llave magnética'],
    },
  ],

  aTenerEnCuenta: [
    'El departamento no tiene cochera.',
    'Ropa de cama (sábanas y toallas) opcional: consultanos al reservar.',
    'No se incluyen papel higiénico, servilletas, jabones ni artículos de limpieza.',
  ],

  // Fotos de la galería: guardalas en src/assets/fotos y agregalas a esta lista.
  // Astro las achica y optimiza solo al construir el sitio.
  fotos: [
    { archivo: 'living-comedor.jpg', descripcion: 'Living comedor con sofá marinera' },
    { archivo: 'dormitorio.jpg', descripcion: 'Dormitorio con cama matrimonial' },
    { archivo: 'cocina.jpg', descripcion: 'Cocina equipada' },
    { archivo: 'living.jpg', descripcion: 'Living con salida al balcón' },
    { archivo: 'balcon-asador.jpg', descripcion: 'Balcón con asador propio' },
    { archivo: 'pileta.jpg', descripcion: 'Pileta en la terraza del edificio' },
    { archivo: 'terraza-sierras.jpg', descripcion: 'Terraza con vista a las sierras' },
    { archivo: 'entrada-cocina.jpg', descripcion: 'Entrada, cocina y comedor' },
    { archivo: 'living-balcon.jpg', descripcion: 'Living y balcón' },
    { archivo: 'mesa.jpg', descripcion: 'Comedor' },
    { archivo: 'atardecer.jpg', descripcion: 'Atardecer sobre las sierras' },
  ],

  direccion: {
    calle: 'Moreno 40 (esquina San Martín)',
    edificio: 'Edificio Opera, Torre I',
    ciudad: 'Villa Carlos Paz, Córdoba (CP 5152)',
    referencia: 'A 3 cuadras (300 m) de la peatonal',
    // Lo que se busca en Google Maps para mostrar el mapa
    busquedaMapa: 'Moreno 40, Villa Carlos Paz, Córdoba, Argentina',
  },

  // Fechas ocupadas (formato AAAA-MM-DD). Más adelante esto se va a llenar
  // solo, leyendo los calendarios de Airbnb y Booking.
  ocupado: [],

  // Dejá vacío ('') lo que no quieras mostrar
  contacto: {
    whatsapp: '', // número con código de país, sin + ni espacios. Ej: 5493511234567
    email: '',
    instagram: '',
    airbnb: '',
    booking: '',
  },
};
