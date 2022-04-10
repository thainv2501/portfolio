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
          const { title, detail } = skill;
          return (
            <div className="skills" key={index}>
              <h3 className="skill__title">{title}</h3>
              <div className="skills__content">
                {detail.map((skn, index) => {
                  const { skill_name, level } = skn;
                  return (
                    <article className="skill" key={index}>
                      <AiFillCheckCircle className="skill__icon" />
                      <section className="skill_detail">
                        <p>{skill_name}</p>
                        <p className="level">{level}</p>
                      </section>
                    </article>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
