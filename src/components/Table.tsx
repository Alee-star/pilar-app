import React, { useEffect, useState } from "react";
import { TableProps, User } from "../types/TableTypes";
import Button from "./Button";

const Table: React.FC<TableProps> = ({ headers, hasImage, hasButtons }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("assets/data.json")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("error fetching data:", error));
  }, []);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 bg-gray-100">
            <tr>
              {hasImage && <th className="px-6 py-3"></th>}
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
            {users.map((user, index) => (
              <tr key={index} className="bg-white">
                {hasImage && (
                  <td className="px-6 py-4">
                    <img src="assets/tick.svg" alt="tick" />
                  </td>
                )}
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {user.apartment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {user.tower}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {user.rent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {user.moveInDate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {user.lastSignedIn}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-4 items-center justify-between">
                    <Button label="View Detail" />
                    <Button label="Re-invite" />
                    <Button label="Archive" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
