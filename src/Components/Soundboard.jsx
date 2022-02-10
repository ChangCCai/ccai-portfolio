import React from "react";

const Soundboard = () => {
  return (
    <div className="swdev">
      <img
        style={{ height: "30vw", borderRadius: "20px" }}
        src="https://i.imgur.com/57InYaJ.png"
        alt="screenshot"
      ></img>
      <div className="description">
        <p>
          A meme soundboard that loads and plays back url sound bits for fun.
        </p>
        <p>Frontend: Built using React hooks, HTML, SCSS and webpack.</p>
        <p>
          Backend: Node.js with Express middleware connected to PostgreSQL
          database with b-Crypt authentication.
        </p>
      </div>
      <div className="description2">
        View source code on{" "}
        <a
          style={{ color: "#44a8ff" }}
          href="https://github.com/Boarde/Sound-Board"
        >
          github.
        </a>
      </div>
      test
    </div>
  );
};

export default Soundboard;
