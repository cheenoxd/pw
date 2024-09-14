import React from 'react';
import Navbar from './components/Navbar';  // Navbar component
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DropdownMenu from './components/DropdownMenu';
import About from './components/About'; 
import Projects from './components/Contact'; 
import Contact from './components/Projects'; 
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div>
        <DropdownMenu /> {/* Navbar or dropdown menu component */}
        <Routes>
          <Route path="/about.js" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
