import ApartmentSelector from "./components/ApartmentSelector";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";
import DatePicker from "./components/DatePicker";
import DropDown from "./components/DropDown";
import FileUploader from "./components/FileUploader";
import "./index.css";

function App() {
  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <Navbar />
        <div className="ml-3 flex overflow-hidden w-full gap-2">
          <Searchbar placeholder="Search by User" onChange={() => {}} />
          <DatePicker placeholder="mm/dd/yyyy" onChange={() => {}} />
          <DropDown onChange={() => {}} />
          <ApartmentSelector label="Apartment" onChange={() => {}} />
        </div>
        <div className="flex w-full mt-10 ml-3">
          <FileUploader
            requirement="Requirement: Pdf (max. 5MB)"
            label="Upload rental contract*"
            spanLabel="This field is mandatory"
          />
        </div>
      </div>
    </>
  );
}

export default App;
