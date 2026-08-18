# Reconstrucción y modernización de Rick & Morty Explorer

## 1. Resumen

**Rick & Morty Explorer** fue reconstruido desde cero para reemplazar una implementación anterior basada en una estructura React más antigua por una aplicación moderna, mantenible y preparada para producción.

La versión final utiliza React, Vite, Tailwind CSS, React Router, Fetch API, Oxlint, GitHub Actions y Vercel.

La aplicación permite buscar, filtrar y paginar personajes, acceder a vistas de detalle y manejar estados de carga, errores HTTP y navegación SPA.

---

## 2. Objetivos alcanzados

- Reconstrucción completa con React + Vite.
- Eliminación de dependencias heredadas de Create React App.
- Arquitectura separada por páginas, componentes, hooks y servicios.
- Diseño responsive con Tailwind CSS.
- Búsqueda por nombre.
- Filtros por estado, género y especie.
- Paginación basada en la API.
- Vista de detalle por personaje.
- Página 404 personalizada.
- Skeleton loading.
- Manejo de errores 404, 429 y errores generales.
- Proxy local mediante Vite.
- Proxy de producción mediante Vercel rewrites.
- Normalización de URLs absolutas de paginación.
- Validación con Oxlint.
- Build de producción con Vite.
- Integración continua con GitHub Actions.
- Deployment en Vercel.

---

## 3. Stack final

```text
Frontend         React 19
Bundler          Vite 8
UI               Tailwind CSS 4
Routing          React Router
HTTP             Fetch API
Lint             Oxlint
CI               GitHub Actions
Deployment       Vercel
API              Rick and Morty API
Package manager  npm
```

---

## 4. Arquitectura

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
Proxy
   ↓
