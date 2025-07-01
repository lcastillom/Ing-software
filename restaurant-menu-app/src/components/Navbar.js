import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-restaurante.jpg";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          <img src={logo} alt="Logo Restaurante" />
        </div>
        <div className="navbar-links">
          <Link to="/">Inicio</Link>
          <Link to="/menu">Menú</Link>
          <Link to="/admin">Admin</Link>
        </div>
      </div>
    </nav>
  );
}