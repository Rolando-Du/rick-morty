# Security Policy

## Reportar una vulnerabilidad

Si encontrás un problema de seguridad, evitá publicarlo como issue con información sensible.

Podés reportarlo directamente al autor mediante el correo de contacto indicado en el perfil de GitHub.

Incluí, cuando sea posible:

- descripción del problema;
- pasos para reproducirlo;
- impacto estimado;
- versión, commit o entorno afectado;
- evidencia mínima necesaria, sin exponer datos de terceros.

## Alcance

Este repositorio no almacena credenciales ni secretos de producción. Las configuraciones sensibles no deben versionarse.

## Buenas prácticas

- No subir archivos `.env`.
- No publicar tokens o claves.
- Revisar dependencias antes de actualizar.
- Validar `lint` y `build` antes de integrar cambios.
