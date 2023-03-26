import React from 'react'
import "./AddMember.css"

function AddMember() {
  return (
    <>
<div className="card">
  <div className="card-header">
    <div className="text-header">Add Family Member</div>
  </div>
  <div className="card-body">
    <form action="#">
      <div className="form-group">
        <label htmlFor="username">Name</label>
        <input required className="form-control" name="name" id="name" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Date of Birth</label>
        <input required className="form-control" name="Dob" id="Dob" type="date" />
      </div>
      <div className="form-group">
        <label htmlFor="Gender">Gender</label>
        <input required className="form-control" name="Gender" id="Gender" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="confirm-password">Occupation</label>
        <input required className="form-control" name="Occupation" id="Occupation" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="Relaton">Relation</label>
        <input required className="form-control" name="Relat" id="Relat" type="text" />
      </div>
      <div className="form-group">
        <label htmlFor="Relaton">Alive</label>
        <div 
            style={{
                display :"flex",
                
            }}
        >
        <input required className="form-control" name="Relat" id="Relat" type="radio" value={'Yes'} />
            <label htmlFor="Relat">Yes</label>
        <input required className="form-control" name="Relat" id="Relat" type="radio" value={'No'} />
        <label htmlFor="Relat">No</label>
      
        </div>
      </div>
      <input type="submit" className="btn" defaultValue="submit" />  </form>
  </div>
  
</div>

    
    </>
  )
}

export default AddMember