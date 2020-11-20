import React from "react";
import LinkedIn from "../img/social/linkedin.png";
import GitHub from "../img/social/github.png";
import Facebook from "../img/social/facebook.png";

export default function Footer() {
  return (
    <>
      <div id="FOOTER_ANCHOR" />
      <footer class="footer">
        <div class="footer__logo-box">
          <a href="www.linkedin.com/in/gerardo-keys-38ba7668" target="_blank">
            <img src={LinkedIn} alt="Full Logo" class="footer__logo" />
          </a>
          <a href="https://github.com/rayzon1" target="_blank">
            <img src={GitHub} alt="Full Logo" class="footer__logo" />
          </a>
          <a href="https://www.facebook.com/gerardo.keys" target="_blank">
            <img src={Facebook} alt="Full Logo" class="footer__logo" />
          </a>
        </div>
        <div class="footer__container">
          <p class="footer__copyright">
            Build by Gerardo Keys for his online portfolio . 
          </p>
        </div>
      </footer>
    </>
  );
}
