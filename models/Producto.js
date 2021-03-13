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
    unidadMedida: { type: String, enum: ['ml', 'L', 'Kg', 'mg', 'g', 'tabletas', 'capsulas', 'perlas', 'otro'], required: true },
    categoria: { type: String, enum: ['goteros', 'suspension', 'tabletas', 'ampolletas', 'capsulas', 'tonicos', 'tes', 'jarabes', 'pomadas', 'cremas', 'sprays', 'fibras', 'perlas', 'gel', 'otro'], required: true },
    precioCompra: { type: Number, required: true },
    precioVenta: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    observacion: { type: String, lowercase: true  }
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