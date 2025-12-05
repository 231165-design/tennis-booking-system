const express = require('express'); 
const router = express.Router(); 
 
// Ruta de login 
router.post('/login', (req, res) =
  res.json({ mensaje: 'Login de usuario' }); 
}); 
 
module.exports = router; 
