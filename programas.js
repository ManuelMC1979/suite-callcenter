/* ============================================================
   PROGRAMAS DE LA SUITE
   ------------------------------------------------------------
   Este es el ÚNICO archivo que necesitas editar para agregar,
   quitar o cambiar una tarjeta del portal.

   Para agregar un programa nuevo: copia un bloque completo
   (desde la llave { hasta la llave },) y cambia los valores.

   estado:      "disponible"  -> tarjeta activa, con enlace
                "desarrollo"  -> tarjeta gris, sin enlace
   url:         carpeta donde está el programa. Siempre termina
                en / y dentro debe haber un archivo index.html
                (también sirve un archivo suelto: "mi-panel.html")
   actualizado: fecha AAAA-MM-DD, o deja "" para no mostrarla
   ============================================================ */

const PROGRAMAS = [

  {
    nombre: "PROGESYS",
    icono: "📊",
    estado: "disponible",
    url: "progesys/",
    actualizado: "",
    descripcion: "Dashboard, indicadores y gestión diaria del call center: asistencia, KPI, calidad, EPA y outbound."
  },

  {
    nombre: "Coaching",
    icono: "🎯",
    estado: "disponible",
    url: "coaching/",
    actualizado: "",
    descripcion: "Seguimiento de feedback, compromisos y planes de mejora por ejecutivo."
  },

  {
    nombre: "Turnos",
    icono: "⏱",
    estado: "disponible",
    url: "turnos/",
    actualizado: "",
    descripcion: "Marcaje de entrada y salida en tiempo real, conectado directamente con Asistencia."
  },

  {
    nombre: "Capacitaciones",
    icono: "🎓",
    estado: "disponible",
    url: "capacitaciones/",
    actualizado: "",
    descripcion: "Cursos, evaluaciones y certificaciones del equipo."
  }

  /* ------------------------------------------------------------
     EJEMPLO para cuando quieras anclar otro programa tuyo.
     Borra los símbolos de comentario de las 8 líneas de abajo.

  ,{
    nombre: "Contactabilidad",
    icono: "📇",
    estado: "disponible",
    url: "contactabilidad/",
    actualizado: "2026-07-26",
    descripcion: "Asignación y seguimiento de RUT por ejecutivo."
  }

     ------------------------------------------------------------ */

];
