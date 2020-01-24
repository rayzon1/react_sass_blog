import React from 'react';

export default function About({ summary }) {

    return (
        <section className="about">
          <h4 className="about__title--main u-margin-bottom-md">ABOUT</h4>
          <p className="about__description">
            {summary.about}
          </p>
        </section>
    )
}