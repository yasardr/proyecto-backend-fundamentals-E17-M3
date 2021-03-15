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

/**
 * @swagger
 * /v1/productos/campos/{campo}:
 *  get:
 *    tags:
 *    - Products
 *    summary: Get products by 'campo'
 *    description: Use this request to filter the results
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: query
 *        name: campo
 *        description: Attribute to filter products
 *        type: array
 *        collectionFormat: csv
 *        items: 
 *          type: string
 *        required: true
 *    responses:
 *      200:
 *        description: Obtains all the products
 *        schema:
 *        type: json
 */
 router.get('/campos/:campo',obtenerCampos);
/**
 * @swagger
 * /v1/productos:
 *  get:
 *    tags:
 *    - Products
 *    summary: Get all products
 *    description: Use to request all the products in the database
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Obtains all the products
 *        schema:
 *        type: json
 */
 router.get('/', obtenerProductos);
/**
 * @swagger
 * /v1/productos/filtro/{filtro}:
 *  get:
 *    tags:
 *    - Products
 *    summary: Get just one (the same) attribute of each product
 *    description: Use to request just one attribute of each product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: filtro
 *        description: Attribute of product
 *        required: true
 *    responses:
 *      200:
 *        description: Obtains the attribute of each product
 *        schema:
 *        type: json
 */
router.get('/filtro/:filtro', obtenerCoincidenciaDeAtributos);
/**
 * @swagger
 * /v1/productos/{id}:
 *  get:
 *    tags:
 *    - Products
 *    summary: Get product by ID
 *    description: Use to request a product by ID 
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *    responses:
 *      200:
 *        description: Obtains one product
 *        schema:
 *        type: json
 */
router.get('/:id', obtenerProductos);
/**
 * @swagger
 * /v1/productos:
 *  post:
 *    tags:
 *    - Products
 *    summary: Post a new product
 *    description: Use this request to create a new product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *            - nombreComercial
 *            - presentacion
 *            - unidadMedida
 *            - categoria
 *            - precioCompra
 *            - precioVenta
 *            - cantidad
 *          properties:
 *            nombreComercial:
 *              type: string
 *            nombreGenerico:
 *              type: string
 *            presentacion:
 *              type: string
 *            unidadMedida:
 *              type: string
 *            categoria:
 *              type: string
 *            precioCompra:
 *              type: integer
 *            precioVenta:
 *              type: integer
 *            cantidad:
 *              type: integer
 *            observacion:
 *              type: string
 *    responses:
 *      201:
 *        description: Created product
 */
router.post('/', crearProducto);
/**
 * @swagger
 * /v1/productos/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update a product by ID
 *    description: Use this request to update an advertisement searched by ID
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product
 *        schema:
 *          type: object
 *          required:
 *            - nombreComercial
 *            - presentacion
 *            - unidadMedida
 *            - categoria
 *            - precioCompra
 *            - precioVenta
 *            - cantidad
 *          properties:
 *            nombreComercial:
 *              type: string
 *            nombreGenerico:
 *              type: string
 *            presentacion:
 *              type: string
 *            unidadMedida:
 *              type: string
 *            categoria:
 *              type: string
 *            precioCompra:
 *              type: integer
 *            precioVenta:
 *              type: integer
 *            cantidad:
 *              type: integer
 *            observacion:
 *              type: string
 *    responses:
 *      200:
 *        description: Updated product
 */
router.put('/:id', modificarProducto);
/**
 * @swagger
 * /v1/productos/nombrecomercial/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update the 'nombreComercial' of a product
 *    description: Use this request to update the 'nombreComercial' of a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product
 *        schema:
 *          type: object
 *          required:
 *            - nombreComercial
 *          properties:
 *            nombreComercial:
 *              type: string
 *    responses:
 *      200:
 *        description: Updated 'nombre comercial' of the product
 */
router.put('/nombrecomercial/:id', modificarNombreComercial);
/**
 * @swagger
 * /v1/productos/nombregenerico/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update the 'nombreGenerico' of a product
 *    description: Use this request to update the 'nombreGenerico' of a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product
 *        schema:
 *          type: object
 *          required:
 *            - nombreGenerico
 *          properties:
 *            nombreGenerico:
 *              type: string
 *    responses:
 *      200:
 *        description: Updated 'nombre generico' of the product
 */
