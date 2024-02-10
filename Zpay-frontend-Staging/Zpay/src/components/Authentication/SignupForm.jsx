// src/components/SignupForm.jsx
import React, { useState } from "react";
import axios from "axios";
import "../../styles.css";
import qs from "qs";

const SignupForm = () => {
  const [signupData, setSignupData] = useState({
    userId: "",
    walletAddress: "",
    hashedPassword: "",
  });

  const handleSignup = async () => {
    try {
      console.log(signupData);
      await axios.post("http://localhost:3000/register", signupData);
      console.log("User registered successfully");
    } catch (error) {
      console.error(
        "Error registering user:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div className="container">
      <h2>Signup</h2>
      <label>
        User ID:
        <input
          type="text"
          value={signupData.userId}
          onChange={(e) =>
            setSignupData({ ...signupData, userId: e.target.value })
          }
        />
      </label>
      <label>
        Wallet Address:
        <input
          type="text"
          value={signupData.walletAddress}
          onChange={(e) =>
            setSignupData({ ...signupData, walletAddress: e.target.value })
          }
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={signupData.hashedPassword}
          onChange={(e) =>
            setSignupData({ ...signupData, hashedPassword: e.target.value })
          }
        />
      </label>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
};

export default SignupForm;
