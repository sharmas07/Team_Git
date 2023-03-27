import React, { useState } from "react";
import "./Register.css";
import axios from 'axios'
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";


function Register() {
  const [secretkey, setSecretkey] = useState('')
  const [login, setlogin] = useState(true) 
  const onRegister = async (e)=>{
    e.preventDefault();
    await axios.post('http://localhost:8080/api/v1/findbysecretkey', {
      secretkey
    })
    .then(function (response) {
      const {data} = response;
      console.log(response);
      if (data.loggedin === true) {
        setlogin(true);
        localStorage.setItem('login',true);
        let {username, secretkey} = data.userdata[0];
        
        // console.log(username)
        // console.log(secretkey)
      }
      else{
        setlogin(false)
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });
    // navigate('/')
  }
  return (
    <>
    <div className="container">
      <form className="form">
        <span className="title">Sign In</span>
        <input onChange={(e)=>{setSecretkey(e.target.value)}} type="text" className="input" placeholder="SecretKey" />
        {!login && <h4 style={{color:'red'}}>please enter valid credentials</h4>}
        <span className="sub">
          Already have an account ? <a href="/signup">Sign Up</a>
        </span>
        <button className="register-btn" type="submit" onClick={onRegister} >Find</button>
      </form>
      </div>
    </>
  );
}

export default Register;
