import React from "react";
import "./ExperienceComponent.css";
import plusSign from "../../../assets/icons/plus-sign.svg";
import editIcon from "../../../assets/icons/editIcon.svg";
function ExperienceComponent({ onNext }) {
  const handleNextClick = () => {
    onNext();
  };
  return (
    <div className="d-flex flex-column    h-100 ps-5    ">
      <div className="title-container d-flex flex-column w-100 ">
        <h3>Experience</h3>
        <p>
          Display your professional journey, roles, and achievements to showcase
          <br />
          expertise and build trust with clients.
        </p>
      </div>
      <div className="experience-container p-3 rounded-4 mb-3  w-75 d-flex flex-row align-items-center justify-content-between">
        <div className="w-75 d-flex flex-column align-items-start    ">
          <p className="job-title my-1">UI/UX Designer</p>
          <p className="company-name my-1">Company: ABC</p>
          <p className="company-name">October 25, 2019 - Present</p>
        </div>

        <div className="d-flex   w-75 h-100 flex-row align-items-start justify-content-end">
          <div className=" p-2 mx-1 rounded-5 d-flex flex-row align-items-center justify-content-conter bg-white  ">
            <img src={plusSign} />
          </div>
          <div className=" p-2 ms-1 rounded-5 d-flex flex-row align-items-center justify-content-conter bg-white  ">
            <img src={editIcon} />
          </div>
        </div>
      </div>
      <div class="modal     " tabindex="-1" id="add-experience">
        <div class="  modal-dialog w-75  ">
          <div class="    modal-container modal-content ">
            <div class="modal-header border-0">
              <h5 class="modal-title mt-3 ms-3">Add Experience</h5>
            </div>
            <div class="modal-body px-4">
              <div class="mb-2 w-100 ">
                <label for="title" class="form-label mb-1 ms-3">
                  Title
                </label>
                <input
                  type="text"
                  class="form-control input-text shadow-none rounded-5"
                  id="title"
                  placeholder="UI/UX designer"
                />
              </div>

              <div class="mb-2 w-100 ">
                <label for="Company" class="form-label mb-1 ms-3">
                  Company
                </label>
                <input
                  type="text"
                  class="form-control input-text shadow-none rounded-5"
                  id="Company"
                  placeholder="ABC"
                />
              </div>

              <div class="mb-2 w-100 ">
                <label for="Location" class="form-label mb-1 ms-3">
                  Location
                </label>
                <input
                  type="text"
                  class="form-control input-text shadow-none rounded-5"
                  id="Location"
                  placeholder="US"
                />
              </div>

              <div class="w-100 mb-2 d-flex flex-row justify-content-between">
                <div class="w-50  mb-3">
                  <label for="startdate" class="form-label mb-1 ms-3">
                    Start Date
                  </label>
                  <input
                    type="text"
                    class="form-control input-text shadow-none rounded-5"
                    id="startdate"
                    placeholder="6/19/14"
                  />
                </div>
                <div class="w-50 mb-3  ms-2">
                  <label for="enddate" class="form-label mb-1 ms-3">
                    End Date
                  </label>
                  <input
                    type="text"
                    class="form-control input-text shadow-none rounded-5"
                    id="enddate"
                    placeholder="6/19/14"
                  />
                </div>
              </div>

              <div className="w-100 d-flex flex-row justify-content-end">
                <button class="sign-in-button w-50  rounded-pill">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex  w-75 flex-row justify-content-end align-items-center">
        <button
          // data-bs-toggle="modal"
          // data-bs-target="#add-experience"
          onClick={handleNextClick}
          className=" sign-in-button w-50   py-2   d-flex flex-row justify-content-center align-items-center  rounded-pill "
        >
          Add Experience
        </button>
      </div>
    </div>
  );
}

export default ExperienceComponent;
