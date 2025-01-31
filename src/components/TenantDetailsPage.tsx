import { useEffect, useState } from "react";
import Button from "./Button";
import { User } from "../types/TableTypes";

interface TenantPageProps {
  tenantId: string;
}

const TenantDetailsPage: React.FC<TenantPageProps> = ({ tenantId }) => {
  const [tenant, setTenant] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTenantDetailData = async () => {
      try {
        const response = await fetch("/assets/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data: User[] = await response.json();
        const selectedTenant = data.find((tenant) => tenant.id === tenantId);
        if (selectedTenant) setTenant(selectedTenant);
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      }
    };

    fetchTenantDetailData();
  }, []);

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!tenant) {
    return <p className="text-gray-500">Loading...</p>;
  }

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
                {tenant.user?.first_name || ""} {tenant.user?.last_name || ""}
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Gender
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant.user?.gender || ""}
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                DOB
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant.user?.dob || ""}
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Email
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant.user?.email || ""}
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Phone
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant.user?.phone_number || ""}
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Status
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant.status?.is_move || ""}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-px bg-gray-200 w-full my-8" />
    </>
  );
};

export default TenantDetailsPage;
