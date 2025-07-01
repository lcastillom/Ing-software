import React from 'react';
import MenuTable from './MenuTable';

function AdminMenu({ menu, setMenu, setIsAdmin }) {
  // ...aquí va el formulario de agregar platillos como antes...
  // Puedes agregar un botón para cerrar sesión:
  return (
    <div>
      <button onClick={() => setIsAdmin(false)} style={{ float: 'right' }}>Cerrar sesión</button>
      <h2>Panel de Administración</h2>
      {/* Aquí el formulario y la tabla */}
      {/* ...tu código existente... */}
      <MenuTable menu={menu} />
    </div>
  );
}

export default AdminMenu;