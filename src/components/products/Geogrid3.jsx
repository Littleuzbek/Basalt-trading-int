import { Link, useParams } from "react-router";
import img1 from "../../assets/products/pro-about-geogrid1.jpg";
import img2 from "../../assets/products/pro-about-geogrid2.jpg";
import img3 from "../../assets/products/pro-about-geogrid3.jpg";
import img4 from "../../assets/products/asphalt.jpg";

export default function Geogrid() {
  const { lang } = useParams();
  return (
    <>
      <div className="product">
        <div className="img-product sticky-img">
          <img src={img4} alt="" />
        </div>
        <div className="about-product">
          <p>
            <strong>
              {lang === "en"
                ? "Basalt grid for asphalt"
                : "Базальтовая сетка для асфальтобетона"}
            </strong>{" "}
            —
            {lang === "en"
              ? " concrete is a modern material designed to increase the strength and durability of road structures. Thanks to the unique properties of basalt fiber, geogrid effectively solves the problem of cracking by redistributing loads and reducing the risk of asphalt concrete pavement failure under the influence of heavy traffic and adverse weather cond"
              : " это современный материал, разработанный для повышения прочности и долговечности дорожных конструкций. Благодаря уникальным свойствам базальтового волокна, сетка эффективно решает проблему трещинообразования, перераспределяя нагрузки и снижая риск разрушения асфальтобетонного покрытия под воздействием интенсивного движения и неблагоприятных погодных условий."}
          </p>

          <p>
            {lang === "en"
              ? "Made of strong basalt yarns, geogrid is characterized by high temperature resistance, resistance to chemical reagents and biological factors. This makes it an indispensable element in the construction and repair of roads in any climatic zones, including regions with extreme temperature fluctuations. Its use allows to increase the time between repairs of road surfaces, reducing the cost of operation and maintenance."
              : "Изготавливаемая из прочных базальтовых нитей, сетка отличается высокой термостойкостью, устойчивостью к воздействию химических реагентов и биологическим факторам. Это делает её незаменимым элементом при строительстве и ремонте дорог в любых климатических зонах, включая регионы с экстремальными температурными перепадами. Её использование позволяет увеличить межремонтный срок дорожных покрытий, снизив затраты на эксплуатацию и обслуживание."}
          </p>

          <p>
            {lang === "en"
              ? "Due to its optimal structure and low weight, asphalt basalt geogrid is easy to lay and integrate into the roadbed. It easily bonds to different asphalt layers, improving their adhesion and preventing displacement during operation. The high strength of the material provides effective resistance to tensile loads, which is especially important in high-traffic areas or areas subject to significant deformation."
              : "Благодаря оптимальной структуре и малому весу, асфальтобетонная базальтовая сетка проста в укладке и интеграции в дорожное полотно. Она легко соединяется с различными слоями асфальта, улучшая их сцепление и предотвращая смещение в процессе эксплуатации. Высокая прочность материала обеспечивает эффективное сопротивление растягивающим нагрузкам, что особенно важно на участках с повышенной интенсивностью движения или на местах, подверженных значительным деформациям."}
          </p>

          <p>
            {lang === "en"
              ? "Basalt geogrid for asphalt concrete is used not only in the construction of highways and city streets, but also in the strengthening of airfield pavements, bridges and other objects of transport infrastructure. It demonstrates excellent results under high mechanical loads, increasing the reliability and stability of structures. Its use contributes to the creation of safe and durable road surfaces that meet modern quality and environmental requirements."
              : "Базальтовая сетка для асфальтобетона применяется не только в строительстве автомагистралей и городских улиц, но и в укреплении аэродромных покрытий, мостов и других объектов транспортной инфраструктуры. Она демонстрирует отличные результаты в условиях высоких механических нагрузок, повышая надёжность и устойчивость конструкций. Её использование способствует созданию безопасных и долговечных дорожных покрытий, отвечающих современным требованиям качества и экологичности."}
          </p>
        </div>
      </div>

      <div className="related-products grid-related">
        <div className="pro-card">
          <img src={img1} alt="" />
          <h3>{lang === "en" ? "PLASTER/FACADE " : "ШТУКАТУРНЫЙ/ФАСАД"}</h3>
          <Link to={`/${lang}/products/basalt-facade`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
        <div className="pro-card">
          <img src={img2} alt="" />
          <h3>{lang === "en" ? "Universal" : "Универсал"}</h3>
          <Link to={`/${lang}/products/basalt-univercal`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
        <div className="pro-card">
          <img src={img3} alt="" />
          <h3>{lang === "en" ? "Priming" : "Грунт"}</h3>
          <Link to={`/${lang}/products/basalt-priming`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
      </div>
    </>
  );
}
