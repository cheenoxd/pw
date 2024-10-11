import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Router, Routes, and Route for navigation
import Navbar from './components/Navbar'; // Your Navbar component
import './App.css'; 
import About from './components/About'; 
import Contact from './components/Contact'; 
import Projects from './components/Projects'; 
import Resume from './components/Resume'; 
import Home from './components/Home';
import BlobBackground from './components/Background'; // Background component

export default function App() {
  return (
    <Router> {/* Wrap the app inside Router */}
      <div>
        {/* Add BlobBackground as a background */}
      
        
        {/* Navbar */}
        <Navbar /> 

        {/* Define Routes for different sections */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}
