import React from "react";
import JobPost from "../Jobpost/Jobpost";
import ClientRecentJobProgress from "../ClientRecentJobProgress/ClientRecentJobProgress";

function AppliedJobs({ role }) {
  return (
    <div className="d-flex flex-column">
      {role == "client" ? <ClientRecentJobProgress /> : <JobPost />}
    </div>
  );
}

export default AppliedJobs;
