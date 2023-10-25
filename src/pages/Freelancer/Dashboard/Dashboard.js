import React from "react";
import "./Dashboard.css";
import {
  Jobpost,
  DashboardGreet,
  DashboardNotification,
  ProjectBriefStatus,
  SearchBar,
} from "../../../components/Dashboard";

import moneyIcon from "../../../assets/icons/moneys-small.svg";
import locationIcon from "../../../assets/icons/location-small.svg";
import walletIcon from "../../../assets/icons/empty-wallet.svg";
import clockIcon from "../../../assets/icons/clock-small.svg";

//component
import { FreelanceCard } from "../../../components";
function Dashboard({ role }) {
  return (
    <>
      <DashboardGreet />
      <div className="d-flex mb-3 flex-row col-lg-12  rounded-3 justify-content-between">
        <ProjectBriefStatus />
        <DashboardNotification />
      </div>

      <SearchBar role={role} />

      {role == "client" ? (
        <div className="d-inline-flex flex-row align-items-center justify-content-center w-100">
          <FreelanceCard />
          <FreelanceCard />
          <FreelanceCard />
        </div>
      ) : (
        <div className="w-100">
          <Jobpost />
        </div>
      )}

      <div class="modal " tabindex="-1" id="job-post">
        <div class="  modal-dialog w-100  ">
          <div class="    modal-container modal-content  ">
            <div class="modal-body  px-4">
              <div className="d-flex flex-column">
                <div className="d-flex mb-3 flex-column">
                  <p className="greetings-title current-projet-below-text mb-1 ">
                    UI/UX Designer
                  </p>
                  <div className="w-75">
                    <div className="job-post-info d-flex flex-row align-items-start justify-content-between">
                      <div className="me-1  job-post-info-text  d-flex flex-row align-items-center justify-content-center  ">
                        <img src={walletIcon} className="me-1" /> Fixed price
                      </div>
                      <div className="me-1  job-post-info-text  d-flex flex-row align-items-center justify-content-center  ">
                        <img src={moneyIcon} className="me-1" /> Budget:$22
                      </div>
                      <div className="me-1  job-post-info-text  d-flex flex-row align-items-center justify-content-center  ">
                        <img src={locationIcon} className="me-1" /> United
                        States
                      </div>
                      <div className="me-1  job-post-info-text  d-flex flex-row align-items-center justify-content-center  ">
                        <img src={clockIcon} className="me-1" /> 6m ago
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex mb-3 flex-column">
                  <p className="me-3 skills-head    mb-1  ">Job Description</p>
                  <div className="w-100">
                    <p className="job-post-text mb-0">
                      Lorem ipsum dolor sit amet consectetur. Id hac maecenas
                      vitae non nec nullam magna magna ut. Ut amet congue non
                      dui. Consequat duis quisque id a dignissim nibh porttitor
                      habitant dapibus. Arcu praesent facilisis sit ultrices
                      pellentesque erat nunc egestas. Sit tortor vulputate neque
                      vehicula vel nulla accumsan leo. Scelerisque odio nibh
                      malesuada semper tristique tristique risus. Enim donec
                      duis nulla ac morbi faucibus sit vitae.
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-3 flex-column">
                  <p className="me-3 skills-head    mb-1  ">Skills Required</p>
                  <div className="w-100 d-flex flex-row">
                    <div className="job-skills rounded-pill bg-white px-3 py-1  me-2">
                      Figma
                    </div>
                    <div className="job-skills rounded-pill bg-white px-3 py-1  me-2">
                      User Interface Design
                    </div>
                    <div className="job-skills rounded-pill bg-white px-3 py-1  me-2">
                      Figma
                    </div>
                  </div>
                </div>

                <div className="d-flex mb-3 flex-column">
                  <p className="me-3 skills-head    mb-1  ">About Client</p>
                  <div className="w-100 d-flex flex-row"></div>
                </div>
                <div className="w-100 d-flex flex-row justify-content-end">
                  <button
                    style={{ color: "#7D8FB3 !important" }}
                    class="google-button   w-25  rounded-pill"
                  >
                    Save
                  </button>
                  <button class="sign-in-button w-25  rounded-pill">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
