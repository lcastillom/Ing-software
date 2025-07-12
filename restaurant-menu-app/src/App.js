import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MenuTable from './components/MenuTable';
import Login from './components/Login';
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Register from './components/Register';
import Reservar from './components/Reservar';
import './components/PagePanel.css';

function App() {
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <Router>
      <Navbar />
      <div className="page-panel">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/menu" element={<MenuTable />} />
          <Route path="/login" element={<Login setIsAdmin={setIsAdmin} /> } />
          <Route path="/registrar" element={<Register />} />
          <Route path="/reservar" element={<Reservar />} /> {/* Nueva ruta */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;