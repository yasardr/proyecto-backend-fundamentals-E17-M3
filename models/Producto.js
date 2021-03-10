// class Producto{
//     constructor(id, nombreComercial,nombreGenerico, presentacion, unidadMedida, categoria, precioCompra, precioVenta, cantidad, observacion){
//         this.id= id; // identificador del producto.
//         this.nombreComercial = nombreComercial;  
//         this.nombreGenerico = nombreGenerico; 
//         this.presentacion = presentacion;
//         this.unidadMedida = unidadMedida; //ml | L | Kg | mg
//         this.categoria= categoria; // goteros | suspensión | tabletas | ampolletas
//         this.precioCompra = precioCompra; // Precio de compra al proveedor
//         this.precioVenta = precioVenta; // Precio de venta al público en general
//         this.cantidad = cantidad; // Cantidad de productos existentes
//         this.observacion = observacion; // Anotaciones al respecto
//     } 
// }

// module.exports = Producto;

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
    precioCompra: { type: Int16Array, required: true },
    precioVenta: { type: Int16Array, required: true },
    cantidad: { type: Int16Array, required: true },
    observacion: { type: String, required: true }
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