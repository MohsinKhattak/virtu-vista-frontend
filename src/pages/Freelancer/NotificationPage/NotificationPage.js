import React from "react";
import Notification from "../../../components/Notification/Notification";
function NotificationPage() {
  return (
    <>
      <div className="d-flex flex-row align-items-center justify-content-start w-100 border-bottom mb-3">
        <p className="notification-title">Notifications</p>
      </div>
      <Notification />
      <Notification />
    </>
  );
}

export default NotificationPage;
