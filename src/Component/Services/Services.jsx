import React from "react";
import "../Services/Services.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import arrow_icon from "../../assets/arrow_icon.svg";
import Services_Data from "../../assets/services_data";
export default function Services() {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern}></img>
      </div>

      <div className="services-data">
        {Services_Data.map((service, index) => {
          return (
            <div className="service-format" key={index}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              <div className="services-read-more">
                <p>Read More</p>
                <img src={arrow_icon}></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
