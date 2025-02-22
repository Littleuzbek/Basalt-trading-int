import { useParams } from "react-router"
import img1 from "../../assets/products/fabric.png"

export default function Fabric() {
  const {lang} = useParams();
  return (
    <div>
    <div className="product">
      <div className="about-product">
      <p>
        <strong>{lang === "en" ? "Базальтовая ткань" : "Basalt fabric"}</strong> – 
       {lang === "en" ?
       " for structural uses, basalt fabrics are useful for producing structural basalt-plastics based on various thermosetting binders (for instance by laying out method). From these materials components automobiles, aircraft, ships and households appliances can be produced. In the case of preliminary metallization of the fabrics, the resulting basalt-plastic acquires shield properties against electromagnetic radiation. Also basalt fabrics can be used as basics when producing soft and rigid roofing. Basalt fabrics for electro technical purposes are used as a base for the production of insulation materials. These materials are employed in the production of substances for printed circuit boards for electronics and electrical engineering. These have superior properties to similar conventional components made of fiberglass." : 
       " в конструкционном применении базальтовые ткани применяются для производства конструкционных базальтопластиков на основе различных термореактивных связующих (например, методом выкладки). Из этих материалов могут изготавливаться детали автомобилей, самолетов, судов, бытовой техники. При предварительной металлизации тканей полученный базальтопластик приобретает экранирующие свойства от электромагнитного излучения. Также базальтовые ткани могут использоваться в качестве основы при изготовлении мягкой и жесткой кровли. Базальтовые ткани электротехнического назначения используются в качестве основы для производства изоляционных материалов. Эти материалы применяются при производстве материалов для печатных плат в электронике и электротехнике. Они обладают превосходными свойствами по сравнению с аналогичными традиционными деталями из стекловолокна."} 
    </p>

    <p>
      {lang === "en"? 
      "General-purpose fabrics are useful, for example in fire feltings for suppression of extremely complex fires resulting from ignition of highly flammable liquids, in particular gasoline. The employments of incombustible basalt fabric inserts in industrial ventilators increase their fire safety as well as the fire resistance of ventilating systems. The cost of basalt fabrics is considerable lower than that of similar materials. The non-combustible properties of basalt woven materials enable it to resist flames for long periods that make basalt tapes effective as an extra fine resistant insulation for electrical cables and underground ducts. Basalt-fabrics hoses may be useful for reinforcing cables, repairing the interior and exterior of tubes and pipelines. Most fabrics are made by weaving or knitting yarns together. Non-woven fabrics are made by bonding or felting fibers together. A fabric's appearance, properties and end-use can be affected by the way it was constructed." : 
      "Ткани общего назначения полезны, например, в огневойлочных покрытиях для тушения чрезвычайно сложных пожаров, возникающих в результате возгорания легковоспламеняющихся жидкостей, в частности бензина. Использование негорючих базальтовых тканевых вставок в промышленных вентиляторах повышает их пожарную безопасность, а также огнестойкость вентиляционных систем. Стоимость базальтовых тканей значительно ниже, чем у аналогичных материалов. Негорючие свойства базальтовых тканых материалов позволяют им противостоять пламени в течение длительного времени, что делает базальтовые ленты эффективными в качестве сверхтонкой стойкой изоляции для электрических кабелей и подземных каналов. Шланги из базальтовых тканей могут быть полезны для армирования кабелей, ремонта внутренней и внешней поверхности труб и трубопроводов. Большинство тканей изготавливаются путем плетения или вязания нитей вместе. Нетканые материалы изготавливаются путем склеивания или валяния волокон вместе. Внешний вид, свойства и конечное использование ткани могут зависеть от способа ее изготовления."}
    </p>

    <h4>{lang === "en" ?
    "Advanced Basalt Fiber Fabrics have specific proprieties and can be moulded with other fabrics to get the exact result you need in the process applications below:" : 
    "Современные ткани из базальтового волокна обладают особыми свойствами и могут формоваться с другими тканями для получения точного результата, необходимого вам в следующих технологических процессах:"
    }</h4>
      <ol>
        <li>{lang === "en" ? "Pultrusion;" : "Пултрузия;"}</li>
        <li>{lang === "en" ? "Prepregs;;" : "Препреги;"}</li>
        <li>{lang === "en" ? "SMC and BMC;;" : "SMC и BMC;"}</li>
        <li>{lang === "en" ? "Hand Lay Up;;" : "Ручная выкладка;"}</li>
        <li>{lang === "en" ? "Resin Transfer Molding;;" : "Трансферное формование смолы;"}</li>
        <li>{lang === "en" ? "Resin Film Interleave;;" : "Прослойка смоляной пленки;"}</li>
        <li>{lang === "en" ? "Vacuum Infusion.;" : "Вакуумная инфузия.;"}</li>
      </ol>

      </div>
      <div className="img-product sticky-img">
        <img src={img1} alt="" />
      </div>
    </div>
    </div>
  )
}
