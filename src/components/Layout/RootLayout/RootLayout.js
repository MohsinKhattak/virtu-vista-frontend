import React from "react";
import { Topbar, Sidebar } from "../../../components";
import { Outlet } from "react-router-dom";
import "./RootLayout.css";
function RootLayout({ role }) {
  role = "client";
  return (
    <div className="container-fluid   vh-100 d-flex flex-column">
      <div className="top-bar  ">
        <Topbar role={role} />
      </div>
      <div className="row  ">
        <div className="side-bar   col-lg-3 side-bar d-flex justify-content-center  pt-2">
          <Sidebar role={role} />
        </div>
        <div className=" col-lg-9 main-content">
          <Outlet role={role} style={{ minHeight: "calc(100vh - 70px)" }} />
        </div>
      </div>
    </div>
  );
}

export default RootLayout;
