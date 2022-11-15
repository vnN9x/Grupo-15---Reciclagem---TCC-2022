import React from 'react'
import Mapa from './pages/mapa/Mapa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Materiais from './pages/materiais/Materiais';
import Dados from './pages/dados/Dados';
import './app.css'
import Sobre from './pages/sobre/Sobre';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/mapa" element={<Mapa/>} />
          <Route exact path="/" element={<Home />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/dados" element={<Dados />} />
          <Route path="/sobre" element={<Sobre/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
