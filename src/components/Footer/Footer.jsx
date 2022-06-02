import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div class="footer-basic">
      <p class="signature">
        Built with <strong>ReactJS</strong> and <strong> Vanilla CSS</strong>
      </p>
      <div class="social">
        <a href="https://github.com/Rohan-154/Villainess-E-Commerce">
          <i class="fab fa-github fa-lg"></i>
        </a>
        <a href="https://twitter.com/Rohan_415?s=09">
          <i class="fab fa-twitter fa-lg"></i>
        </a>
        <a href="https://www.linkedin.com/in/rohan-dubey-2854b9201/">
          <i class="fab fa-linkedin fa-lg"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
