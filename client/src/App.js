import Map from './pages/map/Map';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="map" element={<Map />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
