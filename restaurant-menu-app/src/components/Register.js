import React, { useState } from 'react';
import { registerUser } from '../utils/api';

export default function Register() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    rol: 'cliente'
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value, rol: 'cliente' });
    setError('');
    setSuccess('');
  };

  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async e => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.contrasena) {
      setError('Todos los campos son obligatorios');
      return;
    }
    if (!validateEmail(form.email)) {
      setError('El correo electrónico no es válido');
      return;
    }
    try {
      await registerUser({ ...form, rol: 'cliente' });
      setSuccess('Usuario creado exitosamente');
      setForm({ nombre: '', email: '', contrasena: '', rol: 'cliente' });
    } catch (err) {
      setError(err.response?.data?.message || 'Error al crear usuario');
    }
  };

  return (
    <div style={{ maxWidth: 350, margin: '40px auto', padding: 24, border: '1px solid #ddd', borderRadius: 10 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Crear cuenta</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <input
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Correo electrónico"
          value={form.email}
          onChange={handleChange}
          required
          type="email"
        />
        <input
          name="contrasena"
          placeholder="Contraseña"
          value={form.contrasena}
          onChange={handleChange}
          required
          type="password"
        />
        <button type="submit" style={{ background: '#dc2626', color: '#fff', padding: 10, border: 'none', borderRadius: 6, fontWeight: 600 }}>
          Registrarse
        </button>
      </form>
      {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
      {success && <div style={{ color: 'green', marginTop: 12 }}>{success}</div>}
    </div>
  );
}