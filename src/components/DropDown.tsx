import React from "react";
import {
  DropDownProps,
  DropDownVarient,
  DropDownOption,
} from "../types/DropDown";

interface DropDownComponentProps extends DropDownProps {
  data: {
    title: string;
    dropDownOptions: DropDownOption[];
  };
  styles?: React.CSSProperties;
}

const DropDown: React.FC<DropDownComponentProps> = ({
  value,
  varient,
  onChange,
  styles,
  data,
}) => {
  const DropDownClass =
    varient === DropDownVarient.SECONDARY
      ? "w-[500px] opacity-50 cursor-not-allowed"
      : "w-full";

  return (
    <div className="relative w-full">
      <select
        className={`block border bg-select bg-no-repeat bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm rounded-tr-0 rounded-br-0 appearance-none pr-5 ${DropDownClass}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          backgroundPosition: "right 0.25rem center",
          backgroundSize: "1.5em 1.5em",
          paddingRight: "1.25rem",
          ...styles,
        }}
      >
        <option value="">{data.title}</option>
        {data.dropDownOptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
