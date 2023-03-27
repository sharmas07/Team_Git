import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AddMember.css"
import axios from 'axios'

function AddMember() {

  let navigate = useNavigate()

  const[name,setname] = useState('')
  const[dob,setdob] = useState('')
  const[gender,setgender] = useState('')
  const[occupation,setoccupation] = useState('')
  const[relation,setrelation] = useState('')
  const[alive,setalive] = useState('')

  let username = 'username';
    let secretkey = 'secretkey';
  const handleSubmit = async (e) => {
    let newMember = {
      username,
      secretkey,
      name,
      dob,
      gender,
      occupation,
      relation,
      alive

    }
    e.preventDefault()
    
    e.preventDefault();
    await axios
      .post("http://localhost:8080/api/v1/addmember", 
        newMember
      )
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      }); 
    }


  return (
   
    <div className="container">
<div className="card">
  <div className="card-header">
    <div className="text-header">Add Family Member</div>
  </div>
  <div className="card-body">
    <form action="#">
      <div className="form-group">
        <label htmlFor="username">Name</label>
        <input onChange={(e)=>{setname(e.target.value)}} required className="form-control" name="name" id="name" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Date of Birth</label>
        <input onChange={(e)=>{setdob(e.target.value)}} required className="form-control" name="Dob" id="Dob" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="Gender">Gender</label>
        <input  onChange={(e)=>{setgender(e.target.value)}} required className="form-control" name="Gender" id="Gender" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Occupation</label>
        <input  onChange={(e)=>{setoccupation(e.target.value)}} required className="form-control" name="Occupation" id="Occupation" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="Relaton">Relation</label>
        <input  onChange={(e)=>{setrelation(e.target.value)}} required className="form-control" name="Relat" id="Relat" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="Relaton">Alive</label>
        <div 
            style={{
                display :"flex",
                
            }}
        >
        <input  onChange={(e)=>{setalive(e.target.value)}} required className="form-control" name="Relat" id="Relat" type="text" placeholder='yes/no'/>
    
        
      
        </div>
      </div>
      <input onClick={handleSubmit} type="submit" className="btn" defaultValue="submit" />  </form>
  </div>
  
</div>

    </div>
  )
}

export default AddMember