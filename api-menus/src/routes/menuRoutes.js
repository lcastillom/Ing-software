const express = require('express');
const MenuController = require('../controllers/menuController');

const router = express.Router();
const menuController = new MenuController();

/**
 * @swagger
 * /api/menu:
 *   get:
 *     summary: Obtener la lista de platillos del menú
 *     tags:
 *       - Menú
 *     responses:
 *       200:
 *         description: Lista de platillos obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MenuItem'
 *   post:
 *     summary: Agregar un nuevo platillo al menú
 *     tags:
 *       - Menú
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MenuItem'
 *     responses:
 *       201:
 *         description: Platillo agregado exitosamente
 *       400:
 *         description: Datos inválidos
 *
 * /api/menu/{id}:
 *   put:
 *     summary: Actualizar un platillo existente del menú
 *     tags:
 *       - Menú
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del platillo a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/MenuItem'
 *     responses:
 *       200:
 *         description: Platillo actualizado exitosamente
 *       404:
 *         description: Platillo no encontrado
 *   delete:
 *     summary: Eliminar un platillo del menú
 *     tags:
 *       - Menú
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del platillo a eliminar
 *     responses:
 *       200:
 *         description: Platillo eliminado exitosamente
 *       404:
 *         description: Platillo no encontrado
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     MenuItem:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         nombre:
 *           type: string
 *         descripcion:
 *           type: string
 *         precio:
 *           type: number
 *           format: float
 *       required:
 *         - nombre
 *         - precio
 */

function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

router.get('/menu', asyncHandler(menuController.getMenu.bind(menuController)));
router.post('/menu', asyncHandler(menuController.addMenuItem.bind(menuController)));
router.put('/menu/:id', asyncHandler(menuController.updateMenuItem.bind(menuController)));
router.delete('/menu/:id', asyncHandler(menuController.deleteMenuItem.bind(menuController)));

module.exports = router;