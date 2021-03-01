//  Archivo controllers/solicitudes.js
//  Simulando la respuesta de objetos Solicitud
 // en un futuro aquí se utilizarán los modelos
 //

// importamos el modelo de solicitud
const Solicitud = require('../models/Solicitud')

function crearSolicitud(req, res) {
  // Instanciaremos una nueva solicitud utilizando la clase solicitud
  var solicitud = new Solicitud(req.body)
  res.status(201).send(solicitud)
}

function obtenerSolicitudes(req, res) {
  // Simulando dos solicitudes y respondiendolos
  var solicitud1 = new Solicitud(15, 2156, 1,456589,'02/02/2021')
  var solicitud2 = new Solicitud(14, 2156, 3,456879,'02/02/2021')
  res.send([solicitud1, solicitud2])
}

function modificarSolicitud(req, res) {
  // simulando una solicitud previamente existente que el administrador modifica
  var solicitud1 = new Solicitud(req.params.id, 2156, 2,456589,'03/02/2021')
  var modificaciones = req.body
  solicitud1 = { ...solicitud1, ...modificaciones }
  res.send(solicitud1)
}

function eliminarSolicitud(req, res) {
  // se simula una eliminación de una solicitud, regresando un 200
  res.status(200).send(`Solicitud ${req.params.id} eliminada`);
}

// exportamos las funciones definidas
module.exports = {
  crearSolicitud,
  obtenerSolicitudes,
  modificarSolicitud,
  eliminarSolicitud
}
