import React, { useEffect, useState } from 'react';

const WhyZeed = () => {
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

  return (
    <div
      style={{fontFamily: 'g-bold', textAlign: isSmallScreen ? 'center' : 'left', }}
      className="whyzeed"
    >
      <div style={{ backgroundColor:isSmallScreen?'white': '#FAF9ED', paddingTop: '10px' }} className="our container-fluid">
        <h2 style={{ margin: '60px', fontSize: isSmallScreen?'28px':'32px', fontFamily: 'g-bold' }}>
          Why <span style={{ color: '#FC772A' }}>zeed?</span>
        </h2>
        <div style={{ width: '75%', backgroundColor:isSmallScreen?'white': '#FAF9ED' }} className="container">
          <div className="row">
            <div
              style={{ textAlign: 'center', paddingBottom: '50px', fontWeight: 'bold' }}
              className={`col-lg-3 col-md-6 col-sm-6${isSmallScreen ? ' col-6' : ''}`}
            >
              <img
                style={{ paddingBottom: '10px', height:isSmallScreen?'60px': '64px', borderRadius: '15px' }}
                className="icon-instagram"
                alt="Icon instagram"
                src="Group 1171275518.svg"
              />
              <h4 style={{ fontWeight: 'bold', fontSize: isSmallScreen?'13px':'16px', paddingLeft: '10px', paddingRight: '10px' }}>
                Zero wastage and making changes
              </h4>
            </div>
            <div
              style={{ textAlign: 'center', paddingBottom: '50px', fontWeight: 'bold' }}
              className={`col-lg-3 col-md-6 col-sm-6${isSmallScreen ? ' col-6' : ''}`}
            >
              <img
                style={{ paddingBottom: '10px',  height:isSmallScreen?'60px': '57px', borderRadius: '15px' }}
                className="icon-instagram"
                alt="Icon instagram"
                src="Group 1171275503.svg"
              />
              <h4 style={{ fontWeight: 'bold', fontSize: isSmallScreen?'13px':'16px', paddingLeft: '40px', paddingLeft:isSmallScreen?'0px':'20px', paddingRight:isSmallScreen?'0px':'20px' }}>
                First Month Installment Free
              </h4>
            </div>
            <div
              style={{ textAlign: 'center', paddingBottom: '50px', fontWeight: 'bold' }}
              className={`col-lg-3 col-md-6 col-sm-6${isSmallScreen ? ' col-6' : ''}`}
            >
              <img
                style={{ paddingBottom: '10px' ,  height:isSmallScreen?'60px': '54px', borderRadius: '15px'}}
                className="icon-instagram"
                alt="Icon instagram"
                src="Group 1171275559.svg"
              />
              <h4 style={{ fontWeight: 'bold',fontSize: isSmallScreen?'13px':'16px',paddingLeft:isSmallScreen?'0px':'20px', paddingRight:isSmallScreen?'0px':'20px' }}>
                Free Gold Coins<div>

                </div> and Freebies
              </h4>
            </div>
            <div
              style={{ textAlign: 'center', paddingBottom: '50px', fontWeight: 'bold' }}
              className={`col-lg-3 col-md-6 col-sm-6${isSmallScreen ? ' col-6' : ''}`}
            >
              <img
                style={{ paddingBottom: '10px',  height:isSmallScreen?'60px': '52px', borderRadius: '15px' }}
                className="icon-instagram"
                alt="Icon instagram"
                src="image 17.svg"
              />
              <h4 style={{ fontWeight: 'bold', fontSize: isSmallScreen?'13px':'16px', paddingLeft:isSmallScreen?'0px':'20px', paddingRight:isSmallScreen?'0px':'20px'}}>
                Cancel anytime
              </h4>
            </div>
            <div
              style={{ textAlign: 'center', paddingBottom: '50px', fontWeight: 'bold' }}
              className={`col-lg-3 col-md-6 col-sm-6${isSmallScreen ? ' col-6' : ''}`}
            >
              <img
                style={{ paddingBottom: '10px',  height:isSmallScreen?'60px': '63px', borderRadius: '15px' }}
                className="icon-instagram"
                alt="Icon instagram"
                src="image 18-1.svg"
              />
              <h6 style={{ fontWeight: 'bold',fontSize: isSmallScreen?'13px':'16px', paddingLeft:isSmallScreen?'0px':'20px', paddingRight:isSmallScreen?'0px':'20px' }}>
                100% Refund <div>
                  
                </div>policy
              </h6>
            </div>
            <div
              style={{ textAlign: 'center', paddingBottom: '50px', fontWeight: 'bold' }}
              className={`col-lg-3 col-md-6 col-sm-6${isSmallScreen ? ' col-6' : ''}`}
            >
              <img
                style={{ paddingBottom: '10px',  height:isSmallScreen?'60px': '55px', borderRadius: '15px' }}
                className="icon-instagram"
                alt="Icon instagram"
                src="image 18 (1).svg"
              />
              <h6 style={{ fontWeight: 'bold',fontSize: isSmallScreen?'13px':'16px',paddingLeft:isSmallScreen?'0px':'20px', paddingRight:isSmallScreen?'0px':'20px' }}>
                Free Insurance & Assistance
              </h6>
            </div>
            <div
              style={{ textAlign: 'center', paddingBottom: '50px', fontWeight: 'bold' }}
              className={`col-lg-3 col-md-6 col-sm-6${isSmallScreen ? ' col-6' : ''}`}
            >
              <img
                style={{ paddingBottom: '10px',   height:isSmallScreen?'55px': '43px', borderRadius: '15px' }}
                className="icon-instagram"
                alt="Icon instagram"
                src="Group 1171275485.svg"
              />
              <h6 style={{ fontWeight: 'bold', fontSize: isSmallScreen?'13px':'16px',paddingLeft:isSmallScreen?'0px':'20px', paddingRight:isSmallScreen?'0px':'20px' ,paddingTop:"10px"}}>
                Bill Hallmarked 916 Jewellery
              </h6>
            </div>
            <div
              style={{ textAlign: 'center', paddingBottom: '50px', fontWeight: 'bold' }}
              className={`col-lg-3 col-md-6 col-sm-6${isSmallScreen ? ' col-6' : ''}`}
            >
              <img
                style={{ paddingBottom: '10px',  height:isSmallScreen?'60px': '58px', borderRadius: '15px' }}
                className="icon-instagram"
                alt="Icon instagram"
                src="Group 1171275524.svg"
              />
              <p style={{ fontWeight: 'bold',fontSize: isSmallScreen?'13px':'16px', paddingLeft:isSmallScreen?'0px':'20px', paddingRight:isSmallScreen?'0px':'20px' }}>
                Rewarding <div></div>Purchase
                Plan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyZeed;
