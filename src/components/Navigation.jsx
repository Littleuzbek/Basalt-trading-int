import "./Navigation.css";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate, useParams } from "react-router";
import logo from "../assets/logoNew.png";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { langs } from "../assets/data";

export default function Navigation() {
  const [menu, setMenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {lang} = useParams();
  const nextLang =  decodeURIComponent(pathname).replace(lang, langs.find((e)=>e.lang !== lang)?.lang);
  
  useEffect(()=>{
    setMenu(false)
    setSubMenu(false)
  },[pathname])

  const langHandler = (newLang) => {
    localStorage.setItem("lang", newLang)
  }

  return (
    <>
      <div className="nav-container">
        <Link to={`/${lang}/home`} className="nav-logo-sm">
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
            <NavLink to={`/${lang}/home`}  className="menu-item">
              Home
            </NavLink>
            <NavLink to={`/${lang}/about-us`} className="menu-item">
              About Us
            </NavLink>
            <div 
              className={`menu-item nav-products-sm ${pathname === `/${lang}/products` ? "active" : ""}`}  
              onClick={()=>{navigate(`/${lang}/products`)}}
            >
              <p>Products</p>
              {subMenu ? (
                <CiCircleMinus onClick={(e) => {e.stopPropagation(); setSubMenu(!subMenu)}} />
              ) : (
                <CiCirclePlus onClick={(e) => {e.stopPropagation(); setSubMenu(!subMenu)}} />
              )}
              {subMenu && <div className="sub-menu">
                <span  onClick={(e)=> {e.stopPropagation();}}>
                  <NavLink to={`/${lang}/products/basalt-roving`}>Basalt Roving</NavLink>
                </span>
                <span  onClick={(e)=> {e.stopPropagation();}}>
                  <NavLink to={`/${lang}/products/basalt-fiber`}>Basalt Fiber</NavLink>
                </span>
                <span onClick={(e)=> {e.stopPropagation();}}>
                  <NavLink to={`/${lang}/products/basalt-geogrid`}>Basalt Geogrid</NavLink>
                </span>
                <span onClick={(e)=> {e.stopPropagation();}}>
                  <NavLink to={`/${lang}/products/basalt-composite`}>Basalt Composite Reinforcement</NavLink>
                </span>
                <span onClick={(e)=> {e.stopPropagation();}}>
                  <NavLink to={`/${lang}/products/basalt-pipe`}>Basalt Pipe</NavLink>
                </span>
              </div>}
            </div>
            <NavLink to={`/${lang}/contact-us`} className="menu-item">
              Contact Us
            </NavLink>
            <div  className="menu-item nav-products-sm">
              <Link
                to={lang === "en" ? "": nextLang}
                onClick={()=>{langHandler("en")}}
              >
                <img src={langs[0].img} alt="" /> en </Link>
              <Link 
                to={lang === "ru" ? "": nextLang}
                onClick={()=>{langHandler("ru")}}>
                  <img src={langs[1].img} alt="" /> ru
              </Link>
            </div>
          </div>
        </div>}

        <div className="nav">
          <Link to={`/${lang}/home`} className="nav-logo">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="nav-item-container">
            <NavLink to={`/${lang}/home`} className="nav-item">
              <p style={location.pathname.includes("/home") ? {color: "var(--orange)"} : {}}>{lang === "en"? "Home" : "Главный"}</p>
              <span style={location.pathname.includes("/home") ? {backgroundColor: "var(--orange)"} : {}}></span>
            </NavLink>
            <NavLink to={`/${lang}/about-us`} className="nav-item">
              <p>{lang === "en"? "About Us" : "О нас"}</p>
              <span></span>
            </NavLink>
            <div className="nav-item nav-products"  onClick={()=>{navigate(`${lang}/products`)}}>
              <NavLink to={`/${lang}/products`}
              style={location.pathname.includes("/products") ? {color: "var(--orange)"} : {}}
              >
                {lang === "en"? "Products" : "Продукция"}
              </NavLink>
              <span style={location.pathname.includes("/products") ? {backgroundColor: "var(--orange)"} : {}}></span>
              <div className="products-drop-down" onClick={(e)=>e.stopPropagation()}>
                <Link to={`/${lang}/products/basalt-roving`}>{lang === "en" ? "basalt roving" : "БАЗАЛЬТОВЫЙ РОВИНГ"}</Link>
                <Link to={`/${lang}/products/basalt-fiber`}>{lang === "en" ? "basalt fiber" : "БАЗАЛЬТОВЫЙ фибра"}</Link>
                <Link to={`/${lang}/products/basalt-geogrid`}>{lang === "en" ? "basalt geogrid" : "БАЗАЛЬТОВЫЙ геосетка"}</Link>
                <Link to={`/${lang}/products/basalt-composite`}>{lang === "en" ? "basalt composite reinforcement" : "БАЗАЛЬТОВЫЙ арматура"}</Link>
                <Link to={`/${lang}/products/basalt-pipe`}>{lang === "en" ? "basalt pipe" : "БАЗАЛЬТОВЫЙ труба"}</Link>
              </div>
            </div>
            <NavLink to={`${lang}/contact-us`} className="nav-item">
              <p>{lang === "en"? "Contact Us" : "Связаться"}</p>
              <span></span>
            </NavLink>
            <div className="nav-item nav-products">
            <Link 
            to={pathname}
            >
             <img src={langs.find((e)=>e.lang === lang)?.img} alt="" /> {lang}
            </Link>
            <span style={location.pathname.includes("/products") ? {backgroundColor: "var(--orange)"} : {}}></span>
              <div className="products-drop-down" onClick={(e)=>e.stopPropagation()}>
                <Link 
                 to={nextLang}
                 onClick={()=>langHandler(lang === "en" ? "en" : "ru")}>
                  <img src={langs.find((e)=>e.lang !== lang)?.img} alt="" />{langs.find((e)=>e.lang !== lang)?.lang}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
