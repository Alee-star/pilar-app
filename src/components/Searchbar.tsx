import React from "react";
import clsx from "clsx";
import { SearchProps, SearchVarient } from "../types/SearchTypes";

const Searchbar: React.FC<SearchProps> = ({
  placeholder,
  image,
  imageAlt,
  varient = SearchVarient.PRIMARY,
  onChange,
}) => {
  return (
    <div className="flex">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src={image} alt={imageAlt}></img>
        </div>
        <input
          className={clsx(
            "block w-full rounded-lg pl-10 p-2.5 text-gray-900 text-sm",
            {
              "border bg-gray-50 border-gray-300":
                varient === SearchVarient.PRIMARY,
              "bg-white outline-none": varient === SearchVarient.SECONDARY,
            }
          )}
          placeholder={placeholder}
          onChange={(e) => {
            console.log("Search:", e.target.value);
            if (onChange) {
              onChange(e);
            }
          }}
        />
      </div>
    </div>
  );
};

export default Searchbar;
