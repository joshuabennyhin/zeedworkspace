import React, { useEffect } from 'react';
import { useState } from 'react';

const YourComponent = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const apple=""
  
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
    <div style={{ fontFamily: 'g-bold', fontWeight: 800 ,backgroundColor:isSmallScreen?"#FAF9ED":"white" , backgroundImage: `url('/public/Group 1171275558 (1).svg')`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'}}
    
     >
      <h2
        style={{
          marginTop: '60px',
          fontSize: isSmallScreen?'32px':'58px',
          fontWeight: 'bold',
          textAlign: 'center',
          height:"81px"
         
        }}
      >
        How <span style={{ color: '#FC772A' }}>app</span> works
      </h2>
      {
        isSmallScreen ?( 

           <div>






           <div  style={{marginLeft:"0px"}} className="content">
        <div class="row">
          <div class="col-lg-6 col-sm-9">
            <div className="text-content animate-left">
            <div style={{ display: 'flex',backgroundColor:isSmallScreen?"#FAF9ED":"white" }}>
      <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box',backgroundColor:isSmallScreen?"#FAF9ED":"white"  }}>
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
                <span> and start your plan</span>
              </h5>

      </div>
      <div style={{ width: '10%',marginRight:"60px", boxSizing: 'border-box',backgroundColor:isSmallScreen?"#FAF9ED":"white"}}>
      <img
                style={{ alignItems: 'left', paddingBottom: '10px', height: '50px',marginTop:"30px" }}
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
                style={{ height: '522px', width: '258px',marginLeft:"80px"}}
                src="iPhone 13 Mockup.svg"
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
                  width:"90%",
                 
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
                <span>        and start for your plan</span>
              </h5>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12">
            <div className="image-content animate-right">
              <img
                style={{ height: '450px', width: '90%', paddingTop: '40px' ,boxShadow:"30px"}}
                src="iPhone 13 Mockup.svg"
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

           <div>


           <div  style={{marginLeft:"0px"}} className="content">
        <div class="row">
          <div class="col-lg-6 col-sm-9">
            <div className="text-content animate-left">
            <div style={{ display: 'flex',backgroundColor:isSmallScreen?"#FAF9ED":"white"}}>

            <div style={{ width: '10%',marginRight:"60px", boxSizing: 'border-box',backgroundColor:isSmallScreen?"#FAF9ED":"white" }}>
      <img
                style={{ alignItems: 'left', paddingBottom: '10px', height: '50px' ,marginTop:"30px",backgroundColor:isSmallScreen?"#FAF9ED":"white"}}
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
                <span style={{  }}> Pay your </span>
               
                <span style={{  fontWeight: 'bold', fontSize: isSmallScreen?'32px':'35px', textAlign: 'left', color: '#FC772A' }}>
                 monthly installment
                </span>
                
                <span> in the click of a button </span>
              
              </h5>

      </div>
     

      
    </div>
            </div>
          </div>
          <div class="col-lg-4 col-sm-12">
          <div  style={{justifyContent:"left",textAlign:"left",marginLeft:"10px"}}className="image-content animate-right">
              <img
                style={{ height: '521px', width: '290.9px'}}
                src="iPhone 13 Mockup-1.jpg"
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
    width:"90%",
   
    textAlign: 'left',
    lineHeight:"132.5%"
   
  }}
>
  <span style={{  }}>Pay your </span>
  <div></div>
  <span style={{  fontWeight: 'bold', fontSize: '48px', textAlign: 'left', color: '#FC772A' }}>
    monthly installment          
  </span>
     <span></span>
  <span>        in the click of a button</span>
</h5>
</div>
</div>
<div class="col-lg-3 col-sm-12">
<div className="image-content animate-right">
<img
  style={{ height: '450px', width: '90%', paddingTop: '40px' ,boxShadow:"30px"}}
  src="iPhone 13 Mockup-1.jpg"
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

           <div>






           <div  style={{marginLeft:"0px"}} className="content">
        <div class="row">
          <div class="col-lg-6 col-sm-9">
            <div className="text-content animate-left">
            <div style={{ display: 'flex',backgroundColor:isSmallScreen?"#FAF9ED":"white" }}>
      <div style={{ width: '100%', padding: '20px', boxSizing: 'border-box',  }}>
      <h5
                style={{
                  fontWeight: 'bold',
                  fontSize: isSmallScreen?'32px':'35px',
                  paddingLeft: 'px',
                  width:"100%",
                  textAlign: 'left',
                }}
              >
                <span style={{  }}>Buy Jewellery at </span>
                <span> your </span>
                <span style={{  fontWeight: 'bold', fontSize: isSmallScreen?'32px':'35px', textAlign: 'left', color: '#FC772A' }}>
                  favorite store 
                </span>
                <span> with your </span>
                <span style={{  fontWeight: 'bold', fontSize: isSmallScreen?'32px':'35px', textAlign: 'left', color: '#FC772A' }}>
                  saving plan 
                </span>
              </h5>

      </div>
      <div style={{ width: '10%',marginRight:"60px", boxSizing: 'border-box', }}>
      <img
                style={{ alignItems: 'left', paddingBottom: '10px', height: '50px' ,marginTop:"30px" }}
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
                style={{ height: '522px', width: '258px',marginLeft:"80px"}}
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
            <div style={{paddingTop:"50px",marginLeft:"140px"}} className="text-content animate-left">
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
                  width:"90%",
                 
                  textAlign: 'left',
                  lineHeight:"132.5%"
                 
                }}
              >
                <span style={{  }}>Buy Jewellery at </span>
                <div></div>
               <span>your </span>
                <span style={{  fontWeight: 'bold', fontSize: '48px', textAlign: 'left', color: '#FC772A' }}>
                  favorite <div></div>store          
                </span>
                  
                <span> with your </span>
                <span style={{  fontWeight: 'bold', fontSize: '48px', textAlign: 'left', color: '#FC772A' }}>
                  saving plan       
                </span>
              </h5>
            </div>
          </div>
          <div class="col-lg-3 col-sm-12">
            <div className="image-content animate-right">
              <img
                style={{ height: '490px', width: '100%', paddingTop: '40px' ,boxShadow:"30px"}}
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
