import React from 'react';
import './login.css'


const Login = () => {
  return (
      <div className="complete">
        <div className="zeth-login-left">
          <div className="zeth-login-left-add-div"></div>
          <div className="zeth-login-left-img">
            <img src="https://avatars.githubusercontent.com/u/157960807?s=200&v=4" alt="humara zeth logo" />
          </div>
          <div className="zeth-login-left-3">
            <h3>
                Join us for a 
                <span> privacy based KYC flow </span><br/>
                where we do not disclose your personal information.
            </h3>
          </div>
          
        </div>
    
        <div className="zeth-login-right">
          <div className="zethbox">
            <form className="zeth-login-form">
              <div className="form-div">
                <div className="form1">
                  <div className="form1-1">
                    <img src="https://avatars.githubusercontent.com/u/157960807?s=200&v=4" alt="Zeth Logo"/>
                  </div>
                  <div className="form1-2">
                  <span className="form1-2-span-1">Welcome to </span>
                  <span className="form1-2-span-2"> Zeth Payments</span>
                  </div>
                  <div className="form1-3">
                  <h3>Get started with your email or phone number</h3>
                  </div>
                </div>
                <div className="form2">
                  <div className="form2-1"></div>
                  <div className="form2-2"></div>
                  <div className="form2-3"></div>
                  <div className="form2-4"></div>
                  <div className="form2-5"></div>
                  <div className="form2-6"></div>
                </div>
                <div className="form3">
                <label>Enter your email or phone number</label>
                  <div className="form3-input">
                  
                  <input/>
                  </div>
                  {/* Password */}
                  <label>Enter your email or phone number</label>
                  <div className="form3-input">
                  <input type="password" placeholder=''/>
                  </div>
                 <button type="submit"><div>signin</div></button>
                </div>
              </div>
            </form>
        </div>
        </div>
        </div>

    
  );
};

export default Login;
