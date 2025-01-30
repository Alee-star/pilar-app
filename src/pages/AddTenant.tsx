import { useEffect, useState } from "react";
import DropDown from "../components/DropDown";
import { DropDownOption, DropDownVarient } from "../types/DropDown";
import Button from "../components/Button";
import { ButtonVarient } from "../types/ButtonTypes";
import NewTenantHeader from "../components/NewTenantHeader";
import DatePicker from "../components/DatePicker";
import FileUploader from "../components/FileUploader";

interface TowerData {
  name: string;
  title: string;
  dropDownOptions: DropDownOption[];
}

interface ElevatorData {
  name: string;
  title: string;
  dropDownOptions: DropDownOption[];
}

const AddTenant = () => {
  const [towerData, setTowerData] = useState<TowerData | null>(null);
  const [elevatorData, setElevatorData] = useState<ElevatorData | null>(null);
  const [selectedData, setSelectedDate] = useState<string | null>(null);
  const [selectedElevator, setSelectedElevator] = useState<string | null>(null);

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
  });

  useEffect(() => {
    fetch("/assets/elevator.json")
      .then((response) => response.json())
      .then((json) => {
        const dataOfElevator = json.find(
          (item: ElevatorData) => item.name === "elevator"
        );
        setElevatorData(dataOfElevator || null);
      })
      .catch((error) => console.error("Error in fetching data", error));
  }, []);

  const isElevatorSlotVisible = selectedData && selectedElevator;

  return (
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
                    onChange={() => {}}
                    data={
                      towerData || { title: "Loading..", dropDownOptions: [] }
                    }
                    styles={{
                      borderTopRightRadius: "0px",
                      borderBottomRightRadius: "0px",
                    }}
                  />
                </div>
                <div className="flex">
                  <DropDown
                    hasTitle
                    onChange={() => {}}
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
          <div className="flex justify-between items-center my-7">
            <h5 className="font-semibold text-xl leading-7">Tenant</h5>
            <Button
              label="Add Tenant"
              image="/assets/plus2.svg"
              imageAlt="plus-bold-icon"
              varient={ButtonVarient.DISABLED}
            />
          </div>
        </div>
        <div>
          <div className="py-3">
            <h5 className="font-semibold text-xl leading-7">
              Onboarding Information
            </h5>
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-sm leading-5 text-gray-900">
                Move in date
              </label>
              <DatePicker onChange={(value) => setSelectedDate(value)} />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-sm leading-5 text-gray-900">
                Elevator
              </label>
              <div className="flex items-center gap-2">
                <DropDown
                  hasTitle
                  data={
                    elevatorData || { title: "Loading..", dropDownOptions: [] }
                  }
                  onChange={(value) => setSelectedElevator(value)}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-sm leading-5 text-gray-900">
                Elevator slot
              </label>
              <div className="flex items-center gap-2">
                <div className="flex">
                  <div className="relative w-full">
                    {isElevatorSlotVisible ? (
                      <select className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm">
                        <option>05:00 - 06:00</option>
                        <option>06:00 - 07:00</option>
                        <option>07:00 - 08:00</option>
                        <option>08:00 - 09:00</option>
                        <option>09:00 - 10:00</option>
                        <option>10:00 - 11:00</option>
                        <option>11:00 - 12:00</option>
                      </select>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-px bg-gray-200 w-full my-8" />
        </div>
        <div>
          <h5 className="font-semibold text-xl leading-7">Contract</h5>
          <div className="py-4">
            <div className="flex flex-col gap-2 w-full">
              <label className="font-medium text-sm leading-5 text-gray-900">
                Monthly rent *
                <span className="text-gray-500 ml-2 text-xs">
                  This field is mandatory
                </span>
              </label>
              <div className="flex">
                <div className="relative w-full">
                  <input
                    className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm"
                    placeholder="0000"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="py-4">
            <FileUploader
              requirement="Requirement : Pdf (max. 5mb)"
              buttonLabel="Monthly rent *"
              helperText="This field is mandatory"
              acceptedFormats=".pdf"
            />
            <div className="pt-8">
              <h5 className="font-semibold text-xl leading-7">
                Other documents
              </h5>
              <div className="pt-8">
                <FileUploader
                  requirement="Requirement : SVG, PNG, JPEG, docx, pdf"
                  buttonLabel="Upload documents"
                  acceptedFormats=".svg,.png,.jpeg,.docx,.pdf"
                />
              </div>
            </div>
            <div className="h-px bg-gray-200 w-full my-8" />
          </div>
          <div className="mt-14">
            <button className="cursor-not-allowed opacity-50 text-white bg-gray-800 border border-transparent flex h-min items-center justify-center p-0.5 text-center font-medium rounded-lg">
              <span className="flex items-center rounded-md text-sm px-4 py-2">
                Continue: Summary
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTenant;
