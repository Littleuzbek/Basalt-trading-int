import "./ServiceDetails.css";
import { data as product } from "../../assets/data";
import { useParams } from "react-router";

export default function Roving() {
  const {lang} = useParams();
  return (
    <div className="service-details-info">
      <div className="img">
        <img src={product?.[1]?.img} loading="lazy" alt="" />
      </div>

      <h3>{lang === "en" ? "BASALT ROVING" : "БАЗАЛЬТОВЫЙ РОВИНГ"}</h3>

      <p>
        <strong>{lang === "en" ? "Basalt roving" : "Базальтовый ровинг"}</strong> - 
        {lang === "en" ?
          " is the main material from which all basalt products are made. This material is obtained by melting basalt in a furnace at a temperature of 1450 °C, after which it is drawn into thin threads." : 
          " это главный материал из которого изготавливается вся базальтовая продукция. Данный материал получают путём плавления базальта в печи при температуре 1450 °C, после чего он вытягивается в тонкие нити."}
      </p>

      <p>
        {lang === "en" ? 
        "After receiving basalt roving, it can be used to make basalt fiber, reinforcement, geogrid, and basalt fabrics." :
        "После получения базальтового ровинга из него можно сделать базальтовую фибру, арматуру, геосетку, а также базальтовые ткани."}
      </p>

      <h4>{lang === "en" ? 
        "Basalt roving is widely used in the following industries" :
        "Базальтовый ровинг широко применяется в следующих отраслях"} :
       </h4>
      <ol>
        <li>{lang === "en" ? "Automotive industry" : "Автомобильная промышленность"};</li>
        <li>{lang === "en" ? "Construction" : "Строительство"};</li>
        <li>{lang === "en" ? "Energy industry" : "Энергетическая промышленность"};</li>
        <li>{lang === "en" ? "Industrial filtration" : "Промышленная фильтрация"};</li>
        <li>{lang === "en" ? "Sporting goods manufacturing" : "Производство спортивных товаров"}.</li>
      </ol>

      <h4>{lang === "en" ? 
        "The main advantages of basalt roving are" : 
        "Основными преимуществами базальтового ровинга являются"}:
      </h4>
      <ul>
        <li>{lang === "en" ? "High strength" : "Высокая прочность"};</li>
        <li>{lang === "en" ? "Corrosion resistance" : "Устойчивость к коррозии"};</li>
        <li>{lang === "en" ? "Heat resistance" : "Термостойкость"};</li>
        <li>{lang === "en" ? "Environmental friendliness" : "Экологичность"};</li>
        <li>{lang === "en" ? "Durability" : "Долговечность"};</li>
        <li>{lang === "en" ? "UV resistance" : "Устойчивость к ультрафиолету"};</li>
        <li>{lang === "en" ? "Ease of processing" : "Лёгкость в обработке"}.</li>
      </ul>

      <p>
        {lang === "en"?
        "Basalt roving is used in various fields such as automotive, shipbuilding, aerospace and composites. It can be used for concrete products, reinforcement of plastic products and many other purposes." :
        "Базальтовый ровинг используется в различных областях, таких как автомобилестроение, судостроение, аэрокосмическая промышленность и производство композитных материалов. Он может применяться для бетонных изделий, усиления пластиковых изделий и многих других целей."}
      </p>

      <p>
        {lang === "en" ?
        "In our company, basalt roving serves as the basis for the production of building materials such as basalt reinforcement, basalt geogrid, basalt pipe and basalt fiber (basalt fiber by-product in small pieces)." :
        "В нашей компании базальтовый ровинг служит основой для производства строительных материалов, таких как — базальтовая арматура, базальтовая геосетка, базальтовая труба и базальтовая фибра (побочное на мелких отрезках базальтовое волокно)."}
      </p>
    </div>
  );
}
