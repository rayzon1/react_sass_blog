import React from 'react';

export default function About({ summary }) {

    return (
        <section className="about">
          <h4 className="about__title--main u-margin-bottom-md">
            ALL ABOUT ME <span role="img" aria-label="Man waving emoji">🙋🏼‍♂️</span>
          <div className="about__title--main--highlight" />
          </h4>
          
          <p className="about__description">
            {summary.about}
          </p>
        </section>
    )
}