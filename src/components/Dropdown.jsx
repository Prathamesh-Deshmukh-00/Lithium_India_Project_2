import { useState } from "react";
import { ChevronDown, Filter } from "lucide-react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const options = ["Moving", "On Idle State", "On Charging", "Offline Devices"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-48">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full p-3 bg-gray-200 rounded-md"
      >
        <div className="flex items-center gap-2">
          <Filter size={20} />
          <span>{selected || "Filter by"}</span>
        </div>
        <ChevronDown size={20} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-full bg-white rounded-md shadow-md z-10">
          {options.map((option) => (
            <div
              key={option}
              onClick={() => handleSelect(option)}
              className={`p-3 hover:bg-gray-100 cursor-pointer ${
                selected === option ? "bg-gray-100" : ""
              }`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;