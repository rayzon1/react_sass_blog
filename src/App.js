import React from "react";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section className="about">
          <h4 className="about__title--main">Hello World</h4>
          <h5 className="about__title--sub u-margin-bottom-sm">Hello World</h5>
          <p className="about__description">
            Duis cursus dui et commodo porta. Cras vitae facilisis elit. Sed
            tempor nulla lorem, eget porta magna rhoncus eu. Fusce eget lorem sit
            amet mi faucibus mattis. Morbi tincidunt suscipit tempus. Proin ut
            tristique arcu, non vehicula lacus. In hac habitasse platea dictumst.
            Proin scelerisque tempus commodo. Ut ultrices at erat id suscipit.
            Aenean sed leo sed magna luctus mollis quis semper lorem. Donec tempor
            dolor sed tortor mollis egestas. Mauris mi quam, dictum a tortor
            vitae, placerat facilisis risus. In eu tempus lacus. Phasellus sem
            enim, ornare eget congue ut, posuere sit amet ligula.
          </p>
        </section>
      </main>
    </div>
  );
}
