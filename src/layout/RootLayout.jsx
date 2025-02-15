import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router";
import {data as servicePage} from "../assets/data"
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import FixedBtn from "../components/FixedBtn";

export default function RootLayout() {
  const [title, setTitle] = useState({sectTitle: "", sectProduct: ""});
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const {lang} = useParams();
  const breadCrumb = pathname.split("/");

  
  useEffect(() => {
    const allPages = [
      {link: "home", titleEn: "Home", titleRu: "Главный"},
      {link: "contact-us", titleEn: "Contact Us", titleRu: "Связаться"},
      {link: "about-us", titleEn: "About Us", titleRu: "О нас"},
      {link: "products", titleEn: "Products", titleRu: "Продукция"}
    ]

    const sectPage = allPages.find((e) => pathname?.includes(e.link));

    const sectProducts = servicePage?.find((page) =>
      pathname?.includes(page.link)
    );

    setTitle({
      sectTitle: lang === "en" ? sectPage?.titleEn : sectPage?.titleRu,
      sectProduct: lang === "en" ? sectProducts?.titleEn : sectProducts?.titleRu
    })

    if(!pathname?.includes("/home/")){
      window.scrollTo(0, 0);
    }

    
  }, [pathname, lang]);
  
  return (
    <>
      <div className="main">
        <Navigation />
        <div className="page-title-container">
          <div className="page-title">
            <h5>{lang === "en" ? "Supplier Company" : "Компания поставщик"}</h5>
            <p>
              <Link to={`${lang}/home`} id="home">Basalt International Export Trading</Link> 
              {breadCrumb.length > 3 ? 
                " > " + title.sectTitle + (title.sectProduct !== "BASALT INTERNATIONAL EXPORT TRADING" ?  " > " + title.sectProduct : " ") : 
              " > " + title.sectTitle}
            </p>
          </div>
        </div>

        <Outlet />

        <Footer />
        {pathname?.includes("/contact-us") || <FixedBtn />}
      </div>
    </>
  )
}