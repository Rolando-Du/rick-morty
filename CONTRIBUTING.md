# Contribuir

Gracias por el interés en mejorar este proyecto.

## Flujo recomendado

1. Crear una rama desde `master`.
2. Realizar cambios pequeños y enfocados.
3. Ejecutar las validaciones locales.
4. Crear commits descriptivos.
5. Abrir un pull request explicando el objetivo y los cambios.

## Validaciones

Antes de enviar cambios:

```bash
npm install
npm run lint
npm run build
```

## Estilo

- Mantener componentes y hooks enfocados en una sola responsabilidad.
- Evitar lógica HTTP dentro de componentes de presentación.
- Mantener accesibilidad y responsive design.
- No agregar dependencias sin una necesidad clara.
- No versionar secretos ni archivos `.env`.

## Pull requests

Incluí una descripción breve, cómo probar el cambio y capturas cuando modifique la interfaz.
