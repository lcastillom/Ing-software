const User = require('../models/user');
const bcrypt = require('bcryptjs');

class UserController {
    async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (err) {
            res.status(500).json({ error: true, message: 'Error al obtener usuarios', details: err.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ error: true, message: 'Usuario no encontrado' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json({ error: true, message: 'Error al obtener usuario', details: err.message });
        }
    }

    async createUser(req, res) {
        try {
            const { nombre, email, contrasena, rol } = req.body;
            const hashedPassword = await bcrypt.hash(contrasena, 10);
            const user = await User.create({ nombre, email, contrasena: hashedPassword, rol });
            res.status(201).json(user);
        } catch (err) {
            res.status(400).json({ error: true, message: 'Error al crear usuario', details: err.message });
        }
    }

    async updateUser(req, res) {
        try {
            const { nombre, email, contrasena, rol } = req.body;
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ error: true, message: 'Usuario no encontrado' });
            }
            let updatedFields = { nombre, email, rol };
            if (contrasena) {
                updatedFields.contrasena = await bcrypt.hash(contrasena, 10);
            }
            await user.update(updatedFields);
            res.json(user);
        } catch (err) {
            res.status(400).json({ error: true, message: 'Error al actualizar usuario', details: err.message });
        }
    }

    async deleteUser(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ error: true, message: 'Usuario no encontrado' });
            }
            await user.destroy();
            res.json({ message: 'Usuario eliminado correctamente' });
        } catch (err) {
            res.status(500).json({ error: true, message: 'Error al eliminar usuario', details: err.message });
        }
    }

    // Nuevo endpoint: login
    async login(req, res) {
        const { email, contrasena } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
            if (!user) {
                return res.status(401).json({ error: true, message: 'Usuario o contraseña incorrectos' });
            }
            const valid = await bcrypt.compare(contrasena, user.contrasena);
            if (!valid) {
                return res.status(401).json({ error: true, message: 'Usuario o contraseña incorrectos' });
            }
            const { contrasena: _, ...userData } = user.toJSON();
            res.json({ success: true, user: userData });
        } catch (err) {
            res.status(500).json({ error: true, message: 'Error en el login', details: err.message });
        }
    }
}

module.exports = UserController;