const express = require('express');
const ReservationsController = require('../controllers/reservationsController');

const router = express.Router();
const reservationsController = new ReservationsController();

router.post('/reservations', reservationsController.createReservation.bind(reservationsController));
router.get('/reservations', reservationsController.getReservations.bind(reservationsController));
router.put('/reservations/:id', reservationsController.updateReservation.bind(reservationsController));
router.delete('/reservations/:id', reservationsController.deleteReservation.bind(reservationsController));

module.exports = router;