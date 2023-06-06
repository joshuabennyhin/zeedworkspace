import Navbar from "./Navbar";
import { useEffect,useState } from "react";



const Top=()=>{
   const [isSmallScreen, setIsSmallScreen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);
   const [navbarColor,setnavbarColor]=useState("#FFF8E1")
  
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
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
          setnavbarColor("white")

        }
         if(window.screenY < 0 || window.screenY === 0)
        {
          setnavbarColor("#FFF8E1")
        }
        

         else {
          setnavbarColor("#FFF8E1")
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);


    return(

        <div   style={{backgroundColor:"#FFF8E1", fontFamily: 'g-bold'}}  className="Main_container" class="Main_container">

        {
          isSmallScreen ? (
            <div>
 
            <div style={{paddingTop:"35px" }}>
          <Navbar  bgcolor={navbarColor}/>
          </div>

            </div> 
          ) : (
            <div>
            <div style={{paddingTop:"35px", position:isSmallScreen?"none":"fixed",top:isSmallScreen?"":"0",left:isSmallScreen?"":"0",right:isSmallScreen?"":"0",backgroundColor:{navbarColor}}}>
          <Navbar/>
          </div>
             </div>
          )
        }
       
    
          <div style={{backgroundColor:"#FFF8E1",
          
           paddingTop: isSmallScreen?"0px":"150px"
          
  }} class="container ">

            <div class="row">
              <div class="col-lg-6 col-md-6">
                 <div  style={{
     

                      height:'300px',
                      width:'100%',
                      textAlign:"center",
                      marginLeft:isSmallScreen?"0px":"100px",
                      marginTop:"100px",
                      
                      backgroundColor: 'rgba(0.9804, 0.9765, 0.9294, 0)',
                      fontFamily: 'g-bold'
                     
    
                 }}class="container">
                   <h2 style={{fontSize:isSmallScreen?"48px":"43px",fontWeight:"bold",fontFamily: 'g-bold'}}>
                    All Jewellery
                   </h2>
                   <h1 style={{fontSize:isSmallScreen?"48px":"43px",fontWeight:"bold",fontFamily: 'g-bold'}}>
                    saving Plan in
                   </h1>
                   <h1  style={{fontSize:isSmallScreen?"48px":"43px",fontWeight:"bold",color:"#FC772A",fontFamily: 'g-bold'}}>
                    #1App
                   </h1>
                   <div style={{paddingBottom:"10px"}}>
                    <img style={{height:"25px",paddingRight:"20px"}} src="app.svg"></img>
                    <img  style={{height:"25px"}} src="play.svg"></img>
                   </div>
                   <div>
                <a href="https://eoyk8cmil7j.typeform.com/to/DOW2dE2g">   <button style={{
            height:"44px",
            paddingLeft:"52px",
            paddingRight:"52px",
            border:"2px solid black",
            borderRadius:"10px",
            backgroundColor:"#FC762A",
            color:"white",
            fontWeight:"bold",
            fontFamily: 'g-bold'
           }}>
            Get Access
           </button></a>
    
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