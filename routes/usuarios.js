const router = require('express').Router();
const {
  crearUsuario,
  obtenerUsuarios,
  modificarUsuario,
  eliminarUsuario,
  iniciarSesion
} = require('../controllers/usuarios')
const auth = require('./auth');

/**
 * @swagger
 * /v1/usuarios:
 *  get:
 *    tags:
 *    - Users
 *    summary: Get all users
 *    description: Use to request all the users in the database
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Obtains all the users
 *        schema:
 *        type: json
 */
router.get('/', obtenerUsuarios);
/**
 * @swagger
 * /v1/usuarios/{id}:
 *  get:
 *    tags:
 *    - Users
 *    summary: Get user by ID
 *    description: Use to request a user by ID 
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of user
 *        required: true
 *    responses:
 *      200:
 *        description: Obtains one user
 *        schema:
 *        type: json
 */
router.get('/:id', obtenerUsuarios);
/**
 * @swagger
 * /v1/usuarios:
 *  post:
 *    tags:
 *    - Users
 *    summary: Post a new user
 *    description: Use this request to create a new user
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: User information
 *        description: This is the body of a user
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - nombre
 *            - apellido
 *            - email
 *            - telefono
 *            - tipo
 *            - password
 *          properties:
 *            username:
 *              type: string
 *            nombre:
 *              type: string
 *            apellido:
 *              type: string
 *            email:
 *              type: string
 *            telefono:
 *              type: string
 *            tipo:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      201:
 *        description: Created user
 */
router.post('/', crearUsuario)
/**
 * @swagger
 * /v1/usuarios/entrar:
 *  post:
 *    tags:
 *    - Users
 *    summary: Log in
 *    description: Use this request to Log in
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Information to login
 *        description: This is the body
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *            - email
 *            - password
 *          properties:
 *            email:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      200:
 *        description: Session started
 */
router.post('/entrar', iniciarSesion)
/**
 * @swagger
 * /v1/usuarios/{id}:
 *  put:
 *    tags:
 *    - Users
 *    summary: Update an user by ID
 *    description: Use this request to update an user searched by ID
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of user
 *        required: true
 *      - in: body
 *        name: User information
 *        description: This is the body of a user
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *            - username
 *            - nombre
 *            - apellido
 *            - email
 *            - telefono
 *            - tipo
 *            - password
 *          properties:
 *            username:
 *              type: string
 *            nombre:
 *              type: string
 *            apellido:
 *              type: string
 *            email:
 *              type: string
 *            telefono:
 *              type: string
 *            tipo:
 *              type: string
 *            password:
 *              type: string
 *    responses:
 *      200:
 *        description: Updated user
 */
router.put('/:id', modificarUsuario)
/**
 * @swagger
 * /v1/usuarios/{id}:
 *  delete:
 *     tags:
 *     - Users
 *     summary: Delete user
 *     description: Use this request to delete an user
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: path
 *       name: id
 *       description: ID of the user
 *       required: true
 *     responses:
 *       200:
 *         description: Deleted user
 *       400:
 *         description: "Invalid information supplied"
 *       404:
 *         description: "User not found"
 */
router.delete('/:id', eliminarUsuario)

module.exports = router