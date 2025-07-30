import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import user from "../data/user";
import ProjectList from "./ProjectList";

const projectData = [
  {
    id: 1,
    name: "Portfolio Website",
    about: "A personal portfolio site.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    id: 2,
    name: "To-Do App",
    about: "A simple to-do app using React.",
    technologies: ["React", "CSS"]
  }
];

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <ProjectList projects={projectData} />
    </div>
  );
}


export default App;
