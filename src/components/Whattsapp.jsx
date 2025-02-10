import React from "react";
import "../styles/Whattsapp.css";
import Whatsappicon from "../assets/whatsappicon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/message/POUKFT7B4YGWC1"
      className="global-whatsapp-icon"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src={Whatsappicon}
        alt="WhatsApp"
      />
    </a>
  );
};

export default WhatsAppButton;