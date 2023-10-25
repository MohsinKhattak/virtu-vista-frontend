import React from "react";
import userProfile from "../../assets/icons/userProfile.svg";
import "./Notification.css";
function Notification() {
  return (
    <div className="notification d-flex flex-column ">
      <div className="d-flex flex-row align-items-center justify-content-start">
        <img src={userProfile} />
        <p className="recent-job-post-secondary-text  text-dark my-0">
          The freelancer you requested,
          <span className="recent-job-post-text text-dark  ">Sehar kh </span>
          has accepted your job request . You're one step closer to getting your
          project underway!
          <br /> You can now initiate a
          <span className="chat-anchor"> Chat </span> with Sehar kh to discuss
          project details, requirements, and timelines.
        </p>
      </div>
      <div className="d-flex flex-row align-items-center justify-content-end">
        <p className="recent-job-post-secondary-text">・About 13 hours ago</p>
      </div>
    </div>
  );
}

export default Notification;
