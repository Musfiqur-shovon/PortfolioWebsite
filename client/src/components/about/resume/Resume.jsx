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
                    Hands on practical experience in ERP software, Restful API,
                    Java and MS SQL.
                  </li>
                  <li>
                    Developed robust REST APIs using the ZAB Framework, HTML,
                    CSS, Java EE, Apache Tomcat Server, Postman and MS-SQL for
                    clients such as Unimart, K-Bakery, United Hospital and
                    Chef's Table.{" "}
                  </li>
                  <li>
                    Designed software architecture and relational databases,
                    optimizing SQL queries for performance.
                  </li>
                  <li>
                    Conducted performance testing and API load testing to ensure
                    reliability and quality assurance.
                  </li>
                  <li>
                    Thrives in problem-solving and teamwork environments, eager
                    to contribute to innovative AI and ML solutions in a
                    full-time role.
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
              desc="
                  Throughout my time at BRAC University, I've immersed myself in Computer Science and Engineering, focusing on machine learning and AI. Engaging in coursework and software projects, I've earned knowledge in robust software design, database optimization, SDLC method and collaborative problem-solving."
            />

            <Education
              title="Higher Secondary Certificate"
              year="2017 - 2019"
              heading="N.S. Government College, Natore"
              desc="Secured a good position in HSC, paving the way for my journey of  Science, Technology and Innovation. "
            />

            <Education
              title="Secondary School Certificate"
              year="2015 - 2017"
              heading="Natore Government Boys High School, Natore"
              desc="Secure a strong position in SSC with high ambitions for the future."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
