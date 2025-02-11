import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";

export default function ContactService() {
  return (
    <>
      <h3>Есть вопросы ?</h3>

      <p>
        Пожалуйста, не стесняйтесь обращаться к нам. Мы свяжемся с вами в течение 1-2 рабочих дней. Или просто позвоните нам сейчас.
      </p>

      <span>
        <IoCall />
        <p>Позвоните нам: </p>
        <p>Soon...</p>
      </span>

      <span>
        <MdOutlineMail />
        <p>Напишите нам: </p>
        <a href="/" className="Footer_info-style">info@biet.uz</a>
      </span>
    </>
  );
}
