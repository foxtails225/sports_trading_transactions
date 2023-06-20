import { type FC, useCallback, useEffect, useState } from "react";
import axios from "axios";
import exportFromJSON from "export-from-json";
import type { Result } from "./types/transaction";
import { transformData } from "./utils/transformData";
import Header from "./components/Header";
import DataTable from "./components/DataTable";

const App: FC = () => {
  const [results, setResults] = useState<Result[]>([]);

  const getTransactions = useCallback(async () => {
    if (!process.env.REACT_APP_MOCK_API) {
      return;
    }

    const res = await axios.get(process.env.REACT_APP_MOCK_API);

    if (res.data && res.data.length > 0) {
      const results: Result[] = transformData(res.data);
      setResults(results);
    }
  }, []);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  const handleDownload = (type: string): void => {
    const fileName = "download";
    const data = results;

    switch (type) {
      case "csv":
        exportFromJSON({
          data,
          fileName,
          exportType: exportFromJSON.types.csv,
        });
        break;

      case "xlsx":
        exportFromJSON({
          data,
          fileName,
          exportType: exportFromJSON.types.xls,
        });
        break;

      case "json":
        exportFromJSON({
          data,
          fileName,
          exportType: exportFromJSON.types.json,
        });
        break;

      default:
        break;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <Header onDownload={handleDownload} />
          </div>
          <div className="mt-8 flow-root">
            <DataTable results={results} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
