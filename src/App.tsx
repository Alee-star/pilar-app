import Header from "./components/Header";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <Navbar />
      </div>
    </>
  );
}

export default App;
