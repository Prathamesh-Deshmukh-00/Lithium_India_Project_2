import { useState } from "react";
import { Search, CalendarIcon } from "lucide-react";

const FilterBar = () => {
  const [activeFilter, setActiveFilter] = useState("Today");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const filters = ["Today", "Last 7 Days"];

  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    setSelectedDate(date.getDate());
    setShowDatePicker(false); // Hide the date picker after selecting a date
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-4 bg-gray-100 rounded-lg">
      <div className="flex">
        <select className="p-2 md:w-70 mr-3 bg-gray-200 rounded-md">
          <option>Select Device</option>
        </select>

        <div className="flex items-center bg-gray-200 rounded-2xl p-2 w-full md:w-90">
          <Search className="w-5 h-5 text-gray-600 mr-2" />
          <input
            type="text"
            placeholder="Search by device id or name"
            className="bg-transparent outline-none w-full"
          />
        </div>
        <div className="p-2 bg-gray-200 ml-4 rounded-sm">+ Add Graph</div>
      </div>

      <div className="flex">
        <div className="flex mr-3">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-sm text-sm ${
                activeFilter === filter
                  ? "bg-gray-600 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            className="flex items-center gap-2 p-2 bg-gray-200 rounded-3xl"
            onClick={() => setShowDatePicker(!showDatePicker)}
          >
            {selectedDate ? (
              <span className="text-gray-600">{selectedDate}</span>
            ) : (
              <CalendarIcon className="w-5 h-5 text-gray-600" />
            )}
          </button>
          {showDatePicker && (
            <input
              type="date"
              onChange={handleDateChange}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterBar;