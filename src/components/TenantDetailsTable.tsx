import Button from "./Button";
import { User } from "../types/TableTypes";

interface TenantPageProps {
  tenant: User;
}

const TenantDetailsTable: React.FC<TenantPageProps> = ({ tenant }) => {
  return (
    <>
      <section>
        <div className="flex justify-between items-center mb-6">
          <h5 className="font-semibold text-xl leading-7 mt-1">
            Tenant Details
          </h5>
          <Button label="Edit" />
        </div>
      </section>
      <div className="rounded-lg border overflow-hidden mt-7">
        <table className="w-full text-sm text-left text-gray-500">
          <tbody className="divide-y">
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Tenant Name
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant?.user?.first_name} {tenant?.user?.last_name}
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Gender
              </td>
              <td className="p-5 text-sm leading-6">{tenant?.user?.gender}</td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                DOB
              </td>
              <td className="p-5 text-sm leading-6">{tenant?.user?.dob}</td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Email
              </td>
              <td className="p-5 text-sm leading-6">{tenant?.user?.email}</td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Phone
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant?.user?.phone_number}
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Status
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant?.status?.is_move}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-px bg-gray-200 w-full my-8" />
    </>
  );
};

export default TenantDetailsTable;
