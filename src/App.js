import React from "react";
import Header from "./components/header";
import About from "./components/About";
import Education from "./components/Education";
import { data } from "./data";


export default function App() {
  const { education } = data;

  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Education education={education}/>
      </main>
    </div>
  );
}
