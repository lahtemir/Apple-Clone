import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { navLinks } from "./data";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const [dropdownStyle, setDropdownStyle] = useState("navItems");

  const handleSearchOpen = (dropdownOpen) => {
    setSearchOpen(!searchOpen);
    setCartOpen(false);
    setDropdownStyle("blurredBackground");
    searchOpen
      ? setDropdownStyle("navItems")
      : setDropdownStyle("dropdownStyle");

    return dropdownOpen;
  };

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
    setSearchOpen(false);
    cartOpen ? setDropdownStyle("navItems") : setDropdownStyle("dropdownStyle");
  };

  return (
    <nav>
      <ul className={dropdownStyle}>
        {navLinks.map((navLink) => {
          return (
            <a className={navLink.class} href={navLink.href}>
              {navLink.title}
            </a>
          );
        })}

        <a className="search" onClick={handleSearchOpen}>
          <BiSearch />
        </a>

        <a className="cart" onClick={handleCartOpen}>
          <BsBag />
        </a>
        {searchOpen ? (
          <div className="searchDropdown">
            <form>
              <label>
                <BiSearch />
              </label>
              <input
                type="text"
                placeholder="Search apple.com"
                autoFocus
              ></input>
            </form>
            <div className="quickLinks">
              <p>Quick Links</p>
              <ul>
                <li>Visiting an Apple Store FAQ</li>
                <li>AirPods</li>
                <li>AirTag</li>
                <li>AppleCare+</li>
                <li>Apple Gift Card</li>
              </ul>
            </div>
          </div>
        ) : null}
        {cartOpen ? (
          <div className="cartDropdown">
            <h3>Your Bag is empty.</h3>
            <div className="quickLinks">
              <p>My profile</p>
              <ul>
                <li>Orders</li>
                <li>Your saves</li>
                <li>Account</li>
                <li>Sign in</li>
              </ul>
            </div>
          </div>
        ) : null}
      </ul>
    </nav>
  );
}

export default Navbar;
