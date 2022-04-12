import "./myProjects.css";
import React from "react";
import ME from "../../assets/rodrick.jpg";

const MyProjects = () => {
  return (
    <div id="myProjects">
      <div className="container myProjects__container">
        <div className="myProjects__title">
          <h5>You could view some of my</h5>
          <h1>Projects</h1>
        </div>

        <div className="projects">
          <section className="project">
            <div className="project__img">
              <img src={ME} alt="" />
            </div>

            <div className="detail__top">
              <h1 className="project__name">check1</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Facilis possimus alias quo at excepturi sed aliquid aperiam
                dolorem. Hic ab voluptate aperiam quam? Omnis unde molestiae
                asperiores ratione dolorem necessitatibus.
              </p>
            </div>

            <div className="detail__bottom">
              <a href="#home" className="btn">
                Link Code
              </a>
              <a href="#home" className="btn btn-primary">
                View demo
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
