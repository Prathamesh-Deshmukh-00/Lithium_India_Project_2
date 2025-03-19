import { ChevronLeft, UserRound, Phone } from "lucide-react";
import temprory from "../Images/temprerory.png";
import { useState } from "react";
import Toggle from "./Toggle.jsx";
import batterychargin from "../Images/batterychargin.png";
import Battery from "../Images/Battery.png";

const DeviceDetails = () => {
  const [isToggledCharging, setIsToggledCharging] = useState(false);
  const [isToggledBattery, setIsToggledBattery] = useState(false);

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="flex items-center w-full mb-4">
        <ChevronLeft className="h-10 w-10 cursor-pointer" />
        <p className="font-semibold text-xl ml-2">Device Details</p>
      </div>

      <div className="bg-white rounded-lg p-4 flex flex-wrap lg:flex-nowrap justify-between shadow-md">
        <img src={temprory} className="h-40 w-40 rounded" alt="unknown" />

        <div className="flex flex-col space-y-2 ml-5 w-full max-w-xs text-sm">
          <div className="bg-gray-200 p-4 rounded-xl">
            <div className="flex items-center mb-2">
              <UserRound />
              <p className="ml-2">Customer Name</p>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2" />
              <p>Subscription End on</p>
            </div>
          </div>
          <p className="bg-gray-200 rounded-2xl p-2 text-center">
            Subscription End on 21/04/26
          </p>
        </div>

        <div className="w-full max-w-xs ml-5 space-y-2 text-sm">
          {[
            ["IMEI No.", "123456789876543"],
            ["Device Id", "abcd1234"],
            ["Device Name", "Battery Name"],
            ["Selling Date", "21/04/24"],
            ["Warranty", "2 Years"],
          ].map(([label, value]) => (
            <div key={label} className="flex">
              <p className="w-28 text-start">{label}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:space-x-3 w-full text-sm space-y-3 md:space-y-0">
          {[
            {
              label: "Battery Charging",
              img: batterychargin,
              toggled: isToggledCharging,
              setToggle: setIsToggledCharging,
            },
            {
              label: "Battery Discharging",
              img: Battery,
              toggled: isToggledBattery,
              setToggle: setIsToggledBattery,
            },
          ].map(({ label, img, toggled, setToggle }) => (
            <div
              key={label}
              className="flex flex-row items-center bg-gray-200 p-4 rounded-xl flex-1 min-w-[150px]"
            >
              <div className="flex flex-col items-center mr-4">
                <p className="text-center">{label}</p>
                <div className="p-2">
                  <Toggle
                    value={toggled}
                    onClick={() => setToggle((prev) => !prev)}
                  />
                </div>
              </div>
              <img src={img} className="h-12 w-12" alt={label} />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow-md mt-4 text-sm">
        {[
          "Cell Used",
          "Cell Type",
          "BMS Used",
          "Cell Brand",
          "Cell mAh",
          "Casing",
        ].map((item) => (
          <div
            key={item}
            className="flex justify-center items-center h-12 bg-gray-300 rounded-lg"
          >
            {item}
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <p className="p-2 bg-white w-50 h-auto text-center rounded-lg shadow-md cursor-pointer text-sm">
          + Add Device Details
        </p>
      </div>
    </div>
  );
};

export default DeviceDetails;
