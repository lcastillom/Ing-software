class ReservationsController {
    constructor() {
        this.reservations = [];
        this.currentId = 1;
    }

    createReservation(req, res) {
        const { name, date, time, numberOfGuests } = req.body;
        const newReservation = {
            id: this.currentId++,
            name,
            date,
            time,
            numberOfGuests
        };
        this.reservations.push(newReservation);
        res.status(201).json(newReservation);
    }

    getReservations(req, res) {
        res.status(200).json(this.reservations);
    }

    updateReservation(req, res) {
        const { id } = req.params;
        const { name, date, time, numberOfGuests } = req.body;
        const reservation = this.reservations.find(r => r.id === parseInt(id));

        if (!reservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        reservation.name = name || reservation.name;
        reservation.date = date || reservation.date;
        reservation.time = time || reservation.time;
        reservation.numberOfGuests = numberOfGuests || reservation.numberOfGuests;

        res.status(200).json(reservation);
    }

    deleteReservation(req, res) {
        const { id } = req.params;
        const index = this.reservations.findIndex(r => r.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ message: 'Reservation not found' });
        }

        this.reservations.splice(index, 1);
        res.status(204).send();
    }
}

module.exports = new ReservationsController();