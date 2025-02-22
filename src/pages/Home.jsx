import { lazy } from "react";
import { Link, NavLink, useLocation, useParams } from "react-router";
import {data as options} from "../assets/data"
import ContactService from "../components/ContactService";
import BasaltTrading from "../components/homeProducts/BasaltTrading";
const Roving = lazy(()=> import("../components/homeProducts/Roving"))
const Fiber = lazy(()=> import("../components/homeProducts/Fiber"))
const Geogrid = lazy(()=> import("../components/homeProducts/Geogrid"))
const Composite = lazy(()=> import("../components/homeProducts/Composite"))
const Pipe = lazy(()=> import("../components/homeProducts/Pipe"))
const Fabric = lazy(()=> import("../components/homeProducts/Fabric"))

export default function Home() {
  const {pathname} = useLocation();
  const {lang} = useParams();
  let component;

    if(
      pathname === "/" ||
      pathname === "/home/basalt-trading-int" || 
      pathname === "/home" 
      ){
      component = <BasaltTrading />
    }else if(pathname === `/${lang}/home/basalt-roving`){
      component = <Roving />
      }else if(pathname === `/${lang}/home/basalt-fiber`){
      component = <Fiber />
    }else if(pathname === `/${lang}/home/basalt-grid`){
      component = <Geogrid />
    }else if(pathname === `/${lang}/home/basalt-composite`){
      component = <Composite />
    }else if(pathname === `/${lang}/home/basalt-pipe`){
      component = <Pipe />
    }else if(pathname === `/${lang}/home/basalt-fabric`){
      component = <Fabric />
    }else{
      component = <BasaltTrading />
    }
  
  return (
    <>
      <div className="service-details-page">
        <div className="row">
          <div className="service-details-left">
            <ul className="service-details-list">
              {options?.slice(0,7)?.map((page) => (
                <li key={page?.link}>
                  <NavLink
                    to={`/${lang + "/home" + page?.link}`}
                    className={
                      decodeURIComponent(pathname) === `/${lang}/home` &&
                      page.link === `/basalt-trading-int`
                        ? "active"
                        : ""
                    }
                  >
                    {lang === "en" ? page?.titleEn : page?.titleRu}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="contact-service">
              <ContactService />
            </div>
          </div>

          <div className="service-details-right">{component}</div>

          <div className="contact-service-sm">
            <ContactService />
          </div>
        </div>
      </div>

      <div className="home-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2996.9452078398053!2d69.28778617605569!3d41.310055571309874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzM2LjIiTiA2OcKwMTcnMjUuMyJF!5e0!3m2!1sru!2s!4v1740154120381!5m2!1sru!2s" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="before-footer-container">
        <div className="before-footer">
          <h5>
            {lang === "en"
              ? "5+ years of experiences for give you better results."
              : "Более 5 лет опыта для достижения лучших результатов."}
          </h5>
          <p>
            {/* There are many variations of passages of Lorem Ipsum but majority
            have suffered alteration form by injected humour or randomised
            words. */}
          </p>
          <br />
          <Link to="/contact-us" className="btn">
            {lang === "en" ? "CONTACT US TODAY" : "СВЯЖИТЕСЬ СЕГОДНЯ"}
          </Link>
        </div>
      </div>
    </>
  );
}