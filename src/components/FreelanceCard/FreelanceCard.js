import React from "react";
import "./FreelanceCard.css";
import avatar from "../../assets/images/AvatarImage-2.png";
import availableIcon from "../../assets/icons/flash.svg";
import congratsImage from "../../assets/images/congratulations.png";
import closeIcon from "../../assets/icons/X.svg";

import moneyIcon from "../../assets/icons/moneys-small.svg";
import locationIcon from "../../assets/icons/location-small.svg";
import walletIcon from "../../assets/icons/empty-wallet.svg";
import clockIcon from "../../assets/icons/clock-small.svg";

function FreelanceCard() {
  return (
    <div>
      <div className="freelance-card me-4 d-flex flex-column border rounded-4 py-4">
        <div className="d-flex px-4 mb-2 w-100 flex-row align-items-start justify-content-start">
          <img src={avatar} style={{ borderRadius: "50%" }} className="me-3" />

          <div className="d-flex flex-column ">
            <p className="username-text mb-1">Jenny Wilson</p>
            <p className="drag-drop-files mb-1" style={{ color: "#6B7A99" }}>
              UX/UI Designer
            </p>
            <div
              style={{ backgroundColor: "#28A745" }}
              className="d-flex flex-row p-1   rounded-pill    align-items-center justify-content-center"
            >
              <img src={availableIcon} className="my-0" />

              <div>
                <p className="availablity-text my-0">Available</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex px-4 mb-2 flex-column align-items-start justify-content-center">
          <p className="info-desc  my-1">Skills</p>
          <div className="d-inline-flex flex-wrap align-items-center">
            <div className="job-skills job-skills-green rounded-pill px-3 py-1 mb-1 me-2">
              Figma
            </div>
            <div className="job-skills rounded-pill px-3 py-1 mb-1 me-2">
              User Interface Design
            </div>

            <div className="job-skills job-skills-yellow rounded-pill px-3 py-1 mb-1 me-2">
              Figma
            </div>
          </div>
          <div className="job-skills job-skills-grey rounded-pill px-3 py-1 mb-1 me-2">
            User Interface Design
          </div>
        </div>
        <div className="d-flex mb-2 project-details py-2 flex-row w-100    align-items-center jusitfy-content-around">
          <div className="d-flex w-50 flex-column border-end-light align-items-center justify-content-center">
            <p className="job-post-text text-dark mb-1">Budget</p>
            <p className="hourly-rate">$22 / hour</p>
          </div>
          <div className="d-flex w-50 flex-column align-items-center justify-content-center">
            <p className="job-post-text text-dark mb-1">Projects</p>
            <p className="hourly-rate">110</p>
          </div>
        </div>

        <div className=" d-flex flex-row align-items-center justify-content-center">
          <button
            data-bs-toggle="modal"
            data-bs-target="#freelancer-details"
            className="job-skills w-75 more-details-button d-flex flex-row aling-items-center justify-content-center rounded-pill py-1"
          >
            More Details
          </button>
        </div>
      </div>

      <div class="modal " tabindex="-1" id="freelancer-details">
        <div class="  modal-dialog w-100 modal-lg ">
          <div class="    modal-container modal-content  ">
            <div class="modal-body  px-4">
              <div className="d-flex flex-column">
                <div className="d-flex mb-3 flex-column ">
                  <p className="greetings-title current-projet-below-text mb-1 ">
                    UI/UX Designer
                  </p>
                  <p className="below-greeting-text mb-0">
                    Lorem ipsum dolor sit amet consectetur. Quis feugiat mi ut
                    et. Donec cursus blandit enim consequat. Justo mus non quam
                    tortor eu.
                  </p>

                  <div className="d-flex flex-row align-items-center justify-content-between w-100">
                    <div>
                      <img src={avatar} className="rounded-5 me-1 h-50" />
                    </div>

                    <div className="d-flex   flex-column align-items-start justify-content-center   w-100">
                      <div className="d-flex flex-row   align-items-end  justify-content-start     w-100">
                        <div className="d-flex flex-row align-items-center justify-content-center ">
                          <p className="freelancer-name  my-0 me-2 ">
                            Mohsin Zafar
                          </p>
                        </div>
                        <div
                          style={{ backgroundColor: "#28A745" }}
                          className="d-flex flex-row px-2 py-1       rounded-pill    align-items-center justify-content-center"
                        >
                          <img src={availableIcon} className="my-0" />

                          <div>
                            <p className="availablity-text my-0">Available</p>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex flex-row  ">
                        <p className="upper-text text-secondary my-0">
                          UI/UX Designer
                        </p>
                      </div>
                      <div className="job-post-info d-flex flex-row align-items-start justify-content-between ">
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
                </div>

                <div className="d-flex  flex-row align-items-center justify-content-start mb-2 w-100">
                  <div className="d-flex flex-row me-3">
                    <p
                      style={{ color: "#757DE8" }}
                      className=" skills-head my-0 "
                    >
                      Skills
                    </p>
                  </div>
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

                <div className="d-flex flex-column mb-2">
                  <div className="d-flex flex-row me-3">
                    <p
                      style={{ color: "#757DE8" }}
                      className=" skills-head my-0 "
                    >
                      About
                    </p>
                  </div>

                  <div className="d-flex flex-row me-3">
                    <p className="job-post-text ">
                      Expert Wix Web Designer available to provide one mile
                      extra from your expectations, whether it's Wix landing
                      page, WIX Website Design or Redesign. You will be assisted
                      here with also WordPress and Shopify if you're using or
                      prefer them. Expert Wix Web Designer available to provide
                      one mile extra from your expectations, whether it's Wix
                      landing page, WIX Website Design or Redesign. You will be
                      assisted here with also WordPress and Shopify if you're
                      using or prefer them.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-column  mb-2">
                  <div className="d-flex flex-row me-3">
                    <p
                      style={{ color: "#757DE8" }}
                      className=" skills-head my-0 "
                    >
                      Experience
                    </p>
                  </div>

                  <div className="d-flex flex-column me-3">
                    <div className="d-flex flex-row align-items-center justify-content-start">
                      <p className="experience-text my-0">
                        Designation: UI/UX Designer
                      </p>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-start">
                      <p className="experience-text my-0">Company: ABC</p>
                    </div>
                    <div className="d-flex flex-row align-items-center justify-content-start">
                      <p className="experience-text my-0">
                        October 25, 2019 - Present
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-100 d-flex flex-row justify-content-end">
                  <button
                    style={{ color: "#7D8FB3 !important" }}
                    class="google-button   w-25  rounded-pill"
                  >
                    Cancel
                  </button>
                  <button class="sign-in-button w-25  rounded-pill">
                    Send Job Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreelanceCard;
