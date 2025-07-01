import React from "react";
import "./Welcome.css";
import logo2 from "../assets/img/logo -Trattoria Napoletana.png";

export default function Welcome() {
  return (
    <div className="welcome-content">
      <h1 className="title">BENVENUTI A TRATTORIA NAPOLETANA</h1>

      <img src={logo2} alt="logo Trattoria Napoletana" className="central-img" />

      <h2 className="subtitle">RESTAURANTE ITALIANO</h2>

      <p className="description">
        Un rincón auténtico de Italia en tu ciudad. Disfruta de nuestra cocina
        tradicional napolitana con ingredientes frescos, recetas familiares y un
        ambiente acogedor para cada ocasión. ¡Reserva tu mesa y déjate conquistar
        por los sabores de Italia!
      </p>

      <button className="reserve-btn">Reservar</button>
    </div>
  );
}