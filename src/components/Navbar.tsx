import Button from "./Button";
import { ButtonVarient } from "../types/ButtonTypes";

const Navbar = () => {
  return (
    <div className="p-3 bg-gray-50 flex justify-between items-center h-16 z-20">
      <div className="flex">
        <div className="relative w-full">
          <select className="block w-full rounded-lg border-none bg-gray-50 appearance-none bg-[url('assets/down-arrow.svg')] bg-[right_0.25rem_center] bg-[length:1.5em_1.5em] bg-no-repeat text-gray-900 leading-[24px] p-2.5 pr-[64.4px] font-semibold text-[16px] text-[#1F2A37] box-content">
            <option value="">Houthaven</option>
          </select>
        </div>
      </div>
      <Button label="Show all assets" varient={ButtonVarient.white} />
    </div>
  );
};

export default Navbar;
