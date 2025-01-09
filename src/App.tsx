import Header from "./components/Header";
import Navbar from "./components/Navbar";
import DatePicker from "./components/DatePicker";
import Searchbar from "./components/Searchbar";
import DropDown from "./components/DropDown";
import "./index.css";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <Navbar />
        <div className="flex overflow-hidden w-full gap-2">
          <Searchbar placeholder="Search by User" onChange={() => {}} />
          <DatePicker placeholder="mm/dd/yyyy" onChange={() => {}} />
          <DropDown onChange={() => {}} />
        </div>
      </div>
    </>
  );
}

export default App;
