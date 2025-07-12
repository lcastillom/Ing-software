import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo-restaurante.jpg";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem('user');
    return stored ? JSON.parse(stored) : null;
  });

  // Sincroniza el estado con el localStorage cuando cambie la sesión
  useEffect(() => {
    const handleStorage = () => {
      const stored = localStorage.getItem('user');
      setUser(stored ? JSON.parse(stored) : null);
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={logo} alt="Logo Restaurante" />
        </div>
        <div className="navbar-links">
          <Link to="/">Inicio</Link>
          <Link to="/menu">Menú</Link>
          {!user ? (
            <Link to="/login">Ingresar</Link>
          ) : (
            <button
              onClick={handleLogout}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Salir
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}