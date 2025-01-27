import React, { useEffect, useState } from "react";
import { DropDownVarient, DropDownOption } from "../types/DropDown";
import PreviousButton from "../assets/previous.svg?react";
import NextButton from "../assets/next.svg?react";
import DropDown from "./DropDown";
import { PaginationProps } from "../types/PaginationTypes";

interface PageData {
  name: string;
  title: string;
  subAssets: DropDownOption[];
}

const Pagination: React.FC<PaginationProps> = ({
  data = [],
  currentPage,
  rowsPerPage,
  setCurrentPage,
  setRowsPerPage,
}) => {
  const [pageData, setPageData] = useState<PageData | null>(null);
  const totalDataCount = data.length;

  useEffect(() => {
    fetch("/assets/pagination.json")
      .then((response) => response.json())
      .then((json) => {
        const fetchedData = json.find((item: PageData) => item.name === "page");
        setPageData(fetchedData || null);
      })
      .catch((error) => console.error("Error fetching page data:", error));
  }, []);

  const handlePageChange = (direction: "next" | "previous") => {
    if (direction === "next" && currentPage * rowsPerPage < totalDataCount) {
      setCurrentPage(currentPage + 1);
    } else if (direction === "previous" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleRowsPerPageChange = (value: string) => {
    setRowsPerPage(Number(value));
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(currentPage * rowsPerPage, totalDataCount);

  return (
    <div className="flex flex-row items-center justify-between text-center border rounded-lg p-3 shadow-md mt-4">
      <div className="flex flex-row items-center gap-2 w-1/2">
        <span className="text-sm">Rows per page</span>
        {pageData ? (
          <DropDown
            varient={DropDownVarient.PRIMARY}
            onChange={handleRowsPerPageChange}
            value={rowsPerPage.toString()}
            data={pageData}
          />
        ) : (
          <span>Loading...</span>
        )}
        <span className="flex flex-nowrap w-24">{`${
          startIndex + 1
        }-${endIndex} of ${totalDataCount}`}</span>
      </div>
      <nav>
        <ul className="xs:mt-0 mt-2 inline-flex items-center">
          <li>
            <button
              className="ml-0 rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 inline-flex text-[16px]"
              onClick={() => handlePageChange("previous")}
            >
              <PreviousButton />
              Previous
            </button>
          </li>
          <li>
            <button
              className="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 inline-flex text-[16px]"
              onClick={() => handlePageChange("next")}
            >
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
