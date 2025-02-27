import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './Pages/principal/Inicio.jsx';
import Registro from './Pages/principal/Registro.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;