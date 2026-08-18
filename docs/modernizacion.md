
## Documentación técnica

La documentación completa del proceso de reconstrucción y modernización del proyecto se encuentra en:

[Ver documentación completa](./docs/modernizacion.md)


# Modernización del proyecto Rick & Morty

## 1. Introducción

El proyecto **Rick & Morty** es una aplicación web desarrollada con React que consume información de la API pública de Rick and Morty para mostrar personajes de la serie.

El objetivo de este trabajo será modernizar la aplicación, actualizando su entorno de desarrollo, organización del código, interfaz visual y proceso de construcción.

La modernización tendrá como base las siguientes tecnologías:

* React
* Vite
* npm
* Tailwind CSS
* JavaScript moderno
* Fetch API
* Rick and Morty API
* Vercel para publicación

La aplicación actual publicada continúa funcionando como aplicación React del lado del cliente. El proyecto será migrado a una arquitectura basada en Vite para reemplazar el entorno anterior asociado a Create React App.

Create React App fue oficialmente deprecado por React y para proyectos existentes se recomienda la migración hacia herramientas modernas como Vite.

---

# 2. Objetivo general

Modernizar la aplicación existente de Rick & Morty migrándola a un entorno basado en **React + Vite + Tailwind CSS**, mejorando tanto su estructura técnica como su diseño visual, mantenibilidad y experiencia de usuario.

---

# 3. Objetivos específicos

La modernización deberá permitir:

* Eliminar la dependencia de Create React App.
* Utilizar Vite como herramienta de desarrollo y construcción.
* Administrar las dependencias utilizando npm.
* Implementar Tailwind CSS para el diseño.
* Mantener el consumo de la Rick and Morty API.
* Separar componentes, servicios y vistas.
* Mejorar la interfaz gráfica.
* Implementar un diseño responsive.
* Mejorar la gestión de estados de carga y errores.
* Mantener el proyecto preparado para desplegarse en Vercel.
* Facilitar futuras ampliaciones de funcionalidades.

---

# 4. Situación actual

La versión existente fue construida utilizando una estructura tradicional de React.

La actualización propone abandonar el esquema basado en Create React App y reemplazarlo por Vite.

La migración no tiene como objetivo simplemente cambiar la herramienta de compilación, sino reorganizar el proyecto para que tenga una arquitectura más clara y escalable.

---

# 5. Arquitectura propuesta

La nueva aplicación continuará siendo una **Single Page Application (SPA)** desarrollada con React.

La arquitectura general será:

```text
Usuario
   │
   ▼
React
   │
   ▼
Componentes / Páginas
   │
   ▼
Servicios
   │
   ▼
Fetch API
   │
   ▼
Rick and Morty API
```

No será necesario desarrollar inicialmente un backend propio, debido a que la información se obtiene directamente desde la API pública.

---

# 6. Stack tecnológico

## Frontend

**React**

Se utilizará para construir la interfaz mediante componentes reutilizables.

**Vite**

Se utilizará como herramienta de desarrollo y construcción de la aplicación.

Vite dispone actualmente de templates oficiales para React y permite crear el proyecto mediante npm.

**Tailwind CSS**

Será utilizado para definir:

* colores;
* tipografías;
* espacios;
* grillas;
* tarjetas;
* botones;
* responsive design;
* estados visuales;
* animaciones y transiciones.

La integración recomendada actualmente para proyectos Vite utiliza los paquetes `tailwindcss` y `@tailwindcss/vite`.

**npm**

Se utilizará como administrador de dependencias.

---

# 7. Requisitos del entorno

La versión actual de Vite requiere Node.js 20.19+ o 22.12+.

Antes de comenzar deberá verificarse:

```bash
node -v
npm -v
```

---

# 8. Creación del nuevo proyecto

El proyecto podrá crearse inicialmente utilizando:

```bash
npm create vite@latest
```

Seleccionando:

```text
Framework: React
Variant: JavaScript
```

También puede crearse directamente:

```bash
npm create vite@latest rick-morty -- --template react
```

Luego:

