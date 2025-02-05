import React from "react";
import Button from "../Button";
import { ButtonVarient } from "../../types/ButtonTypes";
import { User } from "../../types/TableTypes";
import CloseIcon from "../../assets/close.svg?react";

interface ArchiveModalProps {
  tenantId: string;
  setTenant: React.Dispatch<React.SetStateAction<User[]>>;
  closeModal: () => void;
  confirmArchive: () => void;
}

const ArchiveModal: React.FC<ArchiveModalProps> = ({
  closeModal,
  confirmArchive,
}) => {
  return (
    <div className="fixed top-0 right-0 left-0 bottom-0 z-50 h-modal overflow-y-auto overflow-x-hidden items-center justify-center flex bg-gray-900 bg-opacity-100">
      <div className="relative h-full w-full p-4 md:h-auto max-w-xl">
        <div className="relative rounded-lg bg-white shadow">
          <div className="flex items-start justify-between rounded-t border-b p-5">
            <h3 className="text-xl font-medium text-gray-900">
              Archive Tenant
            </h3>
            <div
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 cursor-pointer"
              onClick={closeModal}
            >
              <CloseIcon className="h-5 w-5" />
            </div>
          </div>
          <div className="p-6">Are you sure you want to archive?</div>
          <div className="flex items-center space-x-2 rounded-b border-gray-200 p-6 border-t">
            <Button
              label="Yes"
              varient={ButtonVarient.SECONDARY}
              onClick={confirmArchive}
            />
            <Button
              label="No"
              varient={ButtonVarient.SECONDARY}
              onClick={closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchiveModal;
