const express = require('express'); 
const router = express.Router(); 
 
// Ruta de registro 
router.post('/registro', (req, res) =
  res.json({ mensaje: 'Registro de usuario' }); 
}); 
 
module.exports = router; 
