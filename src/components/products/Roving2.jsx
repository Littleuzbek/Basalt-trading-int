import { Link, useParams } from "react-router";
import img1 from "../../assets/products/pro-about-roving1.png";
import img2 from "../../assets/products/pro-about-roving2.png";
import img3 from "../../assets/products/pro-about-roving3.png";
import roving1 from "../../assets/products/assem-roving1.png";
import roving2 from "../../assets/products/assem-roving2.png";
import roving3 from "../../assets/products/assem-roving3.png";
import roving4 from "../../assets/products/assem-roving4.png";
import roving5 from "../../assets/products/assem-roving5.png";
import { useState } from "react";

export default function Roving() {
  const {lang} = useParams();
  const [mainImg,setMainImg] = useState(roving1);
  return (
    <>
    <div className="product">
        <div className="img-product">
          <img src={mainImg} alt="" />
          <div className="img-panel">
            <img src={roving1} alt="" loading="lazy" onClick={()=>setMainImg(roving1)}/>
            <img src={roving2} alt="" loading="lazy" onClick={()=>setMainImg(roving2)}/>
            <img src={roving3} alt="" loading="lazy" onClick={()=>setMainImg(roving3)}/>
            <img src={roving4} alt="" loading="lazy" onClick={()=>setMainImg(roving4)}/>
            <img src={roving5} alt="" loading="lazy" onClick={()=>setMainImg(roving5)}/>
          </div>
        </div>
      <div className="about-product">
        <p>
          <strong>{lang === "en"? "Assembled basalt roving" : "Ассемблированный базальтовый ровинг"}</strong> — 
          {lang === "en" ?
          " this is a unique material widely used in modern production due to its exceptional characteristics. It is a continuous basalt fiber consisting of many individual threads specially processed to improve technological and operational properties. The roving made from basalt raw materials is used in construction and the production of various materials and composites." :          
          " это уникальный материал, широко применяемый в современном производстве благодаря своим исключительным характеристикам. Он представляет собой базальтовое непрерывное волокно, состоящее из множества отдельных нитей, специально обработанных для улучшения технологических и эксплуатационных свойств. Трощенный ровинг, изготавливаемый из базальтового сырья, находит применение в строительстве и производстве различных материалов и композитов."}
        </p>

        <p>
         {lang === "en" ?
          "The key feature of the material is high strength with minimal weight. This makes it popular in reinforcing structures and composite products. Excellent adhesive properties provide reliable adhesion to epoxy, polyester and vinyl ester resins, which allows obtaining materials with outstanding characteristics." :
         "Ключевой особенностью материала является высокая прочность при минимальном весе. Это делает его востребованным в армирующих конструкциях и композитных изделиях. Превосходные адгезионные свойства обеспечивают надёжное сцепление с эпоксидными, полиэфирными и винилэфирными смолами, что позволяет получать материалы с выдающимися характеристиками."}
        </p>

        <p>
          {lang === "en" ? 
          "Resistance to aggressive environments, including high temperatures, chemicals and moisture, makes roving indispensable in the construction of bridges, road surfaces and reservoirs, where the stability of the structure in extreme conditions is important. The production of the material includes fiber drawing, assembly, heat treatment and cutting, which ensures its homogeneity and stable characteristics. Additional processing, such as the application of impregnating compounds, increases resistance to external influences." :
          "Устойчивость к агрессивным средам, включая высокие температуры, химические вещества и влагу, делает трощенный ровинг незаменимым в строительстве мостов, дорожных покрытий и водоёмов, где важна стабильность конструкции в экстремальных условиях. Производство материала включает вытягивание волокон, ассемблирование, термическую обработку и резку, что обеспечивает его однородность и стабильные характеристики. Дополнительная обработка, например, нанесение пропиточных составов, повышает стойкость к внешним воздействиям."}
        </p>
      </div>
    </div>

    <div className="related-products roving-reladted">
        <div className="pro-card">
            <img src={img1} alt="" />
            <h3>{lang === "en" ? "Direct Roving" : "Директ РОВИНГ"}</h3>
            <Link to={`/${lang}/products/basalt-direct-roving`}>
              {lang === "en" ? "More" : "Подробнее"}
            </Link>
          </div>
        <div className="pro-card">
          <img src={img3} alt="" />
          <h3>{lang === "en" ? "TWISTED THREAD" : "КРУЧЕНАЯ  НИТЬ"}</h3>
          <Link to={`/${lang}/products/basalt-twisted-thread`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
      </div>
    </>
  );
}
