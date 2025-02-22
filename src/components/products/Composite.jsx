import { Link, useParams } from "react-router";
import rebar1 from "../../assets/products/composite.png";
import rebar2 from "../../assets/products/rebar.png";
import img2 from "../../assets/products/pro-about-composite.jpg";
import { useState } from "react";

export default function Composite() {
  const { lang } = useParams();
  const [mainImg, setMainImg] = useState(rebar1);
  return (
    <>
      <div className="product">
      <div className="img-product">
        <img src={mainImg} alt="" />
        <div className="img-panel">
            <img src={rebar1} alt="" loading="lazy" onClick={()=>setMainImg(rebar1)}/>
            <img src={rebar2} alt="" loading="lazy" onClick={()=>setMainImg(rebar2)}/>
        </div>
      </div>
        <div className="about-product">
          <p>
            <strong>
              {lang === "en"
                ? "Basalt composite  rebar"
                : "Базальтокомпозитная арматура"}
            </strong>{" "}
            –
            {lang === "en"
              ? " reinforcement is a construction material used to reinforce concrete structures. It is made of basalt fiber and is much stronger and more durable than steel."
              : " это строительный материал, используемый для усиления бетонных конструкций. Она изготовлена из базальтового волокна и является намного прочнее и долговечнее стали."}
          </p>

          <h4>
            {lang === "en"
              ? "Basalt composite rebar has the same coefficient of thermal expansion as concrete and is widely used in the following industries:"
              : "Базальтокомпозитная арматура имеет такой же коэффициент теплового расширения, как и бетон и широко применяется в следующих отраслях:"}
          </h4>
          <ol>
            <li>
              {lang === "en"
                ? "Construction of bridges, roads, tunnels and other engineering structures;"
                : "Строительство мостов, дорог, тоннелей и других инженерных сооружений;"}
            </li>
            <li>
              {lang === "en"
                ? "Reinforcing concrete and other building materials;"
                : "Армирование бетона и других строительных материалов;"}
            </li>
            <li>
              {lang === "en"
                ? "Manufacturing of composite materials;"
                : "Изготовление композитных материалов;"}
            </li>
            <li>
              {lang === "en"
                ? "Hydraulic engineering industry;"
                : "Гидротехническая промышленность;"}
            </li>
            <li>
              {lang === "en"
                ? "Manufacture of transportation vehicles;"
                : "Производство транспортных средств;"}
            </li>
            <li>{lang === "en" ? "Agriculture;" : "Сельское хозяйство;"}</li>
            <li>{lang === "en" ? "Architecture." : "Архитектура."}</li>
          </ol>

          <h4>
            {lang === "en"
              ? "The main advantages of basalt composite reinforcement are:"
              : "Основные преимущества базальтокомпозитной арматуры:"}
          </h4>
          <ul>
            <li>
              {lang === "en"
                ? "High strength and resistance to rupture;"
                : "Высокая прочность и устойчивость к разрыву;"}
            </li>
            <li>
              {lang === "en"
                ? "Resistance to corrosion and aggressive chemicals;"
                : "Устойчивость к коррозии и агрессивным химическим веществам;"}
            </li>
            <li>
              {lang === "en"
                ? "Environmental safety, as it does not contain harmful chemical compounds;"
                : "Экологическая безопасность, так как не содержит вредных химических соединений;"}
            </li>
            <li>
              {lang === "en"
                ? "Lightness and ease of use, as basalt composite reinforcement weighs much less than traditional materials;"
                : "Легкость и удобство в использовании, так как базальтокомпозитная арматура весит гораздо меньше, чем традиционные материалы;"}
            </li>
            <li>
              {lang === "en"
                ? "Durability and cost-effectiveness, as basalt composite reinforcement is highly resistant to corrosion and does not require regular replacement."
                : "Долговечность и экономичность, так как базальтокомпозитная арматура обладает высокой устойчивостью к коррозии и не требует регулярной замены."}
            </li>
          </ul>
        </div>
      </div>

      <div className="related-products">
        <div className="pro-card">
          <img src={img2} alt="" />
          <h3>{lang === "en" ? "Reinforcement Mesh" : "АРМОСЕТКА"}</h3>
          <Link to={`/${lang}/products/basalt-reinforcement-mesh`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
      </div>
    </>
  );
}
