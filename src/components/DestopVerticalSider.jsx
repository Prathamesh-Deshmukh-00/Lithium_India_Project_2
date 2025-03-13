import { useState } from "react";
import { LayoutDashboard ,Handshake ,Ticket,TriangleAlert, History, Sliders, AlertTriangle, RefreshCw, Users, DollarSign, UserPlus } from "lucide-react";
import temp from "../Images/temp.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Sidebar */}
      <div
        className={`h-screen bg-green-100 shadow-lg flex flex-col items-center transition-all duration-300 ${
          isOpen ? "w-48" : "w-16"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
        >
          {isOpen ? "<<" : ">>"}
        </button>
        
        <nav className="flex flex-col gap-4 mt-10">
          
          <SidebarIcon icon={<LayoutDashboard  />} text="Dashbord" isOpen={isOpen} />
          <SidebarIcon icon={<History />} text="History" isOpen={isOpen} />
          <SidebarIcon icon={<Sliders />} text="Settings" isOpen={isOpen} />
          <SidebarIcon icon={<AlertTriangle />} text="Alerts" isOpen={isOpen} />
          <SidebarIcon icon={<Handshake  />} text="Handshake" isOpen={isOpen} />
          <SidebarIcon icon={<Users />} text="Users" isOpen={isOpen} />
          {/* <SidebarIcon icon={<Ticket />} text="Ticket" isOpen={isOpen} />
          
          <SidebarIcon icon={<RefreshCw />} text="Refresh" isOpen={isOpen} />
          
          <SidebarIcon icon={<DollarSign />} text="Transactions" isOpen={isOpen} />
          <SidebarIcon icon={<UserPlus />} text="New User" isOpen={isOpen} /> */}
        </nav>
      </div>
    </div>
  );
};

const SidebarIcon = ({ icon, text, isOpen }) => (
  <div className="flex items-center gap-3 p-3 rounded-md hover:bg-green-200 cursor-pointer transition">
    <div className="text-green-600">{icon}</div>
    {isOpen && <span className="text-green-800">{text}</span>}
  </div>
);

export default Sidebar;
