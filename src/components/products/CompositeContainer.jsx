import { Link, useParams } from "react-router";
import img1 from "../../assets/products/composite.png"
import img2 from "../../assets/products/pro-about-composite.jpg"

export default function Roving() {
  const { lang } = useParams();
  return (
    <div>
      <div className="product-card-container" style={{gridTemplateColumns: "auto auto", justifyContent: "space-around"}}>
          <div className="pro-card">
            <img src={img1} alt="" />
            <h3>{lang === "en" ? "Basalt Composite Rebar" : "Базальтокомпозитная арматура "}</h3>
            <Link to={`/${lang}/products/basalt-composite-rebar`}>
              {lang === "en" ? "More" : "Подробнее"}
            </Link>
          </div>
          <div className="pro-card">
            <img src={img2} alt="" />
            <h3>{lang === "en" ? "Reinforcement Mesh" : "АРМОСЕТКА"}</h3>
            <Link to={`/${lang}/products/basalt-reinforcement-mesh`}>
              {lang === "en" ? "More" : "Подробнее"}
            </Link>
          </div>
      </div>
    </div>
  );
}
