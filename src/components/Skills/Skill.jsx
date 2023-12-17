import React from "react";
import "./skill.css";
import UIDesign from "../../assets/images/ui design.jpg";
import Web from "../../assets/images/full stack.png";
import DataBase from "../../assets/images/database.jpg";
const Skill = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <br />
      <span className="skillDesc">
        I am a skilled and passionate web developer with experience in creating
        visually appealing and user-friendly websites. I am proficient in HTML,
        CSS and JAVASCRIPT as well as React.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo Text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={Web} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website</h2>
            <p>This is a demo Text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={DataBase} alt="" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Database</h2>
            <p>This is a demo Text</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
