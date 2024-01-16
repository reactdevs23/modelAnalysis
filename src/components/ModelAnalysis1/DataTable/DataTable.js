import React from "react";

const DataTable = ({ data }) => {
  return (
    <div className="py-5 border-t border-b border-blue-1200 p-5">
      <table className="table-auto w-full border border-black">
        <thead>
          <tr className="border border-blue-1200">
            <th className="py-2"></th>
            <th className="text-center border border-blue-1200 text-lg font-semibold py-2">
              Dev
            </th>
            <th className="text-center border border-blue-1200 text-lg font-semibold py-2">
              Valid
            </th>
            <th className="text-center border border-blue-1200 text-lg font-semibold py-2">
              Test
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((el, i) => (
            <tr key={i}>
              <td className="text-center border border-blue-1200 text-base font-semibold py-2">
                {el.heading}
              </td>
              <td className="text-center border border-blue-1200 py-2">
                {el.dev}
              </td>
              <td className="text-center border border-blue-1200 py-2">
                {el.valid}
              </td>
              <td className="text-center border border-blue-1200 py-2">
                {el.test}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
