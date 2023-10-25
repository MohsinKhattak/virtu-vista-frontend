import React from "react";
import "./PhaseInfo.css";
function PhaseInfo({ icon, name, step }) {
  return (
    <div className="profile-information mb-3 d-flex flex-row align-items-center justify-content-center">
      <div className="icon-container">
        <img src={icon} alt="Icon" />
      </div>
      <div className="content-container d-flex flex-column align-items-start pt-3 ps-2">
        <h6 className="phase-name-text">{name}</h6>
        <p className="step-counter">{step}</p>
      </div>
    </div>
  );
}

export default PhaseInfo;
