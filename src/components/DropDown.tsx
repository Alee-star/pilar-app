import { useEffect, useState } from "react";
import {
  DropDownProps,
  DropDownVarient,
  DropDownOption,
} from "../types/DropDown";

const DropDown: React.FC<DropDownProps> = ({ value, varient, onChange }) => {
  const [options, setOptions] = useState<DropDownOption[]>([]);
  const DropDownClass =
    varient === DropDownVarient.SECONDARY
      ? "width-[500px] opacity-50 cursor-not-allowed"
      : "";

  useEffect(() => {
    fetch("/assets/towers.json")
      .then((response) => response.json())
      .then((data) => setOptions(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="relative w-fit">
      <select
        className={`block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm rounded-tr-0 rounded-br-0  ${DropDownClass}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">Select Tower</option>
        {options.map((option: DropDownOption, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
