import React from "react";
import "./contact.css";
import { AiFillPhone, AiFillMail } from "react-icons/ai";

const Contact = ({ contact }) => {
  const { phone, gmail } = contact;
  return (
    <div id="contact" className="nav_link">
      <div className="contact__title">
        <h5>If you have interest</h5>
        <h1>Contact With Me</h1>
      </div>

      <div className="container contact__container">
        <article className="contact__method">
          <AiFillPhone className="contact__icon" />
          <p>{phone}</p>
        </article>
        <article className="contact__method">
          <AiFillMail className="contact__icon" />
          <p>{gmail}</p>
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
