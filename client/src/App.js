import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';
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
  const [locations, setLocations] = useState([]);

  useEffect(() =>{
    const fetchLocations = async ()=>{
      const res = await axios.get("/place")
      setLocations(res.data)
    }
    fetchLocations()
  }, [])
  return (
    <>
    {/* <Locais/> */}
      <Router>
        <Routes>
          <Route path="/mapa" element={<Map locations={locations}/>} />
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
