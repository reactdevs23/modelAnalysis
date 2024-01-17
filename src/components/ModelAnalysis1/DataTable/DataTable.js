import React from "react";

const DataTable = ({ tableHeading, tableData }) => {
  return (
    <div className="py-5 border-t border-b border-blue-1200 p-5">
      <table className="table-auto w-full border border-black">
        <thead>
          <tr className="border border-blue-1200">
            {tableHeading.map((heading, i) => (
              <th
                key={i}
                className="text-center border border-blue-1200 text-lg font-semibold py-2"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((el, i) => (
            <tr key={i}>
              <td className="text-center border border-blue-1200 text-base font-semibold py-2">
                {el.title}
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
