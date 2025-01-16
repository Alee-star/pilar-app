import ApartmentSelector from "./components/ApartmentSelector";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import DatePicker from "./components/DatePicker";
import DropDown from "./components/DropDown";
import "./index.css";
import DetailTable from "./components/DetailTable";

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
          <ApartmentSelector label="Apartment" onChange={() => {}} />
        </div>
        <DetailTable title="Unit details" />
      </div>
    </>
  );
}

export default App;
