# Portafolio Periodista - Editorial Premium

Portafolio web moderno y minimalista para periodista y comunicadora social, construido con React, Vite, Tailwind CSS y Framer Motion.

## 🚀 Características

- Diseño minimalista tipo "Editorial Premium"
- Animaciones suaves con Framer Motion
- Totalmente responsivo (móvil y escritorio)
- Filtrado interactivo de proyectos por categoría (25 proyectos)
- Sección de trayectoria con descarga de CV en PDF
- 8 redes sociales integradas
- Optimizado para Vercel

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📄 Agregar tu CV en PDF

1. Coloca tu archivo CV en formato PDF en la carpeta `public/` con el nombre `cv.pdf`
2. El botón "Descargar CV" en la sección Trayectoria descargará automáticamente este archivo
3. Si quieres usar otro nombre, edita la ruta en `src/components/Resume.jsx` línea del href

## 🎨 Personalización

### Contenido
Edita los siguientes archivos para personalizar el contenido:

- `src/components/Hero.jsx` - Título, nombre y foto de perfil
- `src/components/About.jsx` - Biografía y formación
- `src/components/Resume.jsx` - Educación, experiencia y cualidades
- `src/components/Portfolio.jsx` - Proyectos (25 proyectos organizados en 4 categorías)
- `src/components/Skills.jsx` - Habilidades profesionales
- `src/components/Contact.jsx` - Enlaces a redes sociales (8 redes)

### Estilos
- Tipografías: Configuradas en `index.html` (Playfair Display + Inter)
- Colores: Modifica `tailwind.config.js` para cambiar la paleta
- Animaciones: Ajusta en cada componente usando Framer Motion

## 🌐 Deploy en Vercel

1. Sube tu código a GitHub
2. Conecta tu repositorio en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Vite
4. ¡Deploy automático en cada push!

## 📧 Integración de Formulario

Si deseas agregar un formulario de contacto, puedes integrarlo con:
- [Formspree](https://formspree.io/)
- [EmailJS](https://www.emailjs.com/)
- [Web3Forms](https://web3forms.com/)

## 🛠️ Tecnologías

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React (iconos)

## 📁 Estructura del Proyecto

```
portfolio-periodista/
├── public/
│   └── cv.pdf          # Coloca aquí tu CV
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Resume.jsx
│   │   ├── Portfolio.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Skills.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 📄 Licencia

MIT
