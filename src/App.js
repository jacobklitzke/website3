import React from "react";
import Intro from "./components/intro";
import Profile from "./components/profile";
import Experience from "./components/experience";
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="ui one column grid">
      <Intro />
      <Profile />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
