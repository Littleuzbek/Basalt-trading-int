import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router";
import {data as servicePage} from "../assets/data"
import lava from "../assets/lava2.mp4"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

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
  }, [location]);
  return (
    <>
      <div className="main">
        <Navigation />
        <div className="page-title-container">
          <video src={lava} autoPlay loop muted preload="auto"></video>
          <div className="page-title">
            <h5>{title}</h5>
            <p>
              <Link to="/home" id="home">Basalt Export Trading INT</Link> {">"} {title}
            </p>
          </div>
        </div>

        <Outlet />

        <Footer />
      </div>
    </>
  );
}
