import React from "react";
import './css/Navbar.css'

export default function Navbar () {

  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav>

    </nav>

  )

  


} 