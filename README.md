# Felipe Toledano — Portfolio

[![Deploy](https://img.shields.io/github/deployments/F3LIP3X/Portfolio/github-pages?label=deploy&logo=github)](https://f3lip3x.github.io/Portfolio/)
[![License: MIT](https://img.shields.io/badge/license-MIT-informational.svg)](./LICENSE)
[![Last commit](https://img.shields.io/github/last-commit/F3LIP3X/Portfolio)](https://github.com/F3LIP3X/Portfolio/commits/main)

Portafolio personal de **Felipe José Toledano Escudero**, desarrollador Full Stack en Granada, España.

**🔗 Sitio en vivo:** [f3lip3x.github.io/Portfolio](https://f3lip3x.github.io/Portfolio/)

## Sobre el proyecto

Landing page de una sola página construida con HTML, CSS y JavaScript "vanilla" — sin frameworks ni build step. Incluye tema claro/oscuro persistente, animaciones de entrada al hacer scroll, navegación con sección activa, filtro de habilidades por categoría y contadores animados.

## Stack

- **HTML5** semántico, con metadatos SEO y Open Graph completos
- **CSS3** — sistema de diseño propio ("liquid glass"), sin frameworks (Bootstrap/Tailwind)
- **JavaScript** vanilla (IIFE), sin dependencias de runtime
- [Font Awesome](https://fontawesome.com/) para iconografía
- Fuentes [Inter / Inter Tight / JetBrains Mono](https://fonts.google.com/) vía Google Fonts

## Características

- 🌓 Tema claro/oscuro con detección de preferencia del sistema y persistencia en `localStorage`
- ✨ Animaciones de entrada (`IntersectionObserver`) y contadores numéricos animados
- 🧭 Navegación con resaltado de sección activa y barra de progreso de scroll
- 🔍 Filtro de habilidades por categoría (front-end, back-end, datos, herramientas)
- 📱 Totalmente responsive, con menú de navegación móvil
- ♿ Atributos ARIA y `alt` en imágenes para accesibilidad

## Estructura

```
Portfolio/
├── index.html          # Contenido y lógica de la página
├── styles.css           # Sistema de diseño y estilos
├── robots.txt            # Directivas para crawlers
├── sitemap.xml            # Mapa del sitio
├── LICENSE
└── assets/
    ├── CV_Felipe_Toledano.pdf
    ├── institutions/     # Logos de centros educativos
    └── *.jpg, *.png       # Fotografía y logos de empresas
```

## Desarrollo local

No requiere instalación de dependencias. Basta con servir el directorio como sitio estático:

```bash
git clone https://github.com/F3LIP3X/Portfolio.git
cd Portfolio
python3 -m http.server 8000
# abre http://localhost:8000
```

## Despliegue

El sitio se publica automáticamente en **GitHub Pages** desde la rama `main`.

## Contacto

- 📧 [felitol2008@gmail.com](mailto:felitol2008@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/felipe-jos%C3%A9-toledano-escudero-4008bb194/)
- 🐙 [GitHub](https://github.com/F3LIP3X)

## Licencia

Distribuido bajo licencia [MIT](./LICENSE).
