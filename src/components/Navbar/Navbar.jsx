import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="open-bars" onClick={() => setNav(true)}>
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="n-name">Rohan</div>
        <Toggle />
      </div>
      {/* right */}

      <div className="n-right">
        <div className={`n-list ${nav ? "open-bars" : ""}`}>
          <div className="cross" onClick={() => setNav(false)}>
            <i class="fa-solid fa-xmark"></i>
          </div>
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link
                activeClass="active"
                to="Navbar"
                spy={true}
                smooth={true}
                onClick={() => setNav(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true} onClick={() => setNav(false)}>
                Skills
              </Link>
            </li>
            <li>
              <Link to="portfolio" spy={true} smooth={true} onClick={() => setNav(false)}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="testimonial" spy={true} smooth={true} onClick={() => setNav(false)}>
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true} onClick={() => setNav(false)}>
          <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
