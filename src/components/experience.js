import React from "react";
import { Card } from "semantic-ui-react";

const Experience = () => {
  return (
    <div className="row experience-section">
      <div className="column">
        <div className="row row-header">
          <div className="column">
            <h1 class="display-4 section-header">Experience</h1>
            <hr width="50%" class="my-1 center" />
          </div>
        </div>
        <div className="four column row experience-row">
          <Card className="experience-item"></Card>
          <Card className="experience-item"></Card>
          <Card className="experience-item"></Card>
          <Card className="experience-item"></Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
