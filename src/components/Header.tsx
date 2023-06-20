import { type FC } from "react";
import Dropdown from "./Dropdown";

interface HeaderProps {
  onDownload: (type: string) => void;
}

const Header: FC<HeaderProps> = ({ onDownload }) => {
  return (
    <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
      <div className="ml-4 mt-2">
        <h3 className="text-xl font-semibold leading-6 text-gray-900 capitalize">
          transactions of sports trading cards
        </h3>
      </div>
      <div className="ml-4 mt-2 flex-shrink-0">
        <Dropdown onDownload={onDownload} />
      </div>
    </div>
  );
};

export default Header;
