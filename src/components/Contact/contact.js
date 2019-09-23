import React from "react";

const Contact = () => {
  const [iconSize, setIconSize] = React.useState(22);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setIconSize(18);
    }
  }, [setIconSize]);

  return (
    <div className="row contact-section">
      <div className="column contact-container">
        <div className="row row-header" style={{ marginBottom: 25 }}>
          <div className="column">
            <h1 className="display-4 section-header">Contact</h1>
            <hr width="50%" className="my-1 center" />
          </div>
        </div>
        <div className="two column row contact-row">
          <div className="column contact-column" style={{ marginRight: "5%" }}>
            <div
              className="icon-container align-right"
              style={{ paddingRight: 10 }}
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsxlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 400 400"
                xmlspace="preserve"
                className="contact-icon twitter"
              >
                <path
                  className="twitter-fill"
                  d="M163.4,305.5c88.7,0,137.2-73.5,137.2-137.2c0-2.1,0-4.2-0.1-6.2c9.4-6.8,17.6-15.3,24.1-25
                    c-8.6,3.8-17.9,6.4-27.7,7.6c10-6,17.6-15.4,21.2-26.7c-9.3,5.5-19.6,9.5-30.6,11.7c-8.8-9.4-21.3-15.2-35.2-15.2
                    c-26.6,0-48.2,21.6-48.2,48.2c0,3.8,0.4,7.5,1.3,11c-40.1-2-75.6-21.2-99.4-50.4c-4.1,7.1-6.5,15.4-6.5,24.2
                    c0,16.7,8.5,31.5,21.5,40.1c-7.9-0.2-15.3-2.4-21.8-6c0,0.2,0,0.4,0,0.6c0,23.4,16.6,42.8,38.7,47.3c-4,1.1-8.3,1.7-12.7,1.7
                    c-3.1,0-6.1-0.3-9.1-0.9c6.1,19.2,23.9,33.1,45,33.5c-16.5,12.9-37.3,20.6-59.9,20.6c-3.9,0-7.7-0.2-11.5-0.7
                    C110.8,297.5,136.2,305.5,163.4,305.5"
                />
              </svg>
              <a
                className="display-p"
                style={{ paddingLeft: 7 }}
                href="https://twitter.com/jacobklitzke"
                target="_blank"
                rel="noopener noreferrer"
              >
                @jacobklitzke
              </a>
            </div>
            <div className="icon-container align-right">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="contact-icon linked-in"
              >
                <path
                  className="linked-in-fill"
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 
                5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 
                1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 
                0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                />
              </svg>
              <a
                className="display-p"
                style={{ paddingLeft: 7 }}
                href="https://linkedin.com/in/jacobklitzke"
                target="_blank"
                rel="noopener noreferrer"
              >
                /in/jacobklitzke
              </a>
            </div>
          </div>
          <div className="column contact-column" style={{ marginLeft: "5%" }}>
            <div className="icon-container" style={{ marginBottom: "0.5rem" }}>
              <i
                className="material-icons"
                style={{ fontSize: iconSize, bottom: 5, top: 0 }}
              >
                email
              </i>
              <a
                className="display-p"
                style={{ paddingLeft: 7 }}
                href="mailto:jacobklitzke@gmail.com?Subject=Hi%20Jacob"
                target="_blank"
                rel="noopener noreferrer"
              >
                Email Me
              </a>
            </div>
            <div className="icon-container">
              <i
                className="material-icons"
                style={{ fontSize: iconSize, bottom: 5, top: 0 }}
              >
                attach_file
              </i>
              <a
                className="display-p"
                style={{ paddingLeft: 7 }}
                href="/images/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
