import React, { useState } from "react";
import "./Register.css";
import axios from 'axios'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


function Register() {
  let navigate = useNavigate();
  const[newUser, setnewUser] = useState({
    username: '',
    password:''
  });
  const [loginmsg, setloginmsg] = useState(false) 
  const [login, setlogin] = useState(false) 
  const onRegister = async (e)=>{
    let {username, password} = newUser;
    e.preventDefault();
    await axios.post('http://localhost:8080/api/v1/login', {
      username,password
    })
    .then(function (response) {
      const {data} = response;
      console.log(response);
      if (data.loggedin === true) {
        setlogin(true);
        setloginmsg(false)
        localStorage.setItem('login',true);
        let {username, secretkey} = data.userdata[0];
        // console.log(username)
        // console.log(secretkey)
      }
      else{
        setloginmsg(true)
      }
      
    })
    .catch(function (error) {
      console.log(error);
    });
    
  }
  if(login===true){
    navigate('/getbyusername')
  }
  return (
    <>
    <div className="container">
      <form className="form">
        <span className="title">Sign In</span>
        <input onChange={(e)=>{setnewUser({...newUser,username: e.target.value})}} type="text" className="input" placeholder="username" />
        <input onChange={(e)=>{setnewUser({...newUser,password: e.target.value})}}   type="password" className="input" placeholder="password" />
        {loginmsg && <h4 style={{color:'red'}}>please enter valid credentials</h4>}
        <span className="sub">
          Already have an account ? <a href="/signup">Sign Up</a>
        </span>
        <input className="register-btn" type="submit" onClick={onRegister} />
      </form>
      </div>
    </>
  );
}

export default Register;
