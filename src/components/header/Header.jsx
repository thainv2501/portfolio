import React from "react";
import "./header.css";
import { CTA } from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/rodrick.jpg";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <h5>Hi ! Welcome to My Portfolio </h5>
        <h1>Viet Thai "White-Bear"</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
