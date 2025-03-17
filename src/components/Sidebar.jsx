import {
    LayoutDashboard,
    History,
    Sliders,
    AlertTriangle,
    Handshake,
    Users,
  } from "lucide-react";
  
  const Sidebar = () => {
    return (
      <div className="relative">
        {/* Sidebar */}
        <div className="h-screen bg-[#00a774] shadow-lg flex flex-col items-center w-25">
          <nav className="flex flex-col gap-4 mt-10">
            <SidebarIcon
              icon={<LayoutDashboard size={32} />}
              tooltip="Dashboard"
            />
            <SidebarIcon icon={<History size={32} />} tooltip="History" />
            <SidebarIcon icon={<Sliders size={32} />} tooltip="Settings" />
            <SidebarIcon icon={<AlertTriangle size={32} />} tooltip="Alerts" />
            <SidebarIcon icon={<Handshake size={32} />} tooltip="Partnership" />
            <SidebarIcon icon={<Users size={32} />} tooltip="Users" />
          </nav>
        </div>
      </div>
    );
  };
  
  const SidebarIcon = ({ icon, tooltip }) => (
    <div
      className="flex items-center gap-3 p-3 rounded-md hover:bg-green-200 cursor-pointer transition relative group"
      style={{ borderTopLeftRadius: "0" }}
    >
      <div className="text-white">{icon}</div>
      <span className="absolute left-14 top-9 bg-white text-black text-md rounded-b-md rounded-tr-md py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {tooltip}
      </span>
    </div>
  );
  
  export default Sidebar;