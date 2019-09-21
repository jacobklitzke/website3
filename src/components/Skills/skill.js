import React from "react";

const Skill = ({ skillName, numStars }) => {
  const [iconSize, setIconSize] = React.useState(22);
  const generateStars = numStars => {
    let i = 0;
    let jsx = [];
    while (i < 5) {
      if (i < numStars) {
        jsx.push(
          <div>
            <i className="material-icons" style={{ fontSize: iconSize }}>
              star
            </i>
          </div>
        );
      } else {
        jsx.push(
          <div>
            <i className="material-icons" style={{ fontSize: iconSize }}>
              star_border
            </i>
          </div>
        );
      }
      i++;
    }
    return jsx;
  };

  React.useEffect(() => {
    if (window.innerHeight < 1025) {
      setIconSize(18);
    }
  }, []);
  return (
    <div className="skills-text-row">
      <div className="skill">
        <p className="skill-text">{skillName}</p>
      </div>
      <div className="skill stars">{generateStars(numStars)}</div>
    </div>
  );
};

export default Skill;
