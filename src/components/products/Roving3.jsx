import { Link, useParams } from "react-router";
import img1 from "../../assets/products/pro-about-roving1.png";
import img2 from "../../assets/products/pro-about-roving2.png";
import roving1 from "../../assets/products/twisted-roving1.png";
import roving2 from "../../assets/products/twisted-roving2.png";
import roving3 from "../../assets/products/twisted-roving3.png";
import roving4 from "../../assets/products/twisted-roving4.png";
import roving5 from "../../assets/products/twisted-roving5.png";
import { useState } from "react";

export default function Roving() {
  const { lang } = useParams();
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
            <>
              {lang === "en" ? (
                <>
                  Basalt roving is also used to produce{" "}
                  <strong>twisted yarn.</strong> This process involves twisting
                  several strands of roving together, which gives the final
                  product additional strength and improved mechanical
                  properties. Twisted basalt yarn finds application in the
                  following areas:
                </>
              ) : (
                <>
                  Базальтовый ровинг также используется для производства{" "}
                  <strong>крученой нити.</strong> Этот процесс включает в себя
                  скручивание нескольких нитей ровинга вместе, что придает
                  конечному продукту дополнительную прочность и улучшенные
                  механические свойства. Крученая базальтовая нить находит
                  применение в следующих областях:
                </>
              )}
            </>
          </p>

          <p>
            1.{" "}
            {lang === "en"
              ? "Textile industry: Twisted basalt yarn is used to produce flame and heat resistant fabrics used in protective clothing for firefighters, welders and metal workers."
              : "Текстильная промышленность: Крученая базальтовая нить используется для производства огнестойких и термостойких тканей, применяемых в создании защитной одежды для пожарных, сварщиков иработников металлургической промышленности."}
          </p>

          <p>
            2.
            {lang === "en"
              ? " Production of ropes and rope: Due to its high strength and corrosion resistance, twisted basalt yarn is used in the production of special ropes and ropes for marine and industrial industries."
              : " Производство канатов и веревок: Благодаря высокой прочности и устойчивости к коррозии, крученая базальтовая нить применяется в производстве специальных канатов и веревок для морской и промышленной отраслей."}
          </p>

          <p>
            3.{" "}
            {lang === "en"
              ? "Reinforcing Rubber Products: Twisted basalt yarn is used to reinforce high-pressure hoses, conveyor belts and other rubber products, increasing their strength and durability."
              : "Армирование резинотехнических изделий: Крученая базальтовая нить используется для армирования шлангов высокого давления, конвейерных лент и других резинотехнических изделий, повышая их прочность и долговечность."}
          </p>

          <p>
            4.{" "}
            {lang === "en"
              ? "Electrical insulation materials: In the electrical industry, twisted basalt filament is used to produce high quality insulation materials that are resistant to high temperature and electrical loads."
              : "Электроизоляционные материалы: В электротехнической промышленности крученая базальтовая нить применяется для производства высококачественных изоляционных материалов, устойчивых к высоким температурам и электрическим нагрузкам."}
          </p>

          <p>
            5.{" "}
            {lang === "en"
              ? "Filtration Systems: Twisted basalt filament is used in the manufacture of filters for hot gases and liquids in various industrial processes where high temperature resistance and chemical inertness are required."
              : "Фильтрационные системы: Крученая базальтовая нить используется впроизводстве фильтров для горячих газов и жидкостей в различных промышленных процессах, где требуется высокая термостойкость и химическая инертность."}
          </p>

          <p>
            {lang === "en"
              ? "The use of twisted basalt roving yarns allows for the creation of innovative products with improved performance, expanding the application of basalt materials in a variety of industries."
              : "Использование крученой нити из базальтового ровинга позволяет создавать инновационные продукты с улучшенными характеристиками, расширяя сферу применения базальтовых материалов в различных отраслях промышленности."}
          </p>

          <p>
            {lang === "en"
              ? "This additional section on twisted yarns can be added to the previous text to provide more complete information on basalt roving applications."
              : " Этот дополнительный раздел о крученой нити можно добавить к предыдущему тексту, чтобы предоставить более полную информацию о применении базальтового ровинга."}
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
          <img src={img2} alt="" />
          <h3>
            {lang === "en" ? "ASSEMBLED  Roving" : "Ассемблированный  РОВИНГ"}
          </h3>
          <Link to={`/${lang}/products/basalt-assembled-roving`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
      </div>
    </>
  );
}
