import React from "react";
import arrowRight from "../../../assets/icons/arrow-right.svg";
function ProjectBriefStatus() {
  return (
    <div className="col-lg-7 dashboard-notification justify-content-between p-3 rounded-3 current-projects  d-flex flex-column ">
      <div className="current d-flex flex-row  align-items-start justify-content-between">
        <div className="d-flex flex-column ">
          <h5 className="greetings-title current-project-title text-white">
            Current project
          </h5>
          <p className="greetings-title current-projet-below-text text-white">
            UI/UX Design
          </p>
        </div>
        <button className="px-3 py-1 greetings-title  view-all shadow-none border-0 bg-white rounded-pill d-flex flex-row align-items-center justify-content-center">
          View all
          <img src={arrowRight} alt="Arrow" />
        </button>
      </div>

      <div className="status-area  d-flex flex-row align-items-center justify-content-around  ">
        <div className="d-flex flex-column border-end h-100 align-items-center justify-content-center   border-light pe-4">
          <p className="upper-text">Status (In Progress)</p>
          <div
            className="custom-progress"
            role="progressbar"
            aria-label="Basic example"
            aria-valuenow="50"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div className="custom-progress-bar ">
              <p className="progress-bar-text">Remaining Days 1/2</p>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column h-100  px-3 align-items-center justify-content-center  border-end border-light  px-4">
          <p className="upper-text">Start Date 20</p>
          <small className="lower-text upper-text "> Jan, 2022</small>
        </div>

        <div className="d-flex flex-column h-100  px-3 align-items-center justify-content-center  border-end border-light  px-4">
          <p className="upper-text">End Date 20</p>
          <small className="lower-text upper-text "> Jan, 2022</small>
        </div>

        <div className="d-flex flex-column h-100  px-3 align-items-center justify-content-center    px-4">
          <p className="upper-text">Amount</p>
          <small className="lower-text upper-text "> $15000</small>
        </div>
      </div>
    </div>
  );
}

export default ProjectBriefStatus;
