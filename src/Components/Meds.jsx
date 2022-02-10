import React from "react";

const Meds = () => {
  return (
    <div className="swdev">
      <img
        style={{ height: "30vw", borderRadius: "20px" }}
        src="https://i.imgur.com/7dUYLF9.png"
        alt="screenshot"
      ></img>
      <div className="description">
        <p>
          This was a proof of concept tool to mockup a potential product to
          allow individuals easy access to OTC medication information. Many
          times the average individual wants to know about the over-the-counter
          medications, but simply have no time to wait for the pharmacist, let
          alone the doctor. So in comes this guide to help individuals find
          medications and easy to understand details.
        </p>
        <p>Frontend: Vanilla React, Javascript, HTML, CSS and Webpack.</p>
        <p>Backend: Node.js with Express middleware connected to MongoDB.</p>
      </div>
      <div className="description2">
        View source code on{" "}
        <a
          style={{ color: "#44a8ff" }}
          href="https://github.com/ccai89/OTC-Quick-Guide"
        >
          github.
        </a>
      </div>
      <div className="description2">
        Read more about QuellQL on{" "}
        <a
          style={{ color: "#44a8ff" }}
          href="https://github.com/ccai89/OTC-Quick-Guide"
        >
          Medium.
        </a>
      </div>
    </div>
  );
};

export default Meds;
