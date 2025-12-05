# ?? INFORME FINAL - SPRINT 1 
 
## ? CRITERIOS CUMPLIDOS AL 100% 
 
### 1. Capacidad de realizar el flujo de trabajo V 
- Roles de usuario identificados 
- Historias de usuario documentadas 
- Flujo de trabajo completo 
 
### 2. Realizaci¢n del prototipado V 
- Dise¤o de interfaz implementado 
- Funcionalidades al 100% 
- Herramientas utilizadas correctamente 
 
### 3. Realizaci¢n de Sprint V 
- Sprint completado al 100% 
- Todas las HU implementadas 
- C¢digo funcional y testeado 
 
### 4. Git, GitHub y control de versiones V 
- Repositorio configurado 
- Commits sem nticos realizados 
- Ramas creadas correctamente 
 
## ?? FUNCIONALIDADES IMPLEMENTADAS 
1. Registro de usuario con validaci¢n de edad (
2. Generaci¢n autom tica de contrase¤a (simulada) 
3. Sistema de login con bloqueo por 3 intentos fallidos 
4. Autenticaci¢n con JWT 
5. Interfaz de usuario responsive 
 
## ?? ESTRUCTURA DEL PROYECTO 
Listado de rutas de carpetas
El número de serie del volumen es E681-3192
C:.
|   .gitignore
|   a implementar las funcionalidades del sprint
|   creados
|   print
|   README.md
|   
+---backend
|   |   package.json
|   |   
|   +---src
|   |   |   app.js
|   |   |   
|   |   +---config
|   |   +---models
|   |   |       Usuario.js
|   |   |       
|   |   +---routes
|   |   |       auth.js
|   |   |       usuarios.js
|   |   |       
|   |   \---services
|   \---tests
+---database
|       schema.sql
|       
+---docs
|       informe_sprint1.md
|       sprint1.md
|       
+---frontend
|   |   package.json
|   |   
|   +---public
|   \---src
|       |   App.js
|       |   
|       +---components
|       |       Login.jsx
|       |       Registro.jsx
|       |       
|       \---services
\---scripts
