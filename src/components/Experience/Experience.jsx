import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id="experience">
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          20+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Completed </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          5+
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Blogs </span>
        <span>Written</span>
      </div>
      <div className="achievement">
        {/* darkMode */}
        <div
          className="circle"
          style={{ color: darkMode ? "var(--orange)" : "" }}
        >
          ∞
        </div>
        <span style={{ color: darkMode ? "white" : "" }}>Sarcasm</span>
        <span>Experience</span>
      </div>
    </div>
  );
};

export default Experience;
