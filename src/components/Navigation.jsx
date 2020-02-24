import React, { createRef } from "react";

export default function Navigation() {
  const checkBoxRef = createRef();

  const closeNav = () => {
    if (checkBoxRef.current.checked) {
      return (checkBoxRef.current.checked = false);
    }
  };

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        ref={checkBoxRef}
      />
      <label for="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a
              href="#ABOUT_ANCHOR"
              className="navigation__link"
              onClick={() => closeNav()}
            >
              <span>01</span>About Me
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#EDUCATION_ANCHOR"
              className="navigation__link"
              onClick={() => closeNav()}
            >
              <span>02</span>Education
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#TECHNOLOGIES_ANCHOR"
              className="navigation__link"
              onClick={() => closeNav()}
            >
              <span>03</span>Technologies
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="#PROJECTS_ANCHOR"
              className="navigation__link"
              onClick={() => closeNav()}
            >
              <span>04</span>Projects
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://docs.google.com/document/d/1UBlGvBmSualbOp6Rl3GlLPPDGwneWhl7l4k_01b13WY/edit?usp=sharing"
              target="_blank"
              className="navigation__link"
              onClick={() => closeNav()}
            >
              <span>05</span>Download Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
