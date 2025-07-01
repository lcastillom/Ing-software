const express = require('express');
const UserController = require('../controllers/userController');

const setUserRoutes = (app) => {
    const userController = new UserController();

    app.get('/users', userController.getAllUsers.bind(userController));
    app.get('/users/:id', userController.getUserById.bind(userController));
    app.post('/users', userController.createUser.bind(userController));
    app.put('/users/:id', userController.updateUser.bind(userController));
    app.delete('/users/:id', userController.deleteUser.bind(userController));
};

module.exports = setUserRoutes;