```bash
cd rick-morty
npm install
```

El comando oficial de creación mediante npm forma parte del flujo recomendado por Vite.

---

# 9. Instalación de Tailwind CSS

Se instalarán las dependencias:

```bash
npm install tailwindcss @tailwindcss/vite
```

La configuración utilizará el plugin oficial de Tailwind para Vite.

---

# 10. Configuración de Vite

El archivo:

```text
vite.config.js
```

podrá tener la siguiente configuración:

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
});
```

---

# 11. Configuración de Tailwind

En el archivo principal de estilos:

```text
src/index.css
```

se utilizará:

```css
@import "tailwindcss";
```

Esta es la sintaxis utilizada por la instalación actual de Tailwind CSS con Vite.

No será necesario mantener grandes archivos CSS con estilos individuales para cada componente.

La mayor parte del diseño podrá realizarse mediante clases Tailwind.

---

# 12. Estructura propuesta

La nueva estructura será:

```text
rick-morty/
│
├── public/
│   └── assets/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── CharacterCard.jsx
│   │   ├── CharacterGrid.jsx
│   │   ├── Header.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Filters.jsx
│   │   ├── Pagination.jsx
│   │   ├── Loader.jsx
│   │   └── ErrorMessage.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── CharacterDetail.jsx
│   │
│   ├── services/
│   │   └── characterService.js
│   │
│   ├── hooks/
│   │   └── useCharacters.js
│   │
│   ├── utils/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

Esta separación permitirá mantener responsabilidades claras entre interfaz, lógica y comunicación con la API.

---

# 13. API utilizada

La aplicación continuará utilizando la **Rick and Morty API**.

La API dispone de tres recursos principales:

```text
characters
locations
episodes
```

La URL base es:

```text
https://rickandmortyapi.com/api
```

Para personajes:

```text
https://rickandmortyapi.com/api/character
```

La API devuelve los resultados paginados e incluye información para conocer cantidad de registros, páginas disponibles, página siguiente y página anterior.

---

# 14. Servicio de personajes

La comunicación con la API deberá estar separada de los componentes React.

Archivo:

```text
src/services/characterService.js
```

Ejemplo:

```javascript
const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://rickandmortyapi.com/api";

export const getCharacters = async ({
  page = 1,
  name = "",
  status = "",
  species = "",
}) => {
  const params = new URLSearchParams({
    page: String(page),
  });

  if (name) params.append("name", name);
  if (status) params.append("status", status);
  if (species) params.append("species", species);

  const response = await fetch(
    `${API_URL}/character?${params.toString()}`
  );

  if (!response.ok) {
    throw new Error("No fue posible obtener los personajes");
  }

  return response.json();
};
```

De esta forma los componentes no tendrán responsabilidad directa sobre la construcción de las peticiones HTTP.

---

# 15. Variables de entorno

Se utilizará:

```text
.env
```

con:

```env
VITE_API_URL=https://rickandmortyapi.com/api
```

En React se accederá mediante:

```javascript
import.meta.env.VITE_API_URL
```

Vite expone al código cliente las variables cuyo nombre comienza con `VITE_`. Estas variables no deben utilizarse para almacenar secretos porque pasan a formar parte del código cliente generado.

También se incluirá:

```text
.env.example
```

con:

```env
VITE_API_URL=
```

El archivo `.env` podrá excluirse del repositorio mediante `.gitignore`.

---

# 16. Componente principal

`App.jsx` será responsable de organizar las principales secciones de la aplicación.

Ejemplo conceptual:

```jsx
function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 py-8">
        <Home />
      </main>
    </div>
  );
}

export default App;
```

La lógica relacionada con personajes no deberá concentrarse dentro de `App.jsx`.

---

# 17. Tarjeta de personaje

Cada personaje deberá representarse mediante un componente:

```text
CharacterCard.jsx
```

La tarjeta podrá mostrar:

* imagen;
* nombre;
* estado;
* especie;
* género;
* origen;
* ubicación.

Ejemplo visual:

