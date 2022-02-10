import React from "react";

const Neighborpedia = () => {
  return (
    <div className="swdev">
      <img
        style={{ height: "30vw", borderRadius: "20px" }}
        src="https://i.imgur.com/uY2CYxf.png"
        alt="screenshot"
      ></img>
      <div className="description">
        <p>
          Using data from 311 OASIS Database, we were able to query information
          about various neighborhoods and plot them on the map according the
          frequency of various 311 complaints. We used Google Maps API to
          generate heatmaps to help visualize the information and allowed
          selection via neighborhoods.
        </p>
        <p>
          We cross referenced the data with local median rental prices using
          housing price information.
        </p>
        Frontend: Built using React hooks, HTML, SCSS and webpack running on
        Node.js.
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
    </div>
  );
};

export default Neighborpedia;
