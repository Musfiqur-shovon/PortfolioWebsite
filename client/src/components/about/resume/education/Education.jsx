function Education(props) {
  const title = props.title;
  const year = props.year;
  const heading = props.heading;
  const desc = props.desc;
  return (
    <>
      <div className="resume-item">
        <h4>{title}</h4>
        <h5>{year}</h5>
        <h3>
          <em>{heading}</em>
        </h3>
        <p>{desc}</p>
      </div>
    </>
  );
}

export default Education;
