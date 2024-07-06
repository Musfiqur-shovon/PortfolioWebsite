import React from "react";
import Logo from "../../assests/images/aboutLogo.png";
import "./About.css";
import HeadingLine from "../headingLine/HeadingLine";
import Resume from "./resume/Resume";

function About() {
  return (
    <div>
      <div id="about" className="container-fluid about-us">
        <div className="session-title">
          <h2>About Me</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available Lorem
            Ipsum available but the majority
          </p>
          <HeadingLine />
        </div>
        <div className="container">
          <div className="row about-row">
            <div className="col-md-4 image-col">
              <img src={Logo} alt="Logo" />
              <button className="btn btn-primary">
                <i className="fas fa-download"></i> Download CV
              </button>
            </div>
            <div className="col-md-8 detail-col">
              <h2>MD. MUSFIQUR RAHMAN SHOVON</h2>
              <h6>- Junior Programmer</h6>
              <p>
                There are many variations of passages of Lorem Ipsum available
                but the majority is have suffered alteration in that some form
                by injected humour or randomised that words which don't look
                even slightly believable. If you are going a to use a passage of
                Lorem Ipsum you need to be sure there isn't anything
                embarrassing. There are is many variations of passages
                available.
                <br />
                <br />
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quo est voluptas veniam, porro ex eius quis, illum
                eligendi, ad saepe tempora sint aperiam corrupti ipsa
                praesentium. Suscipit, nulla mollitia? Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Voluptatem quo est voluptas
                veniam, porro ex eius quis, illum eligendi, ad saepe tempora
                sint aperiam corrupti ipsa praesentium. Suscipit, nulla
                mollitia?
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
