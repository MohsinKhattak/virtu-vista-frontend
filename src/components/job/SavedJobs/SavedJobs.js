import React from "react";
import JobPost from "../Jobpost/Jobpost";
import ClientJobPost from "../ClientJobPost/ClientJobPost";
function SavedJobs({ role }) {
  return (
    <div className="d-flex flex-column">
      {role == "client" ? <ClientJobPost /> : <JobPost />}
    </div>
  );
}

export default SavedJobs;
