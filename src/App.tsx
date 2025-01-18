import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Tenants from "./pages/Tenants";
import "./index.css";
import Layout from "./pages/Layout";
import { useState } from "react";

function App() {
  const [selectedView, setSelectedView] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Layout setSelectedView={setSelectedView}>
              <Tenants selectedView={selectedView} />
            </Layout>
          }
        />
        <Route
          path="/tenants"
          element={
            <Layout setSelectedView={setSelectedView}>
              <Tenants selectedView={selectedView} />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
