import { data, useLocation } from "react-router";
import Roving from "../components/products/Roving"
import Fiber from "./products/Fiber";
import Geogrid from "./products/Geogrid";
import Composite from "./products/Composite";
import Pipe from "./products/Pipe";
import { useEffect } from "react";

export default function ProductsContainer() {
    const {pathname} = useLocation();
    const productLink = ["basalt-roving","basalt-fiber","basalt-geogrid","basalt-composite","basalt-pipe"]

    useEffect(()=>{
      const split = pathname.split("/");

      const sorting = productLink.find((e)=> e === split?.at(-1))

      if(!sorting){
        throw data("Page not found", {status: 404})
      }
    },[pathname])

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
