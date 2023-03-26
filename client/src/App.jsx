import { useState } from "react";
import "./App.css";
import logo from './assets/family.png'
import './Components/landing.css'
import Landpage from "./Components/Landpage";
import './Components/Register.css'
import Register from "./Components/Register";
import Login from "./Components/Login";
import AddMember from "./Components/AddMember";

function App() {
  return (
    <div className="main-app">
    <header className="nav">
          <nav className="nav-header">
            <div className="logo">
              <img src={logo} alt="Your Logo" />
            </div>
            <ul className="nav-links">
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
        </header>
         <Landpage/>
         <Register/>
         <Login />
         <AddMember/>
    </div>
  );
}

export default App;
