import "./Navigation.css";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/logoNew.png";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export default function Navigation() {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenu(false)
    setSubMenu(false)
  }
  return (
    <>
      <div className="nav-container">
        <Link to="/home/basalt-trading-int" className="nav-logo-sm">
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
            <Link to="/home/basalt-trading-int" className="menu-item" onClick={() => closeMenu()}>
              Home
            </Link>
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
          <Link to="/home/basalt-trading-int" className="nav-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="nav-item-container">
            <NavLink to="/home/basalt-trading-int" className="nav-item">
              <p>Home</p>
              <span></span>
            </NavLink>
            <NavLink to="/about-us" className="nav-item">
              <p>About Us</p>
              <span></span>
            </NavLink>
            <div className="nav-item nav-products" onClick={()=>{navigate("/products")}}>
              <NavLink to="/products">Products</NavLink>
              <span></span>
              <div className="products-drop-down" onClick={(e)=>e.stopPropagation()}>
                <Link to="/products/basalt-roving">БАЗАЛЬТОВЫЙ РОВИНГ</Link>
                <Link to="/products/basalt-fiber">БАЗАЛЬТОВЫЙ фибра</Link>
                <Link to="/products/basalt-geogrid">БАЗАЛЬТОВЫЙ геосетка</Link>
                <Link to="/products/basalt-composite">БАЗАЛЬТОВЫЙ арматура</Link>
                <Link to="/products/basalt-pipe">БАЗАЛЬТОВЫЙ труба</Link>
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
