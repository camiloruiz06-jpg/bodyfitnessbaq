# PROYECTO — Página web Gimnasio Body Fitness

Documentación técnica completa del proyecto. Este archivo es la guía de
referencia para retomar el proyecto en el futuro.

- **Cliente:** Gimnasio Body Fitness — Barranquilla, Colombia
- **Tipo:** Landing page de una sola ruta + panel de administración
- **Estado:** en producción y funcionando
- **Carpeta local:** `C:\Users\camil\bodyfitness-web`

---

## 1. Enlaces importantes

| Qué | Dónde |
|---|---|
| Página en vivo | https://bodyfitnessbaq.vercel.app |
| Panel de administración | https://bodyfitnessbaq.vercel.app/studio |
| Repositorio | https://github.com/camiloruiz06-jpg/bodyfitnessbaq |
| Administrar Sanity (usuarios, uso) | https://www.sanity.io/manage/project/eitd1kh4 |
| Instagram del gym | https://www.instagram.com/bodyfitnessbq |

**Datos de conexión de Sanity:**

- Project ID: `eitd1kh4`
- Dataset: `production`

Estos dos valores van en `.env.local`, que **no se sube a GitHub** (está en
`.gitignore` por seguridad). Si clonas el proyecto en otro computador, crea
el archivo `.env.local` en la raíz con este contenido:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=eitd1kh4
NEXT_PUBLIC_SANITY_DATASET=production
```

> Aun sin ese archivo la página funciona, porque `src/sanity/env.js` tiene
> los mismos valores como respaldo. Por eso Vercel no necesitó configuración
> extra.

---

## 2. Stack

| Herramienta | Versión | Para qué |
|---|---|---|
| Next.js | 16.2.11 | Framework (App Router, JavaScript — sin TypeScript) |
| React | 19.2.4 | Librería base |
| Tailwind CSS | v4 | Estilos (se configura dentro de `globals.css`, sin archivo de config) |
| Framer Motion | 12 | Animaciones y transiciones del carrusel |
| react-icons | 5 | Íconos |
| Sanity | 6 | Panel de administración de contenido |
| Vercel | — | Hosting con despliegue automático |

**Tipografías** (Google Fonts vía `next/font`): Anton para titulares,
Inter para texto, Pacifico para el logo de texto de respaldo.

---

## 3. Cómo correr el proyecto

```bash
cd C:\Users\camil\bodyfitness-web
npm install     # solo la primera vez
npm run dev
```

- Página: http://localhost:3000
- Panel: http://localhost:3000/studio

Para apagar el servidor: `Ctrl + C`.

Antes de subir cambios grandes conviene comprobar que compila:

```bash
npm run build
```

---

## 4. Estructura del proyecto

```
bodyfitness-web/
├── public/
│   ├── anuncios/        Imágenes de las promos (anuncio-1.jpg … anuncio-6.jpg)
│   ├── brand/logo.png   Logo oficial del gimnasio
│   └── gym/             Fotos de fondo: hero, servicios, horarios, contacto
│
├── src/
│   ├── app/
│   │   ├── layout.js            Fuentes, metadata y SEO
│   │   ├── page.js              Arma la página y trae los datos de Sanity
│   │   ├── globals.css          Paleta, tipografía y utilidades propias
│   │   ├── opengraph-image.jpg  Imagen que sale al compartir el link
│   │   ├── favicon.ico          Iconos de pestaña (+ icon.png, apple-icon.png)
│   │   └── studio/[[...tool]]/  El panel de administración
│   │
│   ├── components/      Una sección de la página por archivo
│   ├── data/            Contenido de respaldo (ver punto 6)
│   ├── lib/whatsapp.js  Generador central de enlaces de WhatsApp
│   └── sanity/          Conexión y esquemas del panel
│
├── scripts/seed.ndjson  Contenido inicial para cargar a Sanity
├── sanity.config.js     Configuración del panel
├── sanity.cli.js        Necesario para los comandos `npx sanity ...`
└── .env.local           Datos de conexión (NO se sube a GitHub)
```

**Componentes y su sección:**

| Archivo | Sección |
|---|---|
| `Navbar.js` | Menú superior (hamburguesa en móvil) |
| `Hero.js` | Portada con el eslogan y el botón de WhatsApp |
| `Anuncios.js` | Carrusel de promos ⭐ |
| `Servicios.js` | Gimnasio, Rumbaterapia, Boxeo |
| `Planes.js` | Panel de tarifas estilo flyer |
| `Horarios.js` | Tarjetas + aviso "Abiertos ahora" |
| `Contacto.js` | Mapa y formulario que redirige a WhatsApp |
| `Footer.js` | Pie de página |
| `WhatsAppFloat.js` | Botón flotante verde |
| `Logo.js` | Logo circular (con respaldo de texto si falta el archivo) |
| `FondoFoto.js` | Foto de fondo con oscurecido, reutilizable |
| `Reveal.js` | Animación de aparición al hacer scroll |
| `SectionTitle.js` | Título de sección con la barra roja inclinada |

---

## 5. Paleta y estilo

Definidos en `src/app/globals.css` como variables de Tailwind:

| Nombre | Color | Uso |
|---|---|---|
| `negro` | `#0b0b0c` | Fondo principal |
| `carbon` | `#141416` | Tarjetas y bloques |
| `acero` | `#1e1e21` | Elementos secundarios |
| `borde` | `#2c2c30` | Bordes |
| `rojo` | `#e02020` | Acento de la marca |
| `rojo-oscuro` | `#9e1418` | Hover de botones |
| `hueso` | `#f5f2ec` | Texto principal |
| `gris-texto` | `#b8b5ae` | Texto secundario |

