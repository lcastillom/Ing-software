import React, { useEffect, useState } from 'react';
import { getMenu } from '../utils/api';

function MenuTable() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getMenu()
      .then(res => {
        setMenu(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError('No se pudo cargar el menú');
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Cargando menú...</div>;
  if (error) return <div>{error}</div>;

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr>
          <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>Nombre</th>
          <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>Descripción</th>
          <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>Categoría</th>
          <th style={{ borderBottom: '2px solid #ccc', textAlign: 'left' }}>Precio</th>
        </tr>
      </thead>
      <tbody>
        {menu.map(item => (
          <tr key={item.id}>
            <td style={{ borderBottom: '1px solid #eee' }}>{item.nombre}</td>
            <td style={{ borderBottom: '1px solid #eee' }}>{item.descripcion}</td>
            <td style={{ borderBottom: '1px solid #eee' }}>{item.categoria}</td>
            <td style={{ borderBottom: '1px solid #eee' }}>${parseFloat(item.precio).toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MenuTable;