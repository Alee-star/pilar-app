import { DropDownProps, DropDownVarient } from "../types/DropDown";

const DropDown: React.FC<DropDownProps> = ({ value, varient, onChange }) => {
  const DropDownClass =
    varient === DropDownVarient.SECONDARY
      ? "width-[500px] opacity-50 cursor-not-allowed"
      : "";

  return (
    <div className="flex">
      <div className="relative w-full">
        <select
          className={`block w-full border bg-gray-50 border-gray-300 text-gray-900 rounded-lg p-2.5 text-sm rounded-tr-0 rounded-br-0  ${DropDownClass}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        >
          <option value="">Select Tower</option>
          <option value="tower1">Sub-asset-1</option>
          <option value="tower2">Sub-asset-2</option>
          <option value="tower3">Sub-asset-3</option>
        </select>
      </div>
    </div>
  );
};

export default DropDown;