Detalles propios de la marca (tomados del flyer del gym):

- `.titulo-display` — titulares en mayúsculas con Anton
- `.brochazo` — subrayado rojo inclinado detrás de una palabra
- Barras rojas con `transform: skewX(-18deg)` como separadores
- Fondo con textura de ruido y un resplandor rojo tenue arriba

---

## 6. Cómo se edita el contenido (importante)

El contenido viaja por **dos caminos**, y esto es lo que hay que entender
para no confundirse:

1. **Panel de Sanity** (`/studio`) — es el que manda. Lo usa el cliente.
2. **Archivos en `src/data/`** — es el respaldo. Se usa solo si Sanity
   está vacío o falla la conexión.

La lógica vive en `src/sanity/content.js`. Cada función (`getSite`,
`getAnuncios`, `getPlanes`, `getServicios`) pregunta primero a Sanity y,
si no recibe nada, devuelve lo que está en `src/data/`. Por eso la página
**nunca se queda en blanco**.

> Consecuencia práctica: si cambias un precio en `src/data/planes.js` y no
> se refleja en la página, es porque Sanity tiene datos cargados y esos
> mandan. Ese cambio hay que hacerlo en el panel.

**Qué edita cada archivo de respaldo:**

| Archivo | Contenido |
|---|---|
| `src/data/site.js` | WhatsApp, dirección, Instagram, horarios |
| `src/data/anuncios.js` | Promos del carrusel |
| `src/data/planes.js` | Planes y precios |
| `src/data/servicios.js` | Textos de los tres servicios |

Todos tienen comentarios `👈 CAMBIAR` señalando qué se puede tocar.

### Agregar una promo por código

1. Guardar la imagen en `public/anuncios/`.
2. Agregar una línea en `src/data/anuncios.js`:
   ```js
   { imagen: "/anuncios/mi-promo.jpg", alt: "Descripción de la promo" },
   ```
   O, para mostrar una publicación de Instagram:
   ```js
   { instagram: "https://www.instagram.com/p/ABC123xyz/" },
   ```
3. Guardar y hacer push.

**Ojo con la ruta:** se escribe desde `public` hacia adentro
(`/anuncios/foto.jpg`), nunca la ruta de Windows (`C:\Users\...`).

---

## 7. Cómo subir cambios

Vercel está conectado al repositorio: **cada push a `main` publica solo**
la nueva versión en 1–2 minutos.

```bash
cd C:\Users\camil\bodyfitness-web
git add .
git commit -m "descripción del cambio"
git push
```

---

## 8. El panel de Sanity

**Qué puede editar el cliente:** anuncios y promos, planes y precios,
servicios, y la configuración (WhatsApp, dirección, Instagram, horarios).

**Esquemas** (definen los campos del panel): `src/sanity/schemaTypes/`.
Si agregas un campo ahí, también hay que leerlo en `src/sanity/content.js`
para que llegue a la página.

**Menú del panel:** se organiza en `src/sanity/structure.js`.

### Comandos útiles

Todos se corren dentro de `bodyfitness-web`:

```bash
npx sanity dataset import scripts/seed.ndjson production --replace
```
Carga el contenido inicial. `--replace` sobreescribe los documentos que
tengan el mismo identificador. **Cuidado:** pisa lo que el cliente haya
editado en el panel.

```bash
npx sanity cors add https://mi-dominio.com --credentials
```
Autoriza a un dominio nuevo a conectarse con Sanity. Hay que correrlo si
algún día se compra un dominio propio, o el panel dará error de permisos.
Ya están autorizados `localhost:3000` y `bodyfitnessbaq.vercel.app`.

