import React, { useState } from "react";
import "../Navbar/Navbar.css";
import logo from "../../assets/logo.svg";
import { CiMenuFries } from "react-icons/ci"; // Hamburger icon
import { FaTimes } from "react-icons/fa"; // Close icon

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Desktop Menu */}
      <ul className={`nav-menu ${mobileMenuOpen ? "open" : ""}`}>
        {["Home", "About Me", "Services", "Portfolio", "Contact"].map(
          (item) => (
            <li key={item} onClick={() => setMobileMenuOpen(false)}>
              {item}
            </li>
          )
        )}
      </ul>

      {/* Connect Button */}
      <div className="nav-connect">Connect Me</div>

      {/* Mobile Menu Toggle Button */}
      <div
        className="menu-icon"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <FaTimes /> : <CiMenuFries />}
      </div>
    </nav>
  );
}
