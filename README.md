
# Rick & Morty Explorer

Aplicación web desarrollada con **React, Vite y Tailwind CSS** que consume la API pública de Rick and Morty para explorar personajes de la serie.

Este proyecto es una reconstrucción moderna de una aplicación anterior desarrollada con React, incorporando una arquitectura más organizada, navegación con React Router, filtros, paginación, vista de detalle y una estrategia de proxy para consumir la API tanto en desarrollo como en producción.

---

## Características

- Listado de personajes.
- Búsqueda por nombre.
- Filtro por estado.
- Filtro por género.
- Filtro por especie.
- Combinación de filtros.
- Limpieza de filtros.
- Paginación.
- Cantidad total de resultados.
- Página actual y cantidad total de páginas.
- Vista de detalle de cada personaje.
- Navegación mediante React Router.
- Página personalizada de error 404.
- Skeleton loading durante las consultas.
- Manejo de errores de la API.
- Manejo específico de respuestas HTTP 404 y 429.
- Diseño responsive.
- Interfaz desarrollada con Tailwind CSS.
- Proxy local mediante Vite.
- Proxy en producción mediante Vercel.
- Validación del código con Oxlint.

---

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- Tailwind CSS
- React Router
- Fetch API
- Rick and Morty API
- npm
- Oxlint
- Git
- GitHub
- Vercel

---

## Arquitectura

La aplicación está organizada separando responsabilidades entre componentes, páginas, hooks y servicios.

```text
src/
├── assets/
│
├── components/
│   ├── CharacterCard.jsx
│   ├── CharacterGrid.jsx
│   ├── ErrorMessage.jsx
│   ├── Filters.jsx
│   ├── Header.jsx
│   ├── Loader.jsx
│   ├── Pagination.jsx
│   ├── ResultsSummary.jsx
│   └── SearchBar.jsx
│
├── hooks/
│   ├── useCharacter.js
│   └── useCharacters.js
│
├── pages/
│   ├── CharacterDetail.jsx
│   ├── Home.jsx
│   └── NotFound.jsx
│
├── services/
│   └── characterService.js
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## Flujo de la aplicación

```text
Usuario
   ↓
React
   ↓
Pages / Components
   ↓
Custom Hooks
   ↓
Services
   ↓
Proxy
   ↓
Rick and Morty API
```

En desarrollo:

```text
React
   ↓
/api/rickmorty
   ↓
Vite Proxy
   ↓
https://rickandmortyapi.com/api
```

En producción:

```text
React
   ↓
/api/rickmorty
   ↓
Vercel Rewrite
   ↓
https://rickandmortyapi.com/api
```

El uso del proxy evita realizar las consultas directamente desde el navegador hacia el dominio externo de la API.

---

## API utilizada

El proyecto utiliza la API pública:

```text
https://rickandmortyapi.com/api
```

El recurso principal utilizado es:

```text
/character
```

La aplicación obtiene información como:

- ID
- nombre
- imagen
- estado
- especie
- género
- tipo
- origen
- ubicación
- episodios

La API también proporciona información de paginación mediante:

```text
count
pages
next
prev
```

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Rolando-Du/rick-morty.git
```

Entrar al proyecto:

```bash
cd rick-morty
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecutar en desarrollo

```bash
npm run dev
```

Vite iniciará el servidor de desarrollo, normalmente en:

```text
http://localhost:5173
```

---

## Proxy de desarrollo

El archivo:

```text
vite.config.js
```

configura un proxy para las llamadas realizadas a:

```text
/api/rickmorty
```

Las solicitudes son enviadas internamente a:

```text
https://rickandmortyapi.com/api
```

Esto permite que el frontend consuma la API utilizando rutas relativas.

---

## Rutas

La aplicación utiliza React Router.

### Inicio

```text
/
```

Muestra el listado de personajes, buscador, filtros y paginación.

### Detalle de personaje

```text
/characters/:id
```

Ejemplo:

```text
/characters/1
```

Muestra la información detallada del personaje seleccionado.

### Página no encontrada

Cualquier ruta inexistente muestra la página personalizada de error 404.

---

## Búsqueda y filtros

Los personajes pueden filtrarse utilizando:

### Nombre

Ejemplo:

```text
Rick
```

### Estado

```text
Alive
Dead
Unknown
```

### Género

```text
Female
Male
Genderless
Unknown
```

### Especie

Ejemplo:

```text
Human
Alien
```

Los filtros pueden combinarse entre sí.

---

## Paginación

La información de paginación es obtenida directamente desde la API.

La interfaz muestra:

```text
← Anterior

