import React from "react";

const ProjectSection = ({ children }) => {
  return (
    <section id="projectsection" className="project-section main__section">
      <h1 className="section__heading--primary">Projects</h1>
      {children}
    </section>
  );
};
export default ProjectSection;
