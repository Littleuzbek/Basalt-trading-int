import { useLoaderData } from "react-router"
import { lazy } from "react";
import {data as info} from '../assets/data';
import Roving from "./homeProducts/Roving";
import Fiber from "./homeProducts/Fiber";
import Geogrid from "./homeProducts/Geogrid";
import Composite from "./homeProducts/Composite";
import Pipe from "./homeProducts/Pipe";
const BasaltTrading = lazy(() => import("./homeProducts/BasaltTrading"));

export default function HomeProducts() {
    const data = useLoaderData();
    let component;

    if(data?.link === "basalt-trading-int"){
        component = <BasaltTrading />
    }
    if(data?.link === "basalt-roving"){
        component = <Roving />
    }
    if(data?.link === "basalt-fiber"){
        component = <Fiber />
    }
    if(data?.link === "basalt-geogrid"){
        component = <Geogrid />
    }
    if(data?.link === "basalt-composite"){
        component = <Composite />
    }
    if(data?.link === "basalt-pipe"){
        component = <Pipe />
    }
  return (
    <>
        {
            component
        }
    </>
  )
}

export const loaderFn = async ({params}) => {
    const {id} = params;
    const data = info?.find((page)=> id === page.link);
    return data
  }
