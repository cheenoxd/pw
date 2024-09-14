import React from 'react';
import Navbar from './components/Navbar';
import './css/App.css'; 
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
        <Navbar/>
      </div>
    </Router>
  );
}

export default App;
