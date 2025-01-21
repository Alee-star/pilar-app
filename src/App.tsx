import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Tenants from "./pages/Tenants";
import Archive from "./pages/Archive";
import { User } from "./types/TableTypes";
import "./index.css";

function App() {
  const [tenants, setTenants] = useState<User[]>([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tenants />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route
          path="/archive"
          element={<Archive setTenants={setTenants} tenants={tenants} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
