import React from "react";
import ReactDOM from "react-dom";
// import Button from "./components/button";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <header className="header-section">
        <h1 className="heading-primary">
          <div className="header__container u-margin-bottom-md">
            <div className="icon-box">
              <img src="#" alt="" className="profile-icon" />
            </div>
            <span className="title-main">This is the main title.</span>
            <span className="title-sub">This is a sub heading.</span>
          </div>
        </h1>
      </header>

      <main>
        <section className="section-about">Hello World</section>
      </main>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
