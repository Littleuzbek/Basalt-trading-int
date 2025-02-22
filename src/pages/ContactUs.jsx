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
            <p>+998 90 027 40 00</p>
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
            <p>{lang === "en" ? "Tashkent city C1 BIY 45a" : "Ташкент город Ц1  БИЙ 45а"} </p>
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

    <iframe className="location" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2996.9452078398053!2d69.28778617605569!3d41.310055571309874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE4JzM2LjIiTiA2OcKwMTcnMjUuMyJF!5e0!3m2!1sru!2s!4v1740154120381!5m2!1sru!2s" width="600" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  );
}
