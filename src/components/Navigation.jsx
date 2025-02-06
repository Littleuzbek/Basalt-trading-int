import "./Navigation.css";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logoNew.png";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export default function Navigation() {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const closeMenu = () => {
    setMenu(false)
    setSubMenu(false)
  }
  return (
    <>
      <div className="nav-container">
        <Link to="/home/contruction-engineering" className="nav-logo-sm">
          <img src={logo} alt="Logo" />
        </Link>

        <div className="menuBtn">
          {menu ? (
            <IoMdClose className="btn" onClick={() => setMenu(!menu)} />
          ) : (
            <LuMenu className="btn" onClick={() => setMenu(!menu)} />
          )}
        </div>

        {menu && <div className="menu-container">
          <div className="menu">
            <NavLink to="/home" className="menu-item" onClick={() => closeMenu()}>
              Home
            </NavLink>
            <NavLink to="/about-us" className="menu-item" onClick={() => closeMenu()}>
              About Us
            </NavLink>
            <div className="menu-item nav-products-sm">
              <p>Products</p>
              {subMenu ? (
                <CiCircleMinus onClick={() => setSubMenu(!subMenu)} />
              ) : (
                <CiCirclePlus onClick={() => setSubMenu(!subMenu)} />
              )}
              {subMenu && <div className="sub-menu">
                <span>Product1</span>
                <span>Product2</span>
                <span>Product3</span>
              </div>}
            </div>
            <NavLink to="/contact-us" className="menu-item" onClick={() => closeMenu()}>
              Contact Us
            </NavLink>
          </div>
        </div>}

        <div className="nav">
          <Link to="/home/contruction-engineering" className="nav-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="nav-item-container">
            <NavLink to="/home/contruction-engineering" className="nav-item">
              <p>Home</p>
              <span></span>
            </NavLink>
            <NavLink to="/about-us" className="nav-item">
              <p>About Us</p>
              <span></span>
            </NavLink>
            <div className="nav-item nav-products">
              <p>Products</p>
              <span></span>
              <div className="products-drop-down">
                <div>Product1</div>
                <div>Product2</div>
                <div>Product3</div>
              </div>
            </div>
            <NavLink to="contact-us" className="nav-item">
              <p>Contact Us</p>
              <span></span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
