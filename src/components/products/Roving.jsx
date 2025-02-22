import { Link, useParams } from "react-router";
import img2 from "../../assets/products/pro-about-roving2.png";
import img3 from "../../assets/products/pro-about-roving3.png";
import roving1 from "../../assets/products/pro-about-roving1.png";
import roving4 from "../../assets/products/dir-roving1.png";
import roving2 from "../../assets/products/dir-roving2.png";
import roving3 from "../../assets/products/dir-roving3.png";
import { useState } from "react";

export default function Roving() {
  const { lang } = useParams();
  const [mainImg,setMainImg] = useState(roving1);
  return (
    <>
      <div className="product">
        <div className="img-product">
          <img src={mainImg} alt="" />
          <div className="img-panel">
            <img src={roving1} alt="" loading="lazy" onClick={()=>setMainImg(roving1)}/>
            <img src={roving2} alt="" loading="lazy" onClick={()=>setMainImg(roving2)}/>
            <img src={roving3} alt="" loading="lazy" onClick={()=>setMainImg(roving3)}/>
            <img src={roving4} alt="" loading="lazy" onClick={()=>setMainImg(roving4)}/>
          </div>
        </div>
        <div className="about-product">
          <p>
            <strong>
              {lang === "en" ? "Basalt Direct Roving " : "Директ ровинг "}
            </strong>
            {lang === "en"
              ? "is a continuous thread, which is distinguished by the simplicity of its structure. Unlike othertypes of roving, it is not subjected to twisting or twisting processes and retains the original linear shape of the fibers. This means that the structure of the roving does not change, and the fibers remain parallel without forming a dense bonding layer."
              : "представляет собой непрерывную нить, которая отличается простотой своей структуры. В отличие от других типов ровинга, он не подвергается процессам кручения или скручивания и сохраняет исходную линейную форму волокон. Это означает, что структура ровинга не изменяется, а волокна остаются параллельно уложенными без образования плотного связующего слоя."}
          </p>

          <p>
            {lang === "en"
              ? "This design makes direct roving a convenient material for production where high homogeneity and minimal change in the natural properties of the fiber are required. Due to the absence of twists, it ensures ease of processing, predictability in use and versatility of application. This is especially important in industrial processes where precision and stability of materials are important."
              : "Такая конструкция делает директ ровинг удобным материалом для производства, где необходима высокая однородность и минимальное изменение природных свойств волокна. За счет отсутствия кручений он обеспечивает легкость в обработке, предсказуемость в использовании и универсальность применения. Это особенно важно в промышленных процессах, где важна точность и стабильность материалов."}
          </p>

          <p>
            {lang === "en"
              ? "Direct roving is used in a variety of applications, including the production of products that require high strength and uniform load distribution. Due to its simple yet functional form, direct roving has become an indispensable material for many industries. Its key feature is the preservation of the original fiber structure, which makes it an ideal choice for processes where precision and reliability are important."
              : "Директ ровинг используется в различных сферах, включая производство изделий, требующих высокой прочности и равномерного распределения нагрузок. Благодаря своей простой, но функциональной форме, директ ровинг стал незаменимым материалом для многих отраслей. Его ключевая особенность — это сохранение исходной структуры волокон, что делает его идеальным выбором для процессов, где важны точность и надежность."}
          </p>
        </div>
      </div>

      <div className="related-products roving-reladted">
        <div className="pro-card">
          <img src={img2} alt="" />
          <h3>
            {lang === "en" ? "ASSEMBLED  Roving" : "Ассемблированный  РОВИНГ"}
          </h3>
          <Link to={`/${lang}/products/basalt-assembled-roving`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
        <div className="pro-card">
          <img src={img3} alt="" />
          <h3>{lang === "en" ? "TWISTED THREAD" : "КРУЧЕНАЯ  НИТЬ"}</h3>
          <Link to={`/${lang}/products/basalt-twisted-thread`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
      </div>
    </>
  );
}
