import Button from "./Button";
import { User } from "../types/TableTypes";

interface ContractProps {
  tenant: User;
}

const Contract: React.FC<ContractProps> = ({ tenant }) => {
  const rowClass = "bg-white text-gray-900 font-medium flex justify-start";
  const cellClass =
    "text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2";
  const valueClass = "p-5 text-sm leading-6";

  return (
    <>
      <section>
        <div className="flex justify-between items-center mb-6">
          <h5 className="font-semibold text-xl leading-7 mt-1">Contract</h5>
          <Button label="Edit" />
        </div>
      </section>
      <div className="rounded-lg border overflow-hidden mt-7">
        <table className="w-full text-sm text-left text-gray-500">
          <tbody className="divide-y">
            <tr className={rowClass}>
              <td className={cellClass}>Rental Contract</td>
              <td className={valueClass}>
                <div className="flex flex-col text-blue-700 font-bold">
                  <a href="#" className="hover:text-blue-400">
                    {tenant?.apartment?.rental_contract}
                  </a>
                </div>
              </td>
            </tr>
            <tr className={rowClass}>
              <td className={cellClass}>Monthly rent</td>
              <td className={valueClass}>{tenant?.apartment?.rent}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-px bg-gray-200 w-full my-8" />
    </>
  );
};

export default Contract;
