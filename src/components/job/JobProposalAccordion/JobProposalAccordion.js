import React from "react";
import "./JobProposalAccordion.css";

function JobProposalAccordion() {
  return (
    <div>
      <div className="d-flex flex-row align-items-center justify-content-start w-100 border-bottom mb-3">
        <p className="notification-title">Job Progress</p>
      </div>

      <div className="d-flex flex-column ">
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
                <div className="d-flex flex-row align-items-center justify-content-end w-100">
                  <div className="d-flex flex-column align-items-start justify-content-center  w-75">
                    <div className="d-flex flex-row align-items-center   w-100   ">
                      <p className="price-tag greetings-title my-0 me-2">
                        Expert Wix Website Designer
                      </p>
                    </div>
                    <div className="d-flex flex-row">
                      <p className="price-tag my-0">Amount:$22</p>
                    </div>
                  </div>
                  <div className="w-25 d-flex flex-row">
                    <button className="decline-button-text accept-button-text border bg-white d-flex   d-flex flex-row   px-4 py-1 rounded-5">
                      <div>Decline</div>
                    </button>
                    <button className="accept-button-text border bg-white d-flex   d-flex flex-row   px-4 py-1 rounded-5">
                      Accept
                    </button>
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
                      Category
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      UI/UX Design
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-3">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      Skills Required
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      <div className="job-skills rounded-pill px-3 py-1  me-2">
                        Figma
                      </div>
                      <div className="job-skills rounded-pill px-3 py-1  me-2">
                        User Interface Design
                      </div>
                      <div className="job-skills rounded-pill px-3 py-1  me-2">
                        Figma
                      </div>
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-3">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      Skill Level
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      Intermediate
                    </div>
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

export default JobProposalAccordion;
