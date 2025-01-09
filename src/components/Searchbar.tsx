import React, { useState } from "react";
import { SearchProps, SearchVarient } from "../types/search";

const Searchbar: React.FC<SearchProps> = ({
  placeholder,
  varient = SearchVarient.PRIMARY,
  onChange,
}) => {
  const [inputValue, setInputValue] = useState("");

  const inputClass =
    varient === SearchVarient.PRIMARY
      ? "block w-full rounded-lg pl-10 p-2.5 text-gray-900 text-sm border bg-gray-50 border-gray-300"
      : "block w-full rounded-lg pl-10 p-2.5 text-gray-900 text-sm bg-white outline-none";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);

    if (onChange) {
      onChange(e);
    }
  };

  return (
    <div className="flex">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-500 dark:text-gray-400"
          >
            <path
              d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
              stroke="#667085"
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
        <input
          className={inputClass}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Searchbar;
