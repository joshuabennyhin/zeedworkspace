import React ,{ useState,useEffect } from "react";
import Button from '@mui/material/Button';


import { NavLink } from "react-router-dom";
import { WidthFull } from "@mui/icons-material";



const Navbar = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);
  
    useEffect(() => {
      const mediaQuery = window.matchMedia('(max-width: 768px)');
  
      const handleMediaQueryChange = (event) => {
        setIsSmallScreen(event.matches);
      };
  
      mediaQuery.addListener(handleMediaQueryChange);
      setIsSmallScreen(mediaQuery.matches);
  
      return () => {
        mediaQuery.removeListener(handleMediaQueryChange);
      };
    }, []);
 
  
 return(
    <div style={{ fontFamily: 'Gillroy, sans-serif', fontWeight: 800}}>
  <nav  className="navbar">
   
      <div style={{marginLeft:40}} className="left-buttons">
          <img style={{height:isSmallScreen?"30px":"40px"}} src="artboard-2-4x-2@4x.png"></img>
      </div>
      <div style={{marginRight:isSmallScreen?20:40}} className="right-buttons">

       <button style={{
        height: isSmallScreen?"34px":"44px",
        paddingLeft:isSmallScreen?"12px":"32px",

        paddingRight:isSmallScreen?"12px":"32px",
        borderRadius:"10px",
        backgroundColor:"#FC762A",
        color:"black",
        fontWeight:"bold",
        fontSize:isSmallScreen?'13px':'16px',
        fontFamily:"g-bold",
        border:"2px solid black"
      
       }}>
        Live Gold Rate
       </button>
     
      </div>
</nav>
        
</div>
 )
};

export default Navbar;