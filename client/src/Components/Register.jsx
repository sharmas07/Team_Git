import React, { useState } from "react";
import "./Register.css";
import axios from 'axios'
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function Register() {
  const[newUser, setnewUser] = useState({
    username: '',
    password:'',
    secretkey:''
  });
  const {username, password, secretkey} = newUser;
  // console.log(newUser);
  // const navigate = useNavigate()
  const onRegister = async (e)=>{
    e.preventDefault();
    await axios.post('http://localhost:8080/api/v1/signup', {
      username,password,secretkey
    })
    .then(function (response) {
      const{ data } = response
      // console.log(data.username)
      localStorage.setItem('curr_username',data.username)
      localStorage.setItem('curr_secretkey',data.secretkey)
      console.log(localStorage.getItem('curr_secretkey'));
      console.log(localStorage.getItem('curr_username'));
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
        <span className="title">Sign Up</span>
        <input onChange={(e)=>{setnewUser({...newUser,username: e.target.value})}} type="text" className="input" placeholder="username" />
        <input onChange={(e)=>{setnewUser({...newUser,password: e.target.value})}}  type="password" className="input" placeholder="password"/>
        <input onChange={(e)=>{setnewUser({...newUser,secretkey: e.target.value})}}   type="text" className="input" placeholder="secretkey" />
        <span className="sub">
          Already have an account ? <a href="/login">Sign in</a>
        </span>
        <input className="register-btn" type="submit" onClick={onRegister} />
      </form>
      </div>
    </>
  );
}

export default Register;
