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
import DashboardComponent from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions/TransactionList";
import ScanAndPay from "./components/Scan-And-Pay/ScanAndPay";
import AccountsAndSettings from "./components/Accounts-And-Settings/AccountsAndSettings";
import PaymentLinks from "./components/Payment-Links/PaymentLinks";
import { selectedPageState } from "./atoms/selectedPageState";
import { useRecoilValue } from "recoil";

const App = () => {
  return (
    <RecoilRoot>
      {/* <div>
        <LoginForm />
        <SignupForm />
      </div> */}
      {/* 
      <BrowserRouter>
        <LeftBar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      </BrowserRouter> */}
      <div className="app-container">
        <LeftBar />
        <div className="main-content">
          <RenderComponent />
        </div>
      </div>
    </RecoilRoot>
  );
};

const RenderComponent = () => {
  // Fetch the selected page state using Recoil
  const selectedPage = useRecoilValue(selectedPageState);

  // Render the component based on the selected page
  switch (selectedPage) {
    case "/dashboard":
      return <DashboardComponent />;
    case "/transactions":
      return <Transactions />;
    case "/payment-links":
      return <PaymentLinks />;
    case "/scan-and-pay":
      return <ScanAndPay />;
    case "/accounts-and-settings":
      return <AccountsAndSettings />;
    default:
      return null; // Render nothing if the selected page is not recognized
  }
};

export default App;