```bash
npx sanity projects list
```
Muestra los proyectos de la cuenta y confirma que la sesión está iniciada.

### Dar acceso al dueño del gimnasio

Entrar a https://www.sanity.io/manage/project/eitd1kh4 → **Members** →
**Invite members** → correo del cliente con rol **Editor**.

---

## 9. Datos del negocio (estado actual)

- **WhatsApp:** `573008945143`
- **Dirección:** Cra 42 # 82A-36, Barranquilla
- **Instagram:** @bodyfitnessbq
- **Eslogan:** "Tu único límite eres TÚ"

**Horarios** (versión confirmada: la de la bio de Instagram):

| Día | Horario |
|---|---|
| Lunes a Viernes | 5:00 a.m. – 12:00 p.m. y 2:30 p.m. – 8:00 p.m. |
| Sábados | 7:00 a.m. – 12:00 p.m. |
| Domingos y festivos | Cerrado |

**Tarifas 2025:**

| Plan | Precio |
|---|---|
| Por sesión | $10.000 |
| 15 días | $80.000 |
| 1 mes (destacado) | $100.000 |
| 2 meses | $180.000 |
| 3 meses | $240.000 |
| 6 meses | $450.000 |

El horario se escribe en el panel en formato de 24 horas, con `.5` para las
medias horas: `5` a `12` y `14.5` a `20` de lunes a viernes; `7` a `12` los
sábados. El aviso "Abiertos ahora / Cerrados ahora" se calcula solo a partir
de esos números.

---

## 10. Decisiones tomadas

- **Sin sección de galería.** Se construyó y luego se eliminó: sin fotos ni
  publicaciones cargadas quedaba vacía y restaba más de lo que sumaba.
- **Las promos vencidas se dejan a propósito.** El flyer de cada promo
  muestra su fecha de vencimiento, y la sección sirve para mostrar el
  movimiento del gimnasio aunque la promo ya haya pasado.
- **Los textos de Rumbaterapia y Boxeo son provisionales.** Se dejaron así
  porque los horarios de clases se manejan por WhatsApp.
- **Fotos de fondo genéricas.** Son de banco de imágenes, no del local.
  Antes de un uso comercial prolongado conviene revisar la licencia.
- **Sin el nombre del desarrollador en el sitio**, por pedido del brief.
- **Panel claro sobre fondo oscuro descartado:** las tarifas se probaron con
  tarjeta blanca y se pasaron a fondo oscuro para no romper la estética.

---

## 11. Pendientes y mejoras posibles

- Descripciones reales de Rumbaterapia y Boxeo, con días y horas de clases.
- Fotos reales del gimnasio para reemplazar las de banco.
- Dominio propio (tipo `bodyfitnessbq.com`) en vez de `.vercel.app`.
  Recordar correr `npx sanity cors add` con el dominio nuevo.
- Publicaciones de Instagram en el carrusel (ya está soportado, solo faltan
  los enlaces).
- Sección de entrenadores y testimonios de clientes.
- Google Analytics para medir visitas.
- Correo del gimnasio (opcional, el brief lo dejó abierto).

---

## 12. Problemas comunes

**Cambié algo en `src/data/` y no se ve.**
Sanity tiene datos y esos mandan. Hacer el cambio en `/studio`.

**Publiqué en el panel y la página sigue igual.**
La página guarda el contenido en memoria por 60 segundos
(`revalidate: 60` en `src/sanity/client.js`). Esperar y refrescar.

**El link compartido en WhatsApp sale sin imagen.**
WhatsApp guarda en memoria la vista previa. Probar con el enlace
modificado, por ejemplo `bodyfitnessbaq.vercel.app/?v=2`.

**El panel da error de permisos.**
Falta autorizar el dominio: `npx sanity cors add <url> --credentials`.

**El puerto 3000 está ocupado.**
Quedó un servidor corriendo de antes. Cerrarlo con `Ctrl + C` en su
terminal, o buscar el proceso con `netstat -ano | findstr :3000`.

---

## 13. Otros documentos

| Archivo | Para quién |
|---|---|
| `README.md` | Resumen corto del repositorio |
| `MANUAL-PANEL.md` | Instrucciones del panel, versión técnica |
| `PROYECTO.md` | Este archivo: la referencia completa |
| `Manual-Panel-BodyFitness.pdf` | Manual del cliente (está en el Escritorio) |

El brief original está en
`C:\Users\camil\OneDrive\Desktop\BRIEF-BODYFITNESS.md`.
