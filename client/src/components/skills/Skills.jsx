import HeadingLine from "../headingLine/HeadingLine";
import Technical from "./technical/Technical";
import "./skills.css";
import Professional from "./professional/Professional";

function Skills() {
  return (
    <>
      <div id="skills" className="container-fluid skills">
        <div className="session-title">
          <h2>Skills</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available Lorem
            Ipsum available but the majority
          </p>
          <HeadingLine />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h3 className="skill-section-title">Technical Skills</h3>
              <Technical />
            </div>
            <div className="col-lg-6">
              <h3 className="skill-section-title">Professional Skills</h3>
              <div className="container">
                <div className="row">
                  <Professional name={"Problem Solving"} value={80} />
                  <Professional name={"Analytical Thinking"} value={90} />
                  <Professional name={"Research"} value={75} />
                  <Professional name={"Communication"} value={90} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
