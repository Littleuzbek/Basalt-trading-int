import { useLocation } from "react-router";
import Roving from "../components/products/Roving"
import Fiber from "./products/Fiber";
import Geogrid from "./products/Geogrid";
import Composite from "./products/Composite";
import Pipe from "./products/Pipe";

export default function ProductsContainer() {
    const location = useLocation();

  return (
    <div className="products-page">
      <div>
        {location.pathname?.includes("basalt-roving") && <Roving />}
        {location.pathname?.includes("basalt-fiber") && <Fiber />}
        {location.pathname?.includes("basalt-geogrid") && <Geogrid />}
        {location.pathname?.includes("basalt-composite") && <Composite />}
        {location.pathname?.includes("basalt-pipe") && <Pipe />}
      </div>
    </div>
  );
}
