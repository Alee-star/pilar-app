import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CloseIcon from "../../assets/close.svg?react";
import DropDown from "../DropDown";
import { DropDownOption } from "../../types/DropDown";
import DatePicker from "../DatePicker";
import Button from "../Button";
import { ButtonVarient } from "../../types/ButtonTypes";

interface AddTableModalProps {
  onClose: () => void;
}

interface GenderData {
  name: string;
  title: string;
  dropDownOptions: DropDownOption[];
}

interface StatusData {
  name: string;
  title: string;
  dropDownOptions: DropDownOption[];
}

const AddTenantModal: React.FC<AddTableModalProps> = ({ onClose }) => {
  const [genderData, setGenderData] = useState<GenderData | null>(null);
  const [statusData, setStatusData] = useState<StatusData | null>(null);

  useEffect(() => {
    fetch("/assets/gender.json")
      .then((response) => response.json())
      .then((json) => {
        const dataOfGender = json.find(
          (item: GenderData) => item.name === "gender"
        );
        setGenderData(dataOfGender || null);
      })
      .catch((error) => console.error("Error fetching gender data", error));
  }, []);

  useEffect(() => {
    fetch("/assets/status.json")
      .then((response) => response.json())
      .then((json) => {
        const dataOfStatus = json.find(
          (item: StatusData) => item.name === "status"
        );
        setStatusData(dataOfStatus || null);
      })
      .catch((error) => console.error("Error fetching status data", error));
  }, []);

  const validationSchema = Yup.object().shape({
    tenantName: Yup.string()
      .matches(
        /^\S+\s+\S+$/,
        "Name should contain first and last name. e.g. John Doe"
      )
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string()
      .matches(
        /^\+\d{1,3}\s?\d{7,}$/,
        "Invalid phone format (e.g., +31 123456789)"
      )
      .required("Required"),
  });

  const initialValues = {
    tenantName: "",
    email: "",
    phone: "",
    dob: null,
    gender: "",
    status: "",
  };

  const handleSubmit = (values: typeof initialValues) => {
    console.log("Form Submitted Successfully!", values);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="relative h-full w-full max-w-2xl p-4">
        <div className="relative rounded-lg bg-white shadow">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, errors, touched }) => (
              <Form>
                <section className="p-3">
                  <div className="flex items-start justify-between rounded-t border-b p-5">
                    <h3 className="text-xl font-medium text-gray-900">
                      Add : Tenant Details
                    </h3>
                    <div className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400">
                      <CloseIcon onClick={onClose} />
                    </div>
                  </div>
                  <div className="p-6 pt-0">
                    <section className="mt-2">
                      <section>
                        <div className="mt-2">
                          <div className="flex flex-col gap-2 w-full">
                            <label className="font-medium text-sm leading-5 text-gray-900">
                              Tenant Name*
                              <small className="text-xs text-gray-500">
                                Mandatory (First Name, Last Name)
                              </small>
                            </label>
                            <div className="flex">
                              <div className="relative w-full">
                                <Field
                                  name="tenantName"
                                  className={`block w-full border rounded-lg p-2.5 text-sm ${
                                    errors.tenantName && touched.tenantName
                                      ? "border-red-500 bg-red-50 text-red-900 "
                                      : "border-gray-300 bg-gray-50 text-gray-900"
                                  }`}
                                />
                                <ErrorMessage
                                  name="tenantName"
                                  component="p"
                                  className="mt-2 text-sm text-red-600"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex mt-2 gap-3 justify-between">
                          <div className="w-1/2">
                            <div className="flex flex-col gap-2 w-full">
                              <label className="font-medium text-sm leading-5 text-gray-900">
                                Gender
                              </label>
                              <div className="flex">
                                <DropDown
                                  styles={{ width: "100%" }}
                                  data={
                                    genderData || {
                                      title: "Loading..",
                                      dropDownOptions: [],
                                    }
                                  }
                                  onChange={(value) =>
                                    setFieldValue("gender", value)
                                  }
                                />
                              </div>
                            </div>
                          </div>
                          <div className="w-1/2">
                            <div className="flex flex-col gap-2 w-full">
                              <label className="font-medium text-sm leading-5 text-gray-900">
                                DOB*
                              </label>
                              <DatePicker onChange={() => {}} />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex flex-col gap-2 w-full">
                            <label className="font-medium text-sm leading-5 text-gray-900">
                              Email*
                            </label>
                            <div className="flex">
                              <div className="relative w-full">
                                <Field
                                  name="email"
                                  className={`block w-full border rounded-lg p-2.5 text-sm ${
                                    errors.email && touched.email
                                      ? "border-red-500 bg-red-50 text-red-900 "
                                      : "border-gray-300 bg-gray-50 text-gray-900"
                                  }`}
                                />
                                <ErrorMessage
                                  name="email"
                                  component="p"
                                  className="mt-2 text-sm text-red-600"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex flex-col gap-2 w-full">
                            <label className="font-medium text-sm leading-5 text-gray-900">
                              Phone*
                              <small className="text-xs text-gray-500">
                                Mandatory Country Code (Ex: +31)
                              </small>
                            </label>
                            <div className="flex">
                              <div className="relative w-full">
                                <Field
                                  name="phone"
                                  className={`block w-full border rounded-lg p-2.5 text-sm ${
                                    errors.phone && touched.phone
                                      ? "border-red-500 bg-red-50 text-red-900 "
                                      : "border-gray-300 bg-gray-50 text-gray-900"
                                  }`}
                                />
                                <ErrorMessage
                                  name="phone"
                                  component="p"
                                  className="mt-2 text-sm text-red-600"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="flex flex-col gap-2 w-full">
                            <label className="font-medium text-sm leading-5 text-gray-900">
                              Status
                            </label>
                          </div>
                          <div className="flex">
                            <DropDown
                              styles={{ width: "100%" }}
                              onChange={(value) =>
                                setFieldValue("status", value)
                              }
                              data={
                                statusData || {
                                  title: "Loading..",
                                  dropDownOptions: [],
                                }
                              }
                            />
                          </div>
                        </div>
                      </section>
                    </section>
                  </div>
                  <div className="flex items-center space-x-2 rounded-b border-gray-200 p-6">
                    <div className="flex gap-3">
                      <Button
                        label="Add Tenant"
                        varient={ButtonVarient.THIRD}
                      />
                    </div>
                  </div>
                </section>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddTenantModal;
