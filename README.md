# Lean & Nati — Invitación de Boda 💍

Invitación digital de lujo, completamente responsive (mobile-first), construida con **HTML5, CSS3 y JavaScript Vanilla** + **GSAP** y **Lenis** para las animaciones y el scroll suave. Sin frameworks pesados.

**27 de noviembre de 2026 · Finca «La Josefina», Los Talas, Berisso**

---

## Links personalizados por invitado (sin base de datos)

Cada invitado puede recibir un link único que muestra **su nombre y sus lugares
reservados en el sobre**, y hace que el mensaje de WhatsApp de confirmación
salga con su nombre:

```
https://natalia-vergara.github.io/boda-lean-y-nati/?i=flia-perez
```

La lista vive en [`invitados.js`](invitados.js) — un objeto simple
`codigo → { nombre, pases }`. Para agregar un invitado se copia una línea y se
cambian los datos; no hace falta backend ni base de datos. Quien abre el sitio
sin código ve la invitación genérica («Estás cordialmente invitado»).

## Secciones

0. **Sobre** — a pantalla completa, bordó aterciopelado con filete dorado y sello de lacre; muestra el nombre del invitado y sus lugares. Al tocar el sello, el lacre se despega, la solapa gira y la carta —«Lean & Nati · nos casamos · save the date · 27 · 11 · 2026»— sale despacio; recién a los 7 s la escena se disuelve en la portada.
   **Se muestra una sola vez.** El navegador recuerda qué sobre abrió cada persona (`CONFIG.claveSobre`), y a partir de la segunda visita entra directo a la portada: 10,8 s la primera vez, 4 s las siguientes. Si le llega otro link personalizado, el sobre vuelve a aparecer con el nombre nuevo. Desde el cierre hay un «ver el sobre otra vez» que borra esa memoria.
1. **Portada** — animación de entrada (L & N → Lean & Nati), promesa, «Nos casamos» y cuenta regresiva en tiempo real hasta el 27/11/2026.
2. **Con inmensa alegría** — bienvenida.
3. **Ceremonia & Celebración** — dirección completa, horarios (18:15 llegada / 18:30 puntual), botones **Ver mapa** (Google Maps) y **Fotos del lugar** (Instagram `@fincalajosefinaeventos`), **Agendá la fecha** (Google Calendar + `assets/boda-lean-y-nati.ics` para iPhone y Outlook), el bloque **Cómo llegar** (estacionamiento, tiempo desde La Plata, aviso de zona alejada) y cuatro fotos reales de la finca.
4. **Dress code** — Formal, con los 5 colores a evitar (blanco, crema, beige, nude y bordo).
5. **Regalos** — datos de la cuenta (Naranja X) con botones para copiar el alias y el CBU (Clipboard API + fallback) y aviso de confirmación.
6. **Celebración sólo para adultos**.
7. **Fotos** — link al álbum compartido del evento.
8. **Preguntas frecuentes** — ocho respuestas plegables: chicos, estacionamiento, horario, dress code, lluvia, pulsera de barra libre, menú especial y fecha límite.
9. **Confirmación de asistencia** — antes del **25 de octubre**. El botón «Confirmar aquí» abre una ventana con el formulario; al elegir «No puedo» quedan sólo el nombre y el botón de enviar. Una vez guardada la respuesta en la base, se ofrece **avisar también por WhatsApp**, para tenerla por duplicado.
10. **Hashtag y compartir** — `#BodaLeanyNati` y un botón que usa el menú de compartir del teléfono (y copia el link donde no existe). Comparte siempre la invitación **general**: reenviar un link personalizado le daría a otra familia los lugares de quien lo recibió.
11. **Cierre** — despedida con las iniciales.

Además, un **atajo fijo «Confirmar asistencia»** abajo a la izquierda: aparece al dejar atrás la portada y se esconde al llegar a la sección de confirmación.

## Estructura del proyecto

```
boda/
│  index.html            → Estructura de la invitación (SEO, OpenGraph, Schema.org)
│  panel.html            → Panel privado de confirmaciones (entra con usuario y clave)
│  style.css             → Sistema de diseño completo (paleta, tipografías, secciones)
│  script.js             → Animaciones GSAP, Lenis, cuenta regresiva, copiar alias
│  manifest.webmanifest  → Manifest PWA
│  README.md             → Este archivo
│
└─ assets/
   ├─ fonts/             → Tipografías auto-hospedadas (woff2)
   ├─ boda-lean-y-nati.ics → Evento para agendar (iPhone, Outlook)
   ├─ music/             → cancion.mp3 (agregar aquí la canción elegida)
   ├─ images/            → og-cover.jpg (vista previa al compartir)
   │   └─ finca/         → finca-01 … finca-04 (fotos del lugar)
   ├─ vendor/            → gsap, ScrollTrigger, lenis (auto-hospedados)
   └─ icons/             → favicon.svg
```

