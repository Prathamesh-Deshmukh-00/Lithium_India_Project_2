import React from "react";
import { MonitorSmartphone } from "lucide-react";

const data = [
  { count: 100, label: "Total Devices" },
  { count: 100, label: "Total Clients" },
  { count: 100, label: "Total Dealers" },
  { count: 10, label: "Alerts" },
  { count: 10, label: "Moving" },
  { count: 10, label: "Offline Devices" },
  { count: 10, label: "Idle State" },
  { count: 100, label: "On Charging" },
];

const Card = ({ count, label }) => (
  <div className="flex items-center justify-center  bg-gray-200 p-6 rounded-xl shadow-md min-w-[150px] gap-4">
    <img
      src="https://www.pngkey.com/png/full/362-3629419_compatible-with-any-device-logo-multi-device.png"
      alt="icon"
      className="w-10 h-10 mr-5"
    />
    <div className="flex flex-col items-start">
      <div className="text-2xl font-bold">{count}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  </div>
);

const CardGrid = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
    {data.map((item, index) => (
      <Card key={index} {...item} />
    ))}
  </div>
);

export default CardGrid;