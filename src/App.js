import React from 'react';
import HomePage from './components/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
      
        <Route path="/" element={<HomePage/>} />
      
  
      </Routes>
    </Router>
  );
};

export default App;
