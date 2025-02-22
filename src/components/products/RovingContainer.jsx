import { Link, useNavigate, useParams } from "react-router";
import img1 from "../../assets/products/pro-about-roving1.png";
import img2 from "../../assets/products/pro-about-roving2.png"
import img3 from "../../assets/products/pro-about-roving3.png"

export default function Roving() {
  const { lang } = useParams();
  const navigate = useNavigate();
  return (
    <div>
      <div className="product-card-container">
          <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-direct-roving`)}>
            <img src={img1} alt="" />
            <h3>{lang === "en" ? "Direct Roving" : "Директ РОВИНГ"}</h3>
            <Link to={`/${lang}/products/basalt-direct-roving`}>
              {lang === "en" ? "More" : "Подробнее"}
            </Link>
          </div>
          <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-assembled-roving`)}>
            <img src={img2} alt="" />
            <h3>{lang === "en" ? "ASSEMBLED  Roving" : "Ассемблированный  РОВИНГ"}</h3>
            <Link to={`/${lang}/products/basalt-assembled-roving`}>
              {lang === "en" ? "More" : "Подробнее"}
            </Link>
          </div>
          <div className="pro-card" onClick={() => navigate(`/${lang}/products/basalt-twisted-thread`)}>
            <img src={img3} alt="" />
            <h3>{lang === "en" ? "TWISTED THREAD" : "КРУЧЕНАЯ  НИТЬ"}</h3>
            <Link to={`/${lang}/products/basalt-twisted-thread`}>{lang === "en" ? "More" : "Подробнее"}</Link>
          </div>
      </div>
    </div>
  );
}