```text
┌─────────────────────────────┐
│                             │
│        Imagen personaje     │
│                             │
├─────────────────────────────┤
│ Rick Sanchez                │
│ ● Alive                     │
│ Human                       │
│                             │
│ Origen: Earth (C-137)       │
└─────────────────────────────┘
```

Los colores del estado pueden distinguir:

```text
Alive   → verde
Dead    → rojo
Unknown → gris
```

---

# 18. Diseño visual

La modernización deberá abandonar una estética básica de proyecto académico y adoptar una interfaz más cercana a una aplicación moderna.

Se propone:

* fondo oscuro;
* tarjetas con bordes suaves;
* imágenes grandes;
* sombras discretas;
* acentos verdes inspirados en Rick & Morty;
* botones modernos;
* animaciones pequeñas al pasar el mouse;
* mayor separación visual entre elementos;
* tipografía clara;
* diseño completamente responsive.

Ejemplo de tarjeta:

```jsx
<article
  className="
    overflow-hidden
    rounded-2xl
    border
    border-slate-800
    bg-slate-900
    shadow-lg
    transition
    duration-300
    hover:-translate-y-1
    hover:shadow-xl
  "
>
```

---

# 19. Responsive Design

La aplicación deberá adaptarse a:

* celulares;
* tablets;
* notebooks;
* monitores de escritorio.

La grilla podrá utilizar:

```jsx
<div
  className="
    grid
    grid-cols-1
    gap-6
    sm:grid-cols-2
    lg:grid-cols-3
    xl:grid-cols-4
  "
>
```

De esta forma el número de tarjetas cambia automáticamente según el ancho disponible.

---

# 20. Buscador

La aplicación incorporará un campo de búsqueda por personaje.

Ejemplo:

```text
Buscar personaje...
```

El nombre ingresado se enviará como filtro a la API.

Esto permitirá evitar descargar todos los personajes para posteriormente filtrarlos en el navegador.

---

# 21. Filtros

Se podrán incluir filtros por:

```text
Estado
- Alive
- Dead
- Unknown

Género
- Female
- Male
- Genderless
- Unknown

Especie
```

Los filtros deberán combinarse con el buscador.

---

# 22. Paginación

La API devuelve hasta 20 documentos por página y proporciona información sobre la cantidad de páginas y enlaces siguiente/anterior.

Por ello se implementará un componente:

```text
Pagination.jsx
```

con controles:

```text
← Anterior

Página 3 de 42

Siguiente →
```

Los botones deberán quedar deshabilitados cuando no exista una página anterior o siguiente.

---

# 23. Estados de la interfaz

La aplicación deberá contemplar cuatro estados principales.

## Cargando

Mientras se consulta la API:

```text
Cargando personajes...
```

Preferentemente mediante skeleton cards o un loader.

## Datos disponibles

Se presenta la grilla de personajes.

## Sin resultados

Ejemplo:

```text
No encontramos personajes con esos filtros.
```

## Error

Ejemplo:

```text
No pudimos obtener la información.

Intentar nuevamente
```

Esto evita mostrar pantallas vacías cuando ocurre un inconveniente.

---

# 24. Custom Hook

Para separar todavía más la lógica se podrá implementar:

```text
useCharacters.js
```

Responsable de administrar:

```javascript
characters
loading
error
page
filters
```

Conceptualmente:

```javascript
const {
  characters,
  info,
  loading,
  error,
} = useCharacters(filters);
```

Esto permite mantener los componentes principalmente orientados a presentación.

---

# 25. Página de detalle

Como mejora de la aplicación podrá incorporarse una pantalla individual para cada personaje.

Ejemplo:

```text
/characters/1
```

Esta vista podrá mostrar:

```text
Rick Sanchez

Estado: Alive
Especie: Human
Género: Male
Origen: Earth (C-137)
Ubicación actual: Citadel of Ricks

Episodios:
S01E01
S01E02
...
```

La Rick and Morty API permite obtener un personaje individual indicando su identificador.

---

# 26. Gestión del estado

Para el alcance actual no será necesario incorporar Redux u otra librería global de estado.

