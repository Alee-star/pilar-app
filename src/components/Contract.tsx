import { useEffect, useState } from "react";
import Button from "./Button";
import { User } from "../types/TableTypes";

interface ContractProps {
  tenantId: string;
}

const Contract: React.FC<ContractProps> = ({ tenantId }) => {
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
          <h5 className="font-semibold text-xl leading-7 mt-1">Contract</h5>
          <Button label="Edit" />
        </div>
      </section>
      <div className="rounded-lg border overflow-hidden mt-7">
        <table className="w-full text-sm text-left text-gray-500">
          <tbody className="divide-y">
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Rental Contract
              </td>
              <td className="p-5 text-sm leading-6">
                <div className="flex flex-col text-blue-700 font-bold">
                  <a href="#" className="hover:text-blue-400">
                    {tenant.apartment?.rental_contract || ""}
                  </a>
                </div>
              </td>
            </tr>
            <tr className="bg-white text-gray-900 font-medium flex justify-start">
              <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                Monthly rent
              </td>
              <td className="p-5 text-sm leading-6">
                {tenant.apartment?.rent}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="h-px bg-gray-200 w-full my-8" />
    </>
  );
};

export default Contract;
