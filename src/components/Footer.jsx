import React from "react";
import LinkedIn from "../img/social/linkedin.png";

export default function Footer() {
  return (
    <footer class="footer">
      <div class="footer__logo-box">
        <img src={LinkedIn} alt="Full Logo" class="footer__logo" />
      </div>
      <div class="footer__container">
        <p class="footer__copyright">
          Build by Gerardo Keys for his online course Advanced CSS and Sass .
          Copyright &copy; by Gerardo Keys. You are allowed to use this webpage
          for both personal or commercial use but not to claim it as your own
          design. Credit for the designer is appreciated.
        </p>
      </div>
    </footer>
  );
}
