import { useState } from "react";
import DatePicker from "../components/DatePicker";
import Searchbar from "../components/Searchbar";
import ApartmentSelector from "../components/ApartmentSelector";
import Layout from "../pages/Layout";
import FileUploader from "../components/FileUploader";

const Tenants = () => {
  const [selectedView, setSelectedView] = useState("");

  return (
    <Layout setSelectedView={setSelectedView}>
      {selectedView === "Tenants" ? (
        <>
          <div className="flex overflow-hidden w-full gap-3 mb-6">
            <Searchbar placeholder="Search by User" onChange={() => {}} />
            <DatePicker placeholder="mm/dd/yyyy" onChange={() => {}} />
            <ApartmentSelector label="Apartment" onChange={() => {}} />
          </div>
          <div className="flex w-full mt-10 ml-3">
            <FileUploader
              requirement="Requirement: Pdf (max. 5MB)"
              buttonLabel="Upload rental contract*"
              helperText="This field is mandatory"
              acceptedFormats=".pdf"
            />
          </div>
        </>
      ) : (
        <p className="flex items-center">No data available</p>
      )}
    </Layout>
  );
};

export default Tenants;
