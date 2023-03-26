import { useState } from "react";
import "./App.css";
import logo from './assets/family.png'
import './Components/landing.css'
import Landpage from "./Components/Landpage";

function App() {
  return (
    <>
    <header className="nav">
          <nav>
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
      <Landpage />
    </>
  );
}

export default App;
