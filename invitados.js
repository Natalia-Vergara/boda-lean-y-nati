/* ============================================================
   LISTA DE INVITADOS — links personalizados
   ------------------------------------------------------------
   Cada invitado (o familia) tiene un código. El link que se le
   envía por WhatsApp lleva ese código:

       https://natalia-vergara.github.io/boda-lean-y-nati/?i=codigo

   Ejemplo:  https://natalia-vergara.github.io/boda-lean-y-nati/?i=flia-monzon

   Con ese link, el sobre muestra su nombre y la cantidad de
   lugares reservados, y el mensaje de confirmación de WhatsApp
   sale con su nombre.

   Reglas para el código: minúsculas, sin espacios ni acentos
   (usar guiones). Para agregar un invitado, copiá una línea y
   cambiá el código, el nombre y los pases.

   Si alguien abre el sitio sin código (o con un código que no
   existe), ve la invitación genérica: "Estás cordialmente
   invitado", sin cantidad de personas.

   El panel de confirmaciones compara esta lista con las
   respuestas recibidas para mostrar quiénes todavía no
   contestaron, así que conviene mantenerla al día.
   ============================================================ */

window.INVITADOS = {
  'flia-monzon':       { nombre: 'Familia Monzón',      pases: 5 },
  'betto-y-gri':       { nombre: 'Betto y Gri',         pases: 2 },
  'fran-y-gise':       { nombre: 'Fran y Gise',         pases: 2 },
  'darwis-y-gene':     { nombre: 'Darwis y Gene',       pases: 2 },
  'clau-y-patri':      { nombre: 'Clau y Patri',        pases: 2 },
  'lau-y-marti':       { nombre: 'Lau y Marti',         pases: 2 },
  'juli-y-bren':       { nombre: 'Juli y Bren',         pases: 2 },
  'fran-y-luz':        { nombre: 'Fran y Luz',          pases: 2 },
  'flia-weckesser':    { nombre: 'Familia Weckesser',   pases: 3 },
  'flia-izquierdo':    { nombre: 'Familia Izquierdo',   pases: 5 },
  'agus-y-nico':       { nombre: 'Agus y Nico',         pases: 2 },
  'eve-y-nahu':        { nombre: 'Eve y Nahu',          pases: 2 },
  'diego-y-daniel':    { nombre: 'Diego y Daniel',      pases: 2 },
  'mari-y-pablo':      { nombre: 'Mari y Pablo',        pases: 2 },
  'andres-y-belen':    { nombre: 'Andrés y Belén',      pases: 2 },
  'isa-vergara':       { nombre: 'Isa Vergara',         pases: 1 },
  'cris-mantilla':     { nombre: 'Cris Mantilla',       pases: 1 },
  'carina-y-kelly':    { nombre: 'Carina y Kelly',      pases: 2 },
  'juan-rodriguez':    { nombre: 'Juan Rodríguez',      pases: 1 },
  'santos-y-olinda':   { nombre: 'Santos y Olinda',     pases: 2 },
};
