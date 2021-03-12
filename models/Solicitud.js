/*class Solicitud {
  constructor(id,productos,idUsuario,fecha,){
      this.id = id;
      this.productos = productos;
      this.idUsuario = idUsuario;
      this.fecha = fecha;
  }
}

module.exports = Solicitud;*/

//Solicitud.js
const mongoose = require('mongoose');

var SolicitudSchema = new mongoose.Schema(
  {
    usuario:{ 
      type: mongoose.Schema.ObjectId, 
      ref: "Usuario",
      
    },
    productos: {
      type: Array,
      default:[],
      required: true,
      ref: "Producto",
    }
  },

  {collection: "solicitud",timestamps: true }
  
);

SolicitudSchema.methods.publicData = function(){
  return {
  id: this.id,  
  productos: this.productos
  };
};
  
mongoose.model("Solicitud",SolicitudSchema)




