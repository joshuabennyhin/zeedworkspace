import React from 'react';
import { useState,useEffect } from 'react';
import HomePage from './components/Homepage';
import WhyZeed from './components/HomepageDetails/WhyZeed';
import {  useLocation, useNavigate } from 'react-router-dom';

import EarlyAccess from './components/HomepageDetails/EarlyAccess';
import ScrollAnimation from './components/HomepageDetails/Scroll';
import Contacts from './components/HomepageDetails/Contact';
import FaqSection from './components/HomepageDetails/Faq';
import About from './components/HomepageDetails/About';

import Top from './components/HomepageDetails/Top';
import Carousel from './components/HomepageDetails/Carousel';
import CarouselItem from './components/HomepageDetails/CarouselItem';
import MComponent from './components/HomepageDetails/Dialogbox';
import Y from './components/HomepageDetails/phones';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ReactGA from 'react-ga';





const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize('UA-273123498-1');
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={

          <div>
         
                    <Top/>
  <About/>
  <ScrollAnimation/>
  <WhyZeed/>
  <EarlyAccess/>
  <FaqSection/>
  <Contacts/>

          </div>
       } />
      
  
      </Routes>
    </Router>
  );
};

export default App;
