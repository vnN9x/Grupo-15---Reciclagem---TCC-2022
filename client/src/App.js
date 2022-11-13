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
import './app.css'
import Dados from './pages/dados/Dados';

function App() {
  return (
    <>
    {/* <Locais/> */}
      <Router>
        <Routes>
          <Route path="map" element={<Map />} />
          <Route path="home" element={<Home />} />
          <Route path="materiais" element={<Materiais />} />
          <Route path="dados" element={<Dados />} />
          <Route path="sobre" element={<Dados />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
