import "./ServiceDetailsInfo.css";
import gloves from "../assets/gloves.png";
import cog from "../assets/cog.png";
import tire from "../assets/tire.png";
import plant from "../assets/plant.png";
import {data as services} from '../assets/data'
import { useLoaderData } from "react-router";

export default function ServiceDetailsInfo() {
  const data = useLoaderData();
  return (
    <div className="service-details-info">
      <img src={data?.img} alt="" />

      <h3>Basalt Export Trading INT</h3>

      <p>
        Ваш надежный поставщик высококачественных базальтовых изделий.
      </p>
      <p>
        Компания Basalt Export Trading INT специализируется на поставке премиальных базальтовых изделий для различных отраслей, включая строительство, инфраструктуру и производство. Мы стремимся к высокому качеству и экологической устойчивости, предлагая долговечные и надежные базальтовые решения, соответствующие потребностям наших клиентов.
      </p>

      <ul>
        <li>
          Базальтовое волокно – легкий, прочный и устойчивый к коррозии материал, идеальный для армирования.
        </li>
        <li>
          Базальтовая плитка и плиты – элегантные и долговечные, идеально подходят для строительства и дизайна интерьеров.
        </li>
        <li>
          Базальтовый щебень – используется в дорожном строительстве, благоустройстве и в качестве заполнителя.
        </li>
        <li>
          Базальтовая арматура – прочная и устойчивая альтернатива стальным конструкциям.
        </li>
      </ul>

      <div className="extra-info">
        <span>
          <img src={tire} alt="" />
          <div>
            <h6>Высокие стандарты качества</h6>
            <p>
              Вся наша продукция соответствует отраслевым требованиям.
            </p>
          </div>
        </span>
        <span>
          <img src={cog} alt="" />
          <div>
            <h6>Надежные поставки</h6>
            <p>
              Гарантируем своевременную доставку по конкурентным ценам.
            </p>
          </div>
        </span>
        <span>
          <img src={gloves} alt="" />
          <div>
            <h6>Индивидуальные решения</h6>
            <p>
              Предоставляем базальтовые изделия по вашим требованиям.
            </p>
          </div>
        </span>
        <span>
          <img src={plant} alt="" />
          <div>
            <h6>Экологичность и устойчивость</h6>
            <p>
              Базальт – это натуральный и экологически чистый материал.
            </p>
          </div>
        </span>
      </div>

      <p>
        Сотрудничайте с Basalt Export Trading INT и получите высококачественные базальтовые изделия, сочетающие в себе прочность, долговечность и экологичность. Свяжитесь с нами, чтобы узнать больше!
      </p>

    </div>
  );
}

export const loaderFn = async ({params}) => {
  const {id} = params;
  const data = services?.find((page)=> id?.includes(page.link));
  return data
}