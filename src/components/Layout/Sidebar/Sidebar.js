import React from "react";
import "./Sidebar.css";

import avatarImage from "../../../assets/images/Avatar-Image.png";
import SalaryIcon from "../../../assets/icons/moneys.svg";
import clockIcon from "../../../assets/icons/clock.svg";
import tastIcon from "../../../assets/icons/task-square.svg";
import ratingIcon from "../../../assets/icons/ratings.svg";
import starIcon from "../../../assets/icons/star.svg";
import locationIcon from "../../../assets/icons/location-small.svg";
import breifcaseIcon from "../../../assets/icons/briefcase.svg";
import jobRequestIcon from "../../../assets/icons/JobRequest.svg";
import verifyIcon from "../../../assets/icons/verify.svg";
import verifiedIcon from "../../../assets/icons/verifyWhite.svg";
import cardIcon from "../../../assets/icons/card-pos.svg";
import arrowRight from "../../../assets/icons/arrow-right.svg";
function Sidebar({ role }) {
  return (
    <div className=" d-flex h-100 flex-column justify-content-center  w-75 border rounded-4   pt-1  px-2">
      <div className=" pb-1 border-bottom d-flex flex-column align-items-center">
        <div className="avatar-container ">
          <img src={avatarImage} className=" avatar" />
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center">
          <p className="user-name my-0">User Name</p>
          <p className="job-title my-0">Job Title</p>
          {role == "client" ? (
            <div className="d-flex flex-row align-items-center justify-content-center w-100 mb-2">
              <div className="d-flex flex-row align-items-center">
                <img src={locationIcon} />
              </div>
              <div>
                <p className="client-location my-0">United States</p>
              </div>
            </div>
          ) : (
            <button className="available-button  rounded-pill px-3  py-1 ">
              Available For Work
            </button>
          )}
        </div>
      </div>
      <div className="d-flex flex-column align-items-start justify-content-center  border-bottom  py-2 ps-1">
        {role == "client" ? (
          <p className="job-title job-details mb-1">Profile Details</p>
        ) : (
          <p className="job-title job-details mb-1">Job Details</p>
        )}
        {role == "client" ? (
          <div>
            <div className="   d-flex flex-row align-items-start justify-content-start w-100">
              <img src={breifcaseIcon} className="me-2" />
              <div className="salary-info d-flex flex-column align-items-start justify-content-start">
                <p className="info-type my-1">Job Post</p>
                <p className="info-desc">2</p>
              </div>
            </div>

            <div className="    d-flex flex-row align-items-start justify-content-start w-100">
              <img src={jobRequestIcon} className="me-2" />
              <div className="d-flex flex-column align-items-start justify-content-start">
                <p className="info-type my-1">Job Request</p>
                <p className="info-desc">10</p>
              </div>
            </div>

            <div className="   d-flex flex-row align-items-start justify-content-start w-100">
              <img src={verifyIcon} className="me-2" />
              <div className="d-flex flex-column align-items-start justify-content-start">
                <p className="info-type my-1">Account Verification</p>
                <div
                  style={{ backgroundColor: "#28A745" }}
                  className=" py-1 availablity-text my-0 px-3 d-flex flex-row align-items-center justify-content-center rounded-pill"
                >
                  <img src={verifiedIcon} className="me-1" />
                  Verified
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="   d-flex flex-row align-items-start justify-content-start w-100">
              <img src={SalaryIcon} className="me-2" />
              <div className="salary-info d-flex flex-column align-items-start justify-content-start">
                <p className="info-type my-1">Salary</p>
                <p className="info-desc">$220 per hour</p>
              </div>
            </div>

            <div className="    d-flex flex-row align-items-start justify-content-start w-100">
              <img src={clockIcon} className="me-2" />
              <div className="d-flex flex-column align-items-start justify-content-start">
                <p className="info-type my-1">Work experience</p>
                <p className="info-desc">2 Years</p>
              </div>
            </div>

            <div className="   d-flex flex-row align-items-start justify-content-start w-100">
              <img src={tastIcon} className="me-2" />
              <div className="d-flex flex-column align-items-start justify-content-start">
                <p className="info-type my-1">Task Completions</p>
                <p className="info-desc">10</p>
              </div>
            </div>

            <div className="    d-flex flex-row align-items-start justify-content-start w-100">
              <img src={ratingIcon} className="me-2" />
              <div className="d-flex flex-column align-items-start justify-content-start">
                <p className="info-type my-1">Client Ratings</p>
                <div className="d-flex flex-row align-items-center justify-content-start">
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                  <img src={starIcon} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="d-flex flex-column align-items-start justify-content-center py-1 ps-1">
        {role == "client" ? (
          <div className="add-payment-box d-flex flex-column aling-items-center justify-content-center   w-100 px-2 py-3">
            <div className="d-flex flex-row align-items-center justify-content-between">
              <div className="d-flex flex-row align-items-center justify-content-center">
                <img src={cardIcon} className="me-2" />
                <div className="d-flex flex-row ">
                  <p className="info-desc my-0">Add Billing</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center justify-content-center bg-white rounded-5 border px-1 py-1">
                <img src={arrowRight} />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-center">
              <p className="info-type my-0 text-justify">
                To ensure a seamless and hassle-free experience, we recommend
                adding your billing information to your account.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <p className="job-title job-details mb-1">Skills</p>
            <div className="d-inline-flex flex-wrap align-items-center ">
              <div className="skill-button   d-flex flex-row align-items-center justify-content-center rounded-pill">
                Figma
              </div>
              <div className="skill-button  d-flex flex-row align-items-center justify-content-center rounded-pill">
                User Interface Design
              </div>
              <div className="skill-button  d-flex flex-row align-items-center justify-content-center rounded-pill">
                User Interface Design
              </div>
              <div className="skill-button  d-flex flex-row align-items-center justify-content-center rounded-pill">
                UI
              </div>
              <div className="skill-button  d-flex flex-row align-items-center justify-content-center rounded-pill">
                User Interface Design
              </div>
            </div>
          </div>
        )}
      </div>
      {role == "client" ? (
        ""
      ) : (
        <div className="d-flex flex-column align-items-start justify-content-center   ">
          <button className="available-button w-100 py-1 rounded-pill">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
