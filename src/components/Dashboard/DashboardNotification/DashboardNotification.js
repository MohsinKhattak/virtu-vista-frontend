import React from "react";
import notificationIcon from "../../../assets/icons/notification-icon.svg";
function DashboardNotification() {
  return (
    <div className="col-lg-4   dashboard-notification d-flex flex-column align-items-start ps-3 pt-2 justify-content-start rounded-3">
      <div>
        <p className="notification-text">Important notification</p>
      </div>
      <div className="d-flex flex-row align-items-start justify-content-center">
        <img src={notificationIcon} className="me-1" />
        <div className="d-flex flex-column align-items-start justify-content-center">
          <p className="notification-text mb-1">
            Recently draft a job post for UI/UX design
          </p>
          <p className="notification-time">Just now</p>
        </div>
      </div>
      <div className="d-flex flex-row align-items-start justify-content-center">
        <img src={notificationIcon} className="me-1" />
        <div className="d-flex flex-column align-items-start justify-content-center">
          <p className="notification-text mb-1">
            Recently draft a job post for UI/UX design
          </p>
          <p className="notification-time">5 minutes ago</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardNotification;
