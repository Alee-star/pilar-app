import React from "react";
import { DetailEntry } from "../types/DetailTableTypes";

interface DetailTableProps {
  data: DetailEntry[];
}

const TablePart: React.FC<DetailTableProps> = ({ data }) => {
  return (
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
  );
};

export default TablePart;
