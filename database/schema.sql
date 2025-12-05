-- Esquema de base de datos para Tennis Booking System 
 
CREATE DATABASE tennis_booking; 
USE tennis_booking; 
 
CREATE TABLE usuarios ( 
  id INT PRIMARY KEY AUTO_INCREMENT, 
  nombre VARCHAR(50) NOT NULL, 
  apellido VARCHAR(50) NOT NULL, 
  email VARCHAR(100) UNIQUE NOT NULL, 
  edad INT NOT NULL CHECK (edad 
  domicilio TEXT NOT NULL, 
  contrase¤a_hash VARCHAR(255) NOT NULL, 
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
); 
