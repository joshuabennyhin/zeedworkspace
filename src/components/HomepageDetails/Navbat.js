import React, { useState } from "react";
const Navbar = () => {
 return(
    <div>
  <nav className="navbar">

      <div style={{marginLeft:60}} className="left-buttons">
          <img style={{height:"40px"}} src="artboard-2-4x-2@4x.png"></img>
      </div>
      <div style={{marginRight:60}} className="right-buttons">

       <button style={{
        height:"44px",
        paddingLeft:"32px",
        paddingRight:"32px",
        borderRadius:"10px",
        backgroundColor:"#FC762A",
        color:"black",
        fontWeight:"bold"
       }}>
        Live Gold Rate
       </button>   
      </div>
</nav>
        
</div>
 )
};

export default Navbar;