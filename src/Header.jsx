import React, { useState, useEffect } from "react";
import Body from "./Body";

const Header = () => {
  let name = '< CHANG CAI > | SOFTWARE DEVELOPER'
  
  return (
    <header>
      <h1 className="name" onClick={() => console.log('hi')}>{name}</h1>
      <div class="pf_links">
        <a href="http://github.com/ccai89" alt="github_logo">
          <img scr=""></img>
        </a>
      </div>
    </header>
  )
};

export default Header;