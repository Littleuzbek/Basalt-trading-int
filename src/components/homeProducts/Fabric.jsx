import "./ServiceDetails.css";
import {data as product} from '../../assets/data'

export default function Geogrid() {
  return (
    <div className="service-details-info">
    <div className="img">
      <img src={product?.[6]?.img} loading="lazy"  alt="" />
    </div>

    <h3>Basalt fabric</h3>

    <p>
        <strong>Basalt fabric</strong> – for structural uses, basalt fabrics are useful for producing structural basalt-plastics based on various thermosetting binders (for instance by laying out method). 
    </p>

    <p>
        From these materials components automobiles, aircraft, ships and households appliances can be produced. In the case of preliminary metallization of the fabrics, the resulting basalt-plastic acquires shield properties against electromagnetic radiation. Also basalt fabrics can be used as basics when producing soft and rigid roofing.
    </p>

    <p>
        Basalt fabrics for electro technical purposes are used as a base for the production of insulation materials. These materials are employed in the production of substances for printed circuit boards for electronics and electrical engineering. These have superior properties to similar conventional components made of fiberglass. грунтов.
    </p>
  </div>
  )
}
