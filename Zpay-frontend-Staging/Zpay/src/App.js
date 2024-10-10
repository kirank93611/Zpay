import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route,Router, createBrowserRouter } from'react-router-dom';
import Landing from "./components/landing/Landing"
import Login from './components/authentication/Login'
import SignUp from './components/authentication/Signup';
import { AuthProvider } from './components/authentication/context/AuthContext';
import Sidebar from './components/dashboard/sidebar/sidebar';
import PrivateRoute from './components/authentication/PrivateRoute';


const App = () => {
  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        {/* Default route for the login page */}
        <Route path="/login" element={<Login />}/>
        {/* Route for the sign-up page */}
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/dashboard" element={<PrivateRoute><Sidebar /></PrivateRoute>} />
      </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
