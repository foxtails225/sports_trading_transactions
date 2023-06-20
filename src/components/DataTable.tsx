import { type FC } from "react";
import type { Result } from "../types/transaction";

interface DataTableProps {
  results: Result[];
}

const DataTable: FC<DataTableProps> = ({ results }) => {
  return (
    <div className="mt-8 flow-root">
      <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full max-h-96 py-2 align-middle sm:px-6 lg:px-8">
          <table className="min-w-full divide-y divide-gray-300">
            <thead>
              <tr>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-white py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                >
                  Card Name
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Average Price
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Lower Bound
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Upper Bound
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Standard Deviation
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Peak Price
                </th>
                <th
                  scope="col"
                  className="sticky top-0 z-10 border-b border-gray-300 bg-white px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                >
                  Peak Date
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {results.map((result: Result, idx: number) => (
                <tr key={idx}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0">
                    {result.cardName}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {result.averagePrice.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {result.lowerBound.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {result.upperBound.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {result.standardDeviation.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {result.peakPrice.toFixed(3)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 text-right">
                    {result.peakDay}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
