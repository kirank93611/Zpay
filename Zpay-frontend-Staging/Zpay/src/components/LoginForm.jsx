// src/components/LoginForm.jsx
import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { userState } from "../atoms/userState";
import "../styles.css";

const LoginForm = () => {
  const [user, setUser] = useRecoilState(userState);
  const [loginData, setLoginData] = useState({
    userId: "",
    hashedPassword: "",
  });

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        loginData
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <label>
        User ID:
        <input
          type="text"
          value={loginData.userId}
          onChange={(e) =>
            setLoginData({ ...loginData, userId: e.target.value })
          }
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={loginData.hashedPassword}
          onChange={(e) =>
            setLoginData({ ...loginData, hashedPassword: e.target.value })
          }
        />
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
