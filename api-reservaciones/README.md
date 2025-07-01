# Restaurant Reservations API

This is a REST API for managing restaurant reservations. It allows users to create, retrieve, update, and delete reservations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd restaurant-reservations-api
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the server, run:
```
npm start
```
The server will be running on `http://localhost:3003`.

## API Endpoints

### Reservations

- **POST /reservations**: Create a new reservation.
- **GET /reservations**: Retrieve all reservations.
- **GET /reservations/:id**: Retrieve a reservation by ID.
- **PUT /reservations/:id**: Update a reservation by ID.
- **DELETE /reservations/:id**: Delete a reservation by ID.

## License

This project is licensed under the MIT License.