import React, { useEffect, useState } from "react";
import { TenantDetailsProps, DetailEntry } from "../types/DetailTableTypes";
import { titleToKey } from "../types/Map";
import DetailTable from "./DetailTable";
import Button from "./Button";

const TenantDetails: React.FC<TenantDetailsProps> = ({ title, tenantId }) => {
  const [data, setData] = useState<DetailEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getJsonKeyFromTitle = (displayTitle: string) => {
    return titleToKey[displayTitle] || displayTitle;
  };

  useEffect(() => {
    const fetchData = async () => {
      const jsonKey = getJsonKeyFromTitle(title);
      try {
        const response = await fetch("/assets/data.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        const tenant = result.find(
          (tenant: any) =>
            tenant.id === tenantId &&
            tenant.viewDetail &&
            tenant.viewDetail[jsonKey]
        );

        if (tenant && tenant.viewDetail[jsonKey]) {
          setData(tenant.viewDetail[jsonKey]);
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
