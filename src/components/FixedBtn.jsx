import { useEffect, useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { useNavigate } from "react-router";

export default function FixedBtn() {
  const [rotate, setRotate] = useState(false);
  const navigate = useNavigate();
  let timer;

  useEffect(()=>{

    clearTimeout(timer);

    timer = setTimeout(() => {
        setRotate(!rotate)
    }, 5000);
  },[rotate])

  return (
    <span className="contact-button" onClick={() => navigate("/contact-us")}>
      {rotate ? <IoCall /> : <MdOutlineMail />}
    </span>
  );
}
