import React from "react";
import { SearchProps, SearchVarient } from "../types/search";

const Searchbar: React.FC<SearchProps> = ({
  placeholder,
  image,
  imageAlt,
  varient = SearchVarient.PRIMARY,
  onChange,
}) => {
  const inputClass =
    varient === SearchVarient.PRIMARY
      ? "block w-full rounded-lg pl-10 p-2.5 text-gray-900 text-sm"
      : "block w-full rounded-lg pl-10 p-2.5 text-gray-900 text-sm bg-white outline-none";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <img src={image} alt={imageAlt} />
        </div>
        <input
          className={inputClass}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
