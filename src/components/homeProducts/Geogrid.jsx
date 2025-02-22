import "./ServiceDetails.css";
import {data as product} from '../../assets/data'
import { useParams } from "react-router";

export default function Geogrid() {
  const {lang} = useParams();
  return (
    <div className="service-details-info">
    <div className="img">
      <img src={product?.[3]?.img} loading="lazy"  alt="" />
    </div>

    <h3>{lang === "en" ? "BASALT GRID" : "БАЗАЛЬТОВАЯ СЕТКА"}</h3>

    <p>
        <strong>{lang === "en" ? "Basalt universal grid" : "Базальтовая сетка универсальная"}</strong> 
        {lang === "en" ?
        " is an innovative construction material created to increase the strength and stability of various engineering structures. The basis of this mesh is basalt fiber, which has exceptional physical and mechanical characteristics and provides the product with a long service life even in the most difficult operating conditions. The mesh is ideal for use in the construction of industrial and residential buildings, highways and railways, as well as for strengthening slopes, protecting against erosion and reinforcing soils." :
        " представляет собой инновационный строительный материал, созданный для повышения прочности и устойчивости различных инженерных конструкций. Основа этой сетки – базальтовое волокно, которое обладает исключительными физико-механическими характеристиками и обеспечивает изделию долгий срок службы даже в самых сложных эксплуатационных условиях. Сетка идеально подходит для использования в строительстве промышленных и жилых объектов, автомобильных и железных дорог, а также для укрепления склонов, защиты от эрозии и армирования грунтов."}
    </p>

    <p>
       {lang === "en" ?
       "Basalt mesh compares favorably with traditional reinforcing materials due to its high resistance to corrosion, chemical influences and temperature changes. It retains its properties during prolonged contact with moisture and aggressive environments, which makes it indispensable in projects with increased reliability requirements. The elasticity and strength of the material allow for uniform distribution of loads, minimizing the risk of deformation of the structure and increasing its service life." :
       "Базальтовая сетка выгодно отличается от традиционных армирующих материалов благодаря своей высокой устойчивости к коррозии, химическим воздействиям и перепадам температур. Она сохраняет свои свойства при длительном контакте с влагой и агрессивными средами, что делает её незаменимой в проектах с повышенными требованиями к надежности. Эластичность и прочность материала позволяют равномерно распределять нагрузки, минимизируя риск деформации конструкции и увеличивая её срок службы."}
    </p>

    <p>
       {lang === "en" ?
       "This material is easy to install, which significantly reduces labor costs and time for construction work. The mesh is easy to transport due to its compact packaging and low weight, and its installation does not require the use of complex equipment. Ease of use makes it a universal choice for both large-scale infrastructure projects and private construction tasks." :
       "Этот материал прост в установке, что значительно сокращает трудозатраты и время на выполнение строительных работ. Сетка легко транспортируется благодаря компактной упаковке и малому весу, а её монтаж не требует использования сложного оборудования. Удобство применения делает её универсальным выбором как для масштабных инфраструктурных проектов, так и для частных строительных задач."}
    </p>

    <p>
        {lang === "en" ?
        "Combining advanced technologies, high reliability and a wide range of applications, the universal basalt mesh becomes an ideal choice for those looking for effective and durable solutions for the construction and strengthening of structures. This material embodies a balance between quality, convenience and care for nature, which makes it popular among both professionals and private developers." :        
        "Сочетая в себе передовые технологии, высокую надежность и широкий спектр применения, универсальная базальтовая сетка становится идеальным выбором для тех, кто ищет эффективные и долговечные решения для строительства и укрепления конструкций. Этот материал воплощает баланс между качеством, удобством и заботой о природе, что делает его востребованным как среди профессионалов, так и среди частных застройщиков."}
    </p>
  </div>
  )
}
