import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ArrowIcon from "../assets/arrow.svg?react";
import MemberIcon from "../assets/members.svg?react";

interface SidebarProps {
  setSelectedView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedView }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackClick = () => {
    setSelectedView("");
    navigate(-1);
  };

  const handleMembersClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-fit flex border-r">
      <aside className="h-full w-64">
        <div className="h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3">
          <div className="h-full flex flex-col">
            <ul className="mt-4 space-y-2 border-gray-200">
              <li className="cursor-pointer">
                <div
                  className="group flex w-full items-center p-2 rounded-lg text-base font-normal text-gray-900 hover:bg-gray-100"
                  onClick={handleMembersClick}
                >
                  <MemberIcon className="h-6 w-6 text-gray-900" />
                  <span
                    className="ml-3 flex-1 whitespace-nowrap text-left"
                    onClick={handleBackClick}
                  >
                    Members
                  </span>
                  <ArrowIcon className="h-6 w-6 text-gray-900" />
                </div>
                {isOpen && (
                  <ul className="space-y-2 py-2">
                    <Link
                      to="/tenants"
                      className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 bg-gray-100 group w-full pl-8"
                      onClick={() => setSelectedView("Tenants")}
                    >
                      <span className="px-3 flex-1 whitespace-nowrap">
                        Tenants
                      </span>
                    </Link>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
