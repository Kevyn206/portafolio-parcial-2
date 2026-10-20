# 💻 Portafolio Personal - Kevyn Vizcaya

Aplicación web interactiva tipo **Portafolio Personal** desarrollada en React con Vite. El proyecto presenta el perfil profesional, trayectoria laboral, formación académica, proyectos destacados y un formulario de contacto funcional validado.

El desarrollo cumple con la arquitectura **Atomic Design**, mejores prácticas de **Clean Code (ES6+)**, uso de **React Hooks** y una suite de **pruebas automatizadas**.

---

## 📋 Tabla de Contenidos
- [Características y Secciones](#-características-y-secciones)
- [Arquitectura y Estructura (Atomic Design)](#-arquitectura-y-estructura-atomic-design)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Requisitos Previos e Instalación](#-requisitos-previos-e-instalación)
- [Ejecución en Entorno Local](#-ejecución-en-entorno-local)
- [Pruebas Automatizadas (Testing)](#-pruebas-automatizadas-testing)
- [Estándares de Código y Buenas Prácticas](#-estándares-de-código-y-buenas-prácticas)
- [Contacto](#-contacto)

---

## ✨ Características y Secciones

De acuerdo con las especificaciones del documento de requerimientos, la aplicación cuenta con las 6 secciones requeridas:

1. **Sección Personal ("¿Quién soy?"):** Nombre del perfil (Kevyn Vizcaya), avatar estilizado y descripción enfocada en desarrollo Web y Móvil (Android).
2. **Experiencia Laboral:** Listado cronológico de experiencias (Desarrollador Junior Mobile, Freelance) con nombre de empresa, cargo y fechas de inicio/término *(empresas ficticias por ahora)*.
3. **Estudios:** Detalle de la formación académica (Enseñanza Media y Analista Programador en Instituto Profesional Duoc UC).
4. **Desarrollos y Proyectos:** Galería/carrusel interactivo de proyectos con previsualizaciones, resúmenes tecnológicos y enlaces directos a repositorios en GitHub.
5. **Contacto:** Enlaces a redes sociales (LinkedIn, GitHub) y formulario de contacto desplegable e interactivo con validación del lado del cliente.
6. **Footer (Pie de página):** Cálculo dinámico del año actual mediante código, derechos de autor e información de contacto directo por correo.

---

## 📐 Arquitectura y Estructura (Atomic Design)

El código fuente está estructurado bajo la metodología **Atomic Design System**, desacoplando responsabilidades y evitando componentes monolíticos:

```text
src/
├── assets/                  # Recursos estáticos (imágenes, logotipos y foto de perfil)
├── components/
│   ├── atoms/               # Átomos (Títulos, Avatar, Badges)
│   ├── molecules/           # Moléculas (Campos de formulario con label, Tarjetas de proyectos, Cajas de texto)
│   ├── organisms/           # Organismos (Cada uno de los requerimientos de contenido / Secciones)
│   └── pages/               # Páginas (Home)
├── hooks/                   # Custom Hooks para gestión de estado, eventos y validación
├── tests/                   # Pruebas unitarias y de integración (Vitest / Testing Library)
├── App.jsx                  # Componente principal
└── main.jsx                 # Punto de entrada de React
```

---

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework:** React 19 (Vite)
- **Librería UI:** Chakra UI
- **Lenguaje:** JavaScript (ES6+)
- **Testing:** Vitest + React Testing Library
- **Iconos:** Chakra UT Lu Icons

---

## 🚀 Requisitos Previos e Instalación

### Prerrequisitos
- **Node.js** (versión 18.0.0 o superior)
- **npm** (incluido con Node.js) o **yarn**

### Pasos de Instalación

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/Kevyn206/portafolio-parcial-2
   ```

2. **Navegar al directorio del proyecto:**
   ```bash
   cd portafolio-parcial-2
   ```

3. **Instalar dependencias:**
   ```bash
   npm install
   ```

### Pasos de instalación de la librería

1. **Después de instalar las dependencias:**
    ```bash
    npm i @chakra-ui/react @emotion/react

    npx @chakra-ui/cli snippet add
    # Snippet es necesario para correr los componentes de Chakra
    ```

2. **Vitest (tests unitarios):**
    ```bash
    npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
    ```

---

## 💻 Ejecución en Entorno Local

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Abre tu navegador en `http://localhost:5173` para visualizar la aplicación.

Para compilar el proyecto para producción:

```bash
npm run build
```

---

## 🧪 Pruebas Automatizadas (Testing)

El proyecto cuenta con pruebas automatizadas que verifican el correcto renderizado de los componentes críticos (organismos) y el comportamiento interactivo del formulario de contacto.

Ejecutar la suite de pruebas:

```bash
npm test
```

---

## 🧹 Estándares de Código y Buenas Prácticas

- **Scope estricto:** Uso exclusivo de `const` y `let` (se prohíbe `var`).
- **Control de Estado:** Implementación limpia de Hooks (`useState`, `useEffect`) evitando renderizados innecesarios y mutaciones directas.
- **Consistencia Visual:** Uso integral y coherente de la librería de UI para diseño accesible y responsivo.

---

## 📬 Contacto

- **Desarrollador:** Kevyn Vizcaya
- **Correo electrónico:** ke.vizcaya@duocuc.cl
- **LinkedIn:** [Perfil en LinkedIn](https://www.linkedin.com/in/kevyn-vizcaya-348038445/?isSelfProfile=true)
- **GitHub:** [Perfil en GitHub](https://github.com/Kevyn206)


---

© 2026 Kevyn Vizcaya. Todos los derechos reservados.