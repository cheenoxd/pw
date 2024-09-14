import React, { useState } from 'react';
import './Navbar.css';
import DropdownMenu from "./DropdownMenu";

export default function Navbar () {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
      
    <div className="App">
      <header className="App-header">
        <div
          className="menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <button>Dropdown Menu</button>
          {isDropdownVisible && <DropdownMenu />}
        </div>
      </header>
    </div>
  );
   
    
  

  


} 