const Platillos = require('../models/platillos');

class MenuController {
  async getMenu(req, res) {
    try {
      const items = await Platillos.findAll();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener el menú' });
    }
  }

  async addMenuItem(req, res) {
    const { nombre, descripcion, precio } = req.body;
    if (!nombre || !precio) {
      return res.status(400).json({ error: 'Nombre y precio son requeridos' });
    }
    try {
      const item = await Platillos.create({ nombre, descripcion, precio });
      res.status(201).json(item);
    } catch (err) {
      res.status(500).json({ error: 'Error al agregar el platillo' });
    }
  }

  async updateMenuItem(req, res) {
    const { id } = req.params;
    const { nombre, descripcion, precio } = req.body;
    try {
      const [updated] = await Platillos.update(
        { nombre, descripcion, precio },
        { where: { id } }
      );
      if (!updated) {
        return res.status(404).json({ error: 'Platillo no encontrado' });
      }
      const updatedItem = await Platillos.findByPk(id);
      res.json(updatedItem);
    } catch (err) {
      res.status(500).json({ error: 'Error al actualizar el platillo' });
    }
  }

  async deleteMenuItem(req, res) {
    const { id } = req.params;
    try {
      const deleted = await Platillos.destroy({ where: { id } });
      if (!deleted) {
        return res.status(404).json({ error: 'Platillo no encontrado' });
      }
      res.json({ message: 'Platillo eliminado exitosamente' });
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar el platillo' });
    }
  }
}

module.exports = MenuController;