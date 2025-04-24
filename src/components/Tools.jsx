import React from "react";
import tool1 from "../assets/tool1.png";
import tool2 from "../assets/tool2.png";
import tool3 from "../assets/tool3.png";
import tool4 from "../assets/tool4.png";
import tool5 from "../assets/tool5.png";
import tool6 from "../assets/tool6.png";

const Tools = () => {
  return (
    <div className="tools">
      <img src={tool1} alt="tool1" />
      <img src={tool2} alt="tool2" />
      <img src={tool3} alt="tool3" />
      <img src={tool4} alt="tool4" />
      <img src={tool5} alt="tool5" />
      <img src={tool6} alt="tool6" />
    </div>
  );
};

export default Tools;
