import React from "react";
import { ProjectCard } from "./project-card";
import projects from "@/data";
const Projects = () => {
  return (
    <div className="relative z-20 mx-auto my-8 max-w-2xl">
      <h2 className="text-2xl md:text-3xl"> My projects</h2>
      <div className="mt-8 space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
