import React from "react";
import avatar from "../../../assets/images/Avatar 2.png";
function ClientRecentJobProgress() {
  return (
    <div className="reccent-job-progress d-flex flex-column ">
      <div class="accordion  rounded-4" id="accordionExample">
        <div class="custom-accordion-item mb-3 accordion-item rounded-top-4">
          <h2 class="custom-accordion-header accordion-header ">
            <button
              style={{ backgroundColor: "#757DE81A" }}
              class="custom-accordion-button accordion-button shadow-none  rounded-top-4  "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne1"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <div className="d-flex flex-column align-items-start  justify-content-center w-100">
                <p className="price-tag greetings-title my-1 me-2">
                  Expert Wix Website Designer
                </p>
                <div className="status-area  d-flex flex-row align-items-center justify-content-around  ">
                  <div className="d-flex flex-column  h-100 align-items-start justify-content-center    pe-4">
                    <p className="recent-job-post-text my-0">Status</p>
                    <div
                      className="custom-progress"
                      role="progressbar"
                      aria-label="Basic example"
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      <div className="custom-progress-bar text-center">
                        <p className="progress-bar-text ">Remaining Days 1/2</p>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex flex-column h-100  px-3 align-items-start justify-content-center     px-4">
                    <p className="recent-job-post-text my-0">Start Date 20</p>
                    <small className="recent-job-post-secondary-text ">
                      Jan, 2022
                    </small>
                  </div>

                  <div className="d-flex flex-column h-100  px-3 align-items-start justify-content-center     px-4">
                    <p className="recent-job-post-text my-0">End Date 20</p>
                    <small className="recent-job-post-secondary-text ">
                      Jan, 2022
                    </small>
                  </div>

                  <div className="d-flex flex-column h-100  px-3 align-items-start justify-content-center     px-4">
                    <p className="recent-job-post-text my-0">Budget Spent</p>
                    <small className="recent-job-post-secondary-text ">
                      $15000
                    </small>
                  </div>
                </div>
              </div>
            </button>
          </h2>
          <div
            id="collapseOne1"
            class="accordion-collapse collapse show "
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body d-flex flex-column">
              <div className="d-flex flex-column light-border">
                <p className="greetings-title price-tag mb-1">
                  Project Description
                </p>
                <p className="job-post-text">
                  Expert Wix Web Designer available to provide one mile extra
                  from your expectations, whether it's Wix landing page, WIX
                  Website Design or Redesign. You will be assisted here with
                  also WordPress and Shopify if you're using or prefer them.
                </p>
              </div>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row align-items-center justify-content-start light-border py-3">
                  <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                    Collaboration
                  </div>
                  <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                    <img src={avatar} className="rounded-5 me-1 h-50" />
                    Richard Charles
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientRecentJobProgress;
