import React from "react";
import Flip from "react-reveal/Flip";

export default function Technologies({ technologies }) {
  return (
    <section className="section-technologies">
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
  );
}
