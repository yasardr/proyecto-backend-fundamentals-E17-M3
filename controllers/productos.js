// controllers/productos.js
const mongoose = require("mongoose");
const Producto = mongoose.model("Producto");
const passport = require("passport");

function crearProducto(req, res, next) {
  // Instanciaremos un nuevo Producto utilizando la clase Producto
  const body = req.body;

  const producto = new Producto(body);
  producto.save().then((product) => { //Guardando nuevo producto en MongoDB.
      res.status(201).send(product);
    })
    .catch(next);
}

function obtenerProductos(req, res, next) {
  //Obteniendo Producto desde MongoDB.
  Producto.findById(req.producto.id, (err, product) => {
    if (!product || err) {
      return res.sendStatus(401);
    }
    return res.json(product.publicData());
  }).catch(next);
}

function modificarProducto(req, res, next) {
  console.log(req.producto);
  Producto.findById(req.producto.id)
    .then((product) => {
      if (!product) {
        return res.sendStatus(401);
      }
      let nuevaInfo = req.body;
      if (typeof nuevaInfo.nombreComercial !== "undefined")
        product.nombreComercial = nuevaInfo.nombreComercial;
      if (typeof nuevaInfo.nombreGenerico !== "undefined")
        product.nombreGenerico = nuevaInfo.nombreGenerico;
      if (typeof nuevaInfo.presentacion !== "undefined")
        product.presentacion = nuevaInfo.presentacion;
      if (typeof nuevaInfo.unidadMedida !== "undefined")
        product.unidadMedida = nuevaInfo.unidadMedida;
      if (typeof nuevaInfo.categoria !== "undefined")
        product.categoria = nuevaInfo.categoria;
      if (typeof nuevaInfo.precioCompra !== "undefined")
        product.precioCompra = nuevaInfo.precioCompra;
      if (typeof nuevaInfo.precioVenta !== "undefined")
        product.precioVenta = nuevaInfo.precioVenta;
      if (typeof nuevaInfo.cantidad !== "undefined")
        product.cantidad = nuevaInfo.cantidad;
      if (typeof nuevaInfo.observacion !== "undefined")
        product.observacion = nuevaInfo.observacion;
      product
        .save()
        .then((updatedUser) => {
          //Guardando Producto modificado en MongoDB.
          res.status(201).json(updatedUser.publicData());
        })
        .catch(next);
    })
    .catch(next);
}

function eliminarProducto(req, res) {
  // únicamente borra a su propio producto obteniendo el id del token
  Producto.findOneAndDelete({ _id: req.producto.id }).then((r) => {
    //Buscando y eliminando producto en MongoDB.
    res.status(200).send(`Producto ${req.params.id} eliminado: ${r}`);
  });
}

module.exports = {
  crearProducto,
  obtenerProductos,
  modificarProducto,
  eliminarProducto,
};
