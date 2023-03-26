import React, { useState } from "react";
import "../components/CSS/Register.css";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const[newUser, setnewUser] = useState({
    username: '',
    email:'',
    password:''
  });
  // console.log(newUser);
  // const navigate = useNavigate()
  const onRegister =  (e)=>{
    e.preventDefault();
    console.log(newUser);
    // await axios.post('http://localhost:5000/api/register', {
    //   username,email,password
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
    // navigate('/')
  }
  return (
    <>
    <div className="container">
      <form className="form">
        <span className="title">Sign Up</span>
        <input onChange={(e)=>{setnewUser({...newUser,username: e.target.value})}} type="text" className="input" placeholder="username" />
        <input onChange={(e)=>{setnewUser({...newUser,email: e.target.value})}}  type="email" className="input" placeholder="email"/>
        <input onChange={(e)=>{setnewUser({...newUser,password: e.target.value})}}   type="password" className="input" placeholder="password" />
        <span className="sub">
          Already have an account ? <Link to="/login">Sign in</Link>
        </span>
        <input className="register-btn" type="submit" onClick={onRegister} />
      </form>
      </div>
    </>
  );
}

export default Register;
