import React from "react";
import "./about.css";
import ME from "../../assets/mypic.png";
import { AiOutlineExperiment, AiFillFolderOpen } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";

const About = ({ about }) => {
  const { experiment_years, worked_for, projects_number } = about;
  return (
    <div id="about">
      <div className="about__title">
        <h5>Some thing</h5>
        <h2>About Me</h2>
      </div>

      <div className="container about__container">
        <div className="about__left">
          <div className="about__me">
            <div className="about__me-img">
              <img src={ME} alt="About Me" />
            </div>
          </div>
        </div>

        <div className="about__right">
          <div className="about__content">
            <div className="about__cards">
              <article className="about__card">
                <AiOutlineExperiment className="about__icon" />
                <h5>Experience</h5>
                <small>{experiment_years}+ Years Working</small>
              </article>

              <article className="about__card">
                <AiFillFolderOpen className="about__icon" />
                <h5>Projects</h5>
                <small>{projects_number}+ Projects</small>
              </article>

              <article className="about__card">
                <BiBuildingHouse className="about__icon" />
                <h5>Worked For</h5>
                <small>{worked_for}+ Companies</small>
              </article>
            </div>

            <p>
              Passion with code and beautiful website. I may be not good in many
              thing but will try to finish anything as well as i can !
            </p>
            <a href="#about" className="btn btn-primary">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
