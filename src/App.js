import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Intro from "./components/Intro/intro";
import Profile from "./components/Profile/profile";
import Experience from "./components/Experience/experience";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/projects";
import Contact from "./components/Contact/contact";

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
