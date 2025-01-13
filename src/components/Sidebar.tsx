import React, { useState } from "react";
import { Link } from "react-router-dom";

interface SidebarProps {
  setSelectedView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setSelectedView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMembersClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="w-fit flex border-r">
      <aside className="h-full w-64">
        <div className="h-full overflow-y-auto overflow-x-hidden rounded bg-white py-4 px-3">
          <div className="h-full flex flex-col">
            <ul className="mt-4 space-y-2 border-gray-200">
              <a>
                <li>
                  <div
                    className="group flex w-full items-center rounded-lg text-base font-normal text-gay-900 hover:bg-gray-100"
                    onClick={handleMembersClick}
                  >
                    <img
                      src="assets/members.svg"
                      className="h-6 w-6 text-gray-900"
                    />
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Members
                    </span>
                    <img src="assets/arrow.svg" className="h-6 w-6" />
                  </div>
                  {isOpen && (
                    <ul className="space-y-2 py-2">
                      <Link
                        to="/tenants"
                        className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 bgg-gray-100 group w-full pl-8"
                        onClick={() => setSelectedView("Tenants")}
                      >
                        <span className="px-3 flex-1 whitespace-nowrap">
                          Tenants
                        </span>
                      </Link>
                    </ul>
                  )}
                </li>
              </a>
            </ul>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
