import Education from "./education/Education";
import "./resume.css";

function Resume() {
  return (
    <div className="resume">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Software Engineering - Intern</h4>
              <h5>September / 23 - December / 23</h5>
              <h3>Orange IT Solution at United Group</h3>
              <p>
                <ul>
                  <li>
                    Lead in the design, development, and implementation of the
                    graphic, layout, and production communication materials
                  </li>
                  <li>
                    Delegate tasks to the 7 members of the design team and
                    provide counsel on all aspects of the project.{" "}
                  </li>
                  <li>
                    Supervise the assessment of all graphic materials in order
                    to ensure quality and accuracy of the design
                  </li>
                  <li>
                    Oversee the efficient use of production project budgets
                    ranging from $2,000 - $25,000
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Education</h3>
            <Education
              title="Bachelor in Computer Science &amp; Engineering"
              year="2020 - 2024"
              heading="BRAC University"
              desc="Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend"
            />

            <Education
              title="Higher Secondary Certificate"
              year="2017 - 2019"
              heading="N.S. Government College, Natore"
              desc="Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam
                iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti
                nerada porti sand markend"
            />

            <Education
              title="Secondary School Certificate"
              year="2015 - 2017"
              heading="Natore Government Boys High School, Natore"
              desc="QQuia nobis sequi est occaecati aut. Repudiandae et iusto quae
                reiciendis et quis Eius vel ratione eius unde vitae rerum
                voluptates asperiores voluptatem Earum molestiae consequatur
                neque etlon sader mart dila"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
