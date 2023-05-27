import Grid from '@mui/material/Grid';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
const About=()=>{


return(

<div style={{ fontFamily: 'Gillroy, sans-serif', fontWeight: 800}}>

<div  style={{backgroundColor:"black", fontFamily: 'Gillroy, sans-serif', fontWeight: 800}}class="our container-fluid">
  <h1 style={{textAlign:"center",paddingTop:"40px",paddingBottom:"40px",color:'#FC772A'}}> We are Serious about your savings plan</h1>
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
  <Grid item xs={8}>
        <p style={{fontSize:"14px",paddingLeft:"10px",fontWeight:"bold",color:"white"}}>Max Trust</p>
        <p style={{fontSize:"11px",paddingLeft:"10px",fontWeight:"bold",color:"white"}}>your payment towards saving plan is
        is paid directly to thr jeweller and saved in 22k gold</p>
        
  </Grid>
</Grid>

      </div>
      <div  style={{padding:"20px"}}class="col-lg-4 col-sm-7 ">
           
           <Grid  sx={{backgroundColor:"#808080",borderRadius:5,border:" 1px solid #FC772A",marginBottom:"40px"}} container spacing={2}>
       <Grid style={{borderRadius:10}} item xs={3}>
        <img style={{height:'80px',width:"80px"}} src="02.png"></img>
       </Grid>
       <Grid item xs={8}>
             <p style={{fontSize:"14px",paddingLeft:"10px",fontWeight:"bold",color:"white"}}>Max Safety</p>
             <p style={{fontSize:"11px",paddingLeft:"10px",paddingBottom:"18px",fontWeight:"bold",color:"white"}}>Every installment you paid till
             now is ensured</p>
             
       </Grid>
     </Grid>
     
           </div>
           <div  style={{padding:"20px"}}class="col-lg-4 col-sm-7 ">
           
           <Grid  sx={{backgroundColor:"#808080",borderRadius:5,border:" 1px solid #FC772A",marginBottom:"40px"}} container spacing={2}>
       <Grid style={{borderRadius:10}} item xs={3}>
        <img style={{height:'80px',width:"80px"}} src="03.png"></img>
       </Grid>
       <Grid item xs={8}>
             <p style={{fontSize:"14px",paddingLeft:"10px",fontWeight:"bold",color:"white"}}>Max Security</p>
             <p style={{fontSize:"11px",paddingLeft:"10px",paddingBottom:"20px",fontWeight:"bold",color:"white"}}>

              Means bank graded security and iso complainces
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