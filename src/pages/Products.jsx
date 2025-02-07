import "../components/Products.css"
import pro1 from "../assets/products/pro-roving.png"
import pro2 from "../assets/products/pro-fiber.png"
import pro3 from "../assets/products/pro-geogrid.png"
import pro4 from "../assets/products/pro-composite.png"
import pro5 from "../assets/products/pro-pipe.png"
import { Link } from "react-router"

export default function Products() {
  return (
    <div className="products-page">
        <div>
            <div className="pro-card">
                <img src={pro1} alt="" />
                <h3>БАЗАЛЬТОВЫЙ РОВИНГ</h3>
                <Link to="basalt-roving">Подробнее</Link>
            </div>
            <div className="pro-card">
                <img src={pro2} alt="" />
                <h3>БАЗАЛЬТОВЫЙ фибра</h3>
                <Link to="basalt-fiber">Подробнее</Link>
            </div>
            <div className="pro-card">
                <img src={pro3} alt="" />
                <h3>БАЗАЛЬТОВЫЙ геосетка</h3>
                <Link to="basalt-geogrid">Подробнее</Link>
            </div>
            <div className="pro-card">
                <img src={pro4} alt="" />
                <h3>БАЗАЛЬТОВЫЙ арматура</h3>
                <Link to="basalt-composite">Подробнее</Link>
            </div>
            <div className="pro-card">
                <img src={pro5} alt="" />
                <h3>БАЗАЛЬТОВЫЙ труба</h3>
                <Link to="basalt-pipe">Подробнее</Link>
            </div>
        </div>
    </div>
  )
}
