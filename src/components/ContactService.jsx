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
        <p>+998 90 123 45 67</p>
      </span>

      <span>
        <MdOutlineMail />
        <p>Напишите нам: </p>
        <p>mail@example.com</p>
      </span>
    </>
  );
}
