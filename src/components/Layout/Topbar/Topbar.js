import React from "react";
import "./Topbar.css";
import virtuVistaLogo from "../../../assets/images/virtu-vista-logo.png";
import maindashboardActiveIcon from "../../../assets/icons/maindashboard.svg";
import myjobsIcon from "../../../assets/icons/briefcase.svg";
import bookIcon from "../../../assets/icons/book.svg";
import chatIcon from "../../../assets/icons/sms-tracking.svg";
import profileIcon from "../../../assets/icons/my-profile.svg";
import notiIcon from "../../../assets/icons/Notification.svg";
import statusIcon from "../../../assets/icons/Status.svg";
import maindashboardIcon from "../../../assets/icons/element-3Inactive.svg";
import myjobsIconActive from "../../../assets/icons/briefcaseActive.svg";
import bookIconActive from "../../../assets/icons/bookActive.svg";
import { NavLink, useLocation } from "react-router-dom";
function Topbar({ role }) {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="topbar-container d-flex flex-row align-items-center ">
      <div className="image-container align-items-center d-flex flex-row justify-content-center  w-25 ">
        <img src={virtuVistaLogo} className="topbar-logo " />
      </div>

      <div className="nav-bar-container  w-50 h-100 d-flex flex-row justify-content-center ">
        <ul className="d-flex flex-row align-items-center   h-100">
          <li
            className={`d-flex me-3 flex-row align-items-center h-100 justify-content-center ${
              isActive("/dashboard") ? "navbar-item-active" : "navbar-item"
            }`}
          >
            <img
              src={
                isActive("/dashboard")
                  ? maindashboardActiveIcon
                  : maindashboardIcon
              }
              className="me-2"
            />
            <NavLink to="/dashboard" className="nav_link">
              Main Dashboard
            </NavLink>
          </li>

          {role == "client" ? (
            <li
              className={`d-flex me-3 flex-row align-items-center h-100 justify-content-center ${
                isActive("/jobs/jobs-progress")
                  ? "navbar-item-active"
                  : "navbar-item"
              }`}
            >
              <img
                src={
                  isActive("/jobs/jobs-progress")
                    ? myjobsIconActive
                    : myjobsIcon
                }
                className="me-2"
              />
              <NavLink to="/jobs/jobs-progress" className="nav_link">
                All Jobs
              </NavLink>
            </li>
          ) : (
            <li
              className={`d-flex me-3 flex-row align-items-center h-100 justify-content-center ${
                isActive("/jobs/jobs-progress")
                  ? "navbar-item-active"
                  : "navbar-item"
              }`}
            >
              <img
                src={
                  isActive("/jobs/jobs-progress")
                    ? myjobsIconActive
                    : myjobsIcon
                }
                className="me-2"
              />
              <NavLink to="/jobs/jobs-progress" className="nav_link">
                My Jobs
              </NavLink>
            </li>
          )}

          {role == "client" ? (
            ""
          ) : (
            <li
              className={`d-flex me-3 flex-row align-items-center h-100 justify-content-center ${
                isActive("/job-proposal") ? "navbar-item-active" : "navbar-item"
              }`}
            >
              <img
                src={isActive("/job-proposal") ? bookIconActive : bookIcon}
                className="me-2"
              />
              <NavLink to="/job-proposal" className="nav_link">
                Job Proposals
              </NavLink>
            </li>
          )}

          <NavLink to="/chats" className="nav_link">
            <li className="d-flex me-3 navbar-item flex-row align-items-center h-100 justify-content-center">
              <img src={chatIcon} className="me-2" />
              Chat
            </li>
          </NavLink>
        </ul>
      </div>

      <div className="nav-bar-container  w-25 h-100 d-flex flex-row justify-content-center">
        <ul className="d-flex flex-row align-items-center justify-content-start   h-100">
          <NavLink to="/profile-setting" className="nav_link">
            <li className="d-flex me-3 navbar-item flex-row align-items-center    justify-content-center">
              <img src={profileIcon} className="me-2" />
              My Profile
            </li>
          </NavLink>
          <NavLink to="/notifications" className="nav_link">
            <li
              style={{ position: "relative" }}
              className="d-flex navbar-item p-2 bg-white border flex-row  rounded-5"
            >
              <img src={notiIcon} />
              <img
                src={statusIcon}
                style={{ position: "absolute", top: "0", right: "0" }}
              />
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Topbar;
