// import React, { useEffect, useState } from "react";
// import { TenantTableProps, User } from "../types/TableTypes";
// import Button from "./Button";

// const TenantTable: React.FC<TenantTableProps> = ({
//   headers,
//   hasIcon,
//   hasButtons,
// }) => {
//   const [tenants, setTenants] = useState<User[]>([]);

//   useEffect(() => {
//     fetch("assets/data.json")
//       .then((response) => response.json())
//       .then((data) => setTenants(data))
//       .catch((error) => console.error("error fetching data:", error));
//   }, []);

//   return (
//     <div className="flex flex-col gap-3">
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-left text-sm text-gray-500">
//           <thead className="bg-gray-50 text-xs uppercase text-gray-700 bg-gray-100">
//             <tr>
//               {hasIcon && <th className="px-6 py-3"></th>}
//               {headers.map((header, index) => (
//                 <th
//                   key={index}
//                   className={`px-6 py-3 ${
//                     index === headers.length - 1 && hasButtons
//                       ? "text-center"
//                       : ""
//                   }`}
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y">
//             {tenants.map((tenant) => (
//               <tr key={tenant.id} className="bg-white">
//                 {hasIcon && (
//                   <td className="px-6 py-4">
//                     {tenant.hasMovedIn ? (
//                       <img src="assets/tick.svg" alt="tick" />
//                     ) : (
//                       <img src="assets/pending.svg" alt="pending" />
//                     )}
//                   </td>
//                 )}
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.name}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.apartment}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.tower}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.rent}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.moveInDate || ""}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.lastSignedIn || ""}
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex gap-x-4 items-center justify-between">
//                     <Button label="View Detail" />
//                     <Button
//                       label={
//                         tenant.lastSignedIn ? "Reset Password" : "Re-invite"
//                       }
//                     />
//                     <Button label="Archive" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TenantTable;

// import React, { useEffect, useState } from "react";
// import { TenantTableProps, User } from "../types/TableTypes";
// import Button from "./Button";

// const TenantTable: React.FC<TenantTableProps> = ({
//   headers,
//   hasIcon,
//   hasButtons,
// }) => {
//   const [tenants, setTenants] = useState<User[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(5);

//   useEffect(() => {
//     fetch("assets/data.json")
//       .then((response) => response.json())
//       .then((data) => setTenants(data))
//       .catch((error) => console.error("error fetching data:", error));
//   }, []);

//   const startIndex = (currentPage - 1) * rowsPerPage;
//   const endIndex = Math.min(currentPage * rowsPerPage, tenants.length);
//   const currentTenants = tenants.slice(startIndex, endIndex);

//   return (
//     <div className="flex flex-col gap-3">
//       <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
//         <table className="w-full text-left text-sm text-gray-500">
//           <thead className="bg-gray-50 text-xs uppercase text-gray-700 bg-gray-100">
//             <tr>
//               {hasIcon && <th className="px-6 py-3"></th>}
//               {headers.map((header, index) => (
//                 <th
//                   key={index}
//                   className={`px-6 py-3 ${
//                     index === headers.length - 1 && hasButtons
//                       ? "text-center"
//                       : ""
//                   }`}
//                 >
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="divide-y">
//             {currentTenants.map((tenant) => (
//               <tr key={tenant.id} className="bg-white">
//                 {hasIcon && (
//                   <td className="px-6 py-4">
//                     {tenant.hasMovedIn ? (
//                       <img src="assets/tick.svg" alt="tick" />
//                     ) : (
//                       <img src="assets/pending.svg" alt="pending" />
//                     )}
//                   </td>
//                 )}
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.name}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.apartment}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.tower}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.rent}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.moveInDate || ""}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                   {tenant.lastSignedIn || ""}
//                 </td>
//                 <td className="px-6 py-4">
//                   <div className="flex gap-x-4 items-center justify-between">
//                     <Button label="View Detail" />
//                     <Button
//                       label={
//                         tenant.lastSignedIn ? "Reset Password" : "Re-invite"
//                       }
//                     />
//                     <Button label="Archive" />
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TenantTable;

import React, { useEffect, useState } from "react";
import { TenantTableProps, User } from "../types/TableTypes";
import Button from "./Button";
import Pagination from "./Pagination";

const TenantTable: React.FC<TenantTableProps> = ({
  headers,
  hasIcon,
  hasButtons,
}) => {
  const [tenants, setTenants] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    fetch("assets/data.json")
      .then((response) => response.json())
      .then((data) => setTenants(data))
      .catch((error) => console.error("error fetching data:", error));
  }, []);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = Math.min(currentPage * rowsPerPage, tenants.length);
  const currentTenants = tenants.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col gap-3">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 bg-gray-100">
            <tr>
              {hasIcon && <th className="px-6 py-3"></th>}
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
            {currentTenants.map((tenant) => (
              <tr key={tenant.id} className="bg-white">
                {hasIcon && (
                  <td className="px-6 py-4">
                    {tenant.hasMovedIn ? (
                      <img src="assets/tick.svg" alt="tick" />
                    ) : (
                      <img src="assets/pending.svg" alt="pending" />
                    )}
                  </td>
                )}
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.apartment}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.tower}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.rent}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.moveInDate || ""}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                  {tenant.lastSignedIn || ""}
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-x-4 items-center justify-between">
                    <Button label="View Detail" />
                    <Button
                      label={
                        tenant.lastSignedIn ? "Reset Password" : "Re-invite"
                      }
                    />
                    <Button label="Archive" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          data={tenants}
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          setCurrentPage={setCurrentPage}
          setRowsPerPage={setRowsPerPage}
        />
      </div>
    </div>
  );
};

export default TenantTable;
