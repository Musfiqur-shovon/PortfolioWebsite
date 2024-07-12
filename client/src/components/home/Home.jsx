import React, { useState, useEffect } from "react";
import "./home.css";
import HomeImg from "../../assests/images/head.png";
import ReactTypingEffect from "react-typing-effect";

function Home() {
  return (
    <>
      <div id="home" className="container-fluid home">
        <div className="container">
          <div className="row">
            <div className="col-md-6 head-bar">
              <h6>WELCOME TO MY WORLD</h6>
              <h3>Hello, I'm</h3>
              <h2>MD. MUSFIQUR RAHMAN SHOVON</h2>
              <h4>
                -{" "}
                <ReactTypingEffect
                  text={[
                    "Junior Programmer",
                    "Software Engineer",
                    "Web Developer",
                  ]}
                  speed={100}
                  eraseDelay={1000}
                  cursorRenderer={(cursor) => (
                    <span className="typing-cursor">{cursor}</span>
                  )}
                />
              </h4>
              <p>
                As a dedicated Computer Science and Engineering student with
                high passionate about machine learning and artificial
                intelligence. With hands-on experience in various software
                development projects and an internship at United Group focusing
                on ERP software, Java and MS SQL. Thrives in problem-solving and
                teamwork environments, eager to further knowledge and contribute
                to innovative AI and ML solutions.
              </p>
              <div className="btn-box">
                <a href="#" className="btn">
                  Get in Touch
                </a>
                <a href="#" className="btn">
                  Hire me Now!
                </a>
              </div>
              <h6>FIND WITH ME</h6>
              <div class="social-icons">
                <a
                  href="https://www.facebook.com/musfiqur.shovon.7"
                  target="_blank"
                >
                  <i class="bx bxl-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/mdmusfiqurshovon/"
                  target="_blank"
                >
                  <i class="bx bxl-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/md-musfiqur-rahman-shovon"
                  target="_blank"
                >
                  <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/Musfiqur-shovon" target="_blank">
                  <i class="bx bxl-github"></i>
                </a>
              </div>
            </div>
            <div class="col-md-6 justify-content-center align-items-center">
              <div className="home-img">
                <img src={HomeImg} alt="Musfiqur Shovon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
