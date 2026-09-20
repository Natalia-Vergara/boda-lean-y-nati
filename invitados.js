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
  'flia-monzon':              { nombre: 'Familia Monzón',              pases: 5 },
  'betto-y-gri':              { nombre: 'Betto y Gri',                 pases: 2 },
  'fran-y-gise':              { nombre: 'Fran y Gise',                 pases: 2 },
  'darwis-y-gene':            { nombre: 'Darwis y Gene',               pases: 2 },
  'clau-y-patri':             { nombre: 'Clau y Patri',                pases: 2 },
  'lau-y-marti':              { nombre: 'Lau y Marti',                 pases: 2 },
  'juli-y-bren':              { nombre: 'Juli y Bren',                 pases: 2 },
  'fran-y-luz':               { nombre: 'Fran y Luz',                  pases: 2 },
  'flia-weckesser':           { nombre: 'Familia Weckesser',           pases: 3 },
  'flia-izquierdo':           { nombre: 'Familia Izquierdo',           pases: 5 },
  'agus-y-nico':              { nombre: 'Agus y Nico',                 pases: 2 },
  'eve-y-nahu':               { nombre: 'Eve y Nahu',                  pases: 2 },
  'diego-y-daniel':           { nombre: 'Diego y Daniel',              pases: 2 },
  'mari-y-pablo':             { nombre: 'Mari y Pablo',                pases: 2 },
  'andres-y-belen':           { nombre: 'Andrés y Belén',              pases: 2 },
  'isa-vergara':              { nombre: 'Isa Vergara',                 pases: 1 },
  'cris-mantilla':            { nombre: 'Cris Mantilla',               pases: 1 },
  'carina-y-kelly':           { nombre: 'Carina y Kelly',              pases: 2 },
  'juan-rodriguez':           { nombre: 'Juan Rodríguez',              pases: 1 },
  'santos-y-olinda':          { nombre: 'Santos y Olinda',             pases: 2 },
  'caro':                     { nombre: 'Caro',                        pases: 1 },
  'vale-celerier':            { nombre: 'Vale Celerier',               pases: 1 },
  'moni':                     { nombre: 'Moni',                        pases: 1 },
  'carlitos':                 { nombre: 'Carlitos',                    pases: 1 },
  'ari-orrino':               { nombre: 'Ari Orrino',                  pases: 1 },
  'ari-delgado':              { nombre: 'Ari Delgado y Martu',         pases: 2 },
  'diego':                    { nombre: 'Diego',                       pases: 1 },
  'yoel':                     { nombre: 'Yoel',                        pases: 1 },
  'sol':                      { nombre: 'Sol',                         pases: 1 },
  'anto-serrano':             { nombre: 'Anto Serrano',                pases: 1 },
  'flia-vergara':             { nombre: 'Familia Vergara',             pases: 4 },
  'flia-ramos':               { nombre: 'Familia Ramos',               pases: 4 },
  'flia-vergara-irigoytia':   { nombre: 'Familia Vergara Irigoytia',   pases: 4 },
  'anto-y-jere':              { nombre: 'Anto y Jere',                 pases: 2 },
  'antonio-vergara':          { nombre: 'Antonio Vergara',             pases: 1 },
  'greys-pipu-y-dami':        { nombre: 'Greys, Pipu y Dami',          pases: 3 },
  'justina-y-cristiano':      { nombre: 'Justina y Cristiano',         pases: 2 },
  'miguel':                   { nombre: 'Miguel',                      pases: 1 },
  'rosa-bueno':               { nombre: 'Rosa Bueno',                  pases: 1 },
  'daniela-y-alex':           { nombre: 'Daniela y Alex',              pases: 2 },
  'flia-bueno-acosta':        { nombre: 'Familia Bueno Acosta',        pases: 4 },
  'marilu-y-fausto':          { nombre: 'Marilu y Fausto',             pases: 2 },
  'luci-y-julio':             { nombre: 'Luci y Julio',                pases: 2 },
  'wilfredo-y-claudia':       { nombre: 'Wilfredo y Claudia',          pases: 2 },
  'wilder-y-madre':           { nombre: 'Wilder y Madre',              pases: 2 },
  'doris':                    { nombre: 'Doris',                       pases: 1 },
  'renzo-y-esposa':           { nombre: 'Renzo y esposa',              pases: 2 },
  'javier-villacorta':        { nombre: 'Javier Villacorta',           pases: 1 },
};