Se priorizará:

```text
useState
useEffect
custom hooks
props
```

La arquitectura podrá evolucionar posteriormente si aumenta la complejidad funcional.

---

# 27. Accesibilidad

Durante la modernización deberán aplicarse buenas prácticas como:

* utilizar etiquetas HTML semánticas;
* incluir `alt` en imágenes;
* asociar `label` a campos;
* garantizar contraste suficiente;
* permitir navegación mediante teclado;
* indicar correctamente botones deshabilitados;
* evitar depender exclusivamente del color para transmitir información.

Ejemplo:

```jsx
<img
  src={character.image}
  alt={`Imagen de ${character.name}`}
/>
```

---

# 28. Manejo de errores

Todas las consultas deberán controlar errores.

No se deberá utilizar:

```javascript
fetch(url).then(...)
```

sin controlar el resultado HTTP.

La capa `services` deberá determinar si la respuesta fue correcta.

Ejemplo:

```javascript
if (!response.ok) {
  throw new Error("Error al consultar la API");
}
```

Posteriormente el componente mostrará un mensaje comprensible para el usuario.

---

# 29. ESLint

El proyecto mantendrá ESLint para detectar:

* variables sin utilizar;
* errores frecuentes;
* problemas de sintaxis;
* prácticas incorrectas en React.

Esto contribuirá a mantener una calidad consistente del código.

---

# 30. Scripts npm

Los principales scripts serán:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

En los proyectos creados mediante Vite los scripts básicos utilizan `vite`, `vite build` y `vite preview`.

## Desarrollo

```bash
npm run dev
```

Inicia el servidor local.

## Producción

```bash
npm run build
```

Genera la versión optimizada para producción.

Vite genera el bundle de producción mediante `vite build`.

## Preview

```bash
npm run preview
```

Permite probar localmente el resultado de producción antes del deployment.

---

# 31. Migración desde Create React App

La migración se realizará gradualmente.

## Etapa 1 — Inventario

Identificar:

```text
componentes actuales
imágenes
CSS
dependencias
llamadas API
funcionalidades
```

## Etapa 2 — Crear estructura Vite

Crear el nuevo entorno React + Vite.

## Etapa 3 — Instalar Tailwind

Configurar Tailwind utilizando el plugin de Vite.

## Etapa 4 — Migrar componentes

Mover progresivamente los componentes React existentes.

## Etapa 5 — Reemplazar CSS

Transformar los estilos existentes en clases Tailwind.

## Etapa 6 — Separar servicios

Extraer las llamadas a la API desde los componentes hacia:

```text
src/services/
```

## Etapa 7 — Refactorizar

Separar componentes demasiado grandes.

## Etapa 8 — Validar

Comprobar:

```text
búsqueda
filtros
personajes
imágenes
paginación
responsive
errores
```

## Etapa 9 — Build

Ejecutar:

```bash
npm run build
```

## Etapa 10 — Deployment

Publicar nuevamente la aplicación en Vercel.

---

# 32. Aspectos que deberán eliminarse de CRA

Durante la migración deberán revisarse referencias antiguas como:

```text
react-scripts
npm start
process.env.REACT_APP_*
%PUBLIC_URL%
reportWebVitals
serviceWorker
```

cuando estén presentes y no sean necesarias.

El comando de desarrollo pasará de:

```bash
npm start
```

a:

```bash
npm run dev
```

Y las variables:

```text
REACT_APP_API_URL
```

pasarán a utilizar la convención Vite:

```text
VITE_API_URL
```

---

# 33. Estrategia de componentes

La aplicación deberá aplicar el principio de responsabilidad única.

Incorrecto:

```text
App.jsx
 ├── API
 ├── filtros
 ├── tarjetas
 ├── paginación
 ├── estilos
 └── errores
```

Propuesto:

```text
App
 │
 ├── Header
 │
 └── Home
      │
      ├── SearchBar
      ├── Filters
      ├── CharacterGrid
      │    └── CharacterCard
      │
      ├── Pagination
      ├── Loader
      └── ErrorMessage
```

