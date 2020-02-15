import React, { useState } from "react";
import Header from "./components/header";
import About from "./components/About";
import Education from "./components/Education";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Popup from "./components/Popup";
import Footer from "./components/Footer";
import Email from "./components/Email";
import Technologies from "./components/Technologies";
import { data } from "./data";


export default function App() {
  const [popupClickState, setPopupClickState] = useState(null);
  const { education, summary, projects, technologies } = data;

  return (
    <div className="App">
      <Navigation />
      <Header />
      <main>
        <About summary={summary}/>
        <Education education={education} setPopupClickState={setPopupClickState}/>
        <Technologies technologies={technologies}/>
        <Projects projects={projects}/>
        <Email />
      </main>
      <Footer />
      <Popup education={education} popupClickState={popupClickState} setPopupClickState={setPopupClickState} />
    </div>
  );
}
