import "../components/AboutUs.css";
import { FiCodesandbox } from "react-icons/fi";
import aboutIMG from "../assets/about-img.png";
import { useParams } from "react-router";

export default function AboutUs() {
  const {lang} = useParams();
  return (
    <div className="about-page">
      <div className="about">
        <span>
          <FiCodesandbox />
          <div>
            <h3>{lang === "en" ? "About Us" : "О нас"}</h3>
          </div>
        </span>
        <p>
          {lang === "en" ?
           "Basalt INTERNATIONAL Export Trading supplies high-quality basalt products to a variety of industries, including construction, infrastructure, manufacturing and more. With years of experience, we have established ourselves as a reliable partner, providing durable, environmentally friendly and cost-effective solutions to customers worldwide." :
          "Компания Basalt Export Trading INT занимается поставками высококачественных базальтовых изделий для различных отраслей, включая строительство, инфраструктуру, производство и другие сферы. Благодаря многолетнему опыту мы зарекомендовали себя как надежный партнер, предоставляющий прочные, экологически чистые и экономически выгодные решения для клиентов по всему миру."}
        </p>

        <div>
          <h3>{lang === "en" ? "Our mission" : "Наша миссия"}</h3>
          <br />
          <p>
            {lang === "en" ?
            "We are committed to providing sustainable and high-performance basalt materials that contribute to stronger, more durable and safer buildings. Our commitment to quality, innovation and customer satisfaction motivates us to continually improve our products and services." :
            "Мы стремимся предоставлять экологически устойчивые и высокоэффективные базальтовые материалы, которые способствуют созданию более прочных, долговечных и безопасных объектов. Наше стремление к качеству, инновациям и удовлетворенности клиентов мотивирует нас постоянно совершенствовать продукцию и услуги."}
          </p>
        </div>
        <div>
          <h3>{lang === "en" ? "Our products" : "Наша продукция"}</h3>
          <br />
          <ul>
            <li>
              {lang === "en" ?
              "Basalt fiber is lightweight, corrosion-resistant, and ideal for reinforcement." :
              "Базальтовое волокно – легкое, устойчивое к коррозии, идеально подходит для армирования."}
            </li>
            <li>
             {lang === "en" ?
              "Basalt tiles and slabs are durable and stylish solutions for construction and interior design." :
            "Базальтовая плитка и плиты – прочные и стильные решения для строительства и дизайна интерьера."}
            </li>
            <li>
             {lang === "en" ?
             "Basalt crushed stone is used in road construction, landscape design and as a filler." :
             " Базальтовый щебень – используется в дорожном строительстве, ландшафтном дизайне и в качестве заполнителя."}
            </li>
            <li>
              {lang === "en" ?
              "Basalt reinforcement is a durable alternative to traditional steel reinforcement." : 
              "Базальтовая арматура – прочная альтернатива традиционной стальной арматуре."}
            </li>
          </ul>
        </div>
        <div>
          <h3>{lang === "en" ? "Why choose us" : "Почему выбирают нас"}?</h3>
          <br />
          <ul>
            <li>
              {lang === "en" ?
              "High quality standards – we guarantee that our products meet the most stringent industry requirements." :
              "Высокие стандарты качества – мы гарантируем соответствие нашей продукции самым строгим отраслевым требованиям."}
            </li>
            <li>
              {lang === "en" ?
              "Environmentally friendly – ​​basalt is a natural and environmentally friendly material, ideal for “green” projects." :
              "Экологичность – базальт является природным и экологически чистым материалом, идеальным для «зеленых» проектов."}
            </li>
            <li>
              {lang === "en" ?
              "Reliable deliveries – we guarantee timely delivery and competitive prices." :
              "Надежные поставки – гарантируем своевременную доставку и конкурентоспособные цены."}
            </li>
            <li>
              {lang === "en" ?
              "Individual solutions – we adapt products to the specific needs of your project." :
              "Индивидуальные решения – адаптируем продукцию под конкретные потребности вашего проекта."}
            </li>
          </ul>
        </div>
        <p>
          {lang === "en" ?
          "At Basalt Export Trading INT, we strive to build long-term relationships with our customers by offering the highest quality products and unrivaled service. Whether you need reliable building materials or innovative basalt solutions, we are here to help." :
          "В Basalt Export Trading INT мы стремимся строить долгосрочные отношения с клиентами, предлагая продукцию высочайшего качества и непревзойденный сервис. Если вам нужны надежные строительные материалы или инновационные базальтовые решения, мы готовы вам помочь."}
        </p>
      </div>

      <div className="about-img">
        <img src={aboutIMG} alt="" />
      </div>
    </div>
  );
}
