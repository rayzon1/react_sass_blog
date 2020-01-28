import React from "react";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__logo-box">
        {/* <img src="img/logo-green-2x.png" alt="Full Logo" class="footer__logo" /> */}
      </div>
        <div class="footer__container">
          <p class="footer__copyright">
            Build by{" "}
            <a href="#" class="footer__link">
              Gerardo Keys
            </a>{" "}
            for his online course
            <a href="#" class="footer__link">
              Advanced CSS and Sass
            </a>
            . Copyright &copy; by Gerardo Keys. You are allowed to use this
            webpage for both personal or commercial use but not to claim it as
            your own design. Credit for the designer is appreciated.
          </p>
        </div>
    </footer>
  );
}
