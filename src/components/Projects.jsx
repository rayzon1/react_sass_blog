import React from "react";
import GithubGrey from "../img/social/github-grey.png";
import GlobeGrey from "../img/social/globe-grey.png";
import Fade from "react-reveal/Fade";

export default function Projects({ projects }) {
  const ProjectCard = ({ data }) => {
    return (
      <div className="projects__container">
        <h3 className="heading-tertiary projects__title">{data.title}</h3>

        <p className="projects__text">{data.description}</p>

        <div className="projects__logo">
          <a href={data.github} target="_blank">
            <img
              src={GithubGrey}
              className="projects__logo__icon"
              alt="dark github icon"
            />
          </a>
          <a href={data.website} target="_blank">
            <img
              src={GlobeGrey}
              className="projects__logo__icon"
              alt="dark globe icon"
            />
          </a>
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
    <>
      <div id="PROJECTS_ANCHOR" />
      <section className="section-projects">
        <h4 className="projects__title-1">
          PROJECTS{" "}
          <span role="img" aria-label="Man studying emoji">
            👨🏼‍💻
          </span>
          <Fade left>
            <div className="projects__title-1--highlight" />
          </Fade>
        </h4>
        <div className="projects">
          {projects.map(data => (
            <ProjectCard data={data} />
          ))}
        </div>
      </section>
    </>
  );
}
