import React from "react";
import "../style/RequestAmbulance.css"

const RequestAmbulance = () => {
  return (
    <div className="container1">
      <div className="content">
        <h1>Request an Ambulance Cab</h1>
        <p>Quick and reliable ambulance service for your health emergencies.</p>
        <div className="input-group">
          <input type="text" placeholder="Enter location" />
          <i className="fas fa-location-arrow icon"></i>
        </div>
        <div className="input-group">
          <input type="text" placeholder="Enter destination" />
          <i className="fas fa-map-marker-alt icon"></i>
        </div>
        <div className="buttons">
          <button className="primary">Book Now</button>
        </div>
      </div>
      <div className="image-container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.992638906185!2d73.83082851077073!3d18.529234782493262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf4a06f8ec33%3A0x8fbd07f290a4163a!2sIET%20C-DAC%20ACTS%20ATC%2C%20Pune!5e0!3m2!1sen!2sin!4v1734544091448!5m2!1sen!2sin&output=embed" title="Google-Map"></iframe>
      </div>
    </div>
  );
};

export default RequestAmbulance;
