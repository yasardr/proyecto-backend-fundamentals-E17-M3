const router = require('express').Router();
const {
  crearProducto,
  obtenerProductos,
  modificarProducto,
  eliminarProducto
} = require('../controllers/productos')
const auth = require('./auth');

router.get('/', auth.requerido, obtenerProductos)
router.get('/:id', auth.requerido, obtenerProductos);
router.post('/', crearProducto)
router.put('/:id', auth.requerido, modificarProducto)
router.delete('/:id', auth.requerido, eliminarProducto)

module.exports = router
