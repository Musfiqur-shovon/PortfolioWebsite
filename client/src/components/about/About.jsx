import React from "react";
import Logo from "../../assests/images/aboutLogo.png";
import "./About.css";
import HeadingLine from "../headingLine/HeadingLine";
import Resume from "./resume/Resume";
import ResumeFile from "../../assests/images/CV/ResumeMusfiq.pdf";

function About() {
  return (
    <div>
      <div id="about" className="container-fluid about-us">
        <div className="session-title">
          <h2>About Me</h2>
          <p>
            A CSE student passionate about Machine learning, Artificial
            Intelligence and Software Engineering
          </p>
          <HeadingLine />
        </div>
        <div className="container">
          <div className="row about-row">
            <div className="col-md-4 image-col">
              <img src={Logo} alt="Logo" />
              <button className="btn btn-primary">
                <a href={ResumeFile} target="_blank">
                  <i className="fas fa-download"></i> Download CV
                </a>
              </button>
            </div>
            <div className="col-md-8 detail-col">
              <h2>MD. MUSFIQUR RAHMAN SHOVON</h2>
              <h6>- Junior Programmer</h6>
              <p>
                A dedicated Computer Science and Engineering student at BRAC
                University, passionate about machine learning and artificial
                intelligence. With hands-on experience in various software
                development projects, including proficiency in Python and
                machine learning, I have developed a strong foundation in
                designing and implementing innovative solutions. My internship
                at United Group allowed me to gain practical experience in ERP
                software, Java, and MS SQL, further enhancing my technical
                skills and understanding of real-world applications. This
                exposure has solidified my interest in exploring the vast
                possibilities within the fields of AI and ML.
                <br />
                <br />
                In addition to my focus on machine learning, I have cultivated a
                broad skill set in software engineering, allowing me to tackle
                complex problems with a methodical and efficient approach. I
                thrive in problem-solving and teamwork environments, always
                eager to learn and collaborate with others. My experience
                working on various projects has taught me the importance of
                adaptability, communication, and continuous learning. I am
                excited to leverage my skills and knowledge to contribute to
                innovative AI and ML solutions in a full-time role, where I can
                continue to grow and make a meaningful impact.
              </p>
            </div>
          </div>
        </div>
        <Resume />
      </div>
    </div>
  );
}

export default About;
