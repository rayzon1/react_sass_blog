import React from "react";
import Fade from "react-reveal/Fade";

export default function Education({ education, setPopupClickState }) {
  // Main education detail section
  const EdDetails = ({ data }) => {
    return (
      <a
        href="#popup"
        className="education__link"
        onClick={() => setPopupClickState(data.id)}
      >
        <div className="education">
          <div className={`education__row--${data.id}`}>
            <figure className="education__shape">
              <img
                src={data.logo}
                alt="person on a tour"
                className="education__img"
              />
              <figcaption className="education__caption">
                {data.caption}
              </figcaption>
            </figure>
            <div className="education__text">
              <h3 className="u-margin-bottom-small">{data.descriptionSub}</h3>
              <p>{data.descriptionMain}</p>
            </div>
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      <a id="EDUCATION_ANCHOR" />
      <section className="section-education">
        <h4 className="section-education__title">
          EDUCATION{" "}
          <span role="img" aria-label="Man graduate emoji">
             👨🏼‍🎓
          </span>
          <Fade left>
            <div className="section-education__title--highlight" />
          </Fade>
        </h4>

        <div className="education__container">
          {education.map((data, index) => (
            <Fade left>
              <EdDetails data={data} />
            </Fade>
          ))}
        </div>
      </section>
    </>
  );
}
