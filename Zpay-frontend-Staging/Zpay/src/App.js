import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Router, createBrowserRouter } from'react-router-dom';
import Landing from "./components/landing/Landing"
import Login from './components/authentication/Login'
import SignUp from './components/authentication/Signup';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        {/* Default route for the login page */}
        <Route path="/login" element={<Login />} />
        {/* Route for the sign-up page */}
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
