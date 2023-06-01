import './Contact.css'
import { useState,useEffect } from 'react';
const Contacts=()=>{

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
      <div  style={{ fontFamily: 'Gillroy, sans-serif', fontWeight: 'none'}}class="container">
      <div style={{paddingTop:"25px"}} class="image-container">
      <div class="left-images">
        <img src="artboard-2-4x-2@4x.png" alt="Image 1"/>
        <div></div>
        
        <img style={{height: isSmallScreen?"20px":"25px",width:isSmallScreen?"70px":"80px",paddingLeft:"20px"}} src="group-1171275491@2x.png" alt="Image 2"/>
      </div>
      <div  class="right-images">
        <img style={{height: isSmallScreen?"25px":"30px",marginBottom:"40px" ,paddingRight:isSmallScreen?"":"20px"}} src="ri-instagram-fill.svg" alt="Image 3"/>
        <img  style={{height: isSmallScreen?"25px":"30px",marginBottom:"40px",paddingRight:isSmallScreen?"":"20px"}} src="mdi-twitter.svg" alt="Image 5"/>
        <img  style={{height: isSmallScreen?"25px":"30px",marginBottom:"40px",paddingRight:isSmallScreen?"":"20px"}} src="face.png" alt="Image 5"/>
        <img style={{height: isSmallScreen?"25px":"30px",marginBottom:"40px",paddingRight:isSmallScreen?"":"20px"}} src="mdi-linkedin.svg" alt="Image 4"/>
      
     
      </div>
    </div>
          <div style={{textAlign:"center", paddingTop:isSmallScreen?"25px":"10px"}}>
            <p style={{ fontSize:isSmallScreen?"16px":"20px",fontWeight:"normal",fontFamily:"g-light"}}>write to us at <span style={{fontWeight:"bolder",fontFamily:"g-bold"}}>hello@zeed.co.in</span></p>
          </div>
          <div style={{textAlign:"center",marginBottom:"5px"}}>
            <p style={{fontSize:isSmallScreen?"12px":"14px",textDecoration:"underline" ,fontWeight:"normal",fontFamily:"g-light"}}>Privacy Policy <span style={{textDecoration:"underline",paddingLeft:"10px",fontWeight:"normal",fontFamily:"g-light"}}>Terms and conditions</span></p>
          </div>
          <div style={{textAlign:"center",paddingTop:isSmallScreen?"10px":"30px",paddingBottom:"20px"}}>
            <p style={{fontSize:isSmallScreen?"14px":"13px",fontWeight:isSmallScreen?"bolder":"bold" ,fontFamily:"g-bold"}}>@Zeed Fintech Private Limited . <span style={{paddingLeft:"5px",fontWeight:isSmallScreen?"bolder":"bold"}}>All Rights Reserved</span></p>
          </div>
  
  
   </div>
  
  )
  
  
  
  }
  
  export default Contacts;