import React from "react";
import { Parallax } from "react-scroll-parallax";

const Intro = () => {
  const [parallaxDisabled, setParallaxDisabled] = React.useState(false);

  const absoluteStyle = {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setParallaxDisabled(true);
    }
  }, [setParallaxDisabled]);

  return (
    <>
      <div className="row title-section">
        <div className="column title-column parallax-container">
          <Parallax
            y={[-50, 50]}
            styleInner={absoluteStyle}
            styleOuter={absoluteStyle}
            disabled={parallaxDisabled}
          >
            <div className="parallax-background" />
          </Parallax>
          <div className="jumbotron">
            <h1 className="display-3 center">Jacob Klitzke</h1>
            <hr width="50%" class="my-1 center" />
            <p className="lead center">
              Network Engineer, Automator, and Developer
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
