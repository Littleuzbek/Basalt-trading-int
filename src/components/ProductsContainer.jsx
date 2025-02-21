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
      {id: "basalt-roving", comp: <Roving />, name: "Basalt Roving"},
      {id: "basalt-fiber", comp: <Fiber />, name: "Basalt Fiber"},
      {id: "basalt-geogrid", comp: <Geogrid />, name: "Basalt Geogrids"},
      {id: "basalt-composite", comp: <Composite />, name: "Basalt Composite"},
      {id: "basalt-pipe", comp: <Pipe />, name: "Basalt Pipe"},
      {id: "basalt-fabric", comp: <Fabric />, name: "Basalt Fabric"},
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
