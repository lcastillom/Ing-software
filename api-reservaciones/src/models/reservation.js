class Reservation {
    constructor(id, name, date, time, numberOfGuests) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.numberOfGuests = numberOfGuests;
    }
}

module.exports = Reservation;