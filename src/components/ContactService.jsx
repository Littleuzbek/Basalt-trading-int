import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { useParams } from "react-router";

export default function ContactService() {
  const {lang} = useParams();
  return (
    <>
      <h3>{lang === "en" ? "Have any Questions" : "Есть вопросы"}?</h3>

      <p>
        {lang === "en" ?
        "Please feel free to contact us. We will get back to you with 1-2 business days. Or just call us now." : 
        "Пожалуйста, не стесняйтесь обращаться к нам. Мы свяжемся с вами в течение 1-2 рабочих дней. Или просто позвоните нам сейчас."}
      </p>

      <span>
        <IoCall />
        <p>{lang === "en" ? "Call Us" : "Позвоните нам"}: </p>
        <p>+998 90 027 40 00</p>
      </span>

      <span>
        <MdOutlineMail />
        <p>{lang === "en" ? "Mail Us" : "Напишите нам"}: </p>
        <a href="/" className="Footer_info-style">info@biet.uz</a>
      </span>
    </>
  );
}
