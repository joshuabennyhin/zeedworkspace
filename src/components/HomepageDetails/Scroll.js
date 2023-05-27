import React, { useEffect } from 'react';


const YourComponent = () => {
  useEffect(() => {
    const handleScroll = () => {
      const divs = document.querySelectorAll('.content');
      const windowHeight = window.innerHeight;

      divs.forEach((div) => {
        const divPosition = div.getBoundingClientRect().top;

        if (divPosition < windowHeight / 2) {
          div.classList.add('animate');
        } else {
          div.classList.remove('animate');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ fontFamily: 'Gillroy, sans-serif', fontWeight: 800}} className="container">
    <h2 style={{marginTop:'60px',fontSize:"42px",fontWeight:"bold",textAlign:"center"}}>How <span style={{color:'#FC772A'}}> app</span> works</h2>
      <div className="content">

      <div class="row"
      >
       <div class="col-lg-6 col-sm-9">
       <div style={{height:'258px',width:"500px",margin:"0"}} className="text-content animate-left">
       <img style={{alignItems: "left", paddingBottom: "10px",height:"120px",paddingRight:"20px",marginRight:'490px' }} src="1.jpg"></img>
  
  <h5 style={{ fontWeight: "bold", fontSize: "50px",paddingLeft:"px", marginRight:"15px",textAlign: "left" }}>
    <span style={{ paddingRight: "10px" }}>Look for your</span>
    <span style={{ paddingRight: "30px",fontWeight:"bold",fontSize:"50px",textAlign:"left",color:"#FC772A" }}>favorite saving plan</span>
    <span>and start your plan</span>
  </h5>
          </div>


       </div>
       <div style={{margin
       :"0"}} class="col-lg-6 col-sm-12">
       <div style={{margin
       :"0"}} className="image-content animate-right">
          <img style={{height:'500px',width:"290px",paddingLeft:"30px",paddingTop:"40px"}} src="iPhone 13 Mockup.jpg" alt="Phone Frame" className="phone-image" />
        </div>
      </div>
       </div>

 

      </div>
  
       

   
      <div className="content">

<div class="row"
>
 <div class="col-lg-6 col-sm-9">
 <div style={{height:'258px',width:"500px",margin:"0"}} className="text-content animate-left">
 <img style={{alignItems: "left", paddingBottom: "10px",height:"120px",paddingRight:"20px",marginRight:'490px' }} src="2.jpg"></img>

<h5 style={{ fontWeight: "bold", fontSize: "50px",paddingLeft:"px", marginRight:"15px",textAlign: "left" }}>
<span style={{ paddingRight: "10px" }}>pay your</span>
<span style={{ paddingRight: "30px",fontWeight:"bold",fontSize:"50px",textAlign:"left",color:"#FC772A" }}>monthly installment</span>
<span>in the click of a button</span>
</h5>
    </div>


 </div>
 <div style={{margin
 :"0"}} class="col-lg-6 col-sm-12">
 <div style={{margin
 :"0"}} className="image-content animate-right">
    <img style={{height:'500px',width:"290px",paddingLeft:"30px",paddingTop:"40px"}} src="iPhone 13 Mockup.jpg" alt="Phone Frame" className="phone-image" />
  </div>
</div>
 </div>



</div>


<div className="content">

<div class="row"
>
 <div class="col-lg-6 col-sm-9">
 <div style={{height:'258px',width:"500px",margin:"0"}} className="text-content animate-left">
 <img style={{alignItems: "left", paddingBottom: "10px",height:"120px",paddingRight:"20px",marginRight:'490px' }} src="3.jpg"></img>

<h5 style={{ fontWeight: "bold", fontSize: "50px",paddingLeft:"px", marginRight:"15px",textAlign: "left" }}>
<span style={{ paddingRight: "10px" }}>buy jewellery at your</span>
<span style={{ paddingRight: "30px",fontWeight:"bold",fontSize:"50px",textAlign:"left",color:"#FC772A" }}>favorite store</span>
<span style={{ paddingRight: "10px" }}>with</span>
<span style={{ paddingRight: "30px",fontWeight:"bold",fontSize:"50px",textAlign:"left",color:"#FC772A" }}>saving plan</span>

</h5>
    </div>


 </div>
 <div style={{margin
 :"0"}} class="col-lg-6 col-sm-12">
 <div style={{margin
 :"0"}} className="image-content animate-right">
    <img style={{height:'500px',width:"290px",paddingLeft:"30px",paddingTop:"40px"}} src="iPhone 13 Mockup.jpg" alt="Phone Frame" className="phone-image" />
  </div>
</div>
 </div>



</div>
    </div>
  );
};

export default YourComponent;
