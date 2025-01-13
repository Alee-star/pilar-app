import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TenantsPage from "./pages/TenantsPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TenantsPage />} />
        <Route path="/tenants" element={<TenantsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
