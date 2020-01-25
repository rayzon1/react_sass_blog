import React, { useState } from "react";
import Header from "./components/header";
import About from "./components/About";
import Education from "./components/Education";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Popup from "./components/Popup";
import { data } from "./data";


export default function App() {
  const [popupClickState, setPopupClickState] = useState(null);
  const { education, summary } = data;

  return (
    <div className="App">
      <Navigation />
      <Header />
      <main>
        <About summary={summary}/>
        <Education education={education} setPopupClickState={setPopupClickState}/>
        <Projects />
      </main>
      <Popup education={education} popupClickState={popupClickState}/>
    </div>
  );
}
