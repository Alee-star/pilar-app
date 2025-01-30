import React from "react";
import BackIcon from "../assets/back.svg?react";
import { useNavigate } from "react-router-dom";

interface NewTenantHeaderProps {
  isTenantDetailsAdded: boolean;
}

const NewTenantHeader: React.FC<NewTenantHeaderProps> = ({
  isTenantDetailsAdded,
}) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  const progressBarStyle = isTenantDetailsAdded ? "bg-gray-800" : "bg-gray-300";
  const progressIconStyle = isTenantDetailsAdded
    ? " border-gray-800"
    : "border-gray-300";

  return (
    <div className="sticky top-0 z-50">
      <nav className="border-gray-200 bg-white px-2 py-2.5 sm:px-4">
        <div className="mx-auto flex flex-wrap items-center justify-between">
          <div className="flex-1 flex justify-between gap-5 py-5 px-52 items-center whitespace-nowrap">
            <div className="flex gap-5 items-center text-xl font-semibold">
              <button type="button">
                <BackIcon onClick={handleBackClick} />
              </button>
              <span>Add new tenant</span>
            </div>
            <div className="flex relative">
              <div className="flex w-full items-center my-auto h-full justify-end">
                <div className="flex items-center">
                  <div className="w-6 h-6 rounded-full flex justify-center items-center border-2 border-gray-800 box-content">
                    <div className="w-2 h-2 rounded-full bg-gray-800" />
                  </div>
                </div>
                <div className={`h-px w-3 ${progressBarStyle}`} />
              </div>
              <div className="flex w-full items-center my-auto h-full justify-start">
                <div className={`h-px w-3 ${progressBarStyle}`} />
                <div className="flex items-center">
                  <div
                    className={`w-6 h-6 rounded-full flex justify-center items-center border-2 ${progressIconStyle} box-content`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${progressBarStyle}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NewTenantHeader;
