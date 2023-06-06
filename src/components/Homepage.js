import React from 'react';
import WhyZeed from './HomepageDetails/WhyZeed';
import EarlyAccess from './HomepageDetails/EarlyAccess';
import ScrollAnimation from './HomepageDetails/Scroll';
import Contacts from './HomepageDetails/Contact';
import FaqSection from './HomepageDetails/Faq';
import About from './HomepageDetails/About';

import Top from './HomepageDetails/Top';
import { AppBar } from '@mui/material';



const HomePage = () => {
  return (

 <div>

  <Top/>
  <About/>
  <ScrollAnimation/>
  <WhyZeed/>
  <EarlyAccess/>

  <FaqSection/>

  <Contacts/>


  
 </div>
    
  );
};

export default HomePage;