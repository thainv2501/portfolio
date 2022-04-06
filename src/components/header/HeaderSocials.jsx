import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/thai-nguyen-3105a8233/"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/thainv2501" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/taolanhuthedo/" target="_blank">
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/_vit.thai/" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
