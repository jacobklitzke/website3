import React from "react";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const ExperienceBody = ({
  imageSource,
  companyName,
  employmentTime,
  employmentLocation,
  employerLink,
  jobTitle,
  jobDescription,
  screenSize
}) => {
  const [closed, setClosed] = React.useState(true);

  const generateCardBodyJSX = () => {
    let description = parseCardDescription(jobDescription);
    if (screenSize === "Mobile") {
      return (
        <>
          <SlideDown closed={closed}>
            {description.map(ele => {
              return <p key={ele.substring(0, 9)}>{ele}</p>;
            })}
          </SlideDown>
          <a
            className="card-exp-body-read-more"
            href="#/"
            onClick={e => {
              e.preventDefault();
              setClosed(val => !val);
            }}
          >
            {closed ? "Read Description..." : "Read Less"}
          </a>
        </>
      );
    } else if (screenSize === "Tablet") {
      let first_elem = description[0];
      description.shift();
      return (
        <>
          <p>{first_elem}</p>
          <SlideDown closed={closed}>
            {description.map(ele => {
              return <p key={ele.substring(0, 9)}>{ele}</p>;
            })}
          </SlideDown>
          <a
            className="card-exp-body-read-more"
            href="#/"
            onClick={e => {
              e.preventDefault();
              setClosed(val => !val);
            }}
          >
            {closed ? "Read More..." : "Read Less"}
          </a>
        </>
      );
    } else {
      return description.map(ele => {
        return <p key={ele.substring(0, 9)}>{ele}</p>;
      });
    }
  };

  const parseCardDescription = description => {
    description = description.split(/\n\s*\n/gm);
    description = description.map(ele => {
      ele = ele.trim();
      ele = ele.replace(/\s+/gm, " ");
      return ele;
    });
    return description;
  };

  return (
    <>
      <div className="exp-heading">
        <div>
          <img className="exp-circle" src={imageSource} alt="Company logo" />
        </div>
        <div>
          <p className="exp-title">{companyName}</p>
        </div>
      </div>
      <hr align="left" className="card-exp-line" />
      <div className="exp-tagline">
        <div>
          <p className="card-exp-tagline">
            <i className="material-icons md-22">timeline</i> {employmentTime}
            <span className="line">|</span>
          </p>
        </div>
        <div>
          <p className="card-exp-tagline">
            <i className="material-icons md-22">room</i> {employmentLocation}
            <span className="line">|</span>
          </p>
        </div>
        <div>
          <p className="card-exp-tagline">
            <a
              className="exp-line"
              href={employerLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="material-icons md-22 link">link</i> {companyName}
            </a>
          </p>
        </div>
      </div>
      <p className="card-section-subhead">{jobTitle}</p>
      <div className="card-exp-body">{generateCardBodyJSX()}</div>
    </>
  );
};

export default ExperienceBody;
