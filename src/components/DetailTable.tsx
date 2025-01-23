import React from "react";
import { DetailEntry } from "../types/DetailTableTypes";

interface DetailTableProps {
  data: DetailEntry[];
}

const DetailTable: React.FC<DetailTableProps> = ({ data }) => {
  if (data.length === 0) {
    return <p>No data available</p>;
  }
  return (
    <div className="rounded-lg border overflow-hidden mt-7">
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
              <td className="p-5 text-sm leading-6">
                {item.label === "Rental Contract" ? (
                  <div className="flex flex-col text-blue-700 font-bold">
                    <a href="#" className="hover:text-blue-400">
                      {item.value}
                    </a>
                  </div>
                ) : (
                  item.value
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DetailTable;
