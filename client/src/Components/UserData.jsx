import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import './UserData.css'
function UserData() {
    const handleLoad = ()=>{
        axios.post('http://localhost:8080/api/v1/getbyusername')
    }
  return (
    <>
        <div className="main">
        <div className="allmembers">
          <div className="card">
            data
          </div>
          <div className="card">
            data
          </div>
          <div className="card">
            data
          </div>
          
        </div>
        <button className='add-btn'><Link to='/addmember'>Add Member</Link></button>
        
        </div>
        </>
  )
}

export default UserData