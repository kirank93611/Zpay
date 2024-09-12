// src/App.jsx
import React from "react";
import "./index.css";
import LoginPage from "./custom/auth/pages/Login";
import SignupPage from "./custom/auth/pages/Signup";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SideBar from "./custom/Dashboard/pages/sidebar";
import Dashboardanalytics from "./custom/Dashboard/pages/dashboardanalytics";
import { SidebarItem } from "./custom/Dashboard/components/SideBar";
import { MoreVertical, ChevronLeft, ChevronRight } from "lucide-react";
import { useContext, createContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const App = () => {
  
  return (
    
    

      <BrowserRouter>
      {/* Sidebar */}
      <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
          <Route path="/dashboard" element={<SideBar/>}>
          <Route path="analytics" element={<Dashboardanalytics />} />
          </Route>
          
        </Routes>
        </BrowserRouter>
 


  );
};

// const DashboardLayout = () => {
//   return (
//     <div className="flex min-h-screen">
//       <SideBar/>
//       <div className="flex-1 p-8">
//         <Outlet />
//       </div>
//     </div>
//   )
// }

export default App;
