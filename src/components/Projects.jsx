import React from "react";

export default function Projects({ projects }) {

  const ProjectCard = ({ data }) => {
    return (
      <div className="projects__container">
        <i className="projects__icon "></i>
        <h3 className="heading-tertiary projects__title">
          {data.title}
        </h3>
        <p className="projects__text">
        {data.description}
        </p>
        <div className="projects__screen">
          <img src={data.screenshot} alt="Webflix site screenshot" className="projects__screen--img"/> 
        </div>
        
      </div>
    );
  };

  return (
    <section className="projects">
        {
            projects.map(data => <ProjectCard data={data} />)
        }
    </section>
  );
}
