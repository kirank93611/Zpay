import React from "react";
import "./LeftBar.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { selectedPageState } from "../../atoms/selectedPageState";
import { useNavigate } from "react-router-dom";
import Dashboardelement from "../Dashboard/Dashboard";
import PaymentLinks from "../Payment-Links/PaymentLinks";
import ScanAndPay from "../Scan-And-Pay/ScanAndPay";
import Transactions from "../Transactions/TransactionList";
import AccountsAndSettings from "../Accounts-And-Settings/AccountsAndSettings";
import NotFoundelement from "../Not_Found/NotFound";
import "../../index.css";
import { Link } from "react-router-dom";
import { Dashboard } from "@mui/icons-material";

const LeftBar = () => {
  return (
    <div>
      {/* //nav bar */}
      <nav>
        <Link to="/Dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/PaymentLinks">
          {" "}
          <li>PaymentLinks</li>{" "}
        </Link>
        <Link to="/Scan&Pay">
          {" "}
          <li>Scan&Pay</li>{" "}
        </Link>
        <Link to="/Transactions">
          {" "}
          <li>Transactions</li>{" "}
        </Link>
        <Link to="/Accounts&Settings">
          {" "}
          <li>AccountsAndSettings</li>{" "}
        </Link>
      </nav>
    </div>
  );
};

const Routerz = () => {
  return (
    <Router>
      <div className="grid grid-cols-2">
        <div className="fixed">
          <LeftBar />
        </div>

        <Routes>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/PaymentLinks" element={<PaymentLinks />} />
          <Route path="/Scan&Pay" element={<ScanAndPay />} />
          <Route path="/Transactions" element={<Transactions />} />
          <Route path="/Accounts&Settings" element={<AccountsAndSettings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routerz;
