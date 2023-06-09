import Navbar from "./Navbar";
import { useEffect,useState } from "react";
import MComponent from "./Dialogbox";



const Top=()=>{
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

        <div   style={{backgroundColor:"#FFF8E1", fontFamily: 'g-bold'}}  className="Main_container" class="Main_container">
        <div style={{paddingTop:"35px",paddingBottom:"35px"}}>
          <Navbar/>
          </div>
    
          <div style={{backgroundColor:"#FFF8E1",
          
          backgroundColor: "transparent",
          
  }} class="container ">

            <div class="row">
              <div class="col-lg-6 col-md-6">
                 <div  style={{
     

                      height:'300px',
                      width:'100%',
                      textAlign:"center",
                      marginLeft:isSmallScreen?"0px":"100px",
                      marginTop:"100px",
                      
                      backgroundColor:"#FFF8E1",
                      fontFamily: 'g-bold'
                     
    
                 }}class="container">
                   <h2 style={{fontSize:isSmallScreen?"38px":"43px",fontWeight:"bold",fontFamily: 'g-bold'}}>
                    All Jewellery
                   </h2>
                   <h1 style={{fontSize:isSmallScreen?"38px":"43px",fontWeight:"bold",fontFamily: 'g-bold'}}>
                    saving Plan in
                   </h1>
                   <h1  style={{fontSize:isSmallScreen?"38px":"43px",fontWeight:"bold",color:"#FC772A",fontFamily: 'g-bold'}}>
                    #1App
                   </h1>
                   <div style={{paddingBottom:"10px"}}>
                    <img style={{height:"25px",paddingRight:"20px"}} src="app.svg"></img>
                    <img  style={{height:"25px"}} src="play.svg"></img>
                   </div>
                   <div>
                   <MComponent/>
             
    
                   </div>
                
    
                 </div>
                    
              </div> 
              
              <div class="col-lg-6 col-md-6">

            {isSmallScreen?
            <div></div>
            
             :
             <div style={{textAlign:"left"}}>
                   <img style={{height:"490px",width:"240px",borderRadius:"50px",marginLeft:"70px"}}src="fp.jpg"></img>
             </div>
             
            }
    
              </div> 
    
            </div>
    
    
          </div>
    
          
    
    
        </div>





    )







}
export default Top;