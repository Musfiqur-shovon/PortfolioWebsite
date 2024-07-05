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
            There are many variations of passages of Lorem Ipsum available Lorem
            Ipsum available but the majority
          </p>
          <HeadingLine />
        </div>

        <div className="container">
          <div class="services-row row">
            <ServiceSection icon="far fa-file-image" heading="Graphic Design" />
            <ServiceSection icon="fas fa-desktop" heading="Web Development" />
            <ServiceSection
              icon="fas fa-bullhorn"
              heading="Digital Marketing"
            />
            <ServiceSection icon="fab fa-uikit" heading="UI/UX Design" />
            <ServiceSection
              icon="fas fa-suitcase"
              heading="Business Analysis"
            />
            <ServiceSection
              icon="fas fa-mobile-alt"
              heading="Mobile App Development"
            />
          </div>
          <Counter />
        </div>
      </div>
    </>
  );
}

export default Service;
