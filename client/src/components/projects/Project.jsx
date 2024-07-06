import HeadingLine from "../headingLine/HeadingLine";
import ProjectItem from "./project-item/ProjectItem";
import { projects } from "../../Data/Data";

function Project() {
  return (
    <>
      <div id="projects" className="services container-fluid">
        <div className="session-title">
          <h2>Projects</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available Lorem
            Ipsum available but the majority
          </p>
          <HeadingLine />
        </div>

        <div className="container">
            <div className="row">
                <ProjectItem projects = {projects} />
            </div>
        </div>

      </div>
    </>
  );
}

export default Project;