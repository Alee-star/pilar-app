import { useState } from "react";
import DatePicker from "../components/DatePicker";
import Searchbar from "../components/Searchbar";
import ApartmentSelector from "../components/ApartmentSelector";
import Layout from "../pages/Layout";
import TenantTable from "../components/TenantTable";

const Tenants = () => {
  const [selectedView, setSelectedView] = useState("");

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
    <Layout setSelectedView={setSelectedView}>
      {selectedView === "Tenants" ? (
        <>
          <div className="flex overflow-hidden w-full gap-3 mb-6">
            <Searchbar placeholder="Search by User" onChange={() => {}} />
            <DatePicker placeholder="mm/dd/yyyy" onChange={() => {}} />
            <ApartmentSelector label="Apartment" onChange={() => {}} />
          </div>
          <TenantTable headers={headers} hasIcon={true} hasButtons={true} />
        </>
      ) : (
        <p className="flex items-center">No data available</p>
      )}
    </Layout>
  );
};

export default Tenants;
