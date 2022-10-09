import React from 'react'
import Map from './pages/map/Map';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  //Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="map" element={<Map />} />
          <Route path="/"/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
