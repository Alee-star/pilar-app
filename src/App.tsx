import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tenants from "./pages/Tenants";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tenants />} />
        <Route path="/tenants" element={<Tenants />} />
      </Routes>
    </Router>
  );
}

export default App;
