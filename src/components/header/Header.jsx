import React from "react";
import "./header.css";
import { CTA } from "./CTA";
import HeaderSocials from "./HeaderSocials";
import ME from "../../assets/mypic2.png";

const Header = ({ me }) => {
  const {
    name: { first, middle, last },
    nick_name,
    position,
  } = me;
  return (
    <header id="header" className="nav_link">
      <div className="container header__container">
        <h5>Hi ! Welcome to My Portfolio </h5>
        <h1>
          {`${middle} ${last}`} "{nick_name}"
        </h1>
        {position.map((job, index) => {
          return <h5 key={index}>{job}</h5>;
        })}
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
