import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import {data as servicePage} from "../assets/data"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import FixedBtn from "../components/FixedBtn";

export default function RootLayout() {
  const [title, setTitle] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location?.pathname === "/" || location?.pathname === "") {
      navigate("/home");
    }

    const otherPages = [
      {link: "contact-us", title: "Contact Us"},
      {link: "about-us", title: "About Us"},
      {link: "products", title: "Products"}
    ]
    const allPages = 
    [...servicePage, ...otherPages]
    ?.find((page) =>
      location.pathname?.includes(page.link)
    );

    if (allPages) {
      setTitle(allPages?.title);
    }

    // console.log(title);
    // console.log(location.pathname);
    // if(allPages?.link === "/"){
    //   window.scrollTo(0, 0);
    // }
    
  }, [location]);
  return (
    <>
      <div className="main">
        <Navigation />
        <div className="page-title-container">
          <div className="page-title">
            <h5>Supplier Company</h5>
            <p>
              <Link to="/home" id="home">Basalt International Export Trading</Link> 
              {location?.pathname.includes("/home") || location?.pathname.includes("/product") || " > " + title}
            </p>
          </div>
        </div>

        <Outlet />

        <Footer />
        <FixedBtn />
      </div>
    </>
  );
}
