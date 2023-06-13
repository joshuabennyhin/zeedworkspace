import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';


const About = () => {
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
    <div style={{ fontFamily: 'g-bold' }}>
      <div
        style={{
          backgroundColor: 'black',
          fontFamily: 'Gillroy, sans-serif',
          fontWeight: 800
        }}
        className="our container-fluid"
      >
        <h1
          style={{
            textAlign: 'center',
            paddingTop: '40px',
            paddingBottom: '40px',
            color: '#FC772A',
            fontWeight: '500',
            fontSize: isSmallScreen ? '20px' : '38px',
            fontFamily: 'DM Sans'
          }}
        >
          We are Serious about your savings plan
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            margin: 'auto',
            width: '80%',
            backgroundColor: 'black'
          }}
          className="container"
        >
          <Grid  style={{paddingBottom:"40px"}}container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <Grid
                sx={{
              
                  borderRadius: 5,
               
                
                  
                }}
                container
                spacing={2}
              >
                <Grid item xs={3}>
                  <img
                    style={{ height: '80px', width: '80px' }}
                    src="9.png"
                    alt="Max Trust"
                  />
                </Grid>
                <Grid item xs={9}>
                  <p
                    style={{
                      fontSize: '18px',
                      paddingLeft: '10px',
                      fontWeight: 'bold',
                      color: 'white',
                      fontFamily: 'g-bold',
                      paddingTop: '8px'
                    }}
                  >
                    Max Trust
                    <div></div>
                    <span
                      style={{
                        fontSize: '14px',
                     
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'g-light',
                        marginBottom: '10px'
                      }}
                    >
                      Your payment is directly paid to the Jewellery store
                    </span>
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Grid
       
                container
                spacing={2}
              >
                <Grid item xs={3}>
                  <img
                    style={{ height: '80px', width: '80px' }}
                    src="02.png"
                    alt="Max Safety"
                  />
                </Grid>
                <Grid item xs={9}>
                  <p
                    style={{
                      fontSize: '18px',
                      paddingLeft: '10px',
                      fontWeight: 'bold',
                      color: 'white',
                      fontFamily: 'g-bold',
                      paddingTop: '8px'
                    }}
                  >
                    Max Safety
                    <div></div>
                    <span
                      style={{
                        fontSize: '14px',
                      
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'g-light',
               
                      }}
                    >
                      Every installment you paid till now is ensured
                    </span>
                  </p>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Grid
              
                container
                spacing={2}
              >
                <Grid item xs={3}>
                  <img
                    style={{ height: '80px', width: '80px' }}
                    src="03.png"
                    alt="Max Security"
                  />
                </Grid>
                <Grid item xs={9}>
                  <p
                    style={{
                      fontSize: '18px',
                      paddingLeft: '10px',
                      fontWeight: 'bold',
                      color: 'white',
                      fontFamily: 'g-bold',
                      paddingTop: '8px'
                    }}
                  >
                    Max Security
                    <div></div>
                    <span
                      style={{
                        fontSize: '14px',
      
                        fontWeight: 'bold',
                        color: 'white',
                        fontFamily: 'g-light',
                     
                      }}
                    >
                      Means bank graded security and ISO compliance
                    </span>
                  </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default About;
