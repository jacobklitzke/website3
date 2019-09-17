import React from "react";

const Profile = () => {
  return (
    <>
      <div className="row profile-section">
        <div className="column">
          <div className="row row-header">
            <div className="column">
              <h1 class="display-4 section-header">Profile</h1>
              <hr width="50%" class="my-1 center" />
              <p class="lead center">
                A forward thinking, creative, computer engineer
              </p>
            </div>
          </div>
          <div className="three column row profile-row">
            <div className="column profile-column">
              <p class="section-subhead">About Me</p>
              <p>
                I am a professional computer engineer who loves exploring new
                technologies and learning about the latest innovations in the
                industry. This love of exploration has led to the development of
                skills in many different areas. My first passion is networking
                and troubleshooting, but I also enjoy programming and
                automation. Outside of my professional life, I enjoy playing
                tennis and bocce ball, and watching movies and alpacas.
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
            <div className="column profile-column">
              <p class="section-subhead">Highlights</p>
              <p>
                <b>Location:</b>
                <br />
                <i class="material-icons">room</i> Dallas, TX
                <br />
              </p>
              <p>
                <b>Education:</b>
                <br /> BS - Computer Engineering
                <br />
                <i class="material-icons">account_balance</i> Wichita State
                University | Wichita, KS
                <br />
              </p>
              <p>
                <b>Certifications:</b>
                <br /> &bull; CCNA Route/Switch
                <br />
                &bull; CCNA Security
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
