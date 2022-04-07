import React from "react";
import "./nav.css";
import {
  AiFillHome,
  AiOutlineFundProjectionScreen,
  AiFillCheckCircle,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
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
        <BsFillPersonFill />
      </a>
      <a
        href="#skills"
        onClick={() => setActiveNav("#skills")}
        className={activeNav === "#skills" ? "active" : ""}
      >
        <AiFillCheckCircle />
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
