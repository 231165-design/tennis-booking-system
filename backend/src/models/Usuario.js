const { DataTypes } = require('sequelize'); 
 
const Usuario = (sequelize) =
  return sequelize.define('Usuario', { 
    nombre: { type: DataTypes.STRING, allowNull: false }, 
    apellido: { type: DataTypes.STRING, allowNull: false }, 
    email: { type: DataTypes.STRING, allowNull: false, unique: true }, 
    edad: { type: DataTypes.INTEGER, allowNull: false }, 
    domicilio: { type: DataTypes.TEXT, allowNull: false } 
  }); 
}; 
 
module.exports = Usuario; 
