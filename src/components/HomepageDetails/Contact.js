const Contacts=()=>{

return(
    <div  style={{ fontFamily: 'Gillroy, sans-serif', fontWeight: 800}}class="container">
    <div style={{paddingTop:"25px"}} class="image-container">
    <div class="left-images">
      <img src="artboard-2-4x-2@4x.png" alt="Image 1"/>
      
      <img style={{height:"26px",width:"80px",paddingLeft:"20px"}} src="group-1171275491@2x.png" alt="Image 2"/>
    </div>
    <div  class="right-images">
      <img style={{height:'30px'}} src="ri-instagram-fill.svg" alt="Image 3"/>
      <img  style={{height:'30px'}} src="mdi-twitter.svg" alt="Image 5"/>
      <img  style={{height:'30px',width:"30px"}} src="face.png" alt="Image 5"/>
      <img  style={{height:'30px'}} src="mdi-linkedin.svg" alt="Image 4"/>
    
   
    </div>
  </div>
        <div style={{textAlign:"center",paddingTop:"20px"}}>
          <p style={{fontSize:"20px"}}>Write to us at <span style={{fontWeight:"bold"}}>hello@zeed.co.in</span></p>
        </div>
        <div style={{textAlign:"center"}}>
          <p style={{fontSize:"14px",textDecoration:"underline"}}>Privacy Policy <span style={{textDecoration:"underline",paddingLeft:"10px"}}>Terms and conditions</span></p>
        </div>
        <div style={{textAlign:"center",paddingTop:"35px"}}>
          <p style={{fontSize:"12px",fontWeight:"bold"}}>@Zeed Fintech Private Limited . <span style={{paddingLeft:"5px",fontWeight:"bold"}}>All Rights Reserved</span></p>
        </div>


 </div>

)



}

export default Contacts;