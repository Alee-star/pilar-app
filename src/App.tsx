import Header from "./components/Header";
import Navbar from "./components/Navbar";
import DatePicker from "./components/DatePicker";
import "./index.css";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <Navbar />
        <div className="flex overflow-hidden w-full">
          <Searchbar placeholder="Search by User" onChange={() => {}} />
          <DatePicker placeholder="dd/mm/yyyy" />
        </div>
      </div>
    </>
  );
}

export default App;
