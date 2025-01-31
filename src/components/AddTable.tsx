import Button from "./Button";
import { ButtonVarient } from "../types/ButtonTypes";

const AddTable = () => {
  return (
    <>
      <div className="flex justify-between items-center my-7">
        <h5 className="font-semibold text-xl leading-7">Tenant</h5>
        <Button
          label="Add Tenant"
          image="/assets/plus2.svg"
          imageAlt="plus-bold-icon"
          varient={ButtonVarient.DISABLED}
        />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 normal-case">
            <tr>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Gender</th>
              <th className="px-6 py-3">DOB</th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Mob</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y">
            <tr className="odd:bg-white even:bg-gray-50 bg-white">
              <td className="px-6 py-4 text-center" colSpan={6}>
                No data
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-px bg-gray-200 w-full my-8" />
    </>
  );
};

export default AddTable;
