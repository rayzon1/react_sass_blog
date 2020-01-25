import React from "react";

export default function Education({ education, setPopupClickState }) {
  // Main education detail section

  //TODO: ON CLICK SET STATE TO ID
  //TODO: DEPENDING ON ID THAT DATA WILL SHOW IN THE POPUP
  const EdDetails = ({ data }) => {
    return (
      <a href="#popup" className="education__link" onClick={() => setPopupClickState(data.id)}>
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
    <section className="section-education">
      <div className="education__container">
        {education.map((data, index) => (
          <EdDetails data={data} />
        ))}
      </div>
    </section>
  );
}
