import ApartmentSelector from "../components/ApartmentSelector";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import DatePicker from "../components/DatePicker";
import Searchbar from "../components/Searchbar";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const TenantsPage = () => {
  const [selectedView, setSelectedView] = useState("");

  return (
    <>
      <div className="h-screen overflow-hidden flex flex-col">
        <Header />
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar setSelectedView={setSelectedView} />
          <main className="w-full overflow-y-auto p-4 bg-white">
            {selectedView === "Tenants" ? (
              <div className="flex overflow-hidden w-full gap-3">
                <Searchbar placeholder="Search by User" onChange={() => {}} />
                <DatePicker placeholder="mm/dd/yyyy" onChange={() => {}} />
                <ApartmentSelector label="Apartment" onChange={() => {}} />
              </div>
            ) : (
              <p className="flex items-center">No data available</p>
            )}
          </main>
        </div>
      </div>
    </>
  );
};

export default TenantsPage;
