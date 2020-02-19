import React from "react";
import Fade from "react-reveal/Fade";

export default function About({ summary }) {
  return (
    <>
      <a id="ABOUT_ANCHOR" />
      <section className="about">
        <h4 className="about__title--main u-margin-bottom-lg">
          ALL ABOUT ME{" "}
          <span role="img" aria-label="Man waving emoji">
            🙋🏼‍♂️
          </span>
          <Fade left>
            <div className="about__title--main--highlight" />
          </Fade>
        </h4>

        <p className="about__description">{summary.about}</p>
        <p className="about__description">{summary.about2}</p>
      </section>
    </>
  );
}
