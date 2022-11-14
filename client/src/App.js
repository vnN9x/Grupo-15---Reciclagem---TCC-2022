import React from 'react'
import Map from './pages/map/Map';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import Home from './pages/home/Home';
import Materiais from './pages/materiais/Materiais';
//import Locais from './components/locais/Locais';
import Dados from './pages/dados/Dados';
import './app.css'
import Sobre from './pages/sobre/Sobre';

function App() {
  return (
    <>
    {/* <Locais/> */}
      <Router>
        <Routes>
          <Route path="/mapa" element={<Map />} />
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
