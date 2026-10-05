# Espacio PAN

Sitio web de **Espacio PAN**, departamento en alquiler en Villa Carlos Paz, Córdoba.
Hecho con [Astro](https://astro.build) y publicado con GitHub Pages.

## Cómo verlo en tu compu

```bash
npm install     # instala las dependencias (solo la primera vez)
npm run dev     # abre el sitio en http://localhost:4321/espacio-pan
```

## Dónde está cada cosa

| Archivo | Para qué sirve |
| --- | --- |
| `src/data/departamento.js` | Todos los textos, fotos, fechas ocupadas y datos de contacto |
| `src/pages/index.astro` | La página principal: junta las secciones |
| `src/components/` | Cada sección del sitio (portada, info, fotos, calendario, contacto) |
| `src/layouts/Base.astro` | El molde común: menú y pie de página |
| `src/styles/global.css` | Colores y estilos generales |
| `public/fotos/` | Las fotos del departamento |
| `.github/workflows/deploy.yml` | Publica el sitio solo cada vez que se suben cambios |
