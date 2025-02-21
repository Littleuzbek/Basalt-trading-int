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
    }else if(pathname === `/${lang}/home/basalt-geogrid`){
      component = <Geogrid />
    }else if(pathname === `/${lang}/home/basalt-composite`){
      component = <Composite />
    }else if(pathname === `/${lang}/home/basalt-pipe`){
      component = <Pipe />
    }else{
      component = <BasaltTrading />
    }
  
  return (
    <>
      <div className="service-details-page">
        <div className="row">
          <div className="service-details-left">
            <ul className="service-details-list">
              {options?.map((page) => (
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2999.4060767843007!2d69.19345597552702!3d41.2564935041049!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a01728d7abd%3A0x7fecfb833fc06bff!2sBunyodkor%20shoh%20ko&#39;chasi%2027%2C%20%D0%A2%D0%BEshkent%2C%20Toshkent%2C%20O%CA%BBzbekiston!5e0!3m2!1suz!2s!4v1738679862612!5m2!1suz!2s"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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