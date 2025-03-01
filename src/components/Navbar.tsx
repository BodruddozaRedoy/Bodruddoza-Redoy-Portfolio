"use client";

import React, { useState } from "react";
// import { slide as Menu } from "react-burger-menu";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react"; // Import icons
import "./Navbar.css";


const navLinks = ["Home", "About", "Services", "Contact"]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = (state: { isOpen: boolean }) => {
    setIsOpen(state.isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="flex justify-between items-center py-5 bg-black text-primary-foreground">
      {/* Logo */}
      <div>
        <h1 className="text-primary text-2xl font-bold">DevRedoy</h1>
        {/* <img className="w-40" src="/images/DevRedoy-Green.png" alt="" /> */}
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6">
        {
          navLinks.map((nav, index) => (
            <Link key={index} href={nav === "Home" ? "/" : `/${nav.toLowerCase()}`} className="hover:text-primary text-white font-semibold">{nav}</Link>
          ))
        }
        
      </div>

      {/* Mobile Menu Button */}
      <div className="">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={30} /> : <MenuIcon size={30} />}
        </button>
      </div>

      {/* Mobile Sidebar Menu */}
      {/* <Menu isOpen={isOpen} onStateChange={handleStateChange} right>
        <Link href="/" className="menu-item" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" className="menu-item" onClick={closeMenu}>
          About
        </Link>
        <Link href="/services" className="menu-item" onClick={closeMenu}>
          Services
        </Link>
        <Link href="/contact" className="menu-item" onClick={closeMenu}>
          Contact
        </Link>
      </Menu> */}
    </nav>
  );
};

export default Navbar;
