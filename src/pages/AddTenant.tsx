import { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import DropDown from "../components/DropDown";
import {
  DropDownVarient,
  TowerData,
  ApartmentData,
  ElevatorData,
} from "../types/DropDown";
import NewTenantHeader from "../components/NewTenantHeader";
import DatePicker from "../components/DatePicker";
import FileUploader from "../components/FileUploader";
import AddTable from "../components/AddTable";

const AddTenant = () => {
  const [towerData, setTowerData] = useState<TowerData | null>(null);
  const [apartmentData, setApartmentData] = useState<ApartmentData | null>(
    null
  );
  const [elevatorData, setElevatorData] = useState<ElevatorData | null>(null);
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedElevator, setSelectedElevator] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const handleElevatorChange = (value: string) => {
    setSelectedElevator(value);
    const selectedElevatorDate = elevatorData?.dropDownOptions.find(
      (elevator) => elevator.value === value
    );
    setAvailableSlots(selectedElevatorDate?.slots || []);
  };

  const handleTowerChange = (value: string) => {
    setSelectedTower(value);
  };

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

  useEffect(() => {
    fetch("/assets/apartment.json")
      .then((response) => response.json())
      .then((json) => {
        const dataOfApartment = json.find(
          (item: ApartmentData) => item.name === "apartment"
        );
        setApartmentData(dataOfApartment || null);
      })
      .catch((error) => console.error("Error in fetching data", error));
  }, []);

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

  const validationSchema = Yup.object().shape({
    rent: Yup.number()
      .typeError("Rent must be a valid number")
      .required("Monthly rent is required"),
  });

  const isElevatorSlotVisible = selectedDate && selectedElevator;

  return (
    <div className="bg-gray-100 h-full">
      <NewTenantHeader />
      <div className="py-8 px-56">
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
                  onChange={handleTowerChange}
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
                    apartmentData || {
                      title: "Loading..",
                      dropDownOptions: [],
                    }
                  }
                  varient={DropDownVarient.SECONDARY}
                  styles={{
                    borderTopLeftRadius: "0px",
                    borderBottomLeftRadius: "0px",
                    cursor: selectedTower ? "pointer" : "not-allowed",
                    opacity: selectedTower ? 1 : 0.5,
                  }}
                  disabled={!selectedTower}
                />
              </div>
            </div>
          </div>
        </div>
        <AddTable />
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
                onChange={handleElevatorChange}
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
                  {isElevatorSlotVisible &&
                  selectedElevator &&
                  availableSlots.length > 0 ? (
                    <select className="block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm">
                      {availableSlots.map((slot, index) => (
                        <option key={index}>{slot}</option>
                      ))}
                    </select>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-px bg-gray-200 w-full my-8" />
        <div />
        <div>
          <h5 className="font-semibold text-xl leading-7">Contract</h5>
          <div className="py-4">
            <Formik
              initialValues={{ rent: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log(values)}
            >
              {({ errors, touched }) => (
                <Form className="flex flex-col gap-2 w-full">
                  <label className="font-medium text-sm leading-5 text-gray-900">
                    Monthly rent *
                    <span className="text-gray-500 ml-2 text-xs">
                      This field is mandatory
                    </span>
                  </label>
                  <div className="flex">
                    <div className="relative w-full">
                      <Field
                        name="rent"
                        className={`block w-full border rounded-lg p-2.5 text-sm ${
                          errors.rent && touched.rent
                            ? "border-red-500 bg-red-50 text-red-900 placeholder-red-700"
                            : "bg-gray-50 border-gray-300 text-gray-900"
                        }`}
                        placeholder="0000"
                      />
                    </div>
                  </div>
                  <ErrorMessage
                    name="rent"
                    component="p"
                    className="text-red-600 text-sm"
                  />
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="py-4">
          <FileUploader
            requirement="Requirement : Pdf (max. 5mb)"
            buttonLabel="Monthly rent *"
            helperText="This field is mandatory"
            acceptedFormats=".pdf, .png, .jpeg"
          />
          <div className="pt-8">
            <h5 className="font-semibold text-xl leading-7">Other documents</h5>
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
  );
};

export default AddTenant;
