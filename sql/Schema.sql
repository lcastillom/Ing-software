DROP DATABASE IF EXISTS restaurante;
CREATE DATABASE IF NOT EXISTS restaurante CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE restaurante;

-- Crear tabla platillos
CREATE TABLE IF NOT EXISTS platillos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT NOT NULL,
  precio DECIMAL(12, 4) NOT NULL,
  categoria VARCHAR(50) NOT NULL
);

-- Crear tabla mesas
CREATE TABLE IF NOT EXISTS mesas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  numero INT NOT NULL,
  capacidad INT NOT NULL,
  estado ENUM('disponible', 'ocupada', 'reservada') DEFAULT 'disponible'
);

-- Crear tabla usuarios 
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  contrasena VARCHAR(255) NOT NULL,
  rol ENUM('cliente', 'administrador') DEFAULT 'cliente'
);

-- Crear tabla reservas 
CREATE TABLE IF NOT EXISTS reservas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  fecha DATETIME NOT NULL,
  numero_personas INT NOT NULL,
  mesa_id INT NULL,
  FOREIGN KEY (mesa_id) REFERENCES mesas(id) ON DELETE CASCADE, 
  FOREIGN KEY (cliente_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

-- Crear tabla pedidos
CREATE TABLE IF NOT EXISTS pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  reserva_id INT NOT NULL,
  platillo_id INT NOT NULL,
  cantidad INT NOT NULL,  
  FOREIGN KEY (reserva_id) REFERENCES reservas(id) ON DELETE CASCADE,
  FOREIGN KEY (platillo_id) REFERENCES platillos(id) ON DELETE CASCADE
);

INSERT INTO platillos (nombre, descripcion, precio, categoria)
VALUES
  ('Bruschetta al Pomodoro', 'Pan tostado con tomate, ajo y albahaca fresca', 90.00, 'Entrada'),
  ('Antipasto Misto', 'Selección de embutidos, quesos, aceitunas y verduras marinadas', 280.00, 'Entrada'),
  ('Spaghetti alla Carbonara', 'Pasta con huevo, pancetta, queso pecorino y pimienta negra', 140.00, 'Complemento'),
  ('Ensalada Caprese', 'Mozzarella, tomate y albahaca, aderezada con aceite de oliva y vinagre balsámico', 180.00, 'Complemento'),
  ('Lasaña', 'Capas de pasta, carne, salsa de tomate, queso', 280.00, 'Principal'),
  ('Pizza Margherita', 'Salsa de tomate, mozzarella fresca y albahaca', 160.00, 'Principal'),
  ('Pizza Quattro Stagioni', 'Salsa de tomate, mozzarella, manchego, parmesano y fontina fresco.', 180.00, 'Principal'),
  ('Chianti Clásico - copa', 'Vino tinto italiano - copa', 80.00, 'Bebidas'),
  ('Chianti Clásico - botella', 'Vino tinto italiano - botella', 320.00, 'Bebidas'),
  ('Limoncello', 'Licor dulce y refrescante, hecho con piel de limón, alcohol, agua y azúcar', 150.00, 'Bebidas'),
  ('Sodas Italianas', 'Refrescos con una variedad de sabores como fresa, cereza, frambuesa', 85.00, 'Bebidas'),
  ('Tiramisu', 'Capas remojadas en café espresso, con un rico queso mascarpone dulce', 90.00, 'Postre');