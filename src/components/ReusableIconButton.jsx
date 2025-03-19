import React from "react";

const ReusableIconButton = ({ icon, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-12 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition-all ${className}`}
    >
      {icon}
    </button>
  );
};

export default ReusableIconButton;
