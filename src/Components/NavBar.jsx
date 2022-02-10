import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/SWDev/">Software Development</Link>
      <Link to="/WW/">Wood Working</Link>
      <Link to="/Misc/">Miscellaneous</Link>{" "}
      <a href="http://github.com/ccai89">Github</a>
      <a href="https://www.linkedin.com/in/chang-c-cai/">Linkedin</a>
    </div>
  );
};

export default NavBar;
