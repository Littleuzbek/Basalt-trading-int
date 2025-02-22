import { useParams } from "react-router";
import "./Footer.css";

export default function Footer() {
    const {lang} = useParams();
  return (
    <div className="footer_container">
       <div className="footer" >
        <div className="footer_inner-1">

           <div className="footer_item-1">
            <h4>
                {lang === "en" ? "EMAIL ADDRESS" : "ЭЛЕКТРОННОЙ ПОЧТЫ"}
            </h4>
            <a href="/" className="Footer_info-style">
                info@biet.uz
            </a>
           </div>

           <div className="footer_item-1">
            <h4>
                {lang === "en" ? "PHONE NUMBER" : "НОМЕР ТЕЛЕФОНА"}
            </h4>
            <p>
                +998 90 027 40 00
            </p>
           </div>

           <div className="footer_item-1">
            <h4>
                INSTAGRAM
            </h4>
            <p>
                {lang === "en" ? "Soon..." : "Скоро..."}
            </p>
           </div>

           <div className="footer_item-1">
            <h4>
                FACEBOOK
            </h4>
            <p>
                {lang === "en" ? "Soon..." : "Скоро..."}
            </p>
           </div>

        </div>
        
        <div className="footer_inner-2">
           <div className="footer_top-div"/>
           <p>© 2025 Basalt International Export Trading, {lang === "en" ? "All Rights Reserved" : "Все Права защищены"}.</p>
        </div>

       </div>
    </div>
  )
}
