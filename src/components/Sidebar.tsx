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
                    className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gay-900 hover:bg-gray-100"
                    onClick={handleMembersClick}
                  >
                    <svg
                      width="22"
                      height="19"
                      viewBox="0 0 22 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="h-6 w-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white text-gray-900"
                      data-testid="flowbite-sidebar-collapse-icon"
                    >
                      <path
                        d="M14.6002 4.19998C14.6002 5.15476 14.2209 6.07043 13.5458 6.74556C12.8706 7.42069 11.955 7.79998 11.0002 7.79998C10.0454 7.79998 9.12974 7.42069 8.45461 6.74556C7.77948 6.07043 7.4002 5.15476 7.4002 4.19998C7.4002 3.2452 7.77948 2.32952 8.45461 1.65439C9.12974 0.97926 10.0454 0.599976 11.0002 0.599976C11.955 0.599976 12.8706 0.97926 13.5458 1.65439C14.2209 2.32952 14.6002 3.2452 14.6002 4.19998ZM20.6002 6.59998C20.6002 7.2365 20.3473 7.84694 19.8973 8.29703C19.4472 8.74712 18.8367 8.99998 18.2002 8.99998C17.5637 8.99998 16.9532 8.74712 16.5031 8.29703C16.0531 7.84694 15.8002 7.2365 15.8002 6.59998C15.8002 5.96346 16.0531 5.35301 16.5031 4.90292C16.9532 4.45283 17.5637 4.19998 18.2002 4.19998C18.8367 4.19998 19.4472 4.45283 19.8973 4.90292C20.3473 5.35301 20.6002 5.96346 20.6002 6.59998ZM15.8002 15C15.8002 13.7269 15.2945 12.506 14.3943 11.6059C13.4941 10.7057 12.2732 10.2 11.0002 10.2C9.72716 10.2 8.50626 10.7057 7.60608 11.6059C6.70591 12.506 6.2002 13.7269 6.2002 15V18.6H15.8002V15ZM6.2002 6.59998C6.2002 7.2365 5.94734 7.84694 5.49725 8.29703C5.04717 8.74712 4.43672 8.99998 3.8002 8.99998C3.16368 8.99998 2.55323 8.74712 2.10314 8.29703C1.65305 7.84694 1.4002 7.2365 1.4002 6.59998C1.4002 5.96346 1.65305 5.35301 2.10314 4.90292C2.55323 4.45283 3.16368 4.19998 3.8002 4.19998C4.43672 4.19998 5.04717 4.45283 5.49725 4.90292C5.94734 5.35301 6.2002 5.96346 6.2002 6.59998ZM18.2002 18.6V15C18.2019 13.7799 17.8921 12.5796 17.3002 11.5128C17.8322 11.3766 18.3883 11.3638 18.926 11.4752C19.4638 11.5867 19.9689 11.8195 20.403 12.1559C20.8371 12.4923 21.1886 12.9233 21.4307 13.4162C21.6729 13.9091 21.7992 14.4508 21.8002 15V18.6H18.2002ZM4.7002 11.5128C4.10829 12.5796 3.79851 13.7799 3.8002 15V18.6H0.200196V15C0.199964 14.4504 0.325551 13.9081 0.567332 13.4146C0.809112 12.9211 1.16067 12.4895 1.59506 12.1529C2.02944 11.8163 2.53513 11.5835 3.07337 11.4726C3.6116 11.3616 4.16809 11.3754 4.7002 11.5128Z"
                        fill="#6B7280"
                      ></path>
                    </svg>
                    <span className="ml-3 flex-1 whitespace-nowrap text-left">
                      Members
                    </span>
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                      className="h-6 w-6"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
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
