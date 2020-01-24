import React from "react";

export default function Projects() {
    const arr = [1,2,3,4]

  const ProjectCard = () => {
    return (
      <div className="projects__container">
        <i className="projects__icon "></i>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Explore the world
        </h3>
        <p className="projects__text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    );
  };

  return (
    <section className="projects">
        {
            arr.map(data => <ProjectCard />)
        }
    </section>
  );
}
