// src/App.jsx
import React from "react";
import { RecoilRoot } from "recoil";
import LoginForm from "./components/Authentication/LoginForm";
import SignupForm from "./components/Authentication/SignupForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Routerz from "./components/LeftBar/LeftBar";
import Transanctions from "./components/Transactions/TransactionList";
import DashboardComponent from "./components/Dashboard/Dashboard";
import Transactions from "./components/Transactions/TransactionList";
import ScanAndPay from "./components/Scan-And-Pay/ScanAndPay";
import AccountsAndSettings from "./components/Accounts-And-Settings/AccountsAndSettings";
import PaymentLinks from "./components/Payment-Links/PaymentLinks";
import { selectedPageState } from "./atoms/selectedPageState";
import { useRecoilValue } from "recoil";
import "./components/LeftBar/LeftBar.css";
import "./index.css";

const App = () => {
  return (
    <div>
      <Routerz />
    </div>
  );
};

export default App;
