import React from 'react';
import Navbar from './components/Navbar';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, BrowserRouter } from 'react-router-dom';
import About from './components/About'; 
import Contact from './components/Contact'; 
import Projects from './components/Projects'; 
import Resume from './components/Resume';
import Home from './components/Home';




function App() {
  return (

    <div>
      
     <Navbar /> 
     <div id="home" className="section">
        <Home/>
     </div>
     <div id="about" className="section">
        <About/>
      </div>
      <div id="projects" className="section">
        <Projects/>
      </div>

   </div>
 
  
    
  );
}

export default App;
