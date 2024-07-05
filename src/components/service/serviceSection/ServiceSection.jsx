function ServiceSection(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6 seric-div">
        <div className="service-card">
          <i className={props.icon}></i>
          <h4>{props.heading}</h4>
          <p>
            Lorem ipsum dolor sit aconsect dipisicing elit, sed do eiusmod to
            incididunt uabore etdolore magna aliqua.
          </p>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
