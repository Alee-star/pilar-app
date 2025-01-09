import ApartmentSelector from "./components/ApartmentSelector";
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
        <div className="flex overflow-hidden w-full gap-2">
          <Searchbar placeholder="Search by User" onChange={() => {}} />
          <ApartmentSelector label="Apartment" />
        </div>
      </div>
    </>
  );
}

export default App;
