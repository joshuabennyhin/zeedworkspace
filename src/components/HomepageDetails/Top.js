import Navbar from "./Navbar";
const Top=()=>{

    return(

        <div   style={{backgroundColor:"#FFF8E1", fontFamily: 'Gillroy, sans-serif', fontWeight: 800}} class="Main_container">
        <div style={{paddingTop:"35px"}}>
          <Navbar/>
          </div>
    
          <div style={{backgroundColor:"#FFF8E1",
          
          backgroundColor: "transparent",
          
  backgroundImage: "none"}} class="container ">

            <div class="row">
              <div class="col-lg-6 col-md-6">
                 <div  style={{
                      height:'300px',
                      width:'300px',
                      textAlign:"center",
                      marginRight:"10px",
                      backgroundColor:"#FFF8E1"
    
                 }}class="container">
                   <h2 style={{fontSize:"43px",fontWeight:"bold"}}>
                    All Jewellery
                   </h2>
                   <h1 style={{fontSize:"43px",fontWeight:"bold"}}>
                    Saving Plan in
                   </h1>
                   <h1  style={{fontSize:"46px",fontWeight:"bold",color:"#FC772A"}}>
                    #1App
                   </h1>
                   <div>
                <a href="https://eoyk8cmil7j.typeform.com/to/DOW2dE2g">   <button style={{
            height:"44px",
            paddingLeft:"52px",
            paddingRight:"52px",
            border:"2px solid black",
            borderRadius:"10px",
            backgroundColor:"#FC762A",
            color:"white",
            fontWeight:"bold"
           }}>
            Get Access
           </button></a>
    
                   </div>
                
    
                 </div>
                    
              </div> 
              <div class="col-lg-6 col-md-6">
             <div style={{textAlign:"center"}}>
                   <img style={{height:"490px",width:"250px",borderRadius:"50px"}}src="fp.jpg"></img>
             </div>
              
    
              </div> 
    
            </div>
    
    
          </div>
    
          
    
    
        </div>





    )







}
export default Top;