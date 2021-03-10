// // Estructura del CRUD
// const router = require('express').Router();
// const {
//   crearProducto,
//   obtenerProductos,
//   modificarProducto,
//   eliminarProducto
// } = require('../controllers/productos')

// router.get('/', obtenerProductos)
// router.post('/', crearProducto)
// router.put('/:id', modificarProducto)
// router.delete('/:id', eliminarProducto)

// module.exports = router;

const router = require('express').Router();
const {
  crearProducto,
  obtenerProductos,
  modificarProducto,
  eliminarProducto
} = require('../controllers/Productos')
const auth = require('./auth');

router.get('/', auth.requerido, obtenerProductos)
router.get('/:id', auth.requerido, obtenerProductos);
router.post('/', crearProducto)
router.put('/:id', auth.requerido, modificarProducto)
router.delete('/:id', auth.requerido, eliminarProducto)

module.exports = router
