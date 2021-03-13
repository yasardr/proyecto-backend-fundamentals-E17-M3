const router = require('express').Router();
const {
  crearProducto,
  obtenerProductos,
  obtenerProducto,
  modificarProducto,
  modificarNombreComercial,
  modificarNombreGenerico,
  modificarPresentacion,
  modificarUnidadMedida,
  modificarCategoria,
  modificarPrecioCompra,
  modificarPrecioVenta,
  modificarCantidad,
  modificarObservacion,
  eliminarProducto
} = require('../controllers/productos')
const auth = require('./auth');

router.get('/', auth.requerido, obtenerProductos);
router.get('/:id', auth.requerido, obtenerProducto);
router.post('/', crearProducto);
router.put('/:id', auth.requerido, modificarProducto);
router.put('/nombrecomercial/:id', auth.requerido, modificarNombreComercial);
router.put('/nombregenerico/:id', auth.requerido, modificarNombreGenerico);
router.put('/presentacion/:id', auth.requerido, modificarPresentacion);
router.put('/unidadmedida/:id', auth.requerido, modificarUnidadMedida);
router.put('/categoria/:id', auth.requerido, modificarCategoria);
router.put('/preciocompra/:id', auth.requerido, modificarPrecioCompra);
router.put('/precioventa/:id', auth.requerido, modificarPrecioVenta);
router.put('/cantidad/:id', auth.requerido, modificarCantidad);
router.put('/observacion/:id', auth.requerido, modificarObservacion);
router.delete('/:id', auth.requerido, eliminarProducto);

module.exports = router
