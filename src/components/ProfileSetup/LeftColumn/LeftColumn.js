import React from "react";
import PhaseInfo from "../PhaseInfo/PhaseInfo";
import "./LeftColumn.css";
//Icons
import profileIcon from "../../../assets/icons/profile.svg";
import experienceIcon from "../../../assets/icons/experience.svg";
import skillsIcon from "../../../assets/icons/skills.svg";
import verificationIcon from "../../../assets/icons/verification.svg";
import progressBall from "../../../assets/icons/progressBall.svg";
function LeftColumn() {
  return (
    <div className="left-col w-25 h-100 d-flex flex-row align-items-center justify-content-end">
      <div className="profile-phase d-flex flex-column align-items-start">
        <PhaseInfo
          icon={profileIcon}
          name="Personal Information"
          step="Step 01"
        />
        <PhaseInfo icon={experienceIcon} name="Experience" step="Step 02" />
        <PhaseInfo icon={skillsIcon} name="Skills" step="Step 03" />
        <PhaseInfo icon={verificationIcon} name="Verification" step="Step 04" />
      </div>

      <div
        style={{ height: "80%" }}
        className="progress-bar-container   ms-4   justify-content-center d-flex"
      >
        <div
          className="progress h-100"
          role="progressbar"
          aria-label="Basic example"
          aria-valuenow="0"
          aria-valuemin="0"
          aria-valuemax="100"
        >
          <div
            className="progress-bar d-flex justify-content-start align-items-center"
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <img src={progressBall} className="progress-ball w-100  " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftColumn;
