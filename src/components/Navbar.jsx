import React from "react";
import { IoLogoApple } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { BsBag } from "react-icons/bs";

function Navbar() {
  return (
    <nav>
      <ul className="navItems">
        <a className="logo">
          <IoLogoApple />
        </a>
        <a className="navItem">Store</a>
        <a className="navItem">Mac</a>
        <a className="navItem">iPad</a>
        <a className="navItem">iPhone</a>
        <a className="navItem">Watch</a>
        <a className="navItem">Airpods</a>
        <a className="navItem">TV & Home</a>
        <a className="navItem">Entertainment</a>
        <a className="navItem">Accessories</a>
        <a className="navItem">Support</a>
        <a className="search">
          <BiSearch />
        </a>
        <a className="cart">
          <BsBag />
        </a>
      </ul>
    </nav>
  );
}

export default Navbar;
