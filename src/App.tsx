import ApartmentSelector from "./components/ApartmentSelector";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import DatePicker from "./components/DatePicker";
import DropDown from "./components/DropDown";
import Table from "./components/Table";
import "./index.css";

function App() {
  const headers = [
    "Name",
    "Apartment",
    "Tower",
    "Rent",
    "Move In Date",
    "Last Signed In",
    "Actions",
  ];

  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <Navbar />
        <main className="w-full bg-white">
          <div className="flex overflow-hidden w-full gap-2 mb-6">
            <Searchbar placeholder="Search by User" onChange={() => {}} />
            <DatePicker placeholder="mm/dd/yyyy" onChange={() => {}} />
            <DropDown onChange={() => {}} />
            <ApartmentSelector label="Apartment" onChange={() => {}} />
          </div>
          <Table headers={headers} hasImage={true} hasButtons={true} />
        </main>
      </div>
    </>
  );
}

export default App;
