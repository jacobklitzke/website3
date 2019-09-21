import React from "react";
import SkillSection from "./skillSection";

const Skills = () => {
  const networkingSection = {
    skillTitle: "Networking",
    skills: [
      {
        skillName: "Security/AAA",
        numStars: 5
      },
      {
        skillName: "Identity Services Engine",
        numStars: 5
      },
      {
        skillName: "Network Troubleshooting",
        numStars: 4
      },
      {
        skillName: "Network Troubleshooting",
        numStars: 4
      },
      {
        skillName: "Network Automation",
        numStars: 3
      }
    ]
  };

  const programmingSection = {
    skillTitle: "Programming",
    skills: [
      {
        skillName: "Python",
        numStars: 5
      },
      {
        skillName: "NodeJS",
        numStars: 4
      },
      {
        skillName: "AngularJS",
        numStars: 4
      },
      {
        skillName: "Java",
        numStars: 4
      },
      {
        skillName: "REST",
        numStars: 4
      },
      {
        skillName: "MEAN Stack",
        numStars: 3
      }
    ]
  };

  const OSSection = {
    skillTitle: "OS",
    skills: [
      {
        skillName: "Linux",
        numStars: 5
      },
      {
        skillName: "Windows Server (AD)",
        numStars: 4
      },
      {
        skillName: "VM Ware (vSphere/ESX)",
        numStars: 4
      },
      {
        skillName: "GPFS",
        numStars: 3
      }
    ]
  };

  const IDESection = {
    skillTitle: "IDEs",
    skills: [
      {
        skillName: "Eclipse",
        numStars: 5
      },
      {
        skillName: "LiClipse",
        numStars: 4
      },
      {
        skillName: "Atom",
        numStars: 4
      }
    ]
  };

  const technicalSection = {
    skillTitle: "Technical",
    skills: [
      {
        skillName: "Google-Fu",
        numStars: 5
      },
      {
        skillName: "Technical Writing",
        numStars: 5
      },
      {
        skillName: "Agile Methodologies",
        numStars: 5
      },
      {
        skillName: "Automation",
        numStars: 5
      },
      {
        skillName: "Algorithm Design",
        numStars: 4
      }
    ]
  };

  const QASection = {
    skillTitle: "QA",
    skills: [
      {
        skillName: "Test Execution",
        numStars: 5
      },
      {
        skillName: "Performance Tuning",
        numStars: 4
      },
      {
        skillName: "Test Automation",
        numStars: 4
      },
      {
        skillName: "Bug Tracking",
        numStars: 4
      }
    ]
  };

  const storageSection = {
    skillTitle: "Storage",
    skills: [
      {
        skillName: "Data Storage Architecture",
        numStars: 5
      },
      {
        skillName: "RAID",
        numStars: 5
      },
      {
        skillName: "NetApp E-Series Storage",
        numStars: 5
      },
      {
        skillName: "Fiber Channel/iSCSI Protocols",
        numStars: 3
      }
    ]
  };

  return (
    <div className="row skills-section">
      <div className="column">
        <div className="row row-header">
          <div className="column">
            <h1 className="display-4 section-header">Skills</h1>
            <hr width="50%" className="my-1 center" />
          </div>
        </div>
        <div className="two column row skills-row">
          <SkillSection
            sectionTitle={networkingSection.skillTitle}
            skillsArr={networkingSection.skills}
          />
          <SkillSection
            sectionTitle={programmingSection.skillTitle}
            skillsArr={programmingSection.skills}
          />
        </div>
        <div className="two column row skills-row">
          <SkillSection
            sectionTitle={OSSection.skillTitle}
            skillsArr={OSSection.skills}
          />
          <SkillSection
            sectionTitle={IDESection.skillTitle}
            skillsArr={IDESection.skills}
          />
        </div>
        <div className="two column row skills-row">
          <SkillSection
            sectionTitle={technicalSection.skillTitle}
            skillsArr={technicalSection.skills}
          />
          <SkillSection
            sectionTitle={QASection.skillTitle}
            skillsArr={QASection.skills}
          />
        </div>
        <div className="two column row skills-row">
          <SkillSection
            sectionTitle={storageSection.skillTitle}
            skillsArr={storageSection.skills}
          />
          <div className="column skills-column"></div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
