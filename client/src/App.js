import React from 'react'
import Map from './pages/map/Map';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";
import TopBar from './components/TopBar/TopBar';
import Home from './pages/home/Home';
import HomeRigthBar from './components/homeRigthBar/HomeRigthBar';
import {rigthData} from './components/homeRigthBar/rigthData';
import Header from './components/header/Header';
import HomeSideBar from './components/homeSidebar/HomeSideBar';

function App() {
  return (
    <>
      <Home/>
      <Router>
        <Routes>
          <Route path="map" element={<Map />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
