import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Router, createBrowserRouter } from'react-router-dom';


import Login from './components/authentication/Login'
import SignUp from './components/authentication/Signup';


const router=createBrowserRouter([
  {
    path:"/",
    element: <div>hello</div>,
  },
  {
    path:"/login",
    element:<Login/>,
  }
])

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route for the login page */}
        <Route path="/login" element={<Login />} />
        {/* Route for the sign-up page */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
