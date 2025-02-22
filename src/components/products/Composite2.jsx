import { Link, useParams } from "react-router";
import img1 from "../../assets/products/composite.png";
import img2 from "../../assets/products/pro-about-composite.jpg";

export default function Composite2() {
  const {lang} = useParams();
  return (
    <>
    <div className="product">
      <div className="img-product">
        <img src={img2} alt="" />
      </div>
      <div className="about-product">
        <p>
          <strong>{lang === "en" ? "Reinforcement mesh" : "Армосетка"}</strong>
           {lang === "en" ?
           " is a modern construction material used for reinforcing various structures and surfaces. It is made of strong basalt fibers, which are interwoven in the form of a mesh. Thanks to its structure, armosetka provides uniform redistribution of loads, increasing the strength and durability of building structures and objects." :
           " это современный строительный материал, применяемый для армирования различных конструкций и поверхностей. Она изготавливается из прочных базальтовых волокон, которые переплетены в виде сетки. Благодаря своей структуре армосетка обеспечивает равномерное перераспределение нагрузок, повышая прочность и долговечность строительных конструкций и объектов."}
        </p>
        <p>
          {lang === "en" ? 
          "The main advantages of reinforcement mesh include high resistance to aggressive environments such as chemicals, moisture and extreme temperatures. This material is ideal for use in humid environments such as swimming pools, canals, pavements or facade systems. In addition, the reinforcement mesh is easy to install and flexible, which allows it to be used to create complex geometric shapes." : 
          "Основные преимущества армосетки включают высокую устойчивость к воздействию агрессивных сред, таких как химические вещества, влага и экстремальные температуры. Этот материал идеально подходит для использования в условиях повышенной влажности, например, при строительстве бассейнов, каналов, дорожных покрытий или фасадных систем. Кроме того, армосетка отличается лёгкостью монтажа и гибкостью, что позволяет использовать её для создания сложных геометрических форм."
          }
        </p>
        <p>
           {lang === "en" ?
           "The use of reinforcement mesh helps to prevent cracks and deformations, which is especially important when reinforcing concrete, plaster or thermal insulation materials. Its use guarantees the durability of structures, reducing the need for repair and maintenance. Basalt fiber reinforcement mesh is a reliable and economical solution for modern construction tasks, which combines high functionality and durability." :
           "Применение армосетки способствует предотвращению появления трещин и деформаций, что особенно важно при армировании бетона, штукатурки или теплоизоляционных материалов. Её использование гарантирует долговечность конструкций, снижая необходимость в ремонте и техническом обслуживании. Армосетка из базальтовых волокон—это надёжное и экономичное решение для современных строительных задач, которое сочетает в себе высокую функциональность и долговечность."}
        </p>
      </div>
    </div>

      <div className="related-products">
        <div className="pro-card">
          <img src={img1} alt="" />
          <h3>{lang === "en" ? "Reinforcement Mesh" : "АРМОСЕТКА"}</h3>
          <Link to={`/${lang}/products/basalt-reinforcement-mesh`}>
            {lang === "en" ? "More" : "Подробнее"}
          </Link>
        </div>
      </div>
    </>
  )
}
