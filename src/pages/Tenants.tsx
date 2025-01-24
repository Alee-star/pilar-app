import React, { useEffect, useState } from "react";
import DatePicker from "../components/DatePicker";
import Searchbar from "../components/Searchbar";
import ApartmentSelector from "../components/ApartmentSelector";
import TenantTable from "../components/TenantTable";
import Button from "../components/Button";
import Pagination from "../components/Pagination";
import { ButtonVarient } from "../types/ButtonTypes";
import { User } from "../types/TableTypes";

interface TenantsProps {
  selectedView: string;
}

const Tenants: React.FC<TenantsProps> = ({ selectedView }) => {
  const headers = [
    "Name",
    "Apartment",
    "Tower",
    "Rent",
    "Move In Date",
    "Last Signed In",
    "Actions",
  ];

  const [tenants, setTenants] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(25);

  useEffect(() => {
    fetch("assets/data.json")
      .then((response) => response.json())
      .then((data) => setTenants(data))
      .catch((error) => console.error("error fetching data:", error));
  }, []);

  const totalTenants = tenants.length;
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(currentPage * rowsPerPage, totalTenants);
  const currentTenants = tenants.slice(startIndex, endIndex);

  return (
    <>
      {selectedView === "Tenants" ? (
        <>
          <div className="flex flex-col gap-3 mb-6">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <h3 className="font-semibold text-3xl leading-10 text-gray-900 mt-[1]">
                Tenants
              </h3>
              <Button
                label="Add New Tenant"
                varient={ButtonVarient.SECONDARY}
                imageAlt="plus-icon"
                image="/assets/plus.svg"
              />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <Searchbar placeholder="Search by User" onChange={() => {}} />
              <DatePicker placeholder="mm/dd/yyyy" onChange={() => {}} />
              <ApartmentSelector label="Apartment" onChange={() => {}} />
            </div>
            <div className="my-1 h-px bg-gray-200"></div>
          </div>
          <TenantTable
            headers={headers}
            hasIcon={true}
            hasButtons={true}
            tenants={currentTenants}
          />
          <Pagination
            data={tenants}
            currentPage={currentPage}
            rowsPerPage={rowsPerPage}
            setCurrentPage={setCurrentPage}
            setRowsPerPage={setRowsPerPage}
          />
        </>
      ) : (
        <p className="flex items-center">No data available</p>
      )}
    </>
  );
};

export default Tenants;
