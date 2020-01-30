import React, { useState } from "react";
import Header from "./components/header";
import About from "./components/About";
import Education from "./components/Education";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Popup from "./components/Popup";
import Footer from "./components/Footer";
import Email from "./components/Email";
import trolley from "./img/trolley.png"
import { data } from "./data";


export default function App() {
  const [popupClickState, setPopupClickState] = useState(null);
  const { education, summary } = data;

  return (
    <div className="App">
      {/* <div className="sf-icon">
        <img src={trolley} alt="san francisco trolley" className="sf-icon__icon" />
      </div> */}
      <Navigation />
      <Header />
      <main>
        <About summary={summary}/>
        <Education education={education} setPopupClickState={setPopupClickState}/>
        <Projects />
        <Email />
      </main>
      <Footer />
      <Popup education={education} popupClickState={popupClickState}/>
    </div>
  );
}
