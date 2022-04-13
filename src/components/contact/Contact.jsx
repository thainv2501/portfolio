import React from "react";
import "./contact.css";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact__title">
        <h5>If you have interest</h5>
        <h1>Contact With Me</h1>
      </div>

      <div className="container contact__container">
        <article className="contact__method">
          <AiFillPhone className="contact__icon" />
          <p>0398655613</p>
        </article>
        <article className="contact__method">
          <AiFillMail className="contact__icon" />
          <p>taolanhuthedo2001@gmail.com</p>
        </article>
        <article className="contact__method">
          <AiFillPhone className="contact__icon" />
          <p>Other comment</p>
        </article>
      </div>

      <div className="copy__rights">@White Bear 2022</div>
    </div>
  );
};

export default Contact;
