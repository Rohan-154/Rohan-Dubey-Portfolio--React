import React, { useContext } from "react";
import "./Works.css";
import react from "../../img/react.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Tech Stack</span>
          <span>& Skills</span>
          <spane>
            FrontEnd: ReactJS, JavaScript, HTML5, CSS3, Redux, Typescript,
            Testing, Tailwind
            <br />
            <br />
            BackEnd: NodeJS
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img
              src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
              alt=""
            />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" />
          </div>
          <div className="w-secCircle">
            <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png" alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png" alt="" />
          </div>
          <div className="w-secCircle">
            <img src="https://cms-assets.tutsplus.com/uploads/users/1795/posts/30350/preview_image/ReduxLogo.jpg" alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
