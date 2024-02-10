import React from "react";
import "./LeftBar.css";
import { useRecoilState } from "recoil";
import { selectedPageState } from "../../atoms/selectedPageState";
import { useNavigate } from "react-router-dom";
import DashboardComponent from "../Dashboard/Dashboard";
import PaymentLinks from "../Payment-Links/PaymentLinks";
import ScanAndPay from "../Scan-And-Pay/ScanAndPay";
import Transactions from "../Transactions/TransactionList";
import AccountsAndSettings from "../Accounts-And-Settings/AccountsAndSettings";
import NotFoundComponent from "../Not_Found/NotFound";

const LeftBar = () => {
  // const navigate = useNavigate();
  const [selectedPage, setSelectedPage] = useRecoilState(selectedPageState);

  const handleItemClick = (route) => {
    setSelectedPage(route);
    // navigate(route);
  };

  //defining a mapping between route paths and corresponding components

  // const routeComponents = {
  //   "/dashboard": DashboardComponent,
  //   "/transactions": Transactions,
  //   "/payment-links": PaymentLinks,
  //   "/scan-and-pay": ScanAndPay,
  //   "/accounts-and-settings": AccountsAndSettings,
  // };

  //dynamically rendering the component based on the selected route
  // const RenderComponent = routeComponents[selectedPage] || NotFoundComponent;

  return (
    <div className="left-navbar">
      <ul>
        <li
          className={selectedPage === "/dashboard" ? "active" : ""}
          onClick={() => handleItemClick("/dashboard")}
        >
          Dashboard
        </li>
        <li
          className={selectedPage === "/transactions" ? "active" : ""}
          onClick={() => handleItemClick("/transactions")}
        >
          Transactions
        </li>
        <li
          className={selectedPage === "/payment-links" ? "active" : ""}
          onClick={() => handleItemClick("/payment-links")}
        >
          Payment Links
        </li>
        <li
          className={selectedPage === "/scan-and-pay" ? "active" : ""}
          onClick={() => handleItemClick("/scan-and-pay")}
        >
          Scan & Pay
        </li>
        <li
          className={selectedPage === "/accounts-and-settings" ? "active" : ""}
          onClick={() => handleItemClick("/accounts-and-settings")}
        >
          Accounts & Settings
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
