import React, { useState } from 'react';

function Dropdown() {
  // State to control if dropdown is open or closed
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle dropdown */}
      <button onClick={toggleDropdown} className="bg-blue-500 text-white px-4 py-2">
        Toggle Dropdown
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div className="dropdown-content bg-gray-100 mt-2 p-4 border border-gray-300 rounded">
          <p>This is the dropdown content.</p>
          <p>You can place anything here, like links or buttons.</p>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
