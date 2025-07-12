import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUserPatch } from '../utils/api';

function Login({ setIsAdmin }) {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Si ya hay sesión activa, redirige a bienvenida
  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  }, [navigate]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError('');
  };

  const validateEmail = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateEmail(form.username)) {
      setError('El usuario debe ser un correo electrónico válido');
      return;
    }
    try {
      const res = await loginUserPatch(form.username, form.password);
      const { nombre, rol, id, email } = res.data.user;
      // Guarda el usuario como objeto en localStorage
      const userObj = { nombre, rol, id, email };
      localStorage.setItem('user', JSON.stringify(userObj));
      // Notifica a otras pestañas y fuerza actualización de Navbar
      window.dispatchEvent(new Event('storage'));
      if (rol === 'administrador') {
        setIsAdmin(true);
      } else {
        setIsAdmin(false);
      }
      navigate('/'); // Redirige a la pantalla de bienvenida
    } catch (err) {
      setError('Usuario o contraseña incorrectos');
    }
  };

  const handleCreateAccount = () => {
    navigate('/registrar');
  };

  const handleForgotPassword = () => {
    alert('Funcionalidad de recuperación de contraseña próximamente.');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: 300, justifyContent: 'center' }}>
      <h2 style={{ marginBottom: 24 }}>Bienvenido</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: 280 }}>
        <input
          name="username"
          placeholder="Correo electrónico"
          value={form.username}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
        <input
          name="password"
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={handleChange}
          required
          style={{ width: '100%', padding: 8, marginBottom: 8 }}
        />
        <button type="submit" style={{ width: '100%', padding: 10, background: '#dc2626', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 600 }}>
          Entrar
        </button>
        <button
          type="button"
          onClick={handleCreateAccount}
          style={{ width: '100%', padding: 10, background: '#fff', color: '#dc2626', border: '2px solid #dc2626', borderRadius: 8, fontWeight: 600, marginTop: 8 }}
        >
          Crear cuenta
        </button>
        <button
          type="button"
          onClick={handleForgotPassword}
          style={{
            background: 'none',
            border: 'none',
            color: '#007bff',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginTop: 8,
            fontSize: 14,
            padding: 0,
            width: '100%',
            textAlign: 'center'
          }}
        >
          ¿Olvidaste tu contraseña?
        </button>
      </form>
      {error && <div style={{ color: 'red', marginTop: 16 }}>{error}</div>}
    </div>
  );
}

export default Login;