---

# 34. Experiencia de usuario

La aplicación deberá brindar feedback en todas las acciones.

Cuando el usuario:

```text
busca
filtra
cambia de página
recarga
encuentra un error
no encuentra resultados
```

la interfaz deberá comunicar claramente el estado actual.

---

# 35. Rendimiento

Para mejorar el rendimiento se evitará:

* solicitar datos innecesarios;
* realizar múltiples consultas idénticas;
* almacenar información duplicada;
* utilizar imágenes adicionales innecesariamente;
* cargar grandes dependencias para funcionalidades simples.

El uso de filtros propios de la API permitirá reducir procesamiento innecesario del lado del cliente.

---

# 36. Seguridad

La aplicación no maneja inicialmente información confidencial.

Sin embargo, deberán respetarse algunas reglas:

* no colocar secretos en el frontend;
* no guardar claves privadas en `.env` del frontend;
* no publicar tokens;
* mantener `.env` fuera de Git cuando corresponda;
* validar errores provenientes de servicios externos.

Las variables `VITE_*` forman parte del código cliente durante la construcción y por ello no deben contener información sensible.

---

# 37. Deployment en Vercel

Antes de publicar se ejecutará:

```bash
npm run build
```

La carpeta generada por Vite será:

```text
dist/
```

La configuración esperada para un proyecto Vite será:

```text
Build Command:
npm run build

Output Directory:
dist
```

El dominio actualmente utilizado podrá mantenerse o reemplazarse por uno nuevo según la estrategia de migración.

---

# 38. Criterios de aceptación

La modernización se considerará terminada cuando:

1. El proyecto ejecute correctamente con `npm run dev`.
2. No dependa de `react-scripts`.
3. Utilice Vite.
4. Utilice Tailwind CSS.
5. Consulte correctamente la Rick and Morty API.
6. Muestre los personajes.
7. Muestre correctamente las imágenes.
8. Controle estados de carga.
9. Controle errores.
10. Permita buscar personajes.
11. Permita navegar entre páginas si se implementa paginación.
12. Sea responsive.
13. Funcione correctamente en dispositivos móviles.
14. `npm run build` termine sin errores.
15. La versión de producción funcione en Vercel.
16. El repositorio tenga una estructura organizada.
17. Exista documentación actualizada en `README.md`.

---

# 39. Mejoras opcionales

Una vez terminada la migración principal podrán incorporarse:

* modo claro/oscuro;
* favoritos utilizando LocalStorage;
* página individual de personajes;
* filtros avanzados;
* búsqueda con debounce;
* skeleton loading;
* animaciones;
* listado de episodios;
* listado de ubicaciones;
* estadísticas;
* botón para limpiar filtros;
* botón para volver al inicio;
* breadcrumbs;
* persistencia de filtros en la URL;
* pruebas unitarias;
* tests de componentes.

Estas mejoras no deberían bloquear la migración inicial.

---

# 40. Resultado esperado

Al finalizar el proyecto se contará con una aplicación Rick & Morty moderna construida utilizando:

```text
React
      +
Vite
      +
Tailwind CSS
      +
Fetch API
      +
Rick and Morty API
      +
npm
      +
Vercel
```

La nueva versión tendrá una estructura más clara, componentes reutilizables, separación entre interfaz y acceso a datos y una experiencia visual adaptable a distintos dispositivos.

---

# 41. Conclusión

La modernización permitirá transformar el proyecto original en una aplicación React actualizada y preparada para continuar evolucionando.

La principal modificación técnica será reemplazar Create React App por Vite, acompañada de una reorganización del código y la incorporación de Tailwind CSS como sistema de estilos.

La migración deberá conservar la funcionalidad útil de la aplicación original, evitando una reescritura innecesaria de la lógica que ya funciona, pero aprovechando el proceso para separar responsabilidades, mejorar la calidad del código y actualizar completamente la presentación.

El resultado será un proyecto más limpio, moderno, mantenible y adecuado tanto como trabajo académico como para ser utilizado dentro de un portfolio de desarrollo frontend.
