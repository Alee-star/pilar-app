import { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import { DropDownOption, DropDownVarient } from "../types/DropDown";
import NewTenantHeader from "../components/NewTenantHeader";
import AddTable from "../components/AddTable";
import AddTenantModal from "../components/model/AddTenant";

interface TowerData {
  name: string;
  title: string;
  dropDownOptions: DropDownOption[];
}

const AddTenant = () => {
  const [towerData, setTowerData] = useState<TowerData | null>(null);
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [selectedApartment, setSelectedApartment] = useState<string | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("/assets/towers.json")
      .then((response) => response.json())
      .then((json) => {
        const dataOfTower = json.find(
          (item: TowerData) => item.name === "tower"
        );
        setTowerData(dataOfTower || null);
      })
      .catch((error) => console.error("Error in fetching data", error));
  }, []);

  const isButtonEnabled = !!(selectedTower && selectedApartment);

  return (
    <>
      <div className="bg-gray-100 h-full">
        <NewTenantHeader />
        <div className="py-8 px-56">
          <div>
            <h5 className="font-semibold text-xl leading-7">Tenant Details</h5>
            <div className="mt-5">
              <div className="flex flex-col gap-2 w-full">
                <label className="font-medium text-sm leading-5 text-gray-900">
                  Apartment
                </label>
                <div className="flex w-full">
                  <div className="flex">
                    <DropDown
                      hasTitle
                      onChange={(value) => setSelectedTower(value)}
                      data={
                        towerData || { title: "Loading..", dropDownOptions: [] }
                      }
                      styles={{
                        borderTopRightRadius: "0px",
                        borderBottomRightRadius: "0px",
                        width: "100%",
                      }}
                    />
                  </div>
                  <div className="flex">
                    <DropDown
                      hasTitle
                      onChange={(value) => setSelectedApartment(value)}
                      data={
                        towerData || { title: "Loading..", dropDownOptions: [] }
                      }
                      varient={DropDownVarient.SECONDARY}
                      styles={{
                        borderTopLeftRadius: "0px",
                        borderBottomLeftRadius: "0px",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <AddTable
              isButtonEnabled={isButtonEnabled}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>
      {isModalOpen && <AddTenantModal onClose={() => setIsModalOpen(false)} />}
    </>
  );
};

export default AddTenant;
