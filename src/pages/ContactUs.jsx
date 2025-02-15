import "../components/ContactUs.css";
import { IoCall } from "react-icons/io5";
import { IoMailSharp } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaSkype } from "react-icons/fa6";
import { useParams } from "react-router";

export default function ContactUs() {
  const {lang} = useParams();
  return (
    <>
    <div className="contact-page">
      <div className="contact-info">
        <h5>{lang === "en" ? "Call Us" : "Позвоните нам"}</h5>
        <h3>{lang === "en" ? "or fill the form" : "Или заполните форму"}</h3>
        <span className="contact-category">
          <div className="contactIcon">
            <IoCall />
          </div>
          <div className="contactText">
            <p>{lang === "en" ? "Don't hesitate to contact us" : "Не стесняйтесь обращаться к нам"}!</p>
            <p>Soon...</p>
          </div>
        </span>
        <span className="contact-category">
          <div className="contactIcon">
            <IoMailSharp />
          </div>
          <div className="contactText">
            <p>{lang === "en" ? "Email Address" : "Адрес электронной почты"}:</p>
            <a href="/" className="ContactUs_info-style">info@biet.uz</a>
          </div>
        </span>
        <span className="contact-category">
          <div className="contactIcon">
            <FaLocationDot />
          </div>
          <div className="contactText">
            <p>{lang === "en" ? "Company Location" : "Расположение компании"}:</p>
            <p>Ташкент город Ц1  БИЙ 45а </p>
          </div>
        </span>
        <span className="contact-category">
          <div className="contactIcon social">
            <FaFacebookF />
          </div>
          <div className="contactIcon social">
            <FaXTwitter />
          </div>
          <div className="contactIcon social">
            <FaInstagram />
          </div>
          <div className="contactIcon social">
            <FaSkype />
          </div>
        </span>
      </div>

      <form className="contact-form">
          <input type="text" placeholder={lang === "en" ? "First Name" : "Имя"}/>
          <input type="text" placeholder={lang === "en" ? "Last Name" : "Фамилия"}/>
          <input type="email" placeholder={lang === "en" ? "Email Address" : "Адрес электронной почты"}/>
          <input type="tel" placeholder={lang === "en" ? "Phone" : "Телефон"}/>
          <textarea type="text" rows="auto" cols="auto" placeholder={lang === "en" ? "How can we help?" : "Чем мы можем помочь?"}/>
          <input type="submit" onClick={(e) => e.preventDefault()} value={lang === "en" ? "Send Message" : "Отправить"}/>
      </form>

    </div>
    
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.1750537360426!2d67.81046236886118!3d40.11610218009415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b295eb5f4f9789%3A0xd716707add8b6429!2sJizzax%20somsa%20markazi!5e0!3m2!1suz!2s!4v1738083908027!5m2!1suz!2s" width="600" height="450" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="location"></iframe>
    </>
  );
}
