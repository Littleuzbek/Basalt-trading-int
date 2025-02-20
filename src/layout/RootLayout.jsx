import { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  data,
  useLocation,
  useNavigate,
  useParams,
} from "react-router";
import { data as servicePage } from "../assets/data";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import FixedBtn from "../components/FixedBtn";

export default function RootLayout() {
  const [title, setTitle] = useState({ sectTitle: "", sectProduct: "" });
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams();
  const breadCrumb = pathname.split("/");

  useEffect(() => {
    const allPages = [
      { link: "home", titleEn: "Home", titleRu: "Главный" },
      { link: "contact-us", titleEn: "Contact Us", titleRu: "Связаться" },
      { link: "about-us", titleEn: "About Us", titleRu: "О нас" },
      { link: "products", titleEn: "Products", titleRu: "Продукция" },
    ];

    const sectPage = allPages.find((e) => pathname?.includes(e.link));

    const sectProducts = servicePage?.find((page) =>
      pathname?.includes(page.link)
    );

    setTitle({
      sectTitle: lang === "en" ? sectPage?.titleEn : sectPage?.titleRu,
      sectProduct:
        lang === "en"
          ? sectProducts?.titleEn || ""
          : sectProducts?.titleRu || "",
    });

    if (!pathname?.includes("/home/")) {
      window.scrollTo(0, 0);
    }

    if(lang !== "en" && lang !== "ru"){
      throw data("Page not Found", {status: 404})
    }

  }, [pathname, lang]);


  return (
    <>
      <div className="main">
        <Navigation />
        <div className="page-title-container">
          <div className="page-title">
            <h5>{lang === "en" ? "Supplier Company" : "Компания поставщик"}</h5>
            <span>
              <Link to={`${lang}/home`} id="home">
                Basalt International Export Trading
              </Link>
              {breadCrumb.length > 3 ? (
                <>
                  {" > "}
                  {pathname.includes("/products/") ? (
                    title.sectTitle
                  ) : (
                    title.sectTitle
                  )}
                  {title.sectProduct !==
                    "BASALT INTERNATIONAL EXPORT TRADING" &&
                    ` > ${title.sectProduct}`}
                </>
              ) : (
                ` > ${title.sectTitle}`
              )}
            </span>
          </div>
        </div>

        <Outlet />

        <Footer />
        {pathname?.includes("/contact-us") || <FixedBtn />}
      </div>
    </>
  );
}
