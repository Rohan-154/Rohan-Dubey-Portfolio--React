import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Footer.css";
const Footer = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div class="footer-basic" style={{ backgroundColor: darkMode ? "#23232e" : "" }}>
      <p class="signature" style={{ color: darkMode ? "white" : "" }}>
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
