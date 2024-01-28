// src/App.jsx
import React from "react";
import { RecoilRoot } from "recoil";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./styles.css";

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <LoginForm />
        <hr />
        <SignupForm />
      </div>
    </RecoilRoot>
  );
};

export default App;
