import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tenants from "./pages/Tenants";
import Layout from "./pages/Layout";
import AddTenant from "./pages/AddTenant";
import { useState } from "react";
import "./index.css";

function App() {
  const [selectedView, setSelectedView] = useState("");

  return (
    <Router>
      <Routes>
        <Route element={<Layout setSelectedView={setSelectedView} />}>
          <Route path="/" element={<Tenants selectedView={selectedView} />} />
          <Route
            path="/tenants"
            element={<Tenants selectedView={selectedView} />}
          />
        </Route>
        <Route path="/addTenant" element={<AddTenant />} />
      </Routes>
    </Router>
  );
}

export default App;
