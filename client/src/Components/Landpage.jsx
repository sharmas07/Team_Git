import React from 'react'
import l from "./family.png";

function Landpage() {
  return (
    <>
    <div>
  <header>
    <nav>
      <div className="logo">
        <img src={l} alt="Your Logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
      </ul>
    </nav>
  </header>
  <main>
    <h2>Every family has a story</h2>
    <p>By learning about family roots, individuals can gain a sense of pride and connection to their heritage.
      It can also help individuals understand the challenges and accomplishments of their ancestors,
      which can provide inspiration and motivation in their own lives.</p>
    
    <button>
  <span />
  <span />
  <span />
  <span /> SignUp/Singin
</button>

<button>
  <span></span>
  <span></span>
  <span></span>
  <span></span> Explore
</button>

   

  </main>
</div>

     
    </>
  )
}

export default Landpage