// src/custom/Dashboard/components/SidebarComp.jsx
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MoreVertical } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import SidebarItem from "./SideBarItem";
import SidebarItemsData from "../constants/SideBarItemData";
import { useContext } from "react";
import { SidebarProvider } from "./SideBarContext";
import SidebarItem from "./SidebarItem";

const SidebarComp = () => {
  const [expanded, setExpanded] = useState(true);
  const navigate = useNavigate();

  return (
   
    <div className="flex h-screen">
       <SidebarProvider>
      <aside className={`h-screen ${expanded ? "w-64" : "w-20"} transition-width duration-300`}>
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
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

          <ul className="flex-1 px-3 space-y-4">
            {SidebarItemsData.map((item, index) => (
              <SidebarItem
                key={index}
                icon={item.icon}
                text={item.text}
                active={item.active}
                alert={item.alert}
                onClick={() => navigate(item.path)} // Navigate to the route
              />
            ))}
          </ul>

          <div className="border-t flex p-3">
            <img
              src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
              alt="User Avatar"
              className="w-10 h-10 rounded-md"
            />
            {expanded && (
              <div className="ml-3 items-center">
                <h4 className="font-semibold">John Doe</h4>
                <span className="text-xs text-gray-600">johndoe@gmail.com</span>
              </div>
            )}
            <MoreVertical size={20} className="ml-4" />
          </div>
        </nav>
      </aside>

      <div className="flex-grow p-4 bg-gray-50">
        <Outlet /> {/* This renders the corresponding component based on the route */}
      </div>
      </SidebarProvider>
    </div>
  );
};

export default SidebarComp;
