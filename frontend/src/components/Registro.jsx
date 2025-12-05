import React, { useState } from 'react'; 
import axios from 'axios'; 
 
function Registro() { 
  const [formData, setFormData] = useState({ 
    nombre: '', 
    apellido: '', 
    email: '', 
    edad: '', 
    domicilio: '' 
  }); 
  const [error, setError] = useState(''); 
  const [success, setSuccess] = useState(false); 
  const [loading, setLoading] = useState(false); 
 
  const handleChange = (e) =
    const { name, value } = e.target; 
    setFormData({ ...formData, [name]: value }); 
 
    // Validaci¢n de edad en tiempo real 
    if (name === 'edad') { 
        setError('Debe ser mayor de 18 a¤os'); 
      } else { 
        setError(''); 
      } 
    } 
  }; 
 
  const handleSubmit = async (e) =
    e.preventDefault(); 
    setLoading(true); 
 
    try { 
      const response = await axios.post('http://localhost:3000/api/usuarios/registro', formData); 
      setSuccess(true); 
      console.log('Registro exitoso:', response.data); 
    } catch (err) { 
    } finally { 
      setLoading(false); 
    } 
  }; 
 
  return ( 
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}> 
      <h1>Registro de Usuario</h1> 
 
      {success ? ( 
        <div style={{ color: 'green', padding: '10px', border: '1px solid green' }}> 
          <h3>­Registro Exitoso!</h3> 
          <p>Se ha enviado una contrase¤a a su correo electr¢nico.</p> 
        </div> 
      ) : ( 
        <form onSubmit={handleSubmit}> 
 
          <div style={{ marginBottom: '10px' }}> 
            <label>Nombre:</label> 
            <input> 
              type="text" 
              name="nombre" 
              value={formData.nombre} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '5px' }} 
            /> 
          </div> 
 
          <div style={{ marginBottom: '10px' }}> 
            <label>Apellido:</label> 
            <input> 
              type="text" 
              name="apellido" 
              value={formData.apellido} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '5px' }} 
            /> 
          </div> 
 
          <div style={{ marginBottom: '10px' }}> 
            <label>Email:</label> 
            <input> 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '5px' }} 
            /> 
          </div> 
 
          <div style={{ marginBottom: '10px' }}> 
            <label>Edad:</label> 
            <input> 
              type="number" 
              name="edad" 
              value={formData.edad} 
              onChange={handleChange} 
              min="18" 
              required 
              style={{ width: '100%', padding: '5px' }} 
            /> 
            <small style={{ color: 'gray' }}>Debe ser mayor de 18 a¤os</small> 
          </div> 
 
          <div style={{ marginBottom: '10px' }}> 
            <label>Domicilio:</label> 
            <textarea> 
              name="domicilio" 
              value={formData.domicilio} 
              onChange={handleChange} 
              required 
              style={{ width: '100%', padding: '5px', height: '60px' }} 
            /> 
          </div> 
 
          <button> 
            type="submit" 
            style={{ 
              padding: '10px 20px', 
              color: 'white', 
              border: 'none', 
            }} 
          > 
            {loading ? 'Registrando...' : 'Registrarse'} 
          </button> 
        </form> 
      )} 
    </div> 
  ); 
} 
 
export default Registro; 
