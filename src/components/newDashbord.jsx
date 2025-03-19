import { useState } from "react";

const NewDashboard = () => {
  const [activeFilter, setActiveFilter] = useState("Today");

  const data = [
    { value: 100, label: "Total Devices" },
    { value: 100, label: "Total Clients" },
    { value: 100, label: "Total Dealers" },
    { value: 10, label: "Alerts" },
    { value: 10, label: "Moving" },
    { value: 10, label: "Offline Devices" },
    { value: 10, label: "Idle State" },
    { value: 100, label: "On Charging" },
  ];

  const filters = ["Today", "This Week", "This Month", "All Time"];

  return (
    <div className="p-6 flex flex-col">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex justify-start items-center mb-6">
          <h1 className="text-2xl mr-4 font-bold">Dashboard</h1>
          <select className="pl-2 py-1 pr-8 border rounded-md">
            <option>Overview</option>
          </select>
        </div>
        <div className="flex mb-6 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 ${
                activeFilter === filter
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200"
              } rounded-md mx-1`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
          <input
            type="date"
            className="px-4 py-2 bg-gray-200 rounded-md ml-2"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-gray-200 rounded-md flex justify-center items-center"
          >
            <div className="w-12 h-12 bg-gray-300 mr-4" />
            <div className="flex flex-col items-center">
              <p className="text-2xl font-bold">{item.value}</p>
              <p className="text-sm text-gray-600">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewDashboard;
