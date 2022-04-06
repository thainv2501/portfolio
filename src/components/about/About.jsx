import React from "react";
import "./about.css";
import ME from "../../assets/rodrick.jpg";
import { AiTwotoneExperiment, AiFillFolderOpen } from "react-icons/ai";
import { GiSpookyHouse } from "react-icons/gi";

const About = () => {
  return (
    <div id="about">
      <div className="title">
        <h5>Some thing</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <AiTwotoneExperiment className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            <article className="about__card">
              <AiFillFolderOpen className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>

            <article className="about__card">
              <GiSpookyHouse className="about__icon" />
              <h5>Worked For</h5>
              <small>1+ Companies</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit vero cupiditate quam similique repellat deserunt
            libero eum tempore laboriosam. Quidem soluta, quaerat cumque
            reprehenderit quisquam tempora modi eveniet totam repudiandae.
          </p>
          <a href="#about" className="btn btn-primary">
            See More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
