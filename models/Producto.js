// Producto.js
const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({                   
    nombreComercial: {                                                  
      type: String,
      lowercase: true,
      required: [true, "No puede estar vacío"],
      index: true,
    },                                           
    nombreGenerico: { type: String, lowercase: true },
    presentacion: { type: String, required: true },
    unidadMedida: { type: String, enum: ['ml', 'L', 'Kg', 'mg'], required: true },
    categoria: { type: String, enum: ['goteros', 'suspension', 'tabletas', 'ampolletas'], required: true },
    precioCompra: { type: String, required: true },
    precioVenta: { type: String, required: true },
    cantidad: { type: String, required: true },
    observacion: { type: String }
},
{ timestamps: true });

/**
* Devuelve la representación de un producto, sólo datos públicos
*/
ProductoSchema.methods.publicData = function(){
  return {
    id: this.id,
    nombreComercial: this.nombreComercial,
    nombreGenerico: this.nombreGenerico,
    presentacion: this.presentacion,
    unidadMedida: this.unidadMedida,
    categoria: this.categoria,
    precioCompra: this.precioCompra,
    precioVenta: this.precioVenta,
    cantidad: this.cantidad,
    observacion: this.observacion,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt
  };
};

mongoose.model("Producto", ProductoSchema);