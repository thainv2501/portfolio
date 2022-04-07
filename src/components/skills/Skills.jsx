import React from "react";
import "./skills.css";
import { AiFillCheckCircle } from "react-icons/ai";

const Skills = ({ skills }) => {
  return (
    <div id="skills">
      <div className="skills__title">
        <h5>i have</h5>
        <h1> Skills</h1>
      </div>

      <div className="container skills__container">
        {skills.map((skill, index) => {
          const { title, skill_name } = skill;
          return (
            <div className="skills" key={index}>
              <h1>{title}</h1>
              {skill_name.map((skn, index) => {
                return (
                  <article className="skill" key={index}>
                    <AiFillCheckCircle className="skill__icon" />
                    <p>{skn}</p>
                  </article>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
