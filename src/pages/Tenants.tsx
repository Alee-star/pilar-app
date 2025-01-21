import DatePicker from "../components/DatePicker";
import Searchbar from "../components/Searchbar";
import ApartmentSelector from "../components/ApartmentSelector";
import TenantTable from "../components/TenantTable";
import Button from "../components/Button";
import { ButtonVarient } from "../types/ButtonTypes";

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
          <TenantTable headers={headers} hasIcon={true} hasButtons={true} />
        </>
      ) : (
        <p className="flex items-center">No data available</p>
      )}
    </>
  );
};

export default Tenants;
