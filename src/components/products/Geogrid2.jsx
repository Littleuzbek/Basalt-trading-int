import { useParams } from "react-router"
import img3 from "../../assets/products/pro-about-geogrid3.jpg"

export default function Geogrid() {
  const {lang} = useParams();
  return (
    <>
    <div className="product">
      <div className="about-product">
        <p>
          <strong>{lang === "en" ? "Basalt grid for soils" : "Базальтовая сетка для грунтов"}</strong> — 
          {lang === "en" ? 
          " is an innovative material designed to reinforce and stabilize soils in various engineering and construction projects. Made of high-strength basalt fiber, it combines unique properties such as durability, corrosion resistance and environmental safety." :
          " это инновационный материал, предназначенный для укрепления и стабилизации грунтов в различных инженерных и строительных проектах. Изготовленная из высокопрочного базальтового волокна, она сочетает в себе уникальные свойства, такие как долговечность, устойчивость к коррозии и экологическая безопасность."}
        </p>

        <p>
            {lang === "en" ? 
            "This material is actively used in the construction of roads and railroads, reinforcement of building foundations, strengthening of slopes and slopes, as well as in landscape projects. The main advantage of basalt geogrid is its ability to evenly distribute the load, preventing subsidence and deformation of the soil. It effectively reduces the risk of cracks and other damage, ensuring the stability of the structure for many years." :
            "Этот материал активно применяется в строительстве автомобильных и железных дорог, усилении оснований зданий, укреплении откосов и склонов, а также в ландшафтных проектах. Основное преимущество базальтовой геосетки заключается в её способности равномерно распределять нагрузку, предотвращая проседание и деформацию грунта. Она эффективно снижает риск возникновения трещин и других повреждений, обеспечивая стабильность конструкции на долгие годы."}
        </p>

        <p>
            {lang === "en" ? 
            "Grid is characterized by high resistance to moisture, chemicals and extreme temperatures, which makes it an ideal choice for operation in difficult climatic conditions. In addition, basalt fiber has a natural resistance to ultraviolet radiation, which excludes its destruction under the influence of sunlight." : 
            "Сетка отличается высокой стойкостью к воздействию влаги, химических веществ и экстремальных температур, что делает её идеальным выбором для эксплуатации в сложных климатических условиях. Кроме того, базальтовое волокно обладает природной устойчивостью к ультрафиолетовому излучению, что исключает его разрушение под воздействием солнечного света."}
        </p>

        <p>
           {lang === "en" ?
           "Easy installation and minimal maintenance costs make basalt geogrid a cost-effective solution. It can be easily laid on a prepared base without the need for sophisticated equipment or special skills. This significantly reduces the time required to complete the work, ensuring a high result at minimal cost." :
           "Простота монтажа и минимальные эксплуатационные расходы делают базальтовую геосетку экономически выгодным решением. Она легко укладывается на подготовленное основание, не требуя применения сложной техники или специальных навыков. Это существенно сокращает сроки выполнения работ, обеспечивая высокий результат с минимальными затратами."}
        </p>
      </div>
      <div className="img-product sticky-img">
        <img src={img3} alt="" />
      </div>
    </div>
    </>
  )
}
