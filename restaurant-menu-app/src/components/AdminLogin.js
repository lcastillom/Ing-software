import React, { useState } from 'react';

function AdminLogin({ setIsAdmin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Simulación de autenticación (usuario: admin, contraseña: admin123)
    if (form.username === 'admin' && form.password === 'admin123') {
      setIsAdmin(true);
    } else {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div>
      <h2>Login Administrador</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 24 }}>
        <input
          name="username"
          placeholder="Usuario"
          value={form.username}
          onChange={handleChange}
          required
          style={{ marginRight: 8 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
          style={{ marginRight: 8 }}
        />
        <button type="submit">Entrar</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default AdminLogin;