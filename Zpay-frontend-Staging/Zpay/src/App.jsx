// src/App.jsx
import React from "react";
import "./index.css";
import LoginPage from "./custom/auth/pages/Login";
import SignupPage from "./custom/auth/pages/Signup";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SideBar from "./custom/Dashboard/pages/sidebar";

const App = () => {
  return (
    <div className="min-h-full h-screen flex items-center">
      <div className="max-w-md space-y-8">
        <div>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/signup" element={<SignupPage/>} />
            
              <Route path="/dashboard" element={<SideBar/>} />

            
        </Routes>
      </BrowserRouter>
        </div>
    </div>
    
    </div>
  );
};

export default App;
