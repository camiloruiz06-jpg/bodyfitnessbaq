# Gimnasio Body Fitness — Página web

Landing page de **Gimnasio Body Fitness** (Barranquilla, Colombia).
Gimnasio · Rumbaterapia · Boxeo — _"Tu único límite eres TÚ"_.

Construida con **Next.js (App Router, JavaScript)**, **Tailwind CSS**,
**Framer Motion** y **react-icons**.

## Cómo correrla en local

```bash
npm install
npm run dev
```

Abrir http://localhost:3000

## ✏️ Cómo editar el contenido (sin tocar componentes)

Todo lo editable vive en `src/data/`:

| Archivo | Qué contiene |
|---|---|
| `src/data/site.js` | Nombre, dirección, WhatsApp, Instagram, **horarios** |
| `src/data/anuncios.js` | ⭐ Promos del carrusel (imágenes en `public/anuncios/`) |
| `src/data/planes.js` | Planes y **precios** (tarifas 2025 del flyer) |
| `src/data/servicios.js` | Textos de Gimnasio / Rumbaterapia / Boxeo |

Busca los comentarios `👈 CAMBIAR` / `👈 FALTA` dentro de esos archivos.

### Assets pendientes

| Asset | Dónde ponerlo |
|---|---|
| Logo oficial | `public/brand/logo.png` (mientras no exista, sale un logo de texto) |
| Imágenes de promos | `public/anuncios/` + listarlas en `src/data/anuncios.js` |
| Fotos del gym (fondos) | `public/gym/hero.jpg`, `servicios.jpg`, `horarios.jpg` |

Cada carpeta tiene un `README.txt` con instrucciones.

## Pendientes del cliente

- [x] Precios / planes de mensualidad (tarifas 2025 ✔)
- [ ] Confirmar horario de la mañana L–V (¿hasta 11:00 a.m. o 12:00 p.m.?)
- [ ] Descripciones reales de Rumbaterapia y Boxeo (días/horas de clases)
- [ ] Logo en `public/brand/logo.png`
- [ ] Imágenes de promos para el carrusel
- [ ] Fotos del gym para los fondos (`public/gym/`)
- [ ] ¿Correo del gym? (opcional)

## Fase 2 (preparado, no implementado)

Panel de administración con Sanity (como `babylonink-web`) para que el
dueño edite anuncios, precios y horarios sin código. La estructura de
`src/data/` está pensada para migrar fácil a ese esquema.
