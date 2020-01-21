import React from "react";
import Header from "./components/header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="about">
          <h4 className="about__title--main u-margin-bottom-md">ABOUT ME</h4>
          <p className="about__description">
            Hello my name is Gerardo Keys. I have over 5 years of IT support
            experience working at some of the biggest tech companies in the
            world. I have become very experienced working in high performing and
            stressful environments, that have challenged and tested me in many
            different ways. I bring a diverse skillset of technical experience
            and amazing customer service. I am currently looking for new
            opportunities and challenges and to continue to grow with a great
            team. I have experience working in every aspect of IT including
            Google suite administration, Active Directory administration,
            executive support, onboarding, AV / conference room support,
            networking and security support, jira ticketing system, new
            engineering setups. On my own I have studied programming,
            specifically web application development using tools such as
            JavaScript, HTML, CSS, React, Node, and SQL. I have become
            proficient and have a GitHub account with about 20 or so projects.
            Doing this has given me a deeper understanding of programming which
            I can bring to any job that needs it.
          </p>
        </section>
        <section className="section-education">
          <div className="education">
            <div className="education__row--1">

            </div>
            <div className="education__row--2">

            </div>
            <div className="education__row--3">

            </div>

          </div>
        </section>
      </main>
    </div>
  );
}
