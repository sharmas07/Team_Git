import React from "react";
import './landing.css'
import { Link } from "react-router-dom";

function Landpage() {
  return (
    <>
      <div>
        
        <main className='landing-main'>
          <h1>Every family has a story</h1>
          <div className="para">
          <h3>
            By learning about family roots, individuals can gain a sense of
            pride and connection to their heritage. It can also help individuals
            understand the challenges and accomplishments of their ancestors,
            which can provide inspiration and motivation in their own lives.
          </h3>
          </div>
          <div className="land-btns">
          <div><button className="landing-btn">
             <Link to='/signup'>SignUp</Link>
          </button>
          <button className="landing-btn">
            <Link to='/signin'>SignIn</Link>
          </button></div>
          <button className="landing-btn">
            <Link to='/findbysecretkey'>Explore</Link>
          </button>
          </div>
        </main>
      </div>
    </>
  );
}
export default Landpage;
