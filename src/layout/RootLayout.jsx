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

    window.scrollTo(0, 0);
    
  }, [location]);
  return (
    <>
      <div className="main">
        <Navigation />
        <div className="page-title-container">
          <div className="page-title">
            <h5>Supplier Company</h5>
            <p>
              <Link to="/home" id="home">Basalt Export Trading INT</Link> {location?.pathname === "/home/contruction-engineering" || "> " + title}
            </p>
          </div>
        </div>

        <Outlet />

        <Footer />
      </div>
    </>
  );
}
