//controller/solicitudes.js
const mongoose = require("mongoose");
const Solicitud = mongoose.model('Solicitud')
const Producto = mongoose.model('Producto')
mongoose.set('useFindAndModify', false);


function crearSolicitud(req, res, next) { 

    const body = req.body;
    
    const solicitud = new Solicitud(body);
    solicitud.save().then((request) => { //Guardar la solicitud en MongoDB.
      res.status(201).send(request);
    })
    .catch(next);
}

function obtenerSolicitud(req, res, next) {

  let limit = parseInt(req.query.limit) || 0;
  
  if (!req.params.id) {
    // sin :id, se enlista todas las solicitudes que realiza el usuario.
    Solicitud.find().limit(limit).then(solicitudes => {
      res.send(solicitudes)
    }).catch(next)
  } else {
    // encontrar solicitud con :id 
    Solicitud.findById({_id:req.params.id}).then(solicitud => {
      res.send(solicitud)
    }).catch(next)
  }
}

function modificarSolicitud(req, res, next) {

  Solicitud.findById(req.params.id).then(solicitud => {

    if (!solicitud) { return res.sendStatus(401); }

      let nuevaInfo = req.body
      if (typeof nuevaInfo.idUsuario !== 'undefined')
        solicitud.idUsuario = nuevaInfo.idUsuario
      if (typeof nuevaInfo.productos !== 'undefined')
        solicitud.productos = nuevaInfo.productos
      if (typeof nuevaInfo.fecha !== 'undefined')
        solicitud.fecha = nuevaInfo.fecha
      solicitud.save().then(updateSolicitud => {
        res.status(201).json(updateSolicitud.publicData())
      }).catch(next)
  }).catch(next)
}

function eliminarSolicitud(req, res) {
  Solicitud.findOneAndDelete({_id: req.params.id})
  .then(res.status(200).json({ message: `Solicitud ${req.params.id} eliminado` }))
  .catch(err => next(err));
}


module.exports = {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud,
  obtenerSolicitud
}


