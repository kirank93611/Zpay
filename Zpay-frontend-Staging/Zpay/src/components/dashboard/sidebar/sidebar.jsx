
import './sidebar.css'
import React from'react';
import { useAuth } from '../../authentication/context/AuthContext';


export default function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <div className='container'>
  
      <aside className="sidebar">
    <div className="sidebar-header">
      <img src="images/logo.png" alt="logo" />
      <h2>CodingLab</h2>
    </div>
    <ul className="sidebar-links">
      <h4>  
        <span>Main Menu</span>
        <div className="menu-separator"></div>
      </h4>
      <li>
        <a href="#">Dashboard</a>
      </li>
      <li>
        <a href="#">Overview</a>
      </li>
      <li>
        <a href="#">Analytic</a>
      </li>
      <h4>
        <span>General</span>
        <div className="menu-separator"></div>
      </h4>
      <li>
        <a href="#">Projects</a>
      </li>
      <li>
        <a href="#">Groups</a>
      </li>
      <li>
        <a href="#">Payment-links</a>
      </li>
      <li>
        <a href="#">All Reports</a>
      </li>
      <li>
        <a href="#">Notifications</a>
      </li>
      <h4>
        <div className="menu-separator"></div>
      </h4>
      <li>
        <a href="#">Profile</a>
      </li>
      <li>
        <a href="#">Settings</a>
      </li>
      <li>
        <a href="#" onClick={logout}>Logout</a>
      </li>
    </ul>
    <div className="user-account">
      <div className="user-profile">
        <img src="images/profile-img.jpg" alt="Profile Image" />
        <div className="user-detail">
          <h3>Welcome,{user?.email}</h3>
          <span>Web Developer</span>
        </div>
      </div>
    </div>
  </aside>
    </div>
    
  
  );
}
