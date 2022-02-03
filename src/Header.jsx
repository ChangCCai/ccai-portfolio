import React, { useState, useEffect } from "react";
import Body from "./Body";

const Header = () => {
  return (
    <header>
      <h1 className="name">{`< CHANG CAI > | SOFTWARE DEVELOPER`}</h1>
      <div className="pf_links">
        <a href="http://github.com/ccai89" alt="github_logo">
          <img scr=""></img>
        </a>
      </div>
    </header>
  )
};

export default Header;