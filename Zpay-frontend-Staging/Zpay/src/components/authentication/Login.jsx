import React from 'react';



const Login = () => {
  return (
    <form>
      <div>
        <label>username</label>
        <input className="border-2 border-black" type='text'></input>
        <label>password</label>
        <input className="border-2 border-black" type='password'></input>
      </div>
    </form>
  );
};

export default Login;
