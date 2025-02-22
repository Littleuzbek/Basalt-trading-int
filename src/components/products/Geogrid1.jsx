import { Link, useParams } from "react-router";
import img1 from "../../assets/products/pro-about-geogrid1.jpg";
import img2 from "../../assets/products/pro-about-geogrid2.jpg";
import img3 from "../../assets/products/pro-about-geogrid3.jpg";
import img4 from "../../assets/products/pro-about-geogrid4.jpg";

export default function Geogrid() {
  const { lang } = useParams();
  return (
    <>
      <div className="product">
        <div className="img-product sticky-img">
          <img src={img2} alt="" />
        </div>
        <div className="about-product">
          <p>
            <strong>
              {lang === "en"
                ? "Universal Basalt Grid"
                : "Базальтовая сетка универсальная"}
            </strong>
            {lang === "en"
              ? " is an innovative construction material designed to increase the strength and stability of various engineering structures. The basis of this mesh is basalt fiber, which has exceptional physical and mechanical characteristics and provides the product with a long service life even in the most difficult operating conditions. Geogrid is ideal for use in the construction of industrial and residential facilities, roads and railroads, as well as for slope stabilization, erosion protection and soil reinforcement."
              : " представляет собой инновационный строительный материал, созданный для повышения прочности и устойчивости различных инженерных конструкций. Основа этой сетки – базальтовое волокно, которое обладает исключительными физико-механическими характеристиками и обеспечивает изделию долгий срок службы даже в самых сложных эксплуатационных условиях. Сетка идеально подходит для использования в строительстве промышленных и жилых объектов, автомобильных и железных дорог, а также для укрепления склонов, защиты от эрозии и армирования грунтов."}
          </p>

          <p>
            {lang === "en"
              ? "Basalt geogrid compares favorably with traditional reinforcing materials due to its high resistance to corrosion, chemical influences and temperature fluctuations. It retains its properties in prolonged contact with moisture and aggressive media, which makes it indispensable in projects with high reliability requirements. The elasticity and strength of the material allow for even distribution of loads, minimizing the risk of deformation of the structure and increasing its service life."
              : "Базальтовая сетка выгодно отличается от традиционных армирующих материалов благодаря своей высокой устойчивости к коррозии, химическим воздействиям и перепадам температур. Она сохраняет свои свойства при длительном контакте с влагой и агрессивными средами, что делает её незаменимой в проектах с повышенными требованиями к надежности. Эластичность и прочность материала позволяют равномерно распределять нагрузки, минимизируя риск деформации конструкции и увеличивая её срок службы."}
          </p>

          <p>
            {lang === "en"
              ? "This material is easy to install, which significantly reduces labor costs and time for construction works. Geogrid is easy to transport due to its compact packaging and light weight, and its installation does not require the use of complex equipment. Its ease of use makes it a universal choice for both large-scale infrastructure projects and private construction tasks."
              : "Этот материал прост в установке, что значительно сокращает трудозатраты и время на выполнение строительных работ. Сетка легко транспортируется благодаря компактной упаковке и малому весу, а её монтаж не требует использования сложного оборудования. Удобство применения делает её универсальным выбором как для масштабных инфраструктурных проектов, так и для частных строительных задач."}
          </p>

          <p>
            {lang === "en"
              ? "Combining advanced technology, high reliability and a wide range of applications, universal basalt geogrid becomes the ideal choice for those looking for effective and durable solutions for construction and reinforcement of structures. This material embodies a balance between quality, convenience and care for nature, which makes it in demand among professionals and private builders alike."
              : "Сочетая в себе передовые технологии, высокую надежность и широкий спектр применения, универсальная базальтовая сетка становится идеальным выбором для тех, кто ищет эффективные и долговечные решения для строительства и укрепления конструкций. Этот материал воплощает баланс между качеством, удобством и заботой о природе, что делает его востребованным как среди профессионалов, так и среди частных застройщиков."}
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
          <img src={img3} alt="" />
          <h3>{lang === "en" ? "Priming" : "Грунт"}</h3>
          <Link to={`/${lang}/products/basalt-priming`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
        <div className="pro-card">
          <img src={img4} alt="" />
          <h3>{lang === "en" ? "ASPHALT CONCRETE" : "АСФАЛЬТОБЕТОН"}</h3>
          <Link to={`/${lang}/products/basalt-asphalt-concrete`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
      </div>
    </>
  );
}
