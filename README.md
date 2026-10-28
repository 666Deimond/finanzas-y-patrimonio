# Finanzas y Patrimonio — prototipo v0.3 (autenticación Firebase)

## Estado
Esta versión incorpora inicio de sesión real con Firebase Authentication (correo y contraseña) y no muestra registro público. Los movimientos de ejemplo siguen guardándose solo en IndexedDB en el navegador. **No está lista para datos financieros reales** y aún no implementa roles, creación de cuentas dentro de la app, Firestore, sincronización, ni respaldos automáticos en nube.

## Seguridad
- `firestore.rules` bloquea todas las lecturas y escrituras de Firestore por defecto.
- No cambies esas reglas a acceso público.
- La configuración del SDK web está en `index.html`; la API key web no es un secreto de servidor. La seguridad depende de reglas, Authentication y restricciones adecuadas.
- Esta app no es un antivirus.
- El inicio de sesión no cifra ni separa por usuario los movimientos locales del navegador; son datos ficticios de prueba solamente.

## Antes de probar
1. En Firebase Console → Authentication → Sign-in method, verifica que Email/Password esté activado.
2. En Authentication → Users, crea manualmente un usuario de prueba. No hay registro público.
3. Sirve esta carpeta mediante HTTPS (o `localhost` durante desarrollo). Abrir `index.html` directamente como archivo puede impedir que los módulos del SDK y el service worker funcionen.
4. Inicia sesión con el usuario de prueba.
5. No introduzcas ventas, información familiar ni datos patrimoniales reales.

## Publicación y costo cero
Este ZIP no está publicado en internet. Para utilizar módulos ES y service worker se necesita un origen HTTPS. Antes de elegir hosting, comprobar límites y condiciones actuales del proveedor. Mantener Firebase en Spark y no vincular facturación. No existe garantía de que los planes gratuitos duren para siempre.

## Próximas tareas
1. Definir el esquema de roles seguro, administrado en servidor.
2. Implementar la creación administrativa de cuentas mediante un mecanismo confiable; nunca permitir que el cliente se asigne su propio rol.
3. Escribir y probar reglas Firestore por usuario, familia y módulo.
4. Migrar movimientos a Firestore y definir cola offline, deduplicación y resolución de conflictos.
5. Proteger almacenamiento local, probar respaldo/restauración y realizar pruebas de autorización.
6. Solo después de pasar pruebas, habilitar datos reales.

## Meta de planificación
Página de prueba: 1 de diciembre de 2026.
Versión completa objetivo: 31 de enero de 2027. Son objetivos de planificación, no garantías.
