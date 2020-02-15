import React from "react";

export default function Technologies({ technologies }) {
  return (
    <section className="section-technologies">
      <div className="technologies">
        {technologies.map(data => (
          <div className="technologies__icon">
            <img
              src={data}
              alt="Bootstrap icon"
              className="technologies__icon--img"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
