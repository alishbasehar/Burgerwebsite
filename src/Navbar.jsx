import React, { useState } from 'react';
import logo from './assets/logo.avif';
import { ShoppingCart } from "lucide-react";

const navlink = [
  { id: 1, title: "Home", link: "/#" }, 
  { id: 2, title: "About", link: "/#about" }, 
  { id: 3, title: "Menu", link: "/#menu" }, 
  { id: 4, title: "Services", link: "/services" } 
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-xl w-full fixed top-0">
      <div className="container max-w-7xl bg-white mx-auto py-3 sm:py-0">
        <div className="flex items-center justify-between px-5">

          {/* Logo */}
          <div>
            <a href="/#">
              <img src={logo} className="w-15 py-2 px-1" alt="Logo" />
            </a>
          </div>

          {/* Desktop Links */}
          <ul className="hidden sm:flex pl-10 gap-20">
            {navlink.map((link) => (
              <li key={link.id}>
                <a
                  href={link.link}
                  className="inline-block hover:text-orange-300 transition duration-300 py-4"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop Cart + Order */}
          <div className="hidden sm:flex items-center gap-5">
            <div className="relative">
              <ShoppingCart size={30} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <button className="bg-gradient-to-r from-amber-600 to-yellow-300 text-white px-6 py-2 rounded-lg">
              Order
            </button>
          </div>

          {/* Mobile Hamburger + Cart */}
          <div className="flex sm:hidden items-center gap-4 relative">
            <div className="relative">
              <ShoppingCart size={25} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <button
              className="text-3xl focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              ☰
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="sm:hidden fixed top-16 left-0 z-50 w-full bg-white py-4 border-t">
            <ul className="flex flex-col items-center gap-4">
              {navlink.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.link}
                    className="inline-block hover:text-orange-300 transition duration-300 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default Navbar;
