const express = require('express'); 
const router = express.Router(); 
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken'); 
 
// Ruta de login 
router.post('/login', async (req, res) =
  try { 
    const { email, password } = req.body; 
 
    // Simulaci¢n: buscar usuario en base de datos 
    const usuarioSimulado = { 
      id: 1, 
      email: email, 
      contrase¤aHash: await bcrypt.hash('password123', 10), // Contrase¤a simulada 
      intentosFallidos: 0, 
      bloqueado: false 
    }; 
 
    // Verificar si la cuenta est  bloqueada 
    if (usuarioSimulado.bloqueado) { 
      return res.status(403).json({ 
        error: 'Cuenta bloqueada. Contacte al administrador.' 
      }); 
    } 
 
    // Verificar contrase¤a (simulada) 
    const passwordValida = await bcrypt.compare(password, usuarioSimulado.contrase¤aHash); 
 
    if (!passwordValida) { 
      // Incrementar intentos fallidos 
      usuarioSimulado.intentosFallidos += 1; 
 
      // Bloquear si alcanza 3 intentos 
      if (usuarioSimulado.intentosFallidos  { 
        usuarioSimulado.bloqueado = true; 
        return res.status(403).json({ 
          error: 'Cuenta bloqueada por m£ltiples intentos fallidos.' 
        }); 
      } 
 
      return res.status(401).json({ 
        error: `Credenciales incorrectas. Intentos restantes: ${3 - usuarioSimulado.intentosFallidos}` 
      }); 
    } 
 
    // Login exitoso - generar token JWT 
    const token = jwt.sign( 
      { id: usuarioSimulado.id, email: usuarioSimulado.email }, 
      'secreto_jwt', // En producci¢n usar variable de entorno 
      { expiresIn: '24h' } 
    ); 
 
    res.json({ 
      mensaje: 'Login exitoso', 
      token, 
      usuario: { 
        id: usuarioSimulado.id, 
        email: usuarioSimulado.email 
      } 
    }); 
 
  } catch (error) { 
    console.error('Error en login:', error); 
    res.status(500).json({ error: 'Error interno del servidor' }); 
  } 
}); 
 
module.exports = router; 
