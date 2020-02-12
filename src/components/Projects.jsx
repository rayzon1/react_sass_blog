import React from "react";
import GithubDark from "../img/social/github-dark.png";
import GlobeDark from "../img/social/globe-dark.png";

export default function Projects({ projects }) {
  const ProjectCard = ({ data }) => {
    return (
      <div className="projects__container">
        <h3 className="heading-tertiary projects__title">{data.title}</h3>

        <p className="projects__text">{data.description}</p>

        <div className="projects__logo">
          <img
            src={GithubDark}
            className="projects__logo__icon"
            alt="dark github icon"
          />
          <img
            src={GlobeDark}
            className="projects__logo__icon"
            alt="dark globe icon"
          />
        </div>

        <div className="projects__screen">
          <img
            src={data.screenshot}
            alt="Webflix site screenshot"
            className="projects__screen--img"
          />
        </div>
      </div>
    );
  };

  return (
    <section className="projects">
      {projects.map(data => (
        <ProjectCard data={data} />
      ))}
    </section>
  );
}
