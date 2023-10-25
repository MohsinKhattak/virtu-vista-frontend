import React from "react";
import progressIcon from "../../../assets/icons/Ellipse.svg";
import ellipseGreen from "../../../assets/icons/EllipseGreen.svg";
import avatar from "../../../assets/images/Avatar 2.png";
import "./JobProgress.css";
import ClientJobPost from "../ClientJobPost/ClientJobPost";
function JobProgress({ role }) {
  return (
    <div className="d-flex flex-column ">
      {role == "client" ? (
        <ClientJobPost />
      ) : (
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
                <div className="d-flex flex-column align-items-start justify-content-center  w-75">
                  <div className="d-flex flex-row align-items-center   w-100   ">
                    <p className="price-tag greetings-title my-0 me-2">
                      Expert Wix Website Designer
                    </p>
                    <div className="payment-verified-text border bg-white  d-flex flex-row  px-3 rounded-5">
                      <img src={progressIcon} className="me-1" />
                      <div>In Progress</div>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="price-tag my-0">Amount:$22</p>
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
                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-1">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      Client
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      <img src={avatar} className="rounded-5 me-1 h-50" />
                      Richard Charles
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-3">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      Start Date
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      21 Sep, 2020
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-3">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      End Date
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      21 Sep, 2020
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-3">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      Status
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      <select
                        class="greetings-text  form-select w-25 rounded-5 px-3 shadow-none"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected>In Progress</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="custom-accordion-item mb-3 accordion-item rounded-top-4">
            <h2 class="custom-accordion-header accordion-header ">
              <button
                style={{ backgroundColor: "#757DE81A" }}
                class="custom-accordion-button accordion-button shadow-none  rounded-top-4  "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne2"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <div className="d-flex flex-column align-items-start justify-content-center  w-75">
                  <div className="d-flex flex-row align-items-center   w-100   ">
                    <p className="price-tag greetings-title my-0 me-2">
                      Expert Wix Website Designer
                    </p>
                    <div className="payment-verified-text verified-status  border bg-white  d-flex flex-row  px-3 rounded-5">
                      <img src={ellipseGreen} className="me-1" />
                      <div>In Progress</div>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <p className="price-tag my-0">Amount:$81</p>
                  </div>
                </div>
              </button>
            </h2>
            <div
              id="collapseOne2"
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
                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-1">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      Client
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center jw-75 ">
                      <img src={avatar} className="rounded-5 me-1 h-50" />
                      Richard Charles
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-3">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      Start Date
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      21 Sep, 2020
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-3">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      End Date
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      21 Sep, 2020
                    </div>
                  </div>

                  <div className="d-flex flex-row align-items-center justify-content-start light-border py-3">
                    <div className="greetings-title price-tag d-flex flex-row align-items-center w-25 ">
                      Status
                    </div>
                    <div className="greetings-text d-flex flex-row align-items-center w-75 ">
                      <select
                        class="greetings-text  form-select w-25 rounded-5 px-3 shadow-none"
                        id="floatingSelect"
                        aria-label="Floating label select example"
                      >
                        <option selected>In Progress</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobProgress;
