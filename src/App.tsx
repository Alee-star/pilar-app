import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tenants from "./pages/Tenants";
import Layout from "./pages/Layout";
import ViewTenantDetail from "./pages/ViewTenantDetail";
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
          <Route path="/tenantDetails" element={<ViewTenantDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
