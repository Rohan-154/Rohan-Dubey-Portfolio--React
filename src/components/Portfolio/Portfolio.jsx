import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CL from "../../img/CL.png";
import ecom from "../../img/ecom.png";
import vid from "../../img/vid.png";
import pomodoro from "../../img/pomodoro.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{ color: darkMode ? "white" : "" }} className="myWork">
        My Work
      </span>
      <span className="projects">Recent Projects</span>

      <div className="sample-project">
        <div className="flex-project">
          <img src={CL} alt="" />
          <div className="flex-display">
            <h3>Villainess Component Library</h3>
            <div className="tags-div">
              <span className="tags">Vanilla CSS3</span>
              <span className="tags">HTML5</span>
              <span className="tags">10+ Components</span>
            </div>
            <div className="btn-flex">
              <button className="button">View Source</button>
              <button className="button-2">View Live</button>
            </div>
          </div>
        </div>
        <div className="flex-project">
          <img src={ecom} alt="" />
          <div className="flex-display">
            <h3>Villainess E-Commerce</h3>
            <div className="tags-div">
              <span className="tags">V/N CL</span>
              <span className="tags">ReactJS</span>
              <span className="tags">React Context API + useReducer</span>
            </div>
            <div className="btn-flex">
              <button className="button">View Source</button>
              <button className="button-2">View Live</button>
            </div>
          </div>
        </div>
        <div className="flex-project">
          <img src={vid} alt="" />
          <div className="flex-display">
            <h3>Flasher Video Library</h3>
            <div className="tags-div">
              <span className="tags">V/N CL</span>
              <span className="tags">ReactJS</span>
              <span className="tags">React Context API + useReducer</span>
            </div>
            <div className="btn-flex">
              <button className="button">View Source</button>
              <button className="button-2">View Live</button>
            </div>
          </div>
        </div>
      </div>
      <button className="button" style={{ marginTop: "3rem" }}>
        View All
      </button>
    </div>
  );
};

export default Portfolio;
