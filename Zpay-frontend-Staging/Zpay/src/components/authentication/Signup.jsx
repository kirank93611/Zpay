import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., validation, API call)
    console.log("Form Data:", formData);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-end bg-gradient-to-br from-gray-900 to-black">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 lg:px-20 text-white">
        <div className="text-center mt-20 lg:mt-0">
          <h3 className="text-3xl font-semibold">
            Join <span className="text-green-400">ZethPay</span> for a secure and seamless experience!
          </h3>
          <p className="mt-4 text-gray-400">Start managing your account today with privacy-focused technology.</p>
        </div>
      </div>

      {/* Right Section (Sign-Up Form) */}
      <div className="bg-white w-full max-w-lg lg:max-w-xl h-full lg:h-auto shadow-lg rounded-lg flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full px-8 py-12">
          <div className="flex flex-col items-center">
            <img className="w-11 mb-4 rounded-md" src="https://avatars.githubusercontent.com/u/157960807?s=200&v=4" alt="Zeth Logo" />
            <div className="text-center">
              <span className="text-gray-500 text-sm">Welcome to Qauntpay</span>
              <h3 className="text-gray-900 text-2xl font-semibold mt-4">Create your account</h3>
            </div>
          </div>

          {/* Full Name Field */}
          <div className="mt-8">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="John Doe"
            />
          </div>

          {/* Email Field */}
          <div className="mt-4">
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Field */}
          <div className="mt-4">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Password"
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mt-4">
            <label className="block text-gray-700 mb-2">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Confirm Password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-8 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150"
          >
            Sign Up
          </button>

          {/* Additional Links */}
          <div className="mt-4 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 hover:underline">
              Log In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
