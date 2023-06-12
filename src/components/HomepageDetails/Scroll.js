import React, { useEffect } from 'react';
import { useState } from 'react';

const YourComponent = () => {
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
    <div style={{ fontFamily: 'g-bold', fontWeight: 800 ,backgroundColor:isSmallScreen?"#FAF9ED":"white" , backgroundImage: isSmallScreen?`url('/Group 1171275558 (1).svg')`:"NONE",
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}}
   
    
     >
      <h2
        style={{
        
          fontSize: isSmallScreen?'32px':'58px',
          paddingTop:"20px",
          fontWeight: 'bold',
          textAlign: 'center',
          height:"81px"
         
        }}
      >
        How <span style={{ color: '#FC772A' }}>app</span> works
      </h2>
      {
        isSmallScreen ?( 

           <div  style={{fontFamily:"g-light"}}>






           <div  style={{marginLeft:"0px"}} className="content">
        <div class="row">
          <div class="col-lg-6 col-sm-9">
            <div className="text-content animate-left">
            <div style={{ display: 'flex',backgroundColor:isSmallScreen?'rgba(0.9804, 0.9765, 0.9294, 0)':"white" }}>
      <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box',backgroundColor:isSmallScreen?'rgba(0.9804, 0.9765, 0.9294, 0)':"white"  }}>
      <h5
                style={{
                  fontWeight: 'bold',
                  fontSize: isSmallScreen?'32px':'35px',
                  paddingLeft: 'px',
                  width:"100%",
                  textAlign: 'left',
                }}
              >
                <span style={{  }}>Look for your </span>
                <span style={{  fontWeight: 'bold', fontSize: '35px', textAlign: 'left', color: '#FC772A' }}>
                  favorite savings plan 
                </span>
               
              </h5>

      </div>
      <div style={{ width: '10%',marginRight:"60px", boxSizing: 'border-box',backgroundColor:isSmallScreen?'rgba(0.9804, 0.9765, 0.9294, 0)':"white"}}>
      <img
                style={{ alignItems: 'left', paddingBottom: '10px', height: '50px',marginTop:"30px", }}
                src="11.svg"
                alt="Image 2"
              />
      </div>

      
    </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
          <div  style={{justifyContent:"right",textAlign:"right",marginLeft:"10px"}}className="image-content animate-right">
              <img
                style={{ height: '470px', width: '470px',marginLeft:"80px",objectFit: "contain"}}
                src="zeed1.png"
                alt="Phone Frame"
                className="phone-image"
              />
              </div>
          </div>
        </div>
      </div>












           </div>

          
                ):
                
                
                
                
                (
              <div>

              <div  style={{marginLeft:"10px"}} className="content">
        <div class="row">
          <div class="col-lg-8 col-sm-9">
            <div style={{paddingTop:"50px",marginLeft:"140px"}} className="text-content animate-left">
              <img
                style={{ alignItems: 'left', paddingBottom: '10px', height: '55px' }}
                src="11.svg"
                alt="Image 2"
              />
              <h5
                style={{
                  fontWeight: 'bold',
                  fontSize: '48px',
                  paddingLeft: 'px',
                  width:"100%",
                 
                  textAlign: 'left',
                  lineHeight:"132.5%"
                 
                }}
              >
                <span style={{  }}>Look for your </span>
                <div></div>
                <span style={{  fontWeight: 'bold', fontSize: '48px', textAlign: 'left', color: '#FC772A' }}>
                  favorite Saving plan         
                </span>
                   <span></span>
               
              </h5>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12">
            <div className="image-content animate-right">
              <img
                style={{ height: '450px', width: '280px', paddingTop: '40px' ,boxShadow:"30px"}}
                src="zeed1.png"
                alt="Phone Frame"
                className="phone-image"
              />
            </div>
          </div>
        </div>
      </div>



              </div>

                )

      }



      {
        isSmallScreen ?( 

           <div style={{fontFamily:"g-light"}}>


           <div  style={{marginLeft:"0px"}} className="content">
        <div class="row">
          <div class="col-lg-6 col-sm-9">
            <div className="text-content animate-left">
            <div style={{ display: 'flex',backgroundColor:isSmallScreen?'rgba(0.9804, 0.9765, 0.9294, 0)':"white"}}>

            <div style={{ width: '10%',marginRight:"60px", boxSizing: 'border-box',backgroundColor:isSmallScreen?'rgba(0.9804, 0.9765, 0.9294, 0)':"white" }}>
      <img
                style={{ alignItems: 'left', paddingBottom: '10px', height: '50px' ,marginTop:"30px",backgroundColor:isSmallScreen?'rgba(0.9804, 0.9765, 0.9294, 0)':"white"}}
                src="22.svg"
                alt="Image 2"
              />
      </div>

      <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box',  }}>
      <h5
                style={{
                  fontWeight: 'bold',
                  fontSize: isSmallScreen?'32px':'35px',
                  paddingLeft: 'px',
                  width:"100%",
                 
                  textAlign: 'left',
                  lineHeight:"132.5%"
                 
                }}
              >
                <span style={{  }}>Pay your </span>
               
                <span style={{  fontWeight: 'bold', fontSize: isSmallScreen?'32px':'35px', textAlign: 'left', color: '#FC772A' }}>
                 monthly installment
                </span>
                
              
              </h5>

      </div>
     

      
    </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
          <div  style={{justifyContent:"left",textAlign:"left",marginLeft:"10px"}}className="image-content animate-right">
              <img
                style={{ height: '521px', width: '290.9px',objectFit: "contain"}}
                src="12.svg"
                alt="Phone Frame"
                className="phone-image"
              />
              </div>
          </div>
        </div>
      </div>




           </div>

          
                ):
                
                 
                
                
                (
                <div>
                <div>

<div  style={{marginLeft:"10px"}} className="content">
<div class="row">
<div class="col-lg-8 col-sm-9">
<div style={{paddingTop:"50px",marginLeft:"140px"}} className="text-content animate-left">
<img
  style={{ alignItems: 'left', paddingBottom: '10px', height: '55px' }}
  src="22.svg"
  alt="Image 2"
/>
<h5
  style={{
    fontWeight: 'bold',
    fontSize: '48px',
    paddingLeft: 'px',
    width:"100%",
   
    textAlign: 'left',
    lineHeight:"132.5%"
   
  }}
>
  <span style={{  }}>Pay your </span>
  
  <span style={{  fontWeight: 'bold', fontSize: '48px', textAlign: 'left', color: '#FC772A' }}>
    monthly installment          
  </span>
     <span></span>

</h5>
</div>
</div>
<div class="col-lg-3 col-sm-12">
<div className="image-content animate-right">
<img
  style={{ height: '550px', width: '100%', paddingTop: '40px' ,boxShadow:"30px"}}
  src="12.svg"
  alt="Phone Frame"
  className="phone-image"
/>
</div>
</div>
</div>
</div>



</div>
                </div>

                )

      }


      {
        isSmallScreen ?( 

           <div  style={{fontFamily:"g-light"}}>






           <div  style={{marginLeft:"0px"}} className="content">
        <div class="row">
          <div class="col-lg-6 col-sm-9">
            <div className="text-content animate-left">
            <div style={{ display: 'flex',backgroundColor:isSmallScreen?'rgba(0.9804, 0.9765, 0.9294, 0)':"white" }}>
      <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box',  }}>
      <h5
                style={{
                  fontWeight: 'bold',
                  fontSize: isSmallScreen?'28px':'35px',
                  paddingLeft: 'px',
                  width:"100%",
                  textAlign: 'left',
                  lineHeight:"132.5%"
                }}
              >
                <span style={{  }}>Buy Jewellery at </span>
                <span> your </span>
                <span style={{  fontWeight: 'bold', fontSize: isSmallScreen?'28px':'35px', textAlign: 'left', color: '#FC772A',objectFit: "contain" }}>
                  favorite store 
                </span>
                
              </h5>

      </div>
      <div style={{ width: '10%',marginRight:"60px", boxSizing: 'border-box', }}>
      <img
                style={{ alignItems: 'left', paddingBottom: '10px', height: '65px' ,marginTop:"30px" }}
                src="33.svg"
                alt="Image 2"
              />
      </div>

      
    </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
          <div  style={{justifyContent:"right",textAlign:"right",marginLeft:"10px"}}className="image-content animate-right">
              <img
                style={{ height: '500.45px', width: '908px',marginLeft:"80px"}}
                src="Space Black.svg"
                alt="Phone Frame"
                className="phone-image"
              />
              </div>
          </div>
        </div>
      </div>












           </div>

          
                ):
                
                
                
                
                (
              <div>

              <div  style={{marginLeft:"10px"}} className="content">
        <div class="row">
          <div class="col-lg-8 col-sm-9">
            <div style={{paddingTop:"50px",marginLeft:"100px"}} className="text-content animate-left">
              <img
                style={{ alignItems: 'left', paddingBottom: '10px', height: '55px' }}
                src="33.svg"
                alt="Image 2"
              />
              <h5
                style={{
                  fontWeight: 'bold',
                  fontSize: '48px',
                  paddingLeft: 'px',
                  width:"100%",
                 
                  textAlign: 'left',
                  lineHeight:"132.5%"
                 
                }}
              >
                <span style={{  }}>Buy Jewellery at </span>
                <h1></h1>
               <span> your </span>
                <span style={{  fontWeight: 'bold', fontSize: '48px', textAlign: 'left', color: '#FC772A' }}>
                  favorite <div></div>store          
                </span>
                  
          
              </h5>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
            <div className="image-content animate-right">
              <img
                style={{ height: '500px', width: '450px', paddingTop: '40px' ,boxShadow:"30px"}}
                src="Space Black.svg"
                alt="Phone Frame"
                className="phone-image"
              />
             
            </div>
          </div>
        </div>
      </div>



              </div>

                )

      }
            
            
          
        
       
      

      </div>
  );
};

export default YourComponent;