Página X de Y

Siguiente →
```

Las URLs `next` y `prev` devueltas por la API son normalizadas antes de utilizarlas para garantizar que las siguientes solicitudes continúen pasando por el proxy de la aplicación.

---

## Manejo de errores

La aplicación contempla distintos escenarios de error.

### Sin resultados

Cuando la API devuelve `404`:

```text
No se encontraron personajes con los filtros seleccionados
```

### Demasiadas solicitudes

Cuando la API devuelve `429`:

```text
La API está recibiendo demasiadas solicitudes.
Intentá nuevamente en unos segundos.
```

### Error general

Cuando ocurre otro inconveniente:

```text
No se pudieron obtener los personajes
```

---

## Estado de carga

Mientras se realiza una consulta a la API se muestran tarjetas tipo **skeleton**.

Esto evita mostrar una pantalla vacía mientras se obtienen los datos.

---

## Calidad del código

El proyecto utiliza Oxlint para validar el código.

Ejecutar:

```bash
npm run lint
```

Estado actual:

```text
0 warnings
0 errors
```

---

## Build de producción

Generar el build:

```bash
npm run build
```

Vite genera los archivos optimizados dentro de:

```text
dist/
```

---

## Probar el build localmente

```bash
npm run preview
```

Esto permite comprobar localmente la aplicación utilizando el build de producción.

---

## Deployment

La aplicación está preparada para desplegarse en **Vercel**.

El archivo:

```text
vercel.json
```

configura:

1. El proxy hacia Rick and Morty API.
2. El fallback hacia `index.html` para permitir que React Router maneje rutas como:

```text
/characters/1
```

La configuración utilizada es:

```json
{
  "rewrites": [
    {
      "source": "/api/rickmorty/:path*",
      "destination": "https://rickandmortyapi.com/api/:path*"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## Scripts disponibles

### Desarrollo

```bash
npm run dev
```

### Validación

```bash
npm run lint
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

---

## Flujo recomendado antes de subir cambios

Antes de realizar un commit:

```bash
npm run lint
npm run build
```

Si ambas validaciones terminan correctamente:

```bash
git add .
git commit -m "Descripción del cambio"
git push
```

Vercel realizará automáticamente un nuevo deployment al detectar cambios en el repositorio.

---

## Repositorio

GitHub:

```text
https://github.com/Rolando-Du/rick-morty
```

---

## Mejoras futuras

Entre las funcionalidades que podrían incorporarse se encuentran:

- favoritos utilizando LocalStorage;
- modo claro y oscuro;
- listado de episodios;
- detalle de episodios;
- listado de ubicaciones;
- detalle de ubicaciones;
- persistencia de filtros en la URL;
- debounce en el buscador;
- breadcrumbs;
- estadísticas;
- pruebas unitarias;
- pruebas de componentes;
- mejoras de accesibilidad.

---

## Autor

**Rolando Duarte**

---

## Estado del proyecto

Proyecto funcional y desplegado.

Actualmente cuenta con:

```text
React + Vite
Tailwind CSS
React Router
Rick and Morty API
Vite Proxy
Vercel Proxy
GitHub
Vercel
```

El proyecto fue validado correctamente mediante:

```text
npm run lint  → 0 warnings / 0 errors
npm run build → OK
```
