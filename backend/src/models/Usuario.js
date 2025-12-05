const { DataTypes } = require('sequelize'); 
 
const Usuario = (sequelize) =
  return sequelize.define('Usuario', { 
    nombre: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: { notEmpty: true } 
    }, 
    apellido: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      validate: { notEmpty: true } 
    }, 
    email: { 
      type: DataTypes.STRING, 
      allowNull: false, 
      unique: true, 
      validate: { isEmail: true } 
    }, 
    edad: { 
      type: DataTypes.INTEGER, 
      allowNull: false, 
      validate: { min: 18 }  // Validacion de edad 
    }, 
    domicilio: { 
      type: DataTypes.TEXT, 
      allowNull: false 
    }, 
    contrase¤a: { 
      type: DataTypes.STRING, 
      allowNull: false 
    }, 
    intentosFallidos: { 
      type: DataTypes.INTEGER, 
      defaultValue: 0 
    }, 
    bloqueado: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: false 
    } 
  }, { 
    tableName: 'usuarios', 
    timestamps: true 
  }); 
}; 
 
module.exports = Usuario; 
