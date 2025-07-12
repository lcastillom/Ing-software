const express = require('express');
const UserController = require('../controllers/userController');
const router = express.Router();
const userController = new UserController();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nombre:
 *           type: string
 *         email:
 *           type: string
 *         contrasena:
 *           type: string
 *         rol:
 *           type: string
 *           enum: [cliente, administrador]
 *       required:
 *         - nombre
 *         - email
 *         - contrasena
 *
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags:
 *       - Usuarios
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *       400:
 *         description: Error al crear usuario
 *
 * /api/users/login:
 *   patch:
 *     summary: Login de usuario
 *     tags:
 *       - Usuarios
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               contrasena:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login exitoso
 *       401:
 *         description: Usuario o contraseña incorrectos
 *
 * /api/users/{id}:
 *   get:
 *     summary: Obtener un usuario por ID
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no encontrado
 *   put:
 *     summary: Actualizar un usuario por ID
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *       400:
 *         description: Error al actualizar usuario
 *       404:
 *         description: Usuario no encontrado
 *   delete:
 *     summary: Eliminar un usuario por ID
 *     tags:
 *       - Usuarios
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del usuario
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */

function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

router.get('/users', asyncHandler(userController.getAllUsers.bind(userController)));
router.get('/users/:id', asyncHandler(userController.getUserById.bind(userController)));
router.post('/users', asyncHandler(userController.createUser.bind(userController)));
router.put('/users/:id', asyncHandler(userController.updateUser.bind(userController)));
router.delete('/users/:id', asyncHandler(userController.deleteUser.bind(userController)));
router.patch('/users/login', asyncHandler(userController.login.bind(userController)));

module.exports = router;