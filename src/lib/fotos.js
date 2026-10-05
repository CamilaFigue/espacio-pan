// Busca una foto de src/assets/fotos por su nombre de archivo.
// import.meta.glob le pide a Astro (Vite) que cargue todas las fotos de la carpeta,
// así después las puede optimizar (achicar y convertir a formatos livianos).
const archivos = import.meta.glob('../assets/fotos/*.{jpg,jpeg,png,webp}', {
	eager: true,
	import: 'default',
});

export function foto(nombre) {
	const imagen = archivos[`../assets/fotos/${nombre}`];
	if (!imagen) {
		throw new Error(`No encuentro la foto "${nombre}" en src/assets/fotos`);
	}
	return imagen;
}
