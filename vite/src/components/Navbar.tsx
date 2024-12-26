// src/components/Navbar.tsx
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar p-3 flex justify-around text-gray-700">
    <a href="#" className="text-sm">Home</a>
    <a href="#" className="text-sm">About</a>
    <a href="#" className="text-sm">Contact</a>
    </nav>

  );
};

export default Navbar;
