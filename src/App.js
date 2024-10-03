import React from 'react';
import Navbar from './components/Navbar';
import './css/App.css'; 
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, BrowserRouter } from 'react-router-dom';
import About from './components/About'; 
import Projects from './components/Contact'; 
import Contact from './components/Projects'; 
import Resume from './components/Resume';
import Home from './components/Home';




function App() {
  return (

    <div>
      
     <Navbar /> 
     <Home />

   </div>
 
  
    
  );
}

export default App;
