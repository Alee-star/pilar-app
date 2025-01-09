import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Banner from "./pages/banner";
import "./index.css";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <Navbar />
        <Banner />
      </div>
    </>
  );
}

export default App;
