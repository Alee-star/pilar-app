import Button from "./Button";
import { User } from "../types/TableTypes";

interface UnitDetailsProps {
  tenant: User;
}

const UnitDetails: React.FC<UnitDetailsProps> = ({ tenant }) => {
  return (
    <>
      <section>
        <div className="flex justify-between items-center mb-6">
          <h5 className="font-semibold text-xl leading-7 mt-1">Unit Details</h5>
          <Button label="Edit" />
        </div>
      </section>
      <div className="rounded-lg border overflow-hidden mt-7">
        <table className="w-full text-sm text-left text-gray-500">
          <tbody className="divide-y">
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Unit Type
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant?.apartment?.type}
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Sub Asset
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant?.apartment?.tower?.name}
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Apartment Unit
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant?.apartment?.name?.en}-{tenant?.apartment?.tower?.name}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-px bg-gray-200 w-full my-8" />
    </>
  );
};

export default UnitDetails;
