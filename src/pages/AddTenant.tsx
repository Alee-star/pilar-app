import BackIcon from "../assets/back.svg?react";
import DropDown from "../components/DropDown";

const AddTenant = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="sticky top-0 z-50">
        <nav className="border-gray-200 bg-white px-2 py-2.5 sm:px-4">
          <div className="mx-auto flex flex-wrap items-center justify-between">
            <div className="flex-1 flex justify-between gap-5 py-5 px-52 items-center whitespace-nowrap">
              <div className="flex gap-5 items-center text-xl font-semibold">
                <button type="button">
                  <BackIcon />
                </button>
                <span>Add new tenant</span>
              </div>
              <div className="flex relative">
                <div className="flex w-full items-center my-auto h-full justify-end">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full flex justify-center border-2 border-gray-800 box-content">
                      <div className="w-2 h-2 rounded-full bg-gray-800 mt-2" />
                    </div>
                  </div>
                  <div className="h-px w-3 bg-gray-300" />
                </div>
                <div className="flex w-full items-center my-auto h-full justify-start">
                  <div className="h-px bg-gray-800 w-3 bg-gray-300" />
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full flex justify-center border-2 border-gray-800 box-content">
                      <div className="w-2 h-2 rounded-full bg-gray-800 mt-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
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
                  <DropDown onChange={() => {}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTenant;
