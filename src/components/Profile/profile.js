import React from "react";

const Profile = () => {
  const [iconSize, setIconSize] = React.useState(22);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setIconSize(18);
    }
  }, [setIconSize]);
  return (
    <>
      <div className="row profile-section">
        <div className="column">
          <div className="row row-header">
            <div className="column">
              <h1 className="display-4 section-header">Profile</h1>
              <hr width="50%" className="my-1 center" />
              <p className="lead center">
                Transforming work processes through code
              </p>
            </div>
          </div>
          <div className="three column row profile-row">
            <div className="column profile-column">
              <p className="section-subhead">About Me</p>
              <p>
                Hi, I'm Jacob, and I ask the question 'Why?'... a lot. Growing
                up, I would constantly ask my parents, "Why?", and I had a
                difficult time accepting when they would respond with, "Because
                I told you so". Today, I still find myself asking this question
                regularly - "Why is this?" "Is there an easier way?" "What is
                the actual problem which needs to be solved?". This curiosity
                has pushed me to experience different ways of approaching tasks
                and solving problems. As a result, I have found a passion for
                creating new methods to make processes easier and more efficient
                in order to transform the way people work and interact with
                technology.
              </p>
              <p>
                Presently, I lead this effort to change the way people work by
                automating processes and creating new tools in the Customer
                Experience space at Cisco. In addition, I also collaborate with
                customers to resolve highly complex technical issues in the AAA
                security space. In the past, I have worked on automated test
                design and test-bed deplyoment at NetApp, written monitoring
                tools for a small datacenter, and created tools to reduce
                project completion times.
              </p>
              <p>
                Feel free to contact me at any of the links at the bottom of
                this page, I always enjoy saying Hi!
              </p>
            </div>
            <div className="column profile-column">
              <picture>
                <source
                  media="(max-width: 767px)"
                  srcSet="/images/profile-mobile.jpg"
                />
                <source
                  media="(max-width: 1023px)"
                  srcSet="/images/profile-tablet.jpg"
                />
                <source
                  media="(min-width: 1024px)"
                  srcSet="/images/profile.jpg"
                />
                <img
                  className="profile-image"
                  src="/images/profile.jpg"
                  alt="Jacob"
                />
              </picture>
            </div>
            <div className="column profile-column highlights-column">
              <p className="section-subhead highlights-header">Highlights</p>
              <div className="highlights-container">
                <p className="display-p-subhead">Location:</p>
                <p className="display-p">
                  <i className="material-icons" style={{ fontSize: iconSize }}>
                    room
                  </i>{" "}
                  Dallas, TX
                </p>
              </div>
              <div className="highlights-container">
                <p className="display-p-subhead">Education:</p>
                <p className="display-p" style={{ marginBottom: 0 }}>
                  <i className="material-icons" style={{ fontSize: iconSize }}>
                    account_balance
                  </i>{" "}
                  BS - Computer Engineering
                </p>
                <p className="display-p">
                  Wichita State University | Wichita, KS
                </p>
              </div>
              <div className="highlights-container">
                <p className="display-p-subhead">Certifications:</p>
                <p className="display-p" style={{ marginBottom: 0 }}>
                  &bull; CCNA Route/Switch
                </p>
                <p className="display-p" style={{ marginBottom: 0 }}>
                  &bull; CCNA Security
                </p>
                <p className="display-p">
                  &bull; AWS Solutions Architect Associate
                </p>
              </div>
              <div className="highlights-container">
                <p className="display-p-subhead">Strengths:</p>
                <p className="display-p" style={{ marginBottom: 0 }}>
                  &bull; Discussing movies
                </p>
                <p className="display-p" style={{ marginBottom: 0 }}>
                  &bull; Eating cookies
                </p>
                <p className="display-p">&bull; Facial expressiveness</p>
              </div>
              <div className="highlights-container">
                <p className="display-p-subhead">Spirit Animal:</p>
                <p className="display-p">
                  <span role="img" aria-label="alpaca">
                    🦙
                  </span>{" "}
                  Alpaca
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
