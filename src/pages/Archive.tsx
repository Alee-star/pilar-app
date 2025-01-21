import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { ButtonVarient } from "../types/ButtonTypes";
import CloseIcon from "../assets/close.svg?react";
import { User } from "../types/TableTypes";

interface ArchiveProps {
  setTenants: React.Dispatch<React.SetStateAction<User[]>>;
  tenants: User[];
}

const Archive: React.FC<ArchiveProps> = () => {
  const navigate = useNavigate();

  const handleYesClick = () => {
    navigate(-1);
  };

  const handleNoClick = () => {
    navigate(-1);
  };

  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-50 h-modal overflow-y-auto overflow-x-hidden items-center justify-center flex bg-[#101826] bg-opacity-50">
      <div className="relative h-full w-full p-4 md:h-auto max-w-xl">
        <div className="relative rounded-lg bg-white shadow">
          <div className="flex items-start justify-between rounded-t border-b p-5">
            <h3 className="text-xl font-medium text-gray-900">
              Archive Tenant
            </h3>
            <div className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400">
              <CloseIcon className="h-5 w-5" onClick={handleNoClick} />
            </div>
          </div>
          <div className="p-6">Are you sure you want to archive?</div>
          <div className="flex items-center space-x-2 rounded-b border-gray-200 p-6 border-t">
            <Button
              label="Yes"
              varient={ButtonVarient.SECONDARY}
              onClick={handleYesClick}
            />
            <Button
              label="No"
              varient={ButtonVarient.SECONDARY}
              onClick={handleNoClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Archive;
