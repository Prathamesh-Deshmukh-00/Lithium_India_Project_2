import { useState } from "react";
import { Scan } from "lucide-react";

const DeviceDetailsForm = ({ formData, setFormData, onSubmit }) => {
  const years = ["1 Year", "2 Years", "3 Years", "5 Years", "10 Years"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-6 w-full max-w-3xl mx-auto bg-white border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-center mb-5">
        Fill Details to add a Device
      </h2>

      {/* Form Grid */}
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="imei"
          value={formData.imei}
          onChange={handleChange}
          placeholder="Device IMEI no.*"
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />
        <input
          type="text"
          name="deviceId"
          value={formData.deviceId}
          onChange={handleChange}
          placeholder="Device Id*"
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />
        <input
          type="text"
          name="deviceName"
          value={formData.deviceName}
          onChange={handleChange}
          placeholder="Device Name*"
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />
        <input
          type="text"
          name="cellType"
          value={formData.cellType}
          onChange={handleChange}
          placeholder="Cell Type"
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />
        <input
          type="text"
          name="cellUsed"
          value={formData.cellUsed}
          onChange={handleChange}
          placeholder="Cell Used"
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />
        <input
          type="text"
          name="cellBrand"
          value={formData.cellBrand}
          onChange={handleChange}
          placeholder="Cell Brand"
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />
        <input
          type="text"
          name="bmsName"
          value={formData.bmsName}
          onChange={handleChange}
          placeholder="Bms Used"
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />
        <input
          type="text"
          name="casingName"
          value={formData.casingName}
          onChange={handleChange}
          placeholder="Casing"
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />
        <input
          type="text"
          name="capacity"
          value={formData.capacity}
          onChange={handleChange}
          placeholder="Cell mAh"
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />

        {/* Warranty Dropdown */}
        <select
          name="warranty"
          value={formData.warranty || ""}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        >
          <option value="" disabled>
            Warranty*
          </option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {/* Subscription End In Dropdown */}
        <select
          name="subscriptionEnd"
          value={formData.subscriptionEnd || ""}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        >
          <option value="" disabled>
            Subscription End In*
          </option>
          <option value="6 Months">6 Months</option>
          <option value="1 Year">1 Year</option>
          <option value="2 Years">2 Years</option>
        </select>

        {/* Selling Date Input */}
        <input
          type="date"
          name="sellingDate"
          value={formData.sellingDate}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        />

        {/* Customer Type Dropdown */}
        <select
          name="customerType"
          value={formData.customerType || ""}
          onChange={handleChange}
          className="border border-gray-300 p-2 w-full rounded-md text-sm bg-white"
        >
          <option value="" disabled>
            Customer Type*
          </option>
          <option value="Dealer">Dealer</option>
          <option value="Customer">Customer</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="border border-gray-300 bg-gray-300 hover:bg-white px-6 py-3 rounded-md text-sm font-medium">
          Cancel
        </button>
        <button className="border border-gray-300 bg-gray-300 hover:bg-white px-6 py-3 flex items-center gap-2 rounded-md text-sm font-medium">
          <Scan size={18} />
          Scan Device Details
        </button>
        <button
          onClick={onSubmit}
          className="border border-gray-300 bg-gray-300 hover:bg-white px-6 py-3 rounded-md text-sm font-medium"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default DeviceDetailsForm;
