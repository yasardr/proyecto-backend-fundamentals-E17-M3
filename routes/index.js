var router = require('express').Router();

router.get('/', (req, res)=>{
  res.send('Welcome to MediManage api!');
})

router.use('/usuarios', require('./usuarios'));
router.use('/solicitudes', require('./solicitudes'));

/* con el método use de nuestro router estamos indicando 
* que en la ruta 'v1/usuarios' estarán anidadas las rutas 
* que vamos a crear en nuestro archivo usuarios.js,
* la función requiere estar importando en este archivo.
* de igual forma aplica para Producto y Solicitud*/

module.exports = router;
