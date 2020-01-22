import React from "react";
import UserIcon1 from "../img/user-icon-demo-1.jpg";

export default function Education({ education }) {
  // Main education detail section
  const EdDetails = ({ data }) => {
    return (
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
    );
  };

  return (
    <section className="section-education">
      <div className="education__container">
        {education.map((data, index) => (
          <EdDetails data={data} />
        ))}
      </div>
    </section>
  );
}