router.put('/nombregenerico/:id', modificarNombreGenerico);
/**
 * @swagger
 * /v1/productos/presentacion/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update the 'presentacion' of a product
 *    description: Use this request to update the 'presentacion' of a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product
 *        schema:
 *          type: object
 *          required:
 *            - presentacion
 *          properties:
 *            presentacion:
 *              type: string
 *    responses:
 *      200:
 *        description: Updated 'presentacion' of the product
 */
router.put('/presentacion/:id', modificarPresentacion);
/**
 * @swagger
 * /v1/productos/unidadmedida/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update the 'unidadMedida' of a product
 *    description: Use this request to update the 'unidadMedida' of a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product, you can replace it with this options->
 *        schema:
 *          type: object
 *          required:
 *            - unidadMedida
 *          properties:
 *            unidadMedida:
 *              type: string
 *    responses:
 *      200:
 *        description: Updated 'unidadMedida' of the product
 */
router.put('/unidadmedida/:id', modificarUnidadMedida);
/**
 * @swagger
 * /v1/productos/categoria/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update the 'categoria' of a product
 *    description: Use this request to update the 'categoria' of a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product, you can replace it with this options-> 'goteros', 'suspension', 'tabletas', 'ampolletas', 'capsulas', 'tonicos', 'tes', 'jarabes', 'pomadas', 'cremas', 'sprays', 'fibras', 'perlas', 'gel', 'otro'
 *        schema:
 *          type: object
 *          required:
 *            - categoria
 *          properties:
 *            categoria:
 *              type: string
 *    responses:
 *      200:
 *        description: Updated 'categoria' of the product
 */
router.put('/categoria/:id', modificarCategoria);
/**
 * @swagger
 * /v1/productos/preciocompra/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update the 'precioCompra' of a product
 *    description: Use this request to update the 'precioCompra' of a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product
 *        schema:
 *          type: object
 *          required:
 *            - precioCompra
 *          properties:
 *            precioCompra:
 *              type: integer
 *    responses:
 *      200:
 *        description: Updated 'precioCompra' of the product
 */
router.put('/preciocompra/:id', modificarPrecioCompra);
/**
 * @swagger
 * /v1/productos/precioventa/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update the 'precioVenta' of a product
 *    description: Use this request to update the 'precioVenta' of a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product
 *        schema:
 *          type: object
 *          required:
 *            - precioVenta
 *          properties:
 *            precioVenta:
 *              type: integer
 *    responses:
 *      200:
 *        description: Updated 'precioVenta' of the product
 */
router.put('/precioventa/:id', modificarPrecioVenta);
/**
 * @swagger
 * /v1/productos/cantidad/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update the 'cantidad' of a product
 *    description: Use this request to update the 'cantidad' of a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product
 *        schema:
 *          type: object
 *          required:
 *            - cantidad
 *          properties:
 *            cantidad:
 *              type: integer
 *    responses:
 *      200:
 *        description: Updated 'cantidad' of the product
 */
router.put('/cantidad/:id', modificarCantidad);
/**
 * @swagger
 * /v1/productos/observacion/{id}:
 *  put:
 *    tags:
 *    - Products
 *    summary: Update the 'observacion' of a product
 *    description: Use this request to update the 'observacion' of a product
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of product
 *        required: true
 *      - in: body
 *        name: Product information
 *        description: This is the body of a product
 *        schema:
 *          type: object
 *          required:
 *            - observacion
 *          properties:
 *            observacion:
 *              type: string
 *    responses:
 *      200:
 *        description: Updated 'observacion' of the product
 */
router.put('/observacion/:id', modificarObservacion);
/**
 * @swagger
 * /v1/productos/{id}:
 *  delete:
 *     tags:
 *     - Products
 *     summary: Delete product
 *     description: Use this request to delete a product
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: path
 *       name: id
 *       description: ID of the product
 *       required: true
 *     responses:
 *       200:
 *         description: Deleted product
 *       400:
 *         description: "Invalid information supplied"
 *       404:
 *         description: "Product not found"
 */
router.delete('/:id', auth.requerido, eliminarProducto);

module.exports = router
