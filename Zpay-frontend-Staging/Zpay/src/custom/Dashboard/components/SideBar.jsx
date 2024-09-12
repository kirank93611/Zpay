import React, { useContext, createContext, useState } from "react";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Create SidebarContext for managing expansion state
const SidebarContext = createContext();

export default function SideBarComp({ children }) {
  const [expanded, setExpanded] = useState(true);
  const location = useLocation(); 

  return (
    <div className="flex h-screen">
    <aside className={`h-screen ${expanded ? 'w-64' : 'w-20'} transition-width duration-300`}>
    <nav className="h-full flex flex-col bg-white border-r shadow-sm">
      {/* Sidebar header with logo and toggle button */}
      <div className="p-4 pb-2 flex justify-between items-center">
        <img
          src="https://img.logoipsum.com/243.svg"
          className={`transition-all ${expanded ? "w-32" : "w-0"}`}
          alt="Company Logo"
        />
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          {expanded ? <ChevronLeft /> : <ChevronRight />}
        </button>
      </div>

      {/* Sidebar items */}
      <SidebarContext.Provider value={{ expanded }}>
        <ul className="flex-1 px-3 space-y-4">{children}</ul>
      </SidebarContext.Provider>

      {/* Sidebar footer with user info */}
      <div className="border-t flex p-3">
        <img
          src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
          alt="User Avatar"
          className="w-10 h-10 rounded-md"
        />
        <div className={`ml-3 transition-all ${expanded ? "flex" : "hidden"} items-center`}>
          <div className="leading-4">
            <h4 className="font-semibold">John Doe</h4>
            <span className="text-xs text-gray-600">johndoe@gmail.com</span>
          </div>
          <MoreVertical size={20} className="ml-4" />
        </div>
      </div>
    </nav>
  </aside>
  <div className="flex-grow flex flex-col items-center justify-center p-4 px-80 bg-gray-50">
  {location.pathname === '/dashboard' && (
          <h1>Hey User, welcome to the dashboard</h1>
        )}
        <Outlet/>
  </div>
  </div>
);
}

// Sidebar Item Component
export const SidebarItem = ({ icon, text, active, alert }) => {
const { expanded } = useContext(SidebarContext);

return (
  <li className={`relative p-2 rounded-lg hover:bg-gray-100 transition ${active ? 'bg-gray-100' : ''}`}>
    <div className="flex items-center">
      {icon && <span className="text-indigo-600">{icon}</span>}
      {expanded && (
        <span className="ml-3 text-gray-700">{text}</span>
      )}
    </div>
    {alert && (
      <span className="absolute right-2 top-2 w-2 h-2 rounded-full bg-red-600"></span>
    )}
  </li>
  );
};
