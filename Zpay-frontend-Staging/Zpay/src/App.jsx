// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SidebarComp from "./custom/Dashboard/components/SideBar";
import LoginPage from "./custom/auth/pages/Login";
import SignupPage from "./custom/auth/pages/Signup";
import DashboardAnalytics from "./custom/Dashboard/components/DashboardAnalytics";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<SidebarComp />} >
          <Route path="analytics" element={<DashboardAnalytics/>} />
        </Route>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/signup" element={<SignupPage/>} />
      </Routes>
    </BrowserRouter>
  );
}


export default App;
