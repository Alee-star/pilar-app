import React, { useEffect, useState } from "react";
import { TenantDetailsProps, DetailEntry } from "../types/DetailTableTypes";
import { titleToKey } from "../types/Map";
import TablePart from "./TablePart";

const TenantDetails: React.FC<TenantDetailsProps> = ({ title }) => {
  const [data, setData] = useState<DetailEntry[]>([]);
  const [error, setError] = useState<string | null>(null);

  const getJsonKeyFromTitle = (displayTitle: string) => {
    return titleToKey[displayTitle] || displayTitle;
  };

  useEffect(() => {
    const fetchData = async () => {
      const jsonKey = getJsonKeyFromTitle(title);
      try {
        const response = await fetch("/assets/details.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        if (result && result[jsonKey]) {
          setData(result[jsonKey]);
        } else {
          throw new Error("section not found in fetched data");
        }
      } catch (err: any) {
        setError(err.message || "An unknown error occured");
        console.error("Error in fetching data", err);
      }
    };
    fetchData();
  }, [title]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <section>
        <div className="flex justify-between items-center mb-6 mt-4">
          <h5 className="font-semibold text-xl leading-7">Unit details</h5>
        </div>
        <TablePart data={data} />
      </section>
    </>
  );
};

export default TenantDetails;
