const express = require('express'); 
const cors = require('cors'); 
const usuariosRoutes = require('./routes/usuarios'); 
const authRoutes = require('./routes/auth'); 
 
const app = express(); 
 
// Middlewares 
app.use(cors()); 
app.use(express.json()); 
 
// Rutas 
app.use('/api/usuarios', usuariosRoutes); 
app.use('/api/auth', authRoutes); 
 
// Ruta de prueba 
app.get('/', (req, res) =
  res.json({ mensaje: 'API Tennis Booking System funcionando' }); 
}); 
 
app.listen(PORT, () =
  console.log(`Servidor corriendo en puerto ${PORT}`); 
}); 
 
module.exports = app; 
"// Modificaci¢n en master" 
