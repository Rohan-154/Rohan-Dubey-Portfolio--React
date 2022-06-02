import React, { useContext } from "react";
import "./Intro.css";
import boy from "../../img/boy.png";
import Resume from '../Intro/resume.pdf'
import { themeContext } from "../../Context";

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hey! I Am</span>
          <span>Rohan Dubey</span>
          <span>
            I am an enthusiatic web developer. I am doing my BCA i.e. bachelor's in computer application from Jamshedpur- Co-operative College. I am in second year of my college. Trying to learn and do better
            every day.
          </span>
        </div>
        <a href={Resume} download>
          <button className="button i-button">Download CV</button>
        </a>
        {/* social icons */}
        <div className="i-icons">
          <a href="">
            <i class="fa-brands fa-github"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={boy} alt="" />
      </div>
    </div>
  );
};

export default Intro;
