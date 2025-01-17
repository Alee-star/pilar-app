import React, { useEffect, useState } from "react";
import { DetailTableProps, DetailItem } from "../types/DetailTableTypes";
import { titleKeyMappings } from "../types/Map";

const DetailTable: React.FC<DetailTableProps> = ({ title }) => {
  const [data, setData] = useState<DetailItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const mapTitleToKey = (displayTitle: string) => {
    return titleKeyMappings[displayTitle] || displayTitle;
  };

  useEffect(() => {
    const fetchData = async () => {
      const jsonKey = mapTitleToKey(title);
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
          <h5 className="font-semibold text-xl leading-7">{title}</h5>
        </div>
      </section>
      <div className="rounded-lg border overflow-hidden">
        <table className="w-full text-sm text-left text-gray-500">
          <tbody className="divide-y">
            {data.map((item, index) => (
              <tr
                key={index}
                className="bg-white text-gray-900 font-medium flex justify-start"
              >
                <td className="text-sm p-5 leading-5 border-r w-2/5 bg-gray-50 flex items-center gap-2">
                  {item.label}
                </td>
                <td className="p-5 text-sm leading-6">{item.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DetailTable;
