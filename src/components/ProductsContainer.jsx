import { data, useParams } from "react-router";
import RovingContainer from "../components/products/RovingContainer"
import GridContainer from "../components/products/GridContainer"
import CompositeContainer from "../components/products/CompositeContainer"
import Roving from "../components/products/Roving"
import Roving2 from "../components/products/Roving2"
import Roving3 from "../components/products/Roving3"
import Fiber from "./products/Fiber";
import Geogrid from "./products/Geogrid";
import Geogrid1 from "./products/Geogrid1";
import Geogrid2 from "./products/Geogrid2";
import Geogrid3 from "./products/Geogrid3";
import Composite from "./products/Composite";
import Pipe from "./products/Pipe";
import { useEffect } from "react";
import Fabric from "./products/Fabric";
import Composite2 from "./products/Composite2";

export default function ProductsContainer() {
    const {id} = useParams();
    const productLink = [
      {id: "basalt-roving", comp: <RovingContainer />, name: "Basalt Roving"},
      {id: "basalt-direct-roving", comp: <Roving />, name: "Basalt Direct Roving"},
      {id: "basalt-assembled-roving", comp: <Roving2 />, name: "Basalt Assembled Roving"},
      {id: "basalt-twisted-thread", comp: <Roving3 />, name: "Basalt Roving"},
      {id: "basalt-fiber", comp: <Fiber />, name: "Basalt Fiber"},
      {id: "basalt-grid", comp: <GridContainer />, name: "Basalt Grids"},
      {id: "basalt-facade", comp: <Geogrid />, name: "Basalt Facade"},
      {id: "basalt-univercal", comp: <Geogrid1 />, name: "Basalt Universal"},
      {id: "basalt-priming", comp: <Geogrid2 />, name: "Basalt Priming"},
      {id: "basalt-asphalt-concrete", comp: <Geogrid3 />, name: "Basalt Priming"},
      {id: "basalt-composite", comp: <CompositeContainer />, name: "Basalt Composite"},
      {id: "basalt-composite-rebar", comp: <Composite />, name: "Basalt Composite"},
      {id: "basalt-reinforcement-mesh", comp: <Composite2 />, name: "Reinforcement Mesh"},
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
      <div className="product-specifics">
        {productLink.find((e)=> e.id === id)?.comp}
      </div>
    </div>
  );
}
