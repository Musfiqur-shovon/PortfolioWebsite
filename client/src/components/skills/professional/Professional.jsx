import "./professional.css";
import React from "react";

const Professional = ({ value, name }) => {
  return (
    <>
      <div className="col-md-6 col-sm-12">
        <div className="round-bar">
          <div
            className="progressbar"
            style={{
              "--value": `${value}`,
            }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <div className="progress-heading-text">
          <h4>{name}</h4>
        </div>
      </div>
    </>
  );
};

export default Professional;
