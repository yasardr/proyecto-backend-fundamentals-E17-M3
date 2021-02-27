//  Archivo controllers/usuarios.js
 // Simulando la respuesta de objetos Usuario
 // en un futuro aquí se utilizarán los modelos
//

// importamos el modelo de usuarios
const Usuario = require('../models/Usuario')

function crearUsuario(req, res) {
  // Instanciaremos un nuevo usuario utilizando la clase usuario
  var usuario = new Usuario(req.body)
  res.status(201).send(usuario)
}

function obtenerUsuarios(req, res) {
  // Simulando dos usuarios y respondiendolos
  var usuario1 = new Usuario(123456, 'Juan28', 'Juan','Vega', 'juan@vega.com','contra1234','442-442-4422','usuario general')
  var usuario2 = new Usuario(678910, 'Monse98', 'Monserrat','Vega', 'mon@vega.com','micontra1234','442-442-4242','usuario general')
  res.send([usuario1, usuario2])
}

function modificarUsuario(req, res) {
  // simulando un usuario previamente existente que el cliente modifica
  var usuario1 = new Usuario(req.params.id, 'Juan28', 'Juan','Vega', 'juan@vega.com','contra1234','442-442-3112','usuario general')
  var modificaciones = req.body
  usuario1 = { ...usuario1, ...modificaciones }
  res.send(usuario1)
}

function eliminarUsuario(req, res) {
  // se simula una eliminación de usuario, regresando un 200
  res.status(200).send(`Usuario ${req.params.id} eliminado`);
}

// exportamos las funciones definidas
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario
}
