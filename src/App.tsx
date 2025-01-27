import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tenants from "./pages/Tenants";
import Layout from "./pages/Layout";
import Archive from "./pages/Archive";
import { useState } from "react";
import { User } from "./types/TableTypes";
import ViewTenantDetails from "./pages/ViewTenantDetail";
import "./index.css";

function App() {
  const [selectedView, setSelectedView] = useState("");
  const [tenants, setTenants] = useState<User[]>([]);

  return (
    <Router>
      <Routes>
        <Route element={<Layout setSelectedView={setSelectedView} />}>
          <Route path="/" element={<Tenants selectedView={selectedView} />} />
          <Route
            path="/tenants"
            element={<Tenants selectedView={selectedView} />}
          />
          <Route path="/tenantDetails" element={<ViewTenantDetails />} />
        </Route>
        <Route
          path="/archive"
          element={<Archive setTenants={setTenants} tenants={tenants} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