Rick and Morty API
```

La aplicación es una **Single Page Application (SPA)**. No requiere un backend propio porque los datos provienen de una API pública.

---

## 5. Estructura final

```text
rick-morty/
├── .github/
│   └── workflows/
│       └── ci.yml
├── docs/
│   └── modernizacion.md
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CharacterCard.jsx
│   │   ├── CharacterGrid.jsx
│   │   ├── ErrorMessage.jsx
│   │   ├── Filters.jsx
│   │   ├── Header.jsx
│   │   ├── Loader.jsx
│   │   ├── Pagination.jsx
│   │   ├── ResultsSummary.jsx
│   │   └── SearchBar.jsx
│   ├── hooks/
│   │   ├── useCharacter.js
│   │   └── useCharacters.js
│   ├── pages/
│   │   ├── CharacterDetail.jsx
│   │   ├── Home.jsx
│   │   └── NotFound.jsx
│   ├── services/
│   │   └── characterService.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── .oxlintrc.json
├── README.md
├── SECURITY.md
├── index.html
├── package-lock.json
├── package.json
├── vercel.json
└── vite.config.js
```

La versión actual no necesita variables de entorno para consumir la API, ya que utiliza rutas relativas a través del proxy.

---

## 6. Separación de responsabilidades

### Pages

Representan las pantallas completas de la aplicación.

### Components

Contienen elementos visuales reutilizables.

### Hooks

Administran estado, consultas, búsqueda, filtros y paginación.

### Services

Centralizan la comunicación HTTP y evitan que los componentes conozcan detalles de la API.

---

## 7. Servicio de personajes

`src/services/characterService.js` centraliza el acceso a la API.

Operaciones principales:

```javascript
getCharacters()
getCharacterById(id)
```

`getCharacters()` soporta filtros y paginación.

`getCharacterById(id)` obtiene un personaje individual.

---

## 8. Proxy de API

La aplicación consume internamente:

```text
/api/rickmorty
```

En lugar de consultar directamente desde el navegador:

```text
https://rickandmortyapi.com/api
```

Esta decisión evita depender de solicitudes cross-origin directas.

### Desarrollo

Vite redirige `/api/rickmorty/*` hacia la API externa.

Ejemplo:

```text
http://localhost:5173/api/rickmorty/character
        ↓
https://rickandmortyapi.com/api/character
```

### Producción

Vercel realiza el mismo comportamiento mediante `rewrites`.

Además, el fallback SPA permite acceder directamente a rutas como:

```text
/characters/1
```

sin obtener un 404 del hosting.

---

## 9. Normalización de paginación

La API devuelve `next` y `prev` como URLs absolutas.

Para que las páginas siguientes sigan pasando por el proxy, el servicio reemplaza conceptualmente:

```text
https://rickandmortyapi.com/api
```

por:

```text
/api/rickmorty
```

antes de realizar la siguiente solicitud.

---

## 10. Hook `useCharacters`

Administra:

```text
characters
info
search
status
gender
species
currentPage
loading
error
```

También contiene las acciones para:

- buscar;
- cambiar filtros;
- limpiar filtros;
- avanzar;
- retroceder.

---

## 11. Hook `useCharacter`

Se encarga de obtener un personaje individual a partir del ID de la ruta.

Estado administrado:

```text
character
loading
error
```

Esto mantiene la lógica HTTP fuera de la página de detalle.

---

## 12. Búsqueda y filtros

La aplicación permite combinar:

```text
Nombre
Estado
Género
Especie
```

Ejemplos de estado:

```text
Alive
Dead
Unknown
```

Ejemplos de género:

```text
Female
Male
Genderless
Unknown
```

Los filtros se envían directamente a la API para evitar descargar información innecesaria.

---

## 13. Paginación

La API entrega:

```text
count
pages
next
prev
```

La interfaz utiliza esta información para mostrar:

```text
← Anterior    Página X de Y    Siguiente →
```

Los botones quedan deshabilitados automáticamente cuando no existe una página disponible.

---

## 14. Vista de detalle

Ruta:

```text
/characters/:id
```

La pantalla muestra:

- imagen;
- nombre;
- ID;
- estado;
- especie;
- género;
- tipo;
- origen;
- última ubicación;
- cantidad de episodios.

---

## 15. Estados de interfaz

### Loading

Se utilizan skeleton cards para evitar una pantalla vacía durante las consultas.

### Sin resultados

El usuario recibe un mensaje específico cuando la API no encuentra personajes con los filtros seleccionados.

### Error 429

Se informa cuando la API está recibiendo demasiadas solicitudes.

### Otros errores

Se muestra un mensaje reutilizable mediante `ErrorMessage.jsx`.

---

## 16. Routing y 404

Rutas principales:

```text
/
/characters/:id
*
```

La ruta `*` muestra `NotFound.jsx`, manteniendo una experiencia consistente ante URLs inexistentes.

---

## 17. Diseño y responsive

La interfaz utiliza una estética oscura con acentos verdes.

Incluye:

- tarjetas redondeadas;
- sombras discretas;
- transiciones;
- estados hover;
- indicadores de estado;
- imágenes responsive;
- grillas adaptables;
- botones modernos.

La grilla utiliza aproximadamente:

```text
1 columna  → mobile
2 columnas → small
3 columnas → desktop
4 columnas → large desktop
```

---

## 18. Accesibilidad

Se incorporaron prácticas como:

- `alt` en imágenes;
- labels en formularios;
- `aria-label` en navegación;
- `role="alert"` para errores;
- estados `disabled` reales;
- elementos semánticos `main`, `nav` y `article`.

---

## 19. Calidad de código

Lint:

```bash
npm run lint
```

La configuración utiliza Oxlint.

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

---

## 20. Integración continua

El repositorio incluye:

```text
.github/workflows/ci.yml
```

En cada push o pull request a `master` se ejecuta:

```text
npm ci
npm run lint
npm run build
```

Esto agrega una validación automática adicional antes de integrar cambios.

---

## 21. Seguridad

El repositorio incluye `SECURITY.md`.

Principios aplicados:

- no versionar secretos;
- no publicar tokens;
- revisar dependencias;
- validar lint y build antes de integrar cambios.

Actualmente el proyecto no requiere secretos ni variables de entorno.

---

## 22. Deployment

Producción:

```text
https://rick-morty-sand-seven.vercel.app
```

Configuración:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

`vercel.json` contiene tanto el proxy externo como el fallback de la SPA.

---

## 23. Scripts

```bash
npm run dev
npm run lint
npm run build
npm run preview
```

---

## 24. Validaciones funcionales

```text
✓ listado
✓ imágenes
✓ búsqueda
✓ filtros
✓ combinación de filtros
✓ limpiar filtros
✓ paginación
✓ resumen de resultados
✓ detalle
✓ navegación
✓ 404
✓ skeleton loading
✓ errores HTTP
✓ proxy local
✓ proxy producción
✓ rutas directas
✓ lint
✓ build
✓ CI
✓ deployment
```

---

## 25. Mejoras futuras

Posibles extensiones:

- favoritos con LocalStorage;
- modo claro/oscuro;
- episodios y ubicaciones;
- debounce en búsqueda;
- filtros persistidos en URL;
- breadcrumbs;
- estadísticas;
- pruebas unitarias y de componentes;
- mejoras adicionales de accesibilidad.

---

## 26. Resultado

La reconstrucción transformó el proyecto en una aplicación moderna y organizada, con separación de responsabilidades, navegación, filtros, detalle, manejo de estados, proxy consistente entre desarrollo y producción, control de calidad automático y deployment reproducible.

El resultado final es una base más limpia, mantenible y preparada para seguir evolucionando.
