import { data, useParams } from "react-router";
import Roving from "../components/products/Roving"
import Fiber from "./products/Fiber";
import Geogrid from "./products/Geogrid";
import Composite from "./products/Composite";
import Pipe from "./products/Pipe";
import { useEffect } from "react";
import Fabric from "./products/Fabric";

export default function ProductsContainer() {
    const {id} = useParams();
    const productLink = [
      {id: "basalt-roving", comp: <Roving />},
      {id: "basalt-fiber", comp: <Fiber />},
      {id: "basalt-geogrid", comp: <Geogrid />},
      {id: "basalt-composite", comp: <Composite />},
      {id: "basalt-pipe", comp: <Pipe />},
      {id: "basalt-fabric", comp: <Fabric />},
]

    useEffect(()=>{
      const sorting = productLink.find((e)=> e.id === id);

      if(!sorting){
        throw data("Page not found", {status: 404})
      }
    },[id])

    return (
    <div className="products-page">
      <div>
        {productLink.find((e)=> e.id === id)?.comp}
      </div>
    </div>
  );
}
