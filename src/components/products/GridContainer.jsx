import { Link, useNavigate, useParams } from "react-router";
import img1 from "../../assets/products/pro-about-geogrid1.jpg"
import img2 from "../../assets/products/pro-about-geogrid2.jpg"
import img3 from "../../assets/products/pro-about-geogrid3.jpg"
import img4 from "../../assets/products/asphalt.jpg";

export default function Roving() {
  const { lang } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="product-card-container">
          <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-facade`)}>
            <img src={img1} alt="" />
            <h3>{lang === "en" ? "PLASTER/FACADE " : "ШТУКАТУРНЫЙ/ФАСАД"}</h3>
            <Link to={`/${lang}/products/basalt-facade`}>
              {lang === "en" ? "More" : "Подробнее"}
            </Link>
          </div>
          <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-univercal`)}>
            <img src={img2} alt="" />
            <h3>{lang === "en" ? "Universal" : "Универсал"}</h3>
            <Link to={`/${lang}/products/basalt-univercal`}>
              {lang === "en" ? "More" : "Подробнее"}
            </Link>
          </div>
          <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-priming`)}>
            <img src={img3} alt="" />
            <h3>{lang === "en" ? "Priming" : "Грунт"}</h3>
            <Link to={`/${lang}/products/basalt-priming`}>{lang === "en" ? "More" : "Подробнее"}</Link>
          </div>
          <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-asphalt-concrete`)}>
            <img src={img4} alt="" />
            <h3>{lang === "en" ? "ASPHALT CONCRETE" : "АСФАЛЬТОБЕТОН"}</h3>
            <Link to={`/${lang}/products/basalt-asphalt-concrete`}>{lang === "en" ? "More" : "Подробнее"}</Link>
          </div>
      </div>
    </div>
  );
}
