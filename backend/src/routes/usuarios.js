const express = require('express'); 
const router = express.Router(); 
const bcrypt = require('bcrypt'); 
 
// Funcion para generar contrase¤a aleatoria 
function generarContrase¤a() { 
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  let contrase¤a = ''; 
    contrase¤a += caracteres.charAt(Math.floor(Math.random() * caracteres.length)); 
  } 
  return contrase¤a; 
} 
 
// Ruta de registro 
router.post('/registro', async (req, res) =
  try { 
    const { nombre, apellido, email, edad, domicilio } = req.body; 
 
    // Validar edad (debe ser mayor de edad) 
      return res.status(400).json({ 
        error: 'Debe ser mayor de 18 a¤os para registrarse' 
      }); 
    } 
 
    // Generar contrase¤a autom tica 
    const contrase¤aPlana = generarContrase¤a(); 
 
    // Encriptar contrase¤a 
    const salt = await bcrypt.genSalt(10); 
    const contrase¤aHash = await bcrypt.hash(contrase¤aPlana, salt); 
 
    // Aqu¡ ir¡a la l¢gica para guardar en base de datos 
    // y enviar el email con la contrase¤a 
 
    res.status(201).json({ 
      mensaje: 'Usuario registrado exitosamente', 
      emailEnviado: true, 
      // En desarrollo real, NO enviar¡amos la contrase¤a en la respuesta 
      contrase¤aGenerada: contrase¤aPlana 
    }); 
 
  } catch (error) { 
    console.error('Error en registro:', error); 
    res.status(500).json({ error: 'Error interno del servidor' }); 
  } 
}); 
 
module.exports = router; 
