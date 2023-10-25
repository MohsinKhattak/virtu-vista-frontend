import React from "react";

//icons
import verifiedIcon from "../../../assets/icons/Verified.svg";
import avatar from "../../../assets/images/Avatar 2.png";
import moneyIcon from "../../../assets/icons/moneys-small.svg";
import locationIcon from "../../../assets/icons/location-small.svg";
import walletIcon from "../../../assets/icons/empty-wallet.svg";
import clockIcon from "../../../assets/icons/clock-small.svg";
import saveLaterIcon from "../../../assets/icons/Vector.svg";
function Jobpost() {
  return (
    <div className="job-post mb-3 rounded-4 d-flex flex-column   p-3 w-100">
      <div className="upper-area   d-flex flex-row align-items-center justify-content-between w-100">
        <div className="left-area d-flex flex-row align-items-start justify-content-start     w-75">
          <img src={avatar} className="rounded-5 me-1 h-50" />

          <div className="d-flex   flex-column align-items-start justify-content-center   w-100">
            <div className="d-flex flex-row align-items-start   w-100">
              <p className="notification-text text-dark me-1">UI/UX Designer</p>
              <div className="verified-status px-3 d-flex flex-row align-items-center justify-content-center rounded-pill">
                <img src={verifiedIcon} className="me-1" />
                Payment Verified
              </div>
            </div>
            <div className="job-post-info d-flex flex-row align-items-start justify-content-between">
              <div className="me-1  job-post-info-text  d-flex flex-row align-items-center justify-content-center  ">
                <img src={walletIcon} className="me-1" /> Fixed price
              </div>
              <div className="me-1  job-post-info-text  d-flex flex-row align-items-center justify-content-center  ">
                <img src={moneyIcon} className="me-1" /> Budget:$22
              </div>
              <div className="me-1  job-post-info-text  d-flex flex-row align-items-center justify-content-center  ">
                <img src={locationIcon} className="me-1" /> United States
              </div>
              <div className="me-1  job-post-info-text  d-flex flex-row align-items-center justify-content-center  ">
                <img src={clockIcon} className="me-1" /> 6m ago
              </div>
            </div>
          </div>
        </div>
        <div className="right-area d-flex flex-row  align-items-center justfiy-content-between  ">
          <button
            data-bs-toggle="modal"
            data-bs-target="#job-post"
            className="details-button me-2"
          >
            Details
          </button>
          <button className="save-later ">
            <img src={saveLaterIcon} />
          </button>
        </div>
      </div>
      <div className="middle-area ">
        <p className="job-post-text py-2">
          Lorem ipsum dolor sit amet consectetur. Sed dignissim adipiscing
          congue justo. Turpis at mauris id at. Quam pretium ullamcorper
          elementum mauris. Enim nisl netus neque nisi orci. Nunc eu viverra
          eget quis sit magna est malesuada. Iaculis eu in nulla eget euismod
          sit ut sodales amet. Malesuada sit feugiat ut sed sit egestas
          convallis ac.
        </p>
      </div>

      <div className="lower-area d-flex flex-row align-items-center ">
        <div className="me-3 skills-head">Skills</div>
        <div className="job-skills rounded-pill px-3 py-1  me-2">Figma</div>
        <div className="job-skills rounded-pill px-3 py-1  me-2">
          User Interface Design
        </div>
        <div className="job-skills rounded-pill px-3 py-1  me-2">Figma</div>
      </div>
    </div>
  );
}

export default Jobpost;
