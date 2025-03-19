import temp from "../Images/temp.png";
import { BatteryFull } from "lucide-react";

const CellStatusCard = ({ title, status, minVoltage, maxVoltage }) => {
  return (
    <div className=" mt-5 rounded-lg p-4 w-full max-w-xs">
      <div className="flex bg-gray-200 rounded-lg py-8 px-4 justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p className="text-sm text-gray-600">{status}</p>
        </div>
        <BatteryFull className="w-12 h-12 mr-2  rounded-lg flex items-center justify-center" />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="border p-3 rounded-md text-start">
          <p className="text-2xl font-bold">{minVoltage} v</p>
          <p className="text-sm text-gray-600">Min Cell Voltage</p>
        </div>
        <div className="border p-3 rounded-md text-start">
          <p className="text-2xl font-bold">{maxVoltage} v</p>
          <p className="text-sm text-gray-600">Max Cell Voltage</p>
        </div>
      </div>
    </div>
  );
};

export default CellStatusCard;