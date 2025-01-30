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
  hasTitle?: boolean;
}

const DropDown: React.FC<DropDownComponentProps> = ({
  value,
  varient,
  onChange,
  data,
  hasTitle = false,
}) => {
  const DropDownClass =
    varient === DropDownVarient.SECONDARY
      ? "w-[500px] opacity-50 cursor-not-allowed"
      : "w-[70px]";

  return (
    <div className="relative w-fit">
      <select
        className={`block w-full border bg-select bg-no-repeat bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm rounded-tr-0 rounded-br-0 appearance-none pr-5 ${DropDownClass}`}
        value={value || "25"}
        onChange={(e) => onChange(e.target.value)}
        style={{
          backgroundPosition: "right 0.25rem center",
          backgroundSize: "1.5em 1.5em",
        }}
      >
        {hasTitle && <option value="">{data.title}</option>}
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
