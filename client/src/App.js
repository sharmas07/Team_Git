import { useState } from "react";
import "./App.css";
import logo from './assets/family.png'
import './Components/landing.css'
import Landpage from "./Components/Landpage";
import './Components/Register.css'
import Register from "./Components/Register";
import Login from "./Components/Login";
import SearchBySecret from './Components/SearchByScerect'
import UserData from "./Components/UserData";
import AddMember from "./Components/AddMember";
import { BrowserRouter,Link,Routes,Route } from "react-router-dom";

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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Explore</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </nav>
        </header>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landpage/>}/>
          <Route path="/signup" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/addmember" element={<AddMember/>}/>
          <Route path="/findbysecretkey" element={<SearchBySecret/>}/>
          <Route path="/getbyusername" element={<UserData/>}/>
         </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
