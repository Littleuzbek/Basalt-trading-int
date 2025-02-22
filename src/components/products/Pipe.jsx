import { useParams } from "react-router";
import pipe1 from "../../assets/products/pipe1.png";
import pipe2 from "../../assets/products/pipe2.jpg";
import pipe3 from "../../assets/products/pipe3.jpg";
import pipe4 from "../../assets/products/pipe4.jpg";
import { useState } from "react";

export default function Pipe() {
  const {lang} = useParams();
  const [mainImg,setMainImg] = useState(pipe1);
  return (
    <div className="product">
      <div className="img-product">
        <img src={mainImg} alt="" />
        <div className="img-panel pipe-panel">
            <img src={pipe1} alt="" loading="lazy" onClick={()=>setMainImg(pipe1)}/>
            <img src={pipe2} alt="" loading="lazy" onClick={()=>setMainImg(pipe2)}/>
            <img src={pipe3} alt="" loading="lazy" onClick={()=>setMainImg(pipe3)} />
            <img src={pipe4} alt="" loading="lazy" onClick={()=>setMainImg(pipe4)} />
        </div>
      </div>
      <div className="about-product">
      <p>
        <strong>{lang === "en" ? "Basalt pipe" : "Базальтовые трубы"}</strong>  
        {lang === "en" ?
        " is manufactured using a unique method of continuously winding basalt fiber onto a moving mandrel. This method allows for continuous reinforcement with basalt fiber around the circumference, which gives high strength to basalt pipes." :
        " изготавливается уникальным способом непрерывной намотки базальтового волокна на движущуюся оправку. Данный метод позволяет непрерывно армировать базальтовым волокном по окружности, что придаёт высокую прочность базальтовым трубам."}
    </p>

    <p>
        {lang === "en" ? 
        "The main load for pipes operating under pressure, as well as for underground pipelines, falls on the radial direction. Thus, only the method of simultaneous reinforcement with continuous and chopped basalt threads allows achieving higher physical and mechanical properties of the product and, at the same time, lower cost." :
        "Основная нагрузка для труб, работающих под давлением, как и для трубопроводов подземной прокладки, приходится на радиальное направление. Таким образом, только способ одновременного армирования непрерывным и рубленными базальтовыми нитями позволяет добиться получения более высоких физико-механических показателей продукции и одновременно более низкой стоимости."}
    </p>

    <h4>{lang === "en" ? 
      "Our basalt pipes are used in the following areas:" : 
      "Наши базальтовые трубы используются в следующих сферах"}:
    </h4>
      <ol>
        <li>{lang === "en" ? "Oil and gas industry;" : "Нефтегазовая отрасль;"}</li>
        <li>{lang === "en" ? "Construction;" : "Строительство;"}</li>
        <li>{lang === "en" ? "Liquid transportation;" : "Транспортировка жидкостей;"}</li>
        <li>{lang === "en" ? "Agriculture;" : "Сельское хозяйство;"}</li>
        <li>{lang === "en" ? "Chemical industry;" : "Химическая промышленность;"}</li>
        <li>{lang === "en" ? "Морская индустрия." : "Морская индустрия."}</li>
      </ol>

      <h4>{lang === "en" ? "Basalt pipes have a number of advantages" : "Базальтовые трубы обладают рядом преимуществ"}:</h4>
      <ul>
        <li>{lang === "en" ? "Simplicity and ease of installation;" : "Простота и лёгкость монтажа;"}</li>
        <li>{lang === "en" ? 
          "Light weight (7-8 times lighter than steel pipes);" : 
          "Лёгкий вес (легче стальных труб в 7-8 раз);"}
        </li>
        <li>{lang === "en" ? "No corrosion;" : "Отсутствие коррозии;"}</li>
        <li>{lang === "en" ? "Temperature resistance;" : "Температурная устойчивость;"}</li>
        <li>{lang === "en" ? "High strength;" : "Высокая прочность;"}</li>
        <li>{lang === "en" ? "Cost lower than steel;;" : "Стоимость ниже чем у стали;"}</li>
        <li>{lang === "en" ? "Can be used in any environment;" : "Возможность применения в любой среде;"}</li>
        <li>{lang === "en" ? "Environmentally friendly.;" : "Экологичность."}</li>
      </ul>
      </div>
    </div>
  );
}
