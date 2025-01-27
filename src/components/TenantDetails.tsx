import React, { useEffect, useState } from "react";
import { TenantDetailsProps } from "../types/DetailTableTypes";
import DetailTable from "./DetailTable";
import Button from "./Button";

const TenantDetails: React.FC<TenantDetailsProps> = ({ title, tenantId }) => {
  const [data, setData] = useState<{ label: string; value: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

  const mapTitleToFields: { [key: string]: string[] } = {
    "Unit details": ["Unit type", "Sub asset", "Apartment unit"],
    "Tenant details": [
      "Tenant Name",
      "Gender",
      "DOB",
      "Email",
      "Phone",
      "Status",
    ],
    "Onboarding Information": ["Move in date", "Elevator Slots"],
    Contract: ["Rental Contract", "Monthly rent"],
    "Other Documents": ["Documents"],
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/assets/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        const tenant = result.find((tenant: any) => tenant.id === tenantId);

        if (tenant) {
          const fields = mapTitleToFields[title] || [];
          const mappedData = fields.map((field) => ({
            label: field === "DOB" ? field : field.replace(/([A-Z])/g, "$1"),
            value: tenant[field],
          }));
          setData(mappedData);
        } else {
          setData([]);
        }
      } catch (err: any) {
        setError(err.message || "An unknown error occurred");
      }
    };
    fetchData();
  }, [title, tenantId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <section>
        <div className="flex justify-between items-center mb-6">
          <h5 className="font-semibold text-xl leading-7 mt-1">{title}</h5>
          <Button label="Edit" />
        </div>
      </section>
      <DetailTable data={data} />
      <div className="h-px bg-gray-200 w-full my-8" />
    </>
  );
};

export default TenantDetails;
