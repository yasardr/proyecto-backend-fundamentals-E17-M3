const router = require('express').Router();
const {
  crearProducto,
  obtenerCoincidenciaDeAtributos,
  obtenerProductos,
  obtenerCampos,
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
router.get('/campos/:campo', auth.requerido, obtenerCampos);
router.get('/filtro/:filtro', auth.requerido, obtenerCoincidenciaDeAtributos);
router.get('/:id', auth.requerido, obtenerProductos);
router.post('/', auth.requerido, crearProducto);
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
