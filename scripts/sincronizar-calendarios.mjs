// Descarga los calendarios de Airbnb y Booking (formato iCal) y guarda
// las fechas ocupadas en src/data/ocupado.json, que usa el calendario del sitio.
//
// Los links de los calendarios son privados, por eso no están en el código:
// GitHub los pasa como "secretos" (AIRBNB_ICAL y BOOKING_ICAL).
// Se puede correr a mano con:  node scripts/sincronizar-calendarios.mjs
import { writeFileSync } from 'node:fs';

const calendarios = {
	airbnb: process.env.AIRBNB_ICAL,
	booking: process.env.BOOKING_ICAL,
};
const destino = new URL('../src/data/ocupado.json', import.meta.url);

// "20261010" o "20261010T140000Z" -> "2026-10-10"
const aTexto = (valor) => `${valor.slice(0, 4)}-${valor.slice(4, 6)}-${valor.slice(6, 8)}`;

function sumarUnDia(texto) {
	const [a, m, d] = texto.split('-').map(Number);
	const fecha = new Date(Date.UTC(a, m - 1, d + 1));
	return fecha.toISOString().slice(0, 10);
}

// Lee un archivo iCal y devuelve los rangos ocupados: [{ desde, hasta }]
// "hasta" es el día de salida (check-out), que queda libre.
function leerIcal(texto) {
	// En iCal una línea larga sigue en la próxima si esta empieza con espacio
	const lineas = texto.replace(/\r?\n[ \t]/g, '').split(/\r?\n/);
	const rangos = [];
	let evento = null;
	for (const linea of lineas) {
		if (linea === 'BEGIN:VEVENT') evento = {};
		else if (linea === 'END:VEVENT') {
			if (evento.desde) rangos.push({ desde: evento.desde, hasta: evento.hasta ?? sumarUnDia(evento.desde) });
			evento = null;
		} else if (evento) {
			const [clave, valor] = [linea.slice(0, linea.indexOf(':')), linea.slice(linea.indexOf(':') + 1)];
			if (clave.startsWith('DTSTART')) evento.desde = aTexto(valor);
			if (clave.startsWith('DTEND')) evento.hasta = aTexto(valor);
		}
	}
	return rangos;
}

const hoy = new Date().toISOString().slice(0, 10);
const ocupado = [];

for (const [origen, url] of Object.entries(calendarios)) {
	if (!url) {
		console.warn(`⚠️  No hay link de calendario para ${origen}: se saltea.`);
		continue;
	}
	const respuesta = await fetch(url);
	if (!respuesta.ok) {
		// Cortamos con error: así GitHub no publica un calendario que muestre todo libre
		throw new Error(`No se pudo descargar el calendario de ${origen} (error ${respuesta.status})`);
	}
	const rangos = leerIcal(await respuesta.text()).filter((r) => r.hasta > hoy);
	console.log(`✅ ${origen}: ${rangos.length} reservas o bloqueos`);
	ocupado.push(...rangos.map((r) => ({ ...r, origen })));
}

ocupado.sort((x, y) => x.desde.localeCompare(y.desde));
writeFileSync(destino, JSON.stringify(ocupado, null, '\t') + '\n');
console.log(`Guardado en src/data/ocupado.json (${ocupado.length} rangos)`);
