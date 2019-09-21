import React from "react";
import Skill from "./skill";

const SkillSection = ({ sectionTitle, skillsArr }) => {
  return (
    <div className="column skills-column">
      <div className="skills-text-row">
        <div className="skills-heading">
          <p className="skills-title">{sectionTitle}</p>
        </div>
      </div>
      {skillsArr.map(skill => {
        return <Skill skillName={skill.skillName} numStars={skill.numStars} />;
      })}
    </div>
  );
};

export default SkillSection;
