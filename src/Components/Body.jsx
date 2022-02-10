import React from "react";
import me from "../Pictures/Profile/me.jpg";

const Body = () => {
  return (
    <div className="display_area">
      <img id="pf_pic" src={me} alt="profile_picture" width="400px"></img>
      <div id="description">
        <h2>Hi, I'm Chang.</h2>
        <p>
          {`I am a full-stack developer specializing
             in React and Node.js, with a passion for frontend 
             development and optimization.`}
        </p>
        <p>
          {`I am passionate about all things engineering 
             whether the medium is code, wood, 3D filaments 
             and resins, fabric or otherwise.`}
             </p>
            <p>{` 
             I am a natural 
             born tinkerer with endless curiosity, always 
             seeking new things to learn and new skills to 
             master.`}
        </p>
      </div>
    </div>
  );
};

export default Body;
