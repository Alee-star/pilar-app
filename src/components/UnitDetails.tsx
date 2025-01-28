import React, { useEffect, useState } from "react";
import Button from "./Button";
import DetailTable from "./DetailTable";

interface UnitDetailsProps {
  tenantId: string;
}

const UnitDetails: React.FC<UnitDetailsProps> = ({ tenantId }) => {
  const [data, setData] = useState<{ label: string; value: string }[]>([]);
  const [error, setError] = useState<string | null>(null);

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
          const fields = ["Unit type", "Sub asset", "Apartment unit"];
          const mappedData = fields.map((field) => ({
            label: field,
            value: tenant[field] || "N/A",
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
  }, [tenantId]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <section>
        <div className="flex justify-between items-center mb-6">
          <h5 className="font-semibold text-xl leading-7 mt-1">Unit details</h5>
          <Button label="Edit" />
        </div>
      </section>
      <DetailTable data={data} />
      <div className="h-px bg-gray-200 w-full my-8" />
    </>
  );
};

export default UnitDetails;
