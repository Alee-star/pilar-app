import { useState } from "react";
import Searchbar from "./Searchbar";
import { SearchVarient } from "../types/search";

export interface SelectorProps {
  label?: string;
  onChange: (value: string) => void;
}

const ApartmentSelector: React.FC<SelectorProps> = ({ label, onChange }) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [searchString, setSearchString] = useState<string>("");

  const apartments = ["All apartments", "Test apartment", "Test 2"];

  const filteredApartments = apartments.filter((apartment) =>
    apartment.toLowerCase().includes(searchString.toLowerCase())
  );

  const handleSelect = (apartment: string) => {
    setSearchString(apartment);
    setIsClicked(false);

    if (onChange) {
      onChange(apartment);
    }
  };

  return (
    <div className="text-gray-700 bg-gray-50 border border-gray-200 px-3 py-2.5 flex items-center rounded-lg cursor-pointer">
      <div className="w-fit">
        <div
          className="flex items-center"
          onClick={() => setIsClicked(!isClicked)}
        >
          {label}
          <img
            src="src/assets/down-arrow.svg"
            alt="arrow-down"
            className="w-4 h-4 ml-2 block"
          />
        </div>
      </div>
      {isClicked && (
        <div className="z-10 w-fit rounded border border-gray-200 bg-white text-gray-900 absolute top-[170px]">
          <div className="py-1 text-sm text-gray-700">
            <ul className="py-1">
              <div className="flex flex-col items-center h-64 overflow-y-scroll overflow-x-hidden">
                <div className="flex flex-col items-start pl-3 pr-16 pb-4">
                  <div className="border-b-2">
                    <Searchbar
                      onChange={(e) => setSearchString(e.target.value)}
                      placeholder="Search"
                      varient={SearchVarient.SECONDARY}
                    />
                  </div>
                  {filteredApartments.length > 0 ? (
                    filteredApartments.map((apartment, index) => (
                      <div
                        className="w-full text-start items-center hover:bg-gray-100"
                        key={index}
                        onClick={() => handleSelect(apartment)}
                      >
                        <div className="rounded-lg w-full py-1 px-3 flex justify-between">
                          <p className="text-base">{apartment}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-base px-3 py-1">No apartments found</p>
                  )}
                </div>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApartmentSelector;
