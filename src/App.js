import React from "react";
import Header from "./components/header";
import About from "./components/About";
import Education from "./components/Education";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import { data } from "./data";


export default function App() {
  const { education, summary } = data;

  return (
    <div className="App">
      <Navigation />
      <Header />
      <main>
        <About summary={summary}/>
        <Education education={education}/>
        <Projects />
      </main>
    </div>
  );
}
