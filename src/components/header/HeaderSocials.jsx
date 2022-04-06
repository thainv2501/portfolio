import React from "react";
import { BsLinkedin, BsGithub, BsFacebook, BsInstagram } from "react-icons/bs";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/thai-nguyen-3105a8233/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/thainv2501" target="_blank" rel="noreferrer noopener">
        <BsGithub />
      </a>
      <a href="https://www.facebook.com/taolanhuthedo/" target="_blank" rel="noreferrer noopener">
        <BsFacebook />
      </a>
      <a href="https://www.instagram.com/_vit.thai/" target="_blank" rel="noreferrer noopener">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
