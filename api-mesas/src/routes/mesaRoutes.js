const express = require('express');
const { getMesas, createMesa, updateMesa, deleteMesa } = require('../controllers/mesaController');
const router = express.Router();

router.get('/', getMesas);
router.post('/', createMesa);
router.put('/:id', updateMesa);
router.delete('/:id', deleteMesa);

module.exports = router;