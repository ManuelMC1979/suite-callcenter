# Suite de Gestión Call Center — cómo usar esta carpeta

## 1. Qué hay aquí

```
suite-callcenter/
├── index.html               ← el portal (no necesitas editarlo)
├── programas.js             ← el único archivo que editas para las tarjetas
├── assets/                  ← logos e imágenes compartidas (opcional)
├── progesys/index.html
├── coaching/index.html
├── turnos/index.html
└── capacitaciones/index.html
```

Las cuatro tarjetas están activas y cada una abre su carpeta. Por ahora esas
carpetas muestran una página que dice que todavía no tienen el programa.

## 2. Poner cada programa

Por cada uno:

1. Copia tu archivo HTML dentro de la carpeta que le corresponde.
2. Renómbralo a **`index.html`** (reemplaza el provisional).
3. Listo, el botón "Entrar" ya lo abre.

Ejemplo: `PROGESYS_Sistema_Callcenter.html` va en `progesys/` renombrado a
`index.html`.

Si prefieres no usar carpetas, deja el archivo al lado del portal y en
`programas.js` pon `url: "PROGESYS_Sistema_Callcenter.html"`.

## 3. Agregar un programa nuevo

Abre `programas.js` con el Bloc de notas. Al final hay un bloque de ejemplo
comentado: bórrale los símbolos de comentario y cambia los valores.

```js
{
  nombre: "Mi programa",
  icono: "📁",
  estado: "disponible",     // disponible | desarrollo
  url: "mi-programa/",      // carpeta, siempre terminada en /
  actualizado: "2026-07-26",
  descripcion: "Una línea explicando qué hace."
}
```

Después crea la carpeta `mi-programa/` y pon adentro tu `index.html`.

Para dejar una tarjeta en gris: `estado: "desarrollo"` y `url: ""`.

## 4. Probarlo antes de publicar

Doble clic en `index.html`. Se abre en el navegador y funciona igual que
publicado. Revisa que cada tarjeta abra el programa correcto **antes** de
subir nada.

## 5. Publicarlo

### Opción A — GitHub Pages (público en internet)

1. Crea cuenta en github.com y un repositorio nuevo, por ejemplo `suite-callcenter`.
2. **Add file → Upload files** y arrastra el contenido de esta carpeta.
3. **Settings → Pages → Source: Deploy from a branch → main / (root) → Save**.
4. En 1–2 minutos queda en `https://tuusuario.github.io/suite-callcenter/`.

> **Ojo:** GitHub Pages gratuito es **público e indexable por Google**. Antes
> de subir algo, revisa que no tenga correos internos, teléfonos de anexos,
> enlaces a SharePoint corporativo, nombres de profesionales ni datos de
> pacientes.

### Opción B — SharePoint (interno, detrás del login)

Sube la carpeta completa a una biblioteca de documentos respetando la misma
estructura. Los enlaces relativos funcionan igual. Requiere que TI habilite
scripts personalizados en el sitio:
`Set-SPOSite -Identity <URL> -DenyAddAndCustomizePages $false`

### Opción C — Carpeta de red u OneDrive compartido

Lo más rápido si solo lo usa tu equipo. Compartes la carpeta y cada uno abre
`index.html`.

## 6. Regla de oro

Usa siempre rutas **relativas**: `progesys/`, nunca `C:\Users\...` ni
`file:///`. Así la misma carpeta funciona en tu PC, en GitHub y en SharePoint
sin cambiar una sola línea.
