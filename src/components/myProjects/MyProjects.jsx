import "./myProjects.css";
import React from "react";

const MyProjects = ({ projects }) => {
  return (
    <div id="myProjects">
      <div className="container myProjects__container">
        <div className="myProjects__title">
          <h5>You could view some of my</h5>
          <h1>Projects</h1>
        </div>

        <div className="projects">
          {projects.map((projects) => {
            const {
              project_name,
              project_img,
              description,
              git_hub_link,
              demo_link,
            } = projects;
            return (
              <section className="project">
                <div className="project__img">
                  <img src={project_img} alt="project img" />
                </div>

                <div className="detail__top">
                  <h1 className="project__name">{project_name}</h1>
                  <p className="description">{description}</p>
                </div>

                <div className="detail__bottom">
                  <a href={git_hub_link} className="btn">
                    Gib Hub
                  </a>
                  <a href={demo_link} className="btn btn-primary">
                    View demo
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