## Publicar el sitio (GitHub Pages)

La rama `main` tiene siempre la versión final. Para publicarla:

1. En el repositorio, entrar a **Settings → Pages**.
2. En *Source* elegir **Deploy from a branch**.
3. Seleccionar la rama **`main`** y la carpeta **`/ (root)`**. Guardar.
4. Al minuto el sitio queda en:
   **https://natalia-vergara.github.io/boda-lean-y-nati/**

Conviene además dejar `main` como rama principal del repositorio
(**Settings → General → Default branch**), para que sea siempre la que se
ve al entrar y no quede a la vista una versión vieja.

Cada vez que se haga un cambio en `main`, el sitio se actualiza solo en
un par de minutos.

### Antes de mandar el link a los invitados

- **Álbum de fotos**: mientras `CONFIG.urlAlbum` (en `script.js`) siga con
  el valor de ejemplo, la sección *Fotos* no se muestra. Al pegar el link
  real del álbum, aparece sola.
- **Música**: el botón del reproductor sólo aparece si existe
  `assets/music/cancion.mp3`. Sin ese archivo, no se ve ningún botón roto.
- **Invitados**: `invitados.js` trae tres ejemplos. Reemplazarlos por los
  invitados reales antes de repartir los links personalizados.

## Base de datos (Supabase)

Las confirmaciones y las sugerencias de canciones se guardan en una base
PostgreSQL en Supabase, que tiene plan gratuito y no necesita servidor propio:
el sitio escribe directamente en la base desde el navegador.

Para conectarla, completar en `script.js` → `CONFIG.baseDeDatos`:

```js
baseDeDatos: {
  url:   'https://mjvhfvcpkrzpufrpklrv.supabase.co',
  clave: 'eyJhbGciOi…',   // clave anon (public)
},
```

Mientras falte alguno de los dos, los formularios abren WhatsApp con el
mensaje ya escrito, así la invitación funciona igual sin base conectada.

### Las tablas

```sql
-- Se puede correr las veces que haga falta: lo que ya existe, lo saltea.
create table if not exists confirmaciones (
  id         bigint generated always as identity primary key,
  creado_en  timestamptz not null default now(),
  asiste     text not null,
  nombre     text not null,
  personas   int  not null default 1,
  alcohol    int  not null default 0,   -- pulseras de barra libre
  nota       text,
  invitado   text,   -- nombre según la lista, si entró por su link
  codigo     text    -- código del link personalizado (?i=…)
);

create table if not exists canciones (
  id         bigint generated always as identity primary key,
  creado_en  timestamptz not null default now(),
  nombre     text not null,
  cancion    text not null,
  link       text,
  codigo     text
);

-- Por si la tabla se creó antes de que existiera la barra libre
alter table confirmaciones add column if not exists alcohol int not null default 0;
```

### Seguridad

La clave `anon` es pública por diseño: viaja al navegador de cada invitado.
Lo que protege los datos son las políticas de la base, que habilitan
**únicamente insertar** filas:

```sql
alter table confirmaciones enable row level security;
alter table canciones      enable row level security;

drop policy if exists "cualquiera puede confirmar" on confirmaciones;
drop policy if exists "cualquiera puede sugerir"   on canciones;

create policy "cualquiera puede confirmar"
  on confirmaciones for insert to anon with check (true);

create policy "cualquiera puede sugerir"
  on canciones for insert to anon with check (true);
```

## Panel privado de confirmaciones

[`panel.html`](panel.html) es una página aparte —no está enlazada desde la
invitación— donde los novios entran con correo y contraseña y ven:

- **Los números**: personas confirmadas, pulseras de barra libre a pedir,
  cuántos no pueden venir y cuántas respuestas llegaron.
- **La lista completa**, con buscador y un botón para borrar una fila (útil
  para limpiar las pruebas).
- **Quiénes todavía no respondieron**, comparando `invitados.js` contra las
  respuestas recibidas.
- **Las canciones sugeridas.**
- **Descargar Excel** (CSV con BOM, se abre bien con acentos).

```
https://natalia-vergara.github.io/boda-lean-y-nati/panel.html
```

### Por qué es seguro

La clave que viaja en la página es la `anon`, la misma que ya es pública, y
**con ella sola no se puede leer nada**: las políticas de la base sólo
permiten insertar. Leer requiere haber iniciado sesión, y la base comprueba
el correo de quien entró. Esto lo decide PostgreSQL, no el navegador: no
alcanza con abrir la consola y trucar la página.

### Cómo habilitarlo (una sola vez)

**1. Crear el usuario.** En Supabase → *Authentication* → *Users* →
**Add user** → *Create new user*. Poner el correo y una contraseña larga, y
tildar **Auto Confirm User**.

