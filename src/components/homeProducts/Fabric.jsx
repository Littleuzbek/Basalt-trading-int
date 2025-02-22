import "./ServiceDetails.css";
import {data as product} from '../../assets/data'
import { useParams } from "react-router";

export default function Fabric() {
  const {lang} = useParams();
  return (
    <div className="service-details-info">
    <div className="img">
      <img src={product?.[6]?.img} loading="lazy"  alt="" />
    </div>

    <h3>{lang === "en" ? "Basalt fabric" : "БАЗАЛЬТОВАЯ ТКАНЬ"}</h3>

    <p>
        <strong>{lang === "en" ? "Basalt fabric" : "Базальтовая ткань"}</strong> – 
        {lang === "en" ?
        " for structural uses, basalt fabrics are useful for producing structural basalt-plastics based on various thermosetting binders (for instance by laying out method)." : 
        " в конструкционном отношении базальтовые ткани применяются для изготовления конструкционных базальтопластиков на основе различных термореактивных связующих (например, методом выкладки)."}
    </p>

    <p>
       {lang === "en" ? 
       "From these materials components automobiles, aircraft, ships and households appliances can be produced. In the case of preliminary metallization of the fabrics, the resulting basalt-plastic acquires shield properties against electromagnetic radiation. Also basalt fabrics can be used as basics when producing soft and rigid roofing." :
       "Из этих материалов могут изготавливаться детали автомобилей, самолетов, судов и бытовой техники. При предварительной металлизации тканей получаемый базальтопластик приобретает экранирующие свойства от электромагнитного излучения. Также базальтовые ткани могут использоваться в качестве основы при изготовлении мягкой и жесткой кровли."}
    </p>

    <p>
        {lang === "en" ?
        "Basalt fabrics for electro technical purposes are used as a base for the production of insulation materials. These materials are employed in the production of substances for printed circuit boards for electronics and electrical engineering. These have superior properties to similar conventional components made of fiberglass. грунтов." :
        "Базальтовые ткани электротехнического назначения используются в качестве основы для производства изоляционных материалов. Эти материалы применяются в производстве субстанций для печатных плат в электронике и электротехнике. Они превосходят по своим свойствам аналогичные традиционные компоненты из стекловолокна. грунтов."}
    </p>
  </div>
  )
}
