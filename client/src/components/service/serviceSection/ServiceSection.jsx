function ServiceSection(props) {
  return (
    <>
      <div className="col-lg-4 col-md-6 seric-div">
        <div className="service-card">
          <i className={props.icon}></i>
          <h4>{props.heading}</h4>
          <p>{props.desc}</p>
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
