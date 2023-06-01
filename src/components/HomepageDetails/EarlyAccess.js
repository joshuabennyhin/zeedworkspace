import Button from '@mui/material/Button';
import { useState,useEffect } from 'react';

const EarlyAccess=()=>{
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
       <div  style={{backgroundColor:isSmallScreen?"#FAF9ED":"white",textAlign:"center", fontFamily: 'g-bold', fontWeight: 800}} class="container-fluid">
             <p style={{paddingTop:"40px",fontSize:isSmallScreen?"25px":"30px",fontFamily:'g-light',fontWeight:"300"}}>Get early access</p>
             <div style={{paddingTop:"20px", backgroundColor:isSmallScreen?"#FAF9ED":"white"}}class="i">
            <img  style={{height:isSmallScreen?"30px":"35px"}}src="group-1171275491@2x.png" alt="Image 1"/>
              
              </div>
              <div style={{paddingTop:"40px",backgroundColor:isSmallScreen?"#FAF9ED":"white",paddingBottom:"50px",}}>
              <a href="https://eoyk8cmil7j.typeform.com/to/DOW2dE2g">
                <button style={{
                paddingLeft:isSmallScreen?'50px':'80px',
                paddingRight:isSmallScreen?'50px':'80px',
                paddingTop: "5px",
                paddingBottom:"5px",
                borderRadius:'9px',
                backgroundColor:"#FF5C01",
                
                

                }}><h6 style={{fontSize:isSmallScreen?'15px':'20px',fontWeight:"bold",color:"white"}}>Get access</h6></button></a>
              </div>
       </div>



    )






}

export default EarlyAccess;