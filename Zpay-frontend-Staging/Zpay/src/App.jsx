// src/App.jsx
import React from "react";
import { RecoilRoot } from "recoil";
import LoginForm from "./components/Authentication/LoginForm";
import SignupForm from "./components/Authentication/SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Dashboard from "./components/Dashboard/Dashboard";
import LeftBar from "./components/LeftBar/LeftBar";
import Transanctions from "./components/Transactions/TransactionList";

const App = () => {
  return (
    <RecoilRoot>
      {/* <div>
        <LoginForm />
        <SignupForm />
      </div> */}

      <BrowserRouter>
        <LeftBar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
