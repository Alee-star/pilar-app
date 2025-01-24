import BackIcon from "../assets/back.svg?react";

const AddTenant = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="border-gray-200 bg-white px-2 py-2.5 sm:px-4">
          <div className="mx-auto flex flex-wrap items-center justify-between">
            <div className="flex-1 flex justy-between gap-5 py-5 px-52 items-center whitespace-nowrap">
              <div className="flex gap-5 items-center text-xl font-semibold">
                <button type="button">
                  <BackIcon />
                </button>
                <span>Add new tenant</span>
              </div>
              <div className="flex relative">
                <div className="flex w-full items-center my-auto h-full justifuy-end">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full flex justify-center border-2 border-gray-800 box-content">
                      <div className="w-2 h-2 rounded-full bg-gray-800" />
                    </div>
                  </div>
                  <div className="h-px w-3 bg-gray-300" />
                </div>
                <div className="flex w-full items-center my-auto h-full justify-start">
                  <div className="h-px bg-gray-800 w-3 bg-gray-300" />
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full flex justify-center border-2 border-gray-800 box-content">
                      <div className="w-2 h-2 rounded-full bg-gray-800" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default AddTenant;
