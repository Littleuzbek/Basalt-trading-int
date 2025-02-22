import { Link, useParams } from "react-router";
import img1 from "../../assets/products/pro-about-geogrid1.jpg"
import img2 from "../../assets/products/pro-about-geogrid2.jpg"
import img3 from "../../assets/products/pro-about-geogrid3.jpg"
import img4 from "../../assets/products/pro-about-geogrid4.jpg"

export default function Geogrid() {
  const { lang } = useParams();
  return (
    <>
      <div className="product">
        <div className="img-product sticky-img">
          <img src={img1} alt="" />
        </div>
        <div className="about-product">
          <p>
            <strong>
              {lang === "en"
                ? "Plaster/Facade basalt grid"
                : "Штукатурная/Фасадная базальтовая сетка"}
            </strong>{" "}
            —
            {lang === "en"
              ? " is a modern material designed to strengthen finishing layers and prevent the formation of cracks on the surface of facades. The use of this product allows to significantly increase the strength of the plaster layer, providing its resistance to external influences and extending the service life of the facade finish."
              : " это современный материал, предназначенный для усиления отделочных слоев и предотвращения образования трещин на поверхности фасадов. Использование этого продукта позволяет значительно повысить прочность штукатурного слоя, обеспечивая его устойчивость к внешним воздействиям и продлевая срок службы фасадной отделки."}
          </p>

          <p>
            {lang === "en"
              ? "The material is produced from basalt fiber, known for its exceptional characteristics. The basalt structure provides the mesh with high tensile strength, resistance to mechanical damage and excellent adhesion to various types of plaster mixtures. Thanks to these properties, plaster/facade geogrid becomes an indispensable element in building insulation systems, providing stability and durability of facade structures even in conditions of difficult climatic influences."
              : "Материал производится из базальтового волокна, известного своими исключительными характеристиками. Базальтовая структура обеспечивает сетке высокую прочность на разрыв, стойкость к механическим повреждениям и отличную адгезию с различными типами штукатурных смесей. Благодаря этим свойствам штукатурная/фасадная сетка становится незаменимым элементом в системах утепления зданий, обеспечивая стабильность и долговечность фасадных конструкций даже в условиях сложных климатических воздействий."}
          </p>

          <p>
            {lang === "en"
              ? "A special advantage of the material is its resistance to temperature fluctuations and moisture. Basalt geogrid is not subject to corrosion and retains its properties for many years of operation. This makes it an ideal solution for use in the construction and reconstruction of buildings for various purposes, from residential houses to commercial facilities."
              : "Особое преимущество материала заключается в его устойчивости к температурным перепадам и воздействию влаги. Базальтовая сетка не подвержена коррозии и сохраняет свои свойства на протяжении многих лет эксплуатации. Это делает её идеальным решением для применения в строительстве и реконструкции зданий различного назначения, от жилых домов до коммерческих объектов."}
          </p>

          <p>
            {lang === "en"
              ? "Plaster/Facade Geogrid is easy to install and is compatible with most building materials. Its use helps to create a strong, even and stable surface for further finishing, be it painting, applying decorative plaster or installing cladding panels. The use of mesh also contributes to the even distribution of loads, which prevents deformation of finishing layers and prolongs their aesthetic appearance."
              : "Штукатурная/Фасадная сетка легко монтируется и совместима с большинством строительных материалов. Её использование помогает создать прочную ровную и стабильную поверхность для дальнейшей отделки, будь то покраска, нанесение декоративной штукатурки или монтаж облицовочных панелей. Применение сетки также способствует равномерному распределению нагрузок, что предотвращает деформацию отделочных слоёв и продлевает их эстетический вид."}
          </p>
        </div>
      </div>

      <div className="related-products grid-related">
        <div className="pro-card">
          <img src={img2} alt="" />
          <h3>{lang === "en" ? "Universal" : "Универсал"}</h3>
          <Link to={`/${lang}/products/basalt-univercal`}>
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
