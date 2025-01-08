import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import "./index.css";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <Navbar />
        <Searchbar placeholder="Search by User" image="assets/search.svg" />
      </div>
    </>
  );
}

export default App;
