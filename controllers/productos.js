//  Archivo controllers/productos.js
//  Simulando la respuesta de objetos Productos
 // en un futuro aquí se utilizarán los modelos
 //

// importamos el modelo de usuarios
const Producto = require('../models/Producto')

function crearProducto(req, res) {
  // Instanciaremos una nueva mascota utilizando la clase mascota
  var producto = new Producto(req.body)
  res.status(201).send(producto)
}

function obtenerProductos(req, res) {
  // Simulando dos solicitudes y respondiendolos
  var producto1 = new Producto(1685, 'Colchicin', 'Colchicina','unidades','tabletas',100,200,20,'Caja morada/blanca')
  var producto2 = new Producto(1689, 'Next', 'paracetamol','unidades','tabletas',150,250,20,'Caja rojiza')
  res.send([producto1, producto2])
}

function modificarProducto(req, res) {
  // simulando un producto previamente existente que el administrador modifica
  var producto1 = new Producto(req.params.id, 'Colchicin', 'Colchicina','unidades','tabletas',100,200,10,'Caja morada/blanca')
  var modificaciones = req.body
  producto1 = { ...producto1, ...modificaciones }
  res.send(producto1)
}

function eliminarProducto(req, res) {
  // se simula una eliminación de un producto, regresando un 200
  res.status(200).send(`Producto ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearProducto,
  obtenerProductos,
  modificarProducto,
  eliminarProducto
}
