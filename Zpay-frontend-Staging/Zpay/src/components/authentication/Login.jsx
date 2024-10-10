// import React from 'react';
// import './login.css'


// const Login = () => {
//   return (
//       <div className="complete">
//         <div className="zeth-login-left">
//           <div className="zeth-login-left-add-div"></div>
//           <div className="zeth-login-left-img">
//             <img src="https://avatars.githubusercontent.com/u/157960807?s=200&v=4" alt="humara zeth logo" />
//           </div>
//           <div className="zeth-login-left-3">
//             <h3>
//                 Join us for a 
//                 <span> privacy based KYC flow </span><br/>
//                 where we do not disclose your personal information.
//             </h3>
//           </div>
          
//         </div>
    
//         <div className="zeth-login-right">
//           <div className="zethbox">
//             <form className="zeth-login-form">
//               <div className="form-div">
//                 <div className="form1">
//                   <div className="form1-1">
//                     <img src="https://avatars.githubusercontent.com/u/157960807?s=200&v=4" alt="Zeth Logo"/>
//                   </div>
//                   <div className="form1-2">
//                   <span className="form1-2-span-1">Welcome to </span>
//                   <span className="form1-2-span-2"> Zeth Payments</span>
//                   </div>
//                   <div className="form1-3">
//                   <h3>Get started with your email or phone number</h3>
//                   </div>
//                 </div>
//                 <div className="form2">
//                   <div className="form2-1"></div>
//                   <div className="form2-2"></div>
//                   <div className="form2-3"></div>
//                   <div className="form2-4"></div>
//                   <div className="form2-5"></div>
//                   <div className="form2-6"></div>
//                 </div>
//                 <div className="form3">
//                 <label>Enter your email or phone number</label>
//                   <div className="form3-input">
                  
//                   <input/>
//                   </div>
//                   {/* Password */}
//                   <label className="label-2">Enter your email or phone number</label>
//                   <div className="form3-input">
//                   <input type="password" placeholder=''/>
//                   </div>
//                  <button type="submit"><div>signin</div></button>
//                 </div>
//               </div>
//             </form>
//         </div>
//         </div>
//         </div>

    
//   );
// };

// export default Login;

import React from 'react';
import { useState } from 'react';
import { useAuth } from '../authentication/context/AuthContext';


const Login = () => {
  const [formData,setFormData]=useState({email:'',password:''});
  const {login}=useAuth();

  const handleSubmit=(e)=>{
    e.preventDefault();
    login(formData.email,formData.password);
  }

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value});
  }

  return (
    <div className="flex flex-col lg:flex-row min-h-screen justify-end bg-gradient-to-br from-gray-900 to-black">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 lg:px-20">
        {/* <div className="fixed top-20 left-20">
          <img className="rounded-full w-24" src="https://avatars.githubusercontent.com/u/157960807?s=200&v=4" alt="humara zeth logo" />
        </div> */}
        <div className="text-center mt-20 lg:mt-0">
          <h3 className="text-white text-2xl font-semibold">
            Join us for a <span className="text-green-400">privacy-based KYC flow</span><br />
            where we do not disclose your personal information with <span className="text-blue-600">zkKYC</span>.
          </h3>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-white w-full max-w-lg lg:max-w-xl h-full lg:h-auto shadow-lg rounded-lg flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full px-8 py-12">
          <div className="flex flex-col items-center">
            <img className="w-11 mb-4 rounded-md" src="https://avatars.githubusercontent.com/u/157960807?s=200&v=4" alt="Zeth Logo" />
            <div className="text-center">
              <span className="text-gray-500 text-sm">Welcome to</span>
              <span className="text-gray-500 text-sm font-semibold"> Zeth Payments</span>
              <h3 className="text-gray-900 text-2xl font-semibold mt-4">Get started with your email or phone number</h3>
            </div>
          </div>

          {/* Form Section */}
          <div className="mt-8">
            <label className="block text-gray-700 mb-2">Enter your email or phone number</label>
            <div className="relative mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Email or phone number"
              />
            </div>

            <label className="block text-gray-700 mb-2">Enter your password</label>
            <div className="relative mb-6">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Password"
                required
              />
            </div>

            <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-150">
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
