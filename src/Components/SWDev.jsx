import React from "react";
import { Link } from "react-router-dom";

const SWDev = () => {
  return (
    <div className="swdev">
      <Link to="/Quell">
        <div className="titles">QuellQL</div>
      </Link>
      <div className="simple_desc">
        A lightweight frontend and backend GraphQL caching solution and Chrome
        DevTools Extension.
      </div>
      <Link to="/Neighborpedia/">
        <div className="titles">Neighborpedia</div>
      </Link>
      <div className="simple_desc">
        Simple tool to help renters find NYC neighborhoods based on NYC 311
        reports.
      </div>
      <Link to="/Soundboard/">
        <div className="titles">Böardé Soundboard</div>
      </Link>
      <div className="simple_desc">
        Meme soundboard app with customizable buttons and profiles.
      </div>
      <Link to="/Meds/">
        <div className="titles">Meds Simplified</div>
      </Link>
      <div className="simple_desc">
        Easy to understand guide to over the counter medications with dosing
        information for the average person.
      </div>

      <div></div>
    </div>
  );
};

export default SWDev;
