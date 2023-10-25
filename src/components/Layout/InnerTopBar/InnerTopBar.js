import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";
import searchIcon from "../../../assets/icons/searchIcon.svg";
function InnerTopBar({ role }) {
  const location = useLocation();

  // Determine which navigation item should be active based on the current route
  const isActive = (route) => location.pathname.includes(route);
  return (
    <div className="topbar-container mb-3 d-flex flex-row align-items-center border-bottom justify-content-between w-100">
      <div className="nav-bar-container w-50 h-100 d-flex flex-row justify-content-start">
        <ul className="d-flex flex-row align-items-center h-100">
          {role == "client" ? (
            <li
              className={`d-flex me-3 navbar-item ${
                isActive("jobs-progress") ? "navbar-item-active" : ""
              } flex-row align-items-center h-100 justify-content-center`}
            >
              <Link to="/jobs/jobs-progress" className="nav_link">
                View Job Post
              </Link>
            </li>
          ) : (
            <li
              className={`d-flex me-3 navbar-item ${
                isActive("jobs-progress") ? "navbar-item-active" : ""
              } flex-row align-items-center h-100 justify-content-center`}
            >
              <Link to="/jobs/jobs-progress" className="nav_link">
                Jobs Progress
              </Link>
            </li>
          )}
          {role == "client" ? (
            <li
              className={`d-flex me-3 navbar-item ${
                isActive("applied-jobs") ? "navbar-item-active" : ""
              } flex-row align-items-center h-100 justify-content-center`}
            >
              <Link to="/jobs/applied-jobs" className="nav_link">
                Recent Job Progress
              </Link>
            </li>
          ) : (
            <li
              className={`d-flex me-3 navbar-item ${
                isActive("applied-jobs") ? "navbar-item-active" : ""
              } flex-row align-items-center h-100 justify-content-center`}
            >
              <Link to="/jobs/applied-jobs" className="nav_link">
                Applied Jobs
              </Link>
            </li>
          )}
          {role == "client" ? (
            <li
              className={`d-flex me-3 navbar-item ${
                isActive("saved-jobs") ? "navbar-item-active" : ""
              } flex-row align-items-center h-100 justify-content-center`}
            >
              <Link to="/jobs/saved-jobs" className="nav_link">
                Draft Jobs
              </Link>
            </li>
          ) : (
            <li
              className={`d-flex me-3 navbar-item ${
                isActive("saved-jobs") ? "navbar-item-active" : ""
              } flex-row align-items-center h-100 justify-content-center`}
            >
              <Link to="/jobs/saved-jobs" className="nav_link">
                Saved Jobs
              </Link>
            </li>
          )}
        </ul>
      </div>

      <div className="nav-bar-container h-100 d-flex flex-row align-items-center justify-content-center">
        <div className="bg-white search-box d-flex align-items-center justify-content-start rounded-5 px-3">
          <img src={searchIcon} alt="user" />
          <input
            type="search"
            className="search-box-text input-box rounded-5 px-2 bg-transparent text-align-center w-100 ms-2"
            id="fullname"
            placeholder="Search Tasks"
          />
        </div>
      </div>
    </div>
  );
}

export default InnerTopBar;
