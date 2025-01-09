import { SelectorProps } from "../types/selector";

const ApartmentSelector: React.FC<SelectorProps> = ({ label }) => {
  return (
    <div className="text-gray-700 bg-gray-50 border border-gray-200 px-3 py-2.5 flex items-center">
      <div className="w-fit">
        <div className="flex items-center">{label}</div>
      </div>
    </div>
  );
};

export default ApartmentSelector;
