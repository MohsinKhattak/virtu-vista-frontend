import React from "react";
import { Outlet, useLocation, Link } from "react-router-dom";

import InnerTopBar from "../InnerTopBar/InnerTopBar";
function MyJobsLayout({ role }) {
  return (
    <div className="d-flex flex-column">
      <InnerTopBar role={role} />
      <Outlet role={role} />
    </div>
  );
}

export default MyJobsLayout;
