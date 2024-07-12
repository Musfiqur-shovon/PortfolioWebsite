import HeadingLine from "../headingLine/HeadingLine";
import ProjectItem from "./project-item/ProjectItem";
import { projects } from "../../Data/Data";

function Project() {
  return (
    <>
      <div id="projects" className="services container-fluid">
        <div className="session-title">
          <h2>Latest Projects</h2>
          <p>
            Showcasing my latest projects that highlight innovation and
            technical expertise
          </p>
          <HeadingLine />
        </div>

        <div className="container">
          <div className="row">
            <ProjectItem projects={projects} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
