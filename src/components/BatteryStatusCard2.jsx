import React from "react";

const BatteryStatusCardTwo = () => {
  const renderProgressBar = (label, percentage) => (
    <div className="flex justify-between w-6xl items-center text-lg text-black">
      <span className="w-16 text-lg text-start">{label}</span>
      <div className="w-32 bg-gray-300 rounded-full h-6 relative">
        <div
          className="h-6 rounded-full text-sm flex items-center justify-center text-white"
          style={{ width: `${percentage}%`, backgroundColor: `rgba(0, 0, 0, ${percentage / 100})` }}
        >
          {percentage}%
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-md  bg-gray-100 rounded-2xl shadow-lg p-6 space-y-6 border border-gray-200">
      {/* Header Section */}
      <div className="flex justify-between flex-col items-center p-6 bg-white  rounded-xl">
        
        <div className="flex justify-between w-[22em]">
          <p className="text-md text-gray-500">Last Update: 5min ago</p>
          <span className="text-md text-gray-500">● Online</span>
        </div>
      </div>

      {/* SOC and SOH Progress Bars */}
      <div className="flex justify-between">
        {renderProgressBar("SOC", 51)}
      </div>
      <div className="flex justify-between">
        {renderProgressBar("SOH", 51)}
      </div>

      {/* Voltage and Temperature */}
      <div className="flex justify-between text-lg text-black">
        <span>Voltage</span>
        <span>120 V</span>
      </div>
      <div className="flex justify-between text-lg text-black">
        <span>Temperature</span>
        <span>40 ℃</span>
      </div>

    </div>
  );
};

export default BatteryStatusCardTwo;
