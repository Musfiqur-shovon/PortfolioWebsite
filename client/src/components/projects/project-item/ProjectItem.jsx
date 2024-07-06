import "./projectItem.css";

function ProjectItem({ projects }) {
  return (
    <>
      {projects.map((project, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12 mt-4">
          <div key={index} className="project">
            <div className="project-head">
              <div className="item">
                {project.imageLink && (
                  <img src={project.imageLink} alt={project.title} />
                )}
                <div className="overlay">
                  <div className="overlay-text">
                    <h2>{project.category}</h2>
                    <h4>{project.technology}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h2>{project.title}</h2>
              <h4>{project.technology}</h4>
              <p>{project.description}</p>
              <div className="project-show-status">
                {project.completed ? (
                  <a href={project.projectLink} target="_blank">
                    <button className="btn btn-primary">View Project</button>
                  </a>
                ) : (
                  <p>Coming Soon ...</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ProjectItem;
