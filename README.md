<div align="center">

# 🧪 Rick & Morty Explorer

### Explorador moderno de personajes construido con React, Vite y Tailwind CSS

[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![CI](https://img.shields.io/github/actions/workflow/status/Rolando-Du/rick-morty/ci.yml?branch=master&style=for-the-badge&label=CI)](https://github.com/Rolando-Du/rick-morty/actions)

[🌐 Ver aplicación](https://rick-morty-sand-seven.vercel.app) · [📚 Documentación técnica](./docs/modernizacion.md)

</div>

---

## Descripción

**Rick & Morty Explorer** es una reconstrucción completa de un proyecto anterior, realizada desde cero con un stack frontend moderno.

La aplicación consume la API pública de Rick and Morty y permite explorar personajes mediante búsqueda, filtros combinados, paginación y vistas individuales. La comunicación con la API pasa por un proxy local en desarrollo y por rewrites de Vercel en producción para evitar depender de solicitudes cross-origin directas desde el navegador.

---

## Funcionalidades

- Listado paginado de personajes.
- Búsqueda por nombre.
- Filtros por estado, género y especie.
- Combinación de búsqueda y filtros.
- Resumen con cantidad de resultados y página actual.
- Detalle individual de cada personaje.
- Navegación con React Router.
- Página 404 personalizada.
- Skeleton loading.
- Manejo específico de errores HTTP 404 y 429.
- Diseño responsive.
- Proxy de API en desarrollo con Vite.
- Proxy de API en producción con Vercel.
- Integración continua con GitHub Actions.

---

## Stack

```text
React 19
Vite 8
Tailwind CSS 4
React Router
Fetch API
Oxlint
GitHub Actions
Vercel
Rick and Morty API
```

---

## Arquitectura

```text
Usuario
  ↓
React Router
  ↓
Pages
  ↓
Components
  ↓
Custom Hooks
  ↓
Services
  ↓
Proxy Vite / Vercel
  ↓
Rick and Morty API
```

La aplicación no necesita un backend propio porque los datos provienen de una API pública.

---

## Estructura

```text
rick-morty/
├── docs/
│   └── modernizacion.md
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── ci.yml
├── .gitignore
├── .oxlintrc.json
├── index.html
├── package.json
├── vercel.json
└── vite.config.js
```

---

## Instalación

```bash
git clone https://github.com/Rolando-Du/rick-morty.git
cd rick-morty
npm install
npm run dev
```

La aplicación se inicia normalmente en:

```text
http://localhost:5173
```

No se requieren variables de entorno para ejecutar la versión actual.

---

## Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

| Script | Uso |
|---|---|
| `npm run dev` | inicia Vite en desarrollo |
| `npm run lint` | ejecuta Oxlint |
| `npm run build` | genera el build de producción |
| `npm run preview` | previsualiza el build localmente |

---

## Proxy de API

En desarrollo, Vite redirige:

```text
/api/rickmorty/*
```

hacia:

```text
https://rickandmortyapi.com/api/*
```

En producción, `vercel.json` replica el mismo comportamiento mediante rewrites.

Las URLs absolutas de `next` y `prev` entregadas por la API se normalizan antes de usarse, garantizando que la paginación continúe pasando por el proxy.

---

## Calidad y CI

El proyecto utiliza **Oxlint** y un workflow de **GitHub Actions**.

En cada push o pull request sobre `master`, CI ejecuta:

```text
npm ci
npm run lint
npm run build
```

Esto permite detectar errores de calidad o compilación antes de integrar cambios.

---

## Deployment

La aplicación está desplegada en Vercel:

**https://rick-morty-sand-seven.vercel.app**

Configuración principal:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

---

## Documentación técnica

El proceso completo de reconstrucción, decisiones de arquitectura, proxy, componentes, hooks, pruebas y deployment está documentado en:

**[docs/modernizacion.md](./docs/modernizacion.md)**

---

## Estado

```text
✓ aplicación funcional
✓ responsive
✓ búsqueda y filtros
✓ paginación
✓ detalle de personajes
✓ manejo de errores
✓ proxy desarrollo/producción
✓ lint
✓ build
✓ CI
✓ deployment en Vercel
```

---

## Autor

Desarrollado por **Rolando Duarte**.

[![GitHub](https://img.shields.io/badge/GitHub-Rolando--Du-181717?style=for-the-badge&logo=github)](https://github.com/Rolando-Du)
