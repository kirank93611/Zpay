import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

import LeftBar from "../LeftBar/LeftBar";
import { RecoilRoot } from "recoil";

const DashboardComponent = () => {
  return (
    <div class="flex flex-row">
      <div>col 1</div>
      <div>col 2</div>
      <div>col 3</div>
    </div>
  );
};

export default DashboardComponent;
