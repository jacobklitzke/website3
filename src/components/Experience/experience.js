import React from "react";
import { Card } from "semantic-ui-react";
import ExperienceBody from "./experienceBody";

const Experience = () => {
  const [screenSize, setScreenSize] = React.useState("");

  const cardDescriptions = [
    `For my first position after graduating college, I joined
    Cisco as a customer support engineer. This role requires
    strong troubleshooting skills in a fast-paced, innovation
    driven environment. I joined the AAA security team which
    supports the Identity Services Engine product. The main
    objective of this team is troubleshoot and resolve complex
    customer issues pertaining to the AAA security space,
    including technologies such as 802.1X, BYOD, and TrustSec.
    Additionally, the team creates automated scripts to
    enhance the customer experience by speeding time to case
    resolution.

    This position requires extremely good communication
    skills, the ability to work on several projects seemingly
    at the same time, technical writing skills, an innovation
    driven attitude, programming and automation skills, and
    the ability to solve complex customer issues under
    pressure.`,

    `As a senior in college, I joined a team responsible for 
    testing and validating the software and firmware associated 
    with NetApp E-series products. The main objective of this team 
    is to ensure that NetApp E-series software and firmware is 
    stable and provides the end-user with a high-quality, 
    enterprise-grade product. 
    
    This position required excellent teamwork and communication, 
    a strong understanding of NetApp E-series storage, 
    knowledge of both Windows Server and popular Linux server 
    distributions, an understanding of optimal E-series storage 
    topologies, knowledge of the popular applications for 
    E-series devices, the ability to perform basic 
    troubleshooting of E-series storage, and the ability to work 
    on multiple projects at once while still meeting 
    important deadlines.`,

    `As a junior, I joined a team responsible for the development 
    of an automated method of applying a storage array 
    configuration, which has many configurable options and 
    settings, to a device. There were many different tools NetApp 
    used to accomplish the task of applying a configuration to a 
    storage array, but there was no easy way to move the 
    configuration from a workstation to a storage array. The goal 
    of this project was to automate the process of reading the 
    configuration data from a database and applying it to an array. 

    This position required strong programming skills, especially 
    in Java; an excellent knowledge of how to implement algorithms 
    efficiently in code; the ability to thoroughly test and 
    validate code; the ability to analyze and translate code from 
    one language to another; and the ability to write clean, 
    understandable code that would allow other developers to 
    easily understand what the code was doing.`,

    `As a sophomore, I was assigned to a team responsible for 
    creating, configuring, and maintaining the network at Ennovar. 
    Almost all of the networking equipment at Ennovar is Cisco 
    equipment. This team implemented networking technologies such as 
    L3 switching, ACLs, NAT, HSRP, VPC, and VPNs. This team was also 
    responsible for diagnosing and resolving any networking issues 
    that occurred at Ennovar. 

    This position required a strong understanding of networking 
    concepts, including routing, switching, and security; the 
    ability to effectively configure and troubleshoot Cisco 
    networking equipment via the command line interface; a high 
    degree of knowledge of the configuration and security policies 
    associated with Windows Server 2012; a fundamental understanding 
    of the configuration options of ESXi; and knowledge of Apache web 
    servers, PHP, and mediaWiki configuration options.`
  ];

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setScreenSize("Mobile");
    } else if (window.innerWidth > 767 && window.innerWidth < 1025) {
      setScreenSize("Tablet");
    } else {
      setScreenSize("");
    }
  }, [setScreenSize]);

  return (
    <div className="row experience-section">
      <div className="column">
        <div className="row row-header">
          <div className="column">
            <h1 className="display-4 section-header">Experience</h1>
            <hr width="50%" className="my-1 center" />
          </div>
        </div>
        <div className="row experience-row">
          <Card className="experience-item">
            <Card.Content>
              <ExperienceBody
                imageSource="/images/cisco.png"
                companyName="Cisco Systems"
                employmentTime="July 2017 - Present"
                employmentLocation="Dallas, TX"
                employerLink="https://cisco.com"
                jobTitle="Technical Consulting Engineer"
                jobDescription={cardDescriptions[0]}
                screenSize={screenSize}
              />
            </Card.Content>
          </Card>
          <Card className="experience-item">
            <Card.Content>
              <ExperienceBody
                imageSource="/images/netapp.png"
                companyName="NetApp"
                employmentTime="March 2016 - May 2017"
                employmentLocation="Wichita, KS"
                employerLink="https://netapp.com"
                jobTitle="QA Test Engineer"
                jobDescription={cardDescriptions[1]}
                screenSize={screenSize}
              />
            </Card.Content>
          </Card>
          <Card className="experience-item">
            <Card.Content>
              <ExperienceBody
                imageSource="/images/netapp.png"
                companyName="NetApp"
                employmentTime="Jan 2015 - March 2016"
                employmentLocation="Wichita, KS"
                employerLink="https://netapp.com"
                jobTitle="Automation Software Developer"
                jobDescription={cardDescriptions[2]}
                screenSize={screenSize}
              />
            </Card.Content>
          </Card>
          <Card className="experience-item">
            <Card.Content>
              <ExperienceBody
                imageSource="/images/ennovar.png"
                companyName="Ennovar"
                employmentTime="May 2013 - Jan 2015"
                employmentLocation="Wichita, KS"
                employerLink="https://www.ennovartech.com/"
                jobTitle="Network Engineer"
                jobDescription={cardDescriptions[3]}
                screenSize={screenSize}
              />
            </Card.Content>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
