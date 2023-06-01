import Grid from '@mui/material/Grid';
import { useEffect,useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const About=()=>{
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

<div style={{ fontFamily: 'g-bold'}}>

<div  style={{backgroundColor:"black", fontFamily: 'Gillroy, sans-serif', fontWeight: 800}}class="our container-fluid">
  <h1 style={{textAlign:"center",paddingTop:"40px",paddingBottom:"40px",color:'#FC772A',fontFamily:"g-bold",fontSize:isSmallScreen?"28px":"38px"}}> We are Serious about your savings plan</h1>
  <div style={{



display:"flex",
justifyContent:"center",
margin: "auto",
  width: "80%",
   backgroundColor:"black",
   
  }} className=" container">
    <div style={{
      display:"flex",
justifyContent:"center",
    }} class="row">
      <div style={{padding:"20px"}} class="col-lg-4 col-sm-7" >
           
      <Grid  sx={{backgroundColor:"#808080",borderRadius:5,border:" 1px solid #FC772A",marginBottom:"40px"}} container spacing={2}>
  <Grid style={{borderRadius:10}} item xs={3}>
   <img style={{height:'80px',width:"80px"}} src="9.png"></img>
  </Grid>
  <Grid item xs={8} >
  <p style={{fontSize:"14px",paddingLeft:"10px",fontWeight:"bold",color:"white",fontFamily:"g-bold",paddingTop:"8px"}}>Max Trust
              <div>

              </div>

                <span style={{fontSize:"12px",paddingBottom:"15px",fontWeight:"bold",color:"white",fontFamily:"g-bold",marginBottom:"10px"}}> Your payment is directly paid to the Jewellery store</span> 
             </p>

        
  </Grid>
</Grid>

      </div>
      <div  style={{padding:"20px"}}class="col-lg-4 col-sm-7 ">
           
           <Grid  sx={{backgroundColor:"#808080",borderRadius:5,border:" 1px solid #FC772A",marginBottom:"40px"}} container spacing={2}>
       <Grid style={{borderRadius:10}} item xs={3}>
        <img style={{height:'80px',width:"80px"}} src="02.png"></img>
       </Grid>
       <Grid item xs={8}>

       <p style={{fontSize:"14px",paddingLeft:"10px",fontWeight:"bold",color:"white",fontFamily:"g-bold",paddingTop:"8px"}}>Max Safety
              <div>

              </div>

                <span style={{fontSize:"11px",paddingBottom:"15px",fontWeight:"bold",color:"white",fontFamily:"g-bold",marginBottom:"10px",marginBottom:"20px"}}> Every installment you paid till now is ensured</span>  
             </p>

             
             
       </Grid>
     </Grid>
     
           </div>
           <div  style={{padding:"20px",}}class="col-lg-4 col-sm-7 ">
           
           <Grid  sx={{backgroundColor:"#808080",borderRadius:5,border:" 1px solid #FC772A",marginBottom:"40px"}} container spacing={2}>
       <Grid style={{borderRadius:10}} item xs={3}>
        <img style={{height:'80px',width:"80px"}} src="03.png"></img>
       </Grid>
       <Grid item xs={8}>
             <p style={{fontSize:"14px",paddingLeft:"10px",fontWeight:"bold",color:"white",fontFamily:"g-bold",paddingTop:"8px"}}>Max Security
              <div>

              </div>

                <span style={{fontSize:"11px",paddingBottom:"15px",fontWeight:"bold",color:"white",fontFamily:"g-bold",marginBottom:"30px"}}>    Means bank graded security and iso complainces</span>  
             </p>
          
             
       </Grid>
     </Grid>
     
           </div>


    </div>
  </div>
  </div>
</div>


)

}

export default About;