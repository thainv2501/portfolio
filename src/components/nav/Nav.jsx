import React from "react";
import "./nav.css";
import { AiFillHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#header");
  return (
    <nav>
      <a
        onClick={() => setActiveNav("#header")}
        className={activeNav === "#header" ? "active" : ""}
        href="#header"
      >
        <AiFillHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <SiAboutdotme />
      </a>
      <a
        href="#myProjects"
        onClick={() => setActiveNav("#myProjects")}
        className={activeNav === "#myProjects" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
    </nav>
  );
};

export default Nav;
