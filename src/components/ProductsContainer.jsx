import { useLocation } from "react-router";
import Roving from "../components/products/Roving"
import Fiber from "./products/Fiber";
import Geogrid from "./products/Geogrid";
import Composite from "./products/Composite";
import Pipe from "./products/Pipe";

export default function ProductsContainer() {
    const {pathname} = useLocation();

  return (
    <div className="products-page">
      <div>
        {pathname?.includes("basalt-roving") && <Roving />}
        {pathname?.includes("basalt-fiber") && <Fiber />}
        {pathname?.includes("basalt-geogrid") && <Geogrid />}
        {pathname?.includes("basalt-composite") && <Composite />}
        {pathname?.includes("basalt-pipe") && <Pipe />}
      </div>
    </div>
  );
}
