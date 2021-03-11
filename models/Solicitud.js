class Solicitud {
  constructor(id,productos,idUsuario,fecha,){
      this.id = id;
      this.productos = productos;
      this.idUsuario = idUsuario;
      this.fecha = fecha;
  }
}

module.exports = Solicitud;