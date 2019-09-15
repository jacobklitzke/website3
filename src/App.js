import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Intro from "./components/intro";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <ParallaxProvider>
      <div className="ui one column grid" style={{ margin: 0 }}>
        <Intro />
        <Profile />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </ParallaxProvider>
  );
}

export default App;
