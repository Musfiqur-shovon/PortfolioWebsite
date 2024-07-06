import React, { useState } from "react";
import "./Counter.css";
import $ from "jquery";
import "jquery-countto";
import VisibilitySensor from "react-visibility-sensor";

const Counter = () => {
  const [visible, setVisible] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setVisible(true);
      // Initialize CountTo for each element with the 'timer' class
      $(".timer").each(function () {
        $(this).countTo();
      });
    }
  };

  return (
    <div className="container count-body">
      <VisibilitySensor onChange={onVisibilityChange}>
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="counter">
              <i className="fa fa-code fa-2x"></i>
              <h2
                className="timer count-title count-number"
                data-to="100"
                data-speed="1500"
              ></h2>
              <p className="count-text">Our Customer</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="counter">
              <i className="fa fa-coffee fa-2x"></i>
              <h2
                className="timer count-title count-number"
                data-to="1700"
                data-speed="1500"
              ></h2>
              <p className="count-text">Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="counter">
              <i className="fa-regular fa-lightbulb fa-2x"></i>
              <h2
                className="timer count-title count-number"
                data-to="11900"
                data-speed="1500"
              ></h2>
              <p className="count-text">Project Complete</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="counter">
              <i className="fa fa-bug fa-2x"></i>
              <h2
                className="timer count-title count-number"
                data-to="157"
                data-speed="1500"
              ></h2>
              <p className="count-text">Coffee With Clients</p>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    </div>
  );
};

export default Counter;
