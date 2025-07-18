import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";
import logo2 from "../assets/img/logo -Trattoria Napoletana.png";

export default function Welcome() {
  const user = localStorage.getItem('user');
  const nombre = user ? JSON.parse(user).nombre : null;
  const navigate = useNavigate();

  const handleReservar = () => {
    navigate('/reservar');
  };

  return (
    <div className="welcome-content">
      <h1 className="title">BENVENUTI A TRATTORIA NAPOLETANA</h1>

      <img src={logo2} alt="logo Trattoria Napoletana" className="central-img" />

      <h2 className="subtitle">RESTAURANTE ITALIANO</h2>

      {nombre && (
        <p className="user-greeting" style={{ fontWeight: 'bold', marginBottom: 16 }}>
          ¡Hola, {nombre}!
        </p>
      )}

      <p className="description">
        Un rincón auténtico de Italia en tu ciudad. Disfruta de nuestra cocina
        tradicional napolitana con ingredientes frescos, recetas familiares y un
        ambiente acogedor para cada ocasión. ¡Reserva tu mesa y déjate conquistar
        por los sabores de Italia!
      </p>

      <button className="reserve-btn" onClick={handleReservar}>Reservar</button>
    </div>
  );
}