// Estructura del CRUD
const router = require('express').Router();
const {
  crearSolicitud,
  obtenerSolicitud,
  modificarSolicitud,
  eliminarSolicitud
} = require('../controllers/solicitudes')
var auth = require('./auth');

/**
 * @swagger
 * /v1/solicitudes:
 *  get:
 *    tags:
 *    - Medical requests
 *    summary: Get all medical requests
 *    description: Use to request all the medical requests in the database
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Obtains all the medical requests
 *        schema:
 *        type: json
 */
router.get('/', obtenerSolicitud)
/**
 * @swagger
 * /v1/solicitudes/{id}:
 *  get:
 *    tags:
 *    - Medical requests
 *    summary: Get medical request by ID
 *    description: Use to request a medical request by ID 
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of medical request
 *        required: true
 *    responses:
 *      200:
 *        description: Obtains one medical request
 *        schema:
 *        type: json
 */
router.get('/:id', obtenerSolicitud)
/**
 * @swagger
 * /v1/solicitudes:
 *  post:
 *    tags:
 *    - Medical requests
 *    summary: Post a new medical request
 *    description: Use this request to create a new medical request
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: Medical request information
 *        description: This is the body of a medical information
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *            - usuario
 *            - productos
 *          properties:
 *            usuario:
 *              type: string
 *            productos:
 *              type: array
 *              items:
 *                type: string
 *    responses:
 *      201:
 *        description: Created medical information
 */
router.post('/', crearSolicitud)
/**
 * @swagger
 * /v1/solicitudes/{id}:
 *  put:
 *    tags:
 *    - Medical requests
 *    summary: Update a medical request
 *    description: Use this request to update a medical request
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: path
 *        name: id
 *        description: ID of medical request
 *        required: true
 *      - in: body
 *        name: Medical request information
 *        description: This is the body of a medical request
 *        required: true
 *        schema:
 *          type: object
 *          required:
 *            - usuario
 *            - productos
 *          properties:
 *            usuario:
 *              type: string
 *            productos:
 *              type: array
 *              items:
 *                type: string
 *    responses:
 *      200:
 *        description: Updated medical information
 */
router.put('/:id', modificarSolicitud)
/**
 * @swagger
 * /v1/solicitudes/{id}:
 *  delete:
 *     tags:
 *     - Medical requests
 *     summary: Delete medical request
 *     description: Use this request to delete a medical request
 *     produces:
 *     - application/json
 *     parameters:
 *     - in: path
 *       name: id
 *       description: ID of the medical request
 *       required: true
 *     responses:
 *       200:
 *         description: Deleted medical request
 *       400:
 *         description: "Invalid information supplied"
 *       404:
 *         description: "Medical request not found"
 */
router.delete('/:id', eliminarSolicitud)

module.exports = router;
