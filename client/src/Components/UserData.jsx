import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'

import Member from './Member'
import './UserData.css'
function UserData() {
    const handleLoad = ()=>{
        axios.post('http://localhost:8080/api/v1/getbyusername')
    }
  return (
    <>
        <div className="main">
        <div className="allmembers">
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
          <Member/>
        </div>
        <button className='add-btn'><Link to='/addmember'>Add Member</Link></button>
        
        </div>
        </>
  )
}

export default UserData