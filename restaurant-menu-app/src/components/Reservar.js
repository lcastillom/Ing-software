import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Genera las horas del día (ejemplo: 12:00 a 23:00)
const horas = Array.from({ length: 12 }, (_, i) => `${i + 12}:00`);

export default function Reservar() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [personas, setPersonas] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Redirige si no hay sesión activa
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigate('/login');
    }
  }, [navigate]);

  const handlePersonasChange = e => {
    const value = e.target.value;
    // Solo permite números entre 1 y 50
    if (/^\d*$/.test(value) && (+value >= 1 && +value <= 50 || value === '')) {
      setPersonas(value);
      setError('');
    } else {
      setError('Solo se permiten números entre 1 y 50');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!fecha || !hora || !personas) {
      setError('Todos los campos son obligatorios');
      return;
    }
    if (+personas < 1 || +personas > 50) {
      setError('El número de personas debe ser entre 1 y 50');
      return;
    }
    setError('');
    alert(`Reserva realizada para el ${fecha} a las ${hora} para ${personas} personas.`);
  };

  return (
    <div style={{ maxWidth: 350, margin: '40px auto', padding: 24, border: '1px solid #ddd', borderRadius: 10 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Reservar mesa</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        <label>
          Fecha:
          <input
            type="date"
            value={fecha}
            onChange={e => setFecha(e.target.value)}
            required
            min={new Date().toISOString().split('T')[0]}
          />
        </label>
        <label>
          Hora:
          <select value={hora} onChange={e => setHora(e.target.value)} required>
            <option value="">Selecciona una hora</option>
            {horas.map(h => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </label>
        <label>
          Número de personas:
          <input
            type="number"
            min="1"
            max="50"
            value={personas}
            onChange={handlePersonasChange}
            required
          />
        </label>
        <button type="submit" style={{ background: '#dc2626', color: '#fff', padding: 10, border: 'none', borderRadius: 6, fontWeight: 600 }}>
          Reservar
        </button>
      </form>
      {error && <div style={{ color: 'red', marginTop: 12 }}>{error}</div>}
    </div>
  );
}