**2. Cerrar los registros.** En *Authentication* → *Sign In / Providers* →
*Email*, **desactivar «Allow new users to sign up»**. Sin esto, cualquiera
podría crearse una cuenta y leer las confirmaciones.

**3. Dar permiso de lectura a ese correo.** En el *SQL Editor*, reemplazando
el correo de ejemplo por el real (se pueden poner varios separados por coma):

```sql
-- Sólo estos correos pueden leer y borrar. Sin esto, el panel entra
-- pero la lista aparece vacía.
drop policy if exists "los novios leen las confirmaciones" on confirmaciones;
drop policy if exists "los novios borran confirmaciones"   on confirmaciones;
drop policy if exists "los novios leen las canciones"      on canciones;

create policy "los novios leen las confirmaciones"
  on confirmaciones for select to authenticated
  using ( (auth.jwt() ->> 'email') in ('TU-MAIL@ejemplo.com') );

create policy "los novios borran confirmaciones"
  on confirmaciones for delete to authenticated
  using ( (auth.jwt() ->> 'email') in ('TU-MAIL@ejemplo.com') );

create policy "los novios leen las canciones"
  on canciones for select to authenticated
  using ( (auth.jwt() ->> 'email') in ('TU-MAIL@ejemplo.com') );
```

### El proyecto se pausa solo (plan gratuito)

Supabase **suspende los proyectos del plan gratuito que pasan 7 días sin
recibir ninguna consulta**. No se pierde nada —los datos y los backups
quedan intactos— pero mientras está pausado la base no responde, así que
los formularios caen en el respaldo de WhatsApp.

Para reactivarlo: supabase.com → el proyecto → **Resume project**.

Para que no vuelva a pasar, el repositorio incluye la tarea
[`.github/workflows/mantener-base-despierta.yml`](.github/workflows/mantener-base-despierta.yml),
que cada 3 días le hace a la base un pedido mínimo de sólo lectura. Se
puede disparar a mano desde la pestaña **Actions** del repositorio. Dos
advertencias:

- GitHub **desactiva las tareas programadas** de los repositorios sin
  actividad durante 60 días; si el repositorio queda quieto mucho tiempo,
  conviene revisar la pestaña *Actions*.
- Si se acerca la fecha y hace falta garantía total, el plan Pro de
  Supabase no pausa nunca y se cobra por mes: se puede contratar sólo
  durante las semanas en que los invitados confirman y bajarlo después.

Sin políticas de lectura, nadie puede consultar ni borrar las respuestas
desde el sitio. Las confirmaciones se ven desde el panel de Supabase, que
usa credenciales propias y permite exportar a CSV.

## Probar en la computadora

Es un sitio 100 % estático: basta con servir la carpeta.

```bash
python3 -m http.server 8080
# → http://localhost:8080
# Con invitado:  http://localhost:8080/?i=flia-perez
```

## Personalización rápida

| Qué | Dónde |
|---|---|
| **Invitados y pases** | `invitados.js` (un renglón por invitado/familia) |
| **Fotos de fondo** (sobre, portada, versículo, cierre) | Guardarlas en `assets/images/fondos/` con los nombres que indica el `LEEME.txt` de esa carpeta |
| **Link del álbum compartido** | `CONFIG.urlAlbum` en `script.js` (pegar el link de Google Fotos) |
| Fotos de la finca | `assets/images/finca/finca-01.jpg` … `finca-04.jpg` (proporción 4:3). Si falta alguna, esa foto se oculta sola; si faltan todas, se oculta el bloque entero |
| Música | Colocar el MP3 en `assets/music/cancion.mp3` |
| Imagen del hero | Reemplazar `assets/images/hero.svg` por una foto (actualizar la ruta en `index.html`) |
| Fecha de la cuenta regresiva | `CONFIG.fechaBoda` en `script.js` |
| Datos de la cuenta | Sección *Regalos* en `index.html`: el texto visible y el atributo `data-copiar` de cada botón deben coincidir |
| Número / mensaje de WhatsApp del RSVP | Sección *Confirmación* en `index.html` (link `wa.me`) |
| URL canónica / OpenGraph | `<head>` de `index.html` |

## Rendimiento

- CSS y JS propios sin dependencias pesadas; GSAP + Lenis auto-hospedados (~90 KB comprimidos).
- Imágenes con `loading="lazy"` y `decoding="async"`.
- Tipografías woff2 auto-hospedadas con `preload` de las críticas.
- `prefers-reduced-motion` respetado: sin animaciones para quienes las desactivan.
- Al reemplazar los SVG por fotos reales, conviene exportarlas en **WebP** (calidad 80, ancho ≤ 1200 px) para mantener Lighthouse arriba de 95.

## Créditos

Diseño y desarrollo a medida para Lean & Nati. Paleta inspirada en su moodboard: bordó profundo, vino, marfil, champagne y dorado — el bordó de las damas de honor como acento principal.
