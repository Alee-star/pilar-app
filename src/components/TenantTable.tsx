import React, { useState, useEffect } from "react";
import { TenantTableProps } from "../types/TableTypes";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import ArchiveModal from "./model/Archive";

const TenantTable: React.FC<TenantTableProps> = ({
  headers,
  hasIcon,
  hasButtons,
  tenants,
  setTenants,
}) => {
  const [selectedTenantId, setSelectedTenantId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("assets/data.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setTenants(data);
        } else {
          setTenants([data]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleTenantDetailClick = (tenantId: string) => {
    navigate("/tenantDetails", { state: { tenantId } });
  };

  const handleArchiveClick = (tenantId: string) => {
    setSelectedTenantId(tenantId);
  };

  const handleArchiveConfirm = () => {
    if (!selectedTenantId) return;

    setTenants((prevTenants) =>
      prevTenants.filter(({ id }) => id !== selectedTenantId)
    );
    setSelectedTenantId(null);
  };

  const handleArchiveCancel = () => {
    setSelectedTenantId(null);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 bg-gray-100">
            <tr>
              {hasIcon && <th className="px-6 py-4"></th>}
              {headers.map((header, index) => (
                <th
                  key={index}
                  className={`px-6 py-3 ${
                    index === headers.length - 1 && hasButtons
                      ? "text-center"
                      : ""
                  }`}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y">
            {tenants.map((tenant) => (
              <tr key={tenant.id} className="bg-white">
                {hasIcon && (
                  <td className="px-8 py-4">
                    {tenant.status.is_move === "Moved In" ? (
                      <img src="assets/tick.svg" alt="tick" />
                    ) : (
                      <img src="assets/pending.svg" alt="pending" />
                    )}
                  </td>
                )}
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {`${tenant.user.first_name} ${tenant.user.last_name}`}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.apartment.name.en}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.apartment.tower.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.apartment.rent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.status.move_in_date || ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.status.last_sign_date || ""}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-4 items-center justify-between">
                    <Button
                      label="View Detail"
                      onClick={() => handleTenantDetailClick(tenant.id)}
                      buttonId={tenant.id}
                    />
                    <Button
                      label={
                        tenant.status.last_sign_date
                          ? "Reset Password"
                          : "Re-invite"
                      }
                    />
                    <Button
                      label="Archive"
                      onClick={() => handleArchiveClick(tenant.id)}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedTenantId && (
        <ArchiveModal
          tenantId={selectedTenantId}
          setTenant={setTenants}
          closeModal={handleArchiveCancel}
          confirmArchive={handleArchiveConfirm}
        />
      )}
    </div>
  );
};

export default TenantTable;
