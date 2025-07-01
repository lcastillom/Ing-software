const Mesa = require('../models/mesa');

exports.getMesas = async (req, res) => {
  try {
    const mesas = await Mesa.findAll();
    res.json(mesas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createMesa = async (req, res) => {
  try {
    const mesa = await Mesa.create(req.body);
    res.status(201).json(mesa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMesa = async (req, res) => {
  try {
    const [updated] = await Mesa.update(req.body, { where: { id: req.params.id } });
    if (updated) {
      const mesa = await Mesa.findByPk(req.params.id);
      res.json(mesa);
    } else {
      res.status(404).json({ error: 'Mesa not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMesa = async (req, res) => {
  try {
    const deleted = await Mesa.destroy({ where: { id: req.params.id } });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Mesa not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};