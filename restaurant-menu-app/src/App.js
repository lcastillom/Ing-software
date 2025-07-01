import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MenuTable from './components/MenuTable';
import AdminMenu from './components/AdminMenu';
import AdminLogin from './components/AdminLogin';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import './components/PagePanel.css'; // Importa el CSS aquí

function App() {
  const [menu, setMenu] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3002/api/menu')
      .then(res => res.json())
      .then(data => setMenu(data));
  }, []);

  return (
    <Router>
      <Navbar />
      <div className="page-panel">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<MenuTable menu={menu} />} />
          <Route
            path="/admin"
            element={
              isAdmin
                ? <AdminMenu menu={menu} setMenu={setMenu} setIsAdmin={setIsAdmin} />
                : <AdminLogin setIsAdmin={setIsAdmin} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;