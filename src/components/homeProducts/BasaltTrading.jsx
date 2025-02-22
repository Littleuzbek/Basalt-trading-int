import "./ServiceDetails.css";
import gloves from "../../assets/gloves.png";
import cog from "../../assets/cog.png";
import tire from "../../assets/tire.png";
import plant from "../../assets/plant.png";
import {data as product} from '../../assets/data'
import { useParams } from "react-router";

export default function BasaltTrading() {
  const {lang} = useParams();
  return (
    <div className="service-details-info">
      <div className="img">
        <img src={product?.[0]?.img} loading="lazy" style={{minWidth: "100%"}} alt="" />
      </div>

      <h3>Basalt International Export Trading</h3>

      <p>
        {lang === "en"?
        "Your reliable supplier of high quality basalt products." :
        "Ваш надежный поставщик высококачественных базальтовых изделий."}
      </p>
      <p>
        {lang === "en" ?
        "Basalt Export Trading INT specialises in supplying premium basalt products to a variety of industries including construction, infrastructure and manufacturing. We are committed to high quality and sustainability, offering durable and reliable basalt solutions that meet our customers’ needs." :        
        "Компания Basalt Export Trading INT специализируется на поставке премиальных базальтовых изделий для различных отраслей, включая строительство, инфраструктуру и производство. Мы стремимся к высокому качеству и экологической устойчивости, предлагая долговечные и надежные базальтовые решения, соответствующие потребностям наших клиентов."}
      </p>

      <ul>
        <li>
          {lang === "en" ?
          "Basalt fiber is a lightweight, durable and corrosion-resistant material, ideal for reinforcement." :
          "Базальтовое волокно – легкий, прочный и устойчивый к коррозии материал, идеальный для армирования."}
        </li>
        <li>
          {lang === "en" ?
          "Basalt tiles and slabs are elegant and durable, ideal for construction and interior design." :          
          "Базальтовая плитка и плиты – элегантные и долговечные, идеально подходят для строительства и дизайна интерьеров."}
        </li>
        <li>
          {lang === "en" ?
          "Basalt crushed stone is used in road construction, landscaping and as a filler." :
          "Базальтовый щебень – используется в дорожном строительстве, благоустройстве и в качестве заполнителя."}
        </li>
        <li>
          {lang === "en" ?
          "Basalt reinforcement is a durable and stable alternative to steel structures." :
          "Базальтовая арматура – прочная и устойчивая альтернатива стальным конструкциям."}
        </li>
      </ul>

      <div className="extra-info">
        <span>
          <img src={tire} alt="" loading="lazy"/>
          <div>
            <h6>{lang === "en" ? "High quality standards" : "Высокие стандарты качества"}</h6>
            <p>
              {lang === "en" ? 
              "All our products meet industry requirements." :
              "Вся наша продукция соответствует отраслевым требованиям."}
            </p>
          </div>
        </span>
        <span>
          <img src={cog} alt="" loading="lazy"/>
          <div>
            <h6>{lang === "en" ? "Reliable deliveries" : "Надежные поставки"}</h6>
            <p>
              {lang === "en" ? 
              "We guarantee timely delivery at competitive prices." :
              "Гарантируем своевременную доставку по конкурентным ценам."}
            </p>
          </div>
        </span>
        <span>
          <img src={gloves} alt="" loading="lazy"/>
          <div>
            <h6>{lang === "en" ? "Custom solutions" : "Индивидуальные решения"}</h6>
            <p>
              {lang === "en" ? 
              "We provide basalt products according to your requirements." : 
              "Предоставляем базальтовые изделия по вашим требованиям."}
            </p>
          </div>
        </span>
        <span>
          <img src={plant} alt="" loading="lazy"/>
          <div>
            <h6>{lang === "en" ? "Eco-friendliness and sustainability" : "Экологичность и устойчивость"}</h6>
            <p>
              {lang === "en" ? 
              "Basalt is a natural and environmentally friendly material." : 
              "Базальт – это натуральный и экологически чистый материал."}
            </p>
          </div>
        </span>
      </div>

      <p>
        {lang === "en" ?
        "Work with Basalt Export Trading INT and get high-quality basalt products that combine strength, durability and eco-friendliness. Contact us to learn more!" :
        "Сотрудничайте с Basalt Export Trading INT и получите высококачественные базальтовые изделия, сочетающие в себе прочность, долговечность и экологичность. Свяжитесь с нами, чтобы узнать больше!"}
      </p>

    </div>
  );
}