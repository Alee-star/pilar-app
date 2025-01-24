import { useEffect, useState } from "react";
import {
  DropDownProps,
  DropDownVarient,
  DropDownOption,
  TowerData,
} from "../types/DropDown";

interface ExtendedDropDownProps extends DropDownProps {
  dataName: string;
}

const DropDown: React.FC<ExtendedDropDownProps> = ({
  value,
  varient,
  onChange,
  dataName,
}) => {
  const [towerData, setTowerData] = useState<TowerData | null>(null);
  const DropDownClass =
    varient === DropDownVarient.SECONDARY
      ? "w-[500px] opacity-50 cursor-not-allowed"
      : "w-[70px]";

  useEffect(() => {
    fetch("/assets/towers.json")
      .then((response) => response.json())
      .then((data) => {
        const matchedData = data.find(
          (item: TowerData) => item.name === dataName
        );
        setTowerData(matchedData || null);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [dataName]);

  return (
    <div className="relative w-fit">
      <select
        className={`block w-full border bg-select bg-no-repeat bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm rounded-tr-0 rounded-br-0 appearance-none pr-5 ${DropDownClass}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          backgroundPosition: "right 0.25rem center",
          backgroundSize: "1.5em 1.5em",
        }}
      >
        <option value="">{towerData?.title}</option>
        {towerData?.subAssets.map((option: DropDownOption, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
