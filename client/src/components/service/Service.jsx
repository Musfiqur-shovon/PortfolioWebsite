import Counter from "../counter/Counter";
import HeadingLine from "../headingLine/HeadingLine";
import "./Service.css";
import ServiceSection from "./serviceSection/ServiceSection";

function Service() {
  return (
    <>
      <div id="services" className="services container-fluid">
        <div className="session-title">
          <h2>Servcies I Provide</h2>
          <p>
            Discover tailored services to enhance your digital presence and
            streamline operations
          </p>
          <HeadingLine />
        </div>

        <div className="container">
          <div class="services-row row">
            <ServiceSection
              icon="far fa-file-image"
              heading="Web Design"
              desc="Providing professional web design services to create visually appealing and user-friendly websites"
            />
            <ServiceSection
              icon="fas fa-desktop"
              heading="Web Development"
              desc="Specializing in web development to build robust and scalable websites tailored to your needs"
            />
            <ServiceSection
              icon="fa-solid fa-database"
              heading="Database Design"
              desc="Offering expert database design services to ensure efficient, scalable, and secure data management solutions"
            />
            <ServiceSection
              icon="fab fa-uikit"
              heading="UI/UX Design"
              desc="Specializing in UI/UX design to create intuitive and engaging user interfaces for a seamless user experience"
            />
            <ServiceSection
              icon="fa-solid fa-server"
              heading="Restful API Build"
              desc="Providing RESTful API development to enable seamless integration and communication between your applications"
            />
            <ServiceSection
              icon="fas fa-mobile-alt"
              heading="Mobile App Development"
              desc="Expertise in mobile app development to deliver high-quality, user-centric mobile applications"
            />
          </div>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default Service;
