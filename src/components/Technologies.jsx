import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

export default function Technologies({ technologies }) {
  return (
    <>
      <a id="TECHNOLOGIES_ANCHOR" />
      <section className="section-technologies">
        <h4 className="section-technologies__title">
          TECHNOLOGIES{" "}
          <span role="img" aria-label="Man graduate emoji">
            🤖
          </span>
          <Fade left>
            <div className="section-technologies__title--highlight" />
          </Fade>
        </h4>

        <div className="technologies">
          {technologies.map(data => (
            <Flip left>
              <div className="technologies__icon">
                <img
                  src={data}
                  alt="Bootstrap icon"
                  className="technologies__icon--img"
                />
              </div>
            </Flip>
          ))}
        </div>
      </section>
    </>
  );
}
