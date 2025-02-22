import { useParams } from "react-router"
import img1 from "../../assets/products/fiber.png"

export default function Fiber() {
  const {lang} = useParams();
  return (
    <div className="product">
      <div className="about-product">
      <p>
        <strong>{lang === "en" ? "Basalt Fiber" : "Базальтовая фибра"}</strong> – 
        {lang === "en" ?
        " is chopped basalt strand that can withstand temperatures up to 982°C. The material is obtained by melting basalt rocks in a furnace." :
        " это рубленное базальтовое волокно, способное выдерживать температуру до 982°C. Материал получают способом плавления в печи базальтовых горных пород."}
      </p>

      <h4>{lang === "en" ? 
      "Basalt fiber is widely used for the following purposes" : 
      "Базальтовая фибра широко применяется для следующих целей"}:</h4>
      <ol>
        <li>{lang === "en" ? 
          "Construction of bridges and tunnels;" : 
          "Строительство мостов и тоннелей;"}
        </li>
        <li>{lang === "en" ? 
          "Safe replacement for asbestos;" : 
          "Безопасная замена асбесту;"}
        </li>
        <li>{lang === "en" ? 
          "Reinforcement of concrete and other building materials;" : 
          "Армирование бетона и других строительных материалов;"}
        </li>
        <li>{lang === "en" ? 
          "Creation of foundations for buildings and structures;" : 
          "Создание фундаментов зданий и сооружений;"}
        </li>
        <li>{lang === "en" ? 
        "Manufacture of blocks;" : 
        "Изготовление блоков;"}
        </li>
        <li>{lang === "en" ? 
        "Fire protection at oil refineries;" : 
        "Противопожарная защита на нефтеперерабатывающих заводах;"}
        </li>
        <li>{lang === "en" ? 
        "Creation of parking areas and sidewalks." : 
        "Создание парковочных площадок и тротуаров."}
        </li>
      </ol>
      <h4>{lang === "en" ? "Characteristics of basalt fiber:" : "Характеристики базальтовой фибры:"}</h4>
      <ul>
        <li>{lang === "en" ? 
          "High strength and tear resistance;" : 
          "Высокая прочность и устойчивость к разрыву;"}
        </li>
        <li>{lang === "en" ? 
          "Resistance to temperature and moisture;" :
          "Устойчивость к температурным воздействиям и влаге;"}
        </li>
        <li>{lang === "en" ? "Environmentally safe;" : "Экологическая безопасность;"}</li>
        <li>{lang === "en" ? "Ease and convenience of use;" : "Легкость и удобство в использовании;"}</li>
        <li>{lang === "en" ? "Resistance to corrosion and chemicals." : "Устойчивость к коррозии и химическим веществам."}</li>
      </ul>

      <h4>{lang === "en" ? "Characteristics of basalt fiber:" : "Базальтовая фибра доступна в следующих длинах:"}</h4>
      <ul>
        <li>{lang === "en"? "3mm;" : "3 мм;"}</li>
        <li>{lang === "en"? "6mm;" : "6 мм;"}</li>
        <li>{lang === "en"? "13mm;" : "13 мм;"}</li>
        <li>{lang === "en"? "15mm;" : "15 мм;"}</li>
        <li>{lang === "en"? "18mm;" : "18 мм;"}</li>
        <li>{lang === "en"? "25mm;" : "25 мм;"}</li>
        <li>{lang === "en"? "27mm;" : "27 мм;"}</li>
        <li>{lang === "en"? "50mm;" : "50 мм;"}</li>
      </ul>

      <h4>{lang === "en" ? 
        "Basalt fiber has the following properties:" : 
        "Базальтовая фибра обладает следующими свойствами:"}
      </h4>
      <ul>
        <li>{lang === "en" ? 
          "Resistance to ultraviolet radiation and biological contamination;" :
          "Устойчивость к ультрафиолетовому излучению и биологическому загрязнению;"}
        </li>
        <li>{lang === "en" ? 
          "Resistance to corrosion, acids and chemicals;" :
          "Устойчивость к коррозии, кислотам и химическим веществам;."}
        </li>
        <li>{lang === "en" ?
          "High heat and sound insulation properties;" : 
          "Высокие тепло- и звукоизоляционные свойства;"}
         </li>
        <li>{lang === "en" ? "Strength;" : "Прочность;"}</li>
        <li>{lang === "en" ? "Heat resistance;" : "Термостойкость;"}</li>
        <li>{lang === "en" ? "Ecological friendliness." : "Экологичность."}</li>
      </ul>
      </div>
      <div className="img-product sticky-img">
        <img src={img1} alt="" />
      </div>
    </div>
  )
}
