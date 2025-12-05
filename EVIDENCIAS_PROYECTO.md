# 🎓 EVIDENCIAS - PROYECTO TENNIS BOOKING SYSTEM

## 📊 RAMAS DEL PROYECTO

### Locales:
- main (actual)
- sprint-1-desarrollo
- feature/231165-design
- feature/231165-diseño
- conflicto-branch
- conflicto-ejemplo

### Remotas (GitHub):
- origin/main
- origin/sprint-1-desarrollo
- origin/feature/231165-design
- origin/feature/231165-diseño
- origin/conflicto-branch
- origin/conflicto-ejemplo

## 🏗️ ESTRUCTURA DEL PROYECTO
tennis-booking-system/
├── backend/ # API Node.js/Express
├── frontend/ # React Components
├── database/ # Esquemas SQL
├── docs/ # Documentación
├── README.md
└── archivo_conflicto.txt # Evidencia de conflicto resuelto

## ✅ CRITERIOS CUMPLIDOS

### 1. Flujo de trabajo ✓
- HU1: Registro usuario (edad ≥ 18)
- HU2: Generación automática contraseña
- HU3: Login con bloqueo (3 intentos)
- HU4: Sistema de reservas

### 2. Prototipado ✓
- Frontend: React + Bootstrap
- Backend: Node.js + Express + JWT
- Database: MySQL con validaciones

### 3. Sprint completado ✓
- 8 commits semánticos
- Merge exitoso a main
- Código funcional

### 4. Git/GitHub ✓
- Conflicto creado/resuelto
- Rama personal: feature/231165-design
- Todo subido a GitHub

## 🔗 ENLACES
- **Repositorio:** https://github.com/231165-design/tennis-booking-system
- **Commit conflicto:** 324c907 (Merge branch 'conflicto-branch')
- **Tu contribución:** 488226e (feature/231165-design)

## 📝 CÓDIGO CLAVE

### Validación de edad (Usuario.js):
`javascript
edad: {
  type: DataTypes.INTEGER,
  allowNull: false,
  validate: { min: 18 }  // ← VALIDACIÓN EDAD ≥ 18
}
if (usuarioSimulado.intentosFallidos >= 3) {
  usuarioSimulado.bloqueado = true;
  return res.status(403).json({
    error: 'Cuenta bloqueada por múltiples intentos fallidos.'
  });
}
