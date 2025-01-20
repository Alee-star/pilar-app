import { DropDownVarient } from "../types/DropDown";
import PreviousButton from "../assets/previous.svg?react";
import NextButton from "../assets/next.svg?react";
import DropDown from "./DropDown";

const Pagination = () => {
  return (
    <div className="flex flex-row items-center justify-between text-center border rounded-lg p-3 shadow-md mt-4">
      <div className="flex flex-row items-center gap-2 w-1/2">
        <span className="text-sm">Rows per page</span>
        <DropDown
          varient={DropDownVarient.PRIMARY}
          onChange={() => {}}
          dataIndex={1}
        />
        <span className="flex flex-nowrap w-24">1-25 of 407</span>
      </div>
      <nav>
        <ul className="xs:mt-0 mt-2 inline-flex items-center">
          <li>
            <button className="ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 inline-flex text-[16px]">
              <PreviousButton />
              Previous
            </button>
          </li>
          <li>
            <button className="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 inline-flex text-[16px]">
              Next
              <NextButton />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
