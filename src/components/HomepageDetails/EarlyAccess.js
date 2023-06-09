import Button from '@mui/material/Button';
import MComponent from './Dialogbox';
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
             <p style={{paddingTop:"40px",fontSize:isSmallScreen?"24px":"30px",fontFamily:'g-light',fontWeight:"300"}}>Get early access</p>
             <div style={{paddingTop:"20px", backgroundColor:isSmallScreen?"#FAF9ED":"white"}}class="i">
            <img  style={{height:isSmallScreen?"29px":"35px"}}src="group-1171275491@2x.png" alt="Image 1"/>
              
              </div>
              <div style={{paddingTop:"40px",backgroundColor:isSmallScreen?"#FAF9ED":"white",paddingBottom:"50px",}}>
             <MComponent/>
              </div>
       </div>



    )






}

export default EarlyAccess;