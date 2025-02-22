import "../components/Products.css";
import pro1 from "../assets/products/pro-roving.png";
import pro2 from "../assets/products/pro-fiber.png";
import pro3 from "../assets/products/pro-geogrid.png";
import pro4 from "../assets/products/pro-composite.png";
import pro5 from "../assets/products/pro-pipe.png";
import pro6 from "../assets/products/a.png";
import { Link, useNavigate, useParams } from "react-router";

export default function Products() {
  const { lang } = useParams();
  const navigate = useNavigate();
  return (
    <div className="products-page">
      <div>
        <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-roving`)}>
          <img src={pro1} alt="" />
          <h3>{lang === "en" ? "Basalt Roving" : "БАЗАЛЬТОВЫЙ РОВИНГ"}</h3>
          <Link to="basalt-roving">{lang === "en" ? "More" : "Подробнее"}</Link>
        </div>
        <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-fiber`)}>
          <img src={pro2} alt="" />
          <h3>{lang === "en" ? "Basalt Chopped Fiber" : "БАЗАЛЬТОВАЯ  фибра"}</h3>
          <Link to="basalt-fiber">{lang === "en" ? "More" : "Подробнее"}</Link>
        </div>
        <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-grid`)}>
          <img src={pro3} alt="" />
          <h3>{lang === "en" ? "Basalt grid" : "БАЗАЛЬТОВАЯ  сетка"}</h3>
          <Link to="basalt-grid">
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
        <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-composite`)}>
          <img src={pro4} alt="" />
          <h3>
            {lang === "en"
              ? "Basalt Composite Reinforcement"
              : "БАЗАЛЬТОВАЯ  арматура"}
          </h3>
          <Link to="basalt-composite">
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
        <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-fabric`)}>
          <img src={pro5} alt="" />
          <h3>{lang === "en" ? "Basalt Pipe" : "базальтовые  трубы"}</h3>
          <Link to="basalt-pipe">{lang === "en" ? "More" : "Подробнее"}</Link>
        </div>
        <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-roving`)}>
          <img src={pro6} alt="" />
          <h3>{lang === "en" ? "Basalt Fabric" : "БАЗАЛЬТОВАЯ  ткань"}</h3>
          <Link to="basalt-fabric">{lang === "en" ? "More" : "Подробнее"}</Link>
        </div>
      </div>
    </div>
  );
}
