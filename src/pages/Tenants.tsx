import DatePicker from "../components/DatePicker";
import Searchbar from "../components/Searchbar";
import ApartmentSelector from "../components/ApartmentSelector";
import { useState } from "react";
import Layout from "../pages/Layout";

const Tenants = () => {
  const [selectedView, setSelectedView] = useState("");

  return (
    <Layout setSelectedView={setSelectedView}>
      {selectedView === "Tenants" ? (
        <div className="flex overflow-hidden w-full gap-3 mb-6">
          <Searchbar placeholder="Search by User" onChange={() => {}} />
          <DatePicker placeholder="mm/dd/yyyy" onChange={() => {}} />
          <ApartmentSelector label="Apartment" onChange={() => {}} />
        </div>
      ) : (
        <p className="flex items-center">No data available</p>
      )}
    </Layout>
  );
};

export default Tenants;
