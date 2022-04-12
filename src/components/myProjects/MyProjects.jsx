import "./myProjects.css";
import React, { useState } from "react";

const MyProjects = ({ projects }) => {
  const [currentProjects, setCurrentProjects] = useState([]);
  const [counter, setCounter] = useState(1);

  const loadMore = () => {
    let limit = counter * 3;
    if (limit > projects.length) {
      limit = projects.length;
    }
    if (limit === projects.length) {
      document
        .getElementsByClassName("see__more__btn")[0]
        .classList.add("active");
    }
    setCurrentProjects(
      currentProjects.concat(projects.slice(counter - 1, limit))
    );
    setCounter(limit);
  };

  return (
    <div id="myProjects">
      <div className="container myProjects__container">
        <div className="myProjects__title">
          <h5>You could view some of my</h5>
          <h1>Projects</h1>
        </div>

        <div className="projects">
          {currentProjects.map((project, index) => {
            const {
              project_name,
              project_img,
              description,
              git_hub_link,
              demo_link,
            } = project;
            return (
              <section className="project" key={index}>
                <div className="project__img">
                  <img src={project_img} alt="project img" />
                </div>

                <div className="detail__top">
                  <h1 className="project__name">{project_name}</h1>
                  <p className="description">{description}</p>
                </div>

                <div className="detail__bottom">
                  <a
                    href={git_hub_link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn"
                  >
                    Gib Hub
                  </a>
                  <a
                    href={demo_link}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="btn btn-primary"
                  >
                    View demo
                  </a>
                </div>
              </section>
            );
          })}
        </div>
      </div>
      <div className="more">
        <button
          className="btn btn-primary see__more__btn"
          onClick={() => loadMore()}
        >
          See more
        </button>
      </div>
    </div>
  );
};

export default MyProjects;
