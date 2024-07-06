import "./technical.css";

function Technical() {
  return (
    <>
      <div className="content-tech">
        <div className="title-tech">
          <h4>Web Development</h4>
          <h4>90%</h4>
        </div>
        <div className="progress-tech">
          <div className="progress-bar-tech p1"></div>
        </div>
      </div>
      <div className="content-tech">
        <div className="title-tech">
          <h4>Database Management</h4>
          <h4>95%</h4>
        </div>
        <div className="progress-tech">
          <div className="progress-bar-tech p2"></div>
        </div>
      </div>
      <div className="content-tech">
        <div className="title-tech">
          <h4>App Development</h4>
          <h4>60%</h4>
        </div>
        <div className="progress-tech">
          <div className="progress-bar-tech p3"></div>
        </div>
      </div>
      <div className="content-tech">
        <div className="title-tech">
          <h4>Machine Learing</h4>
          <h4>80%</h4>
        </div>
        <div className="progress-tech">
          <div className="progress-bar-tech p4"></div>
        </div>
      </div>
    </>
  );
}

export default Technical;
