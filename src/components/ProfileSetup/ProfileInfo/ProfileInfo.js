import React from "react";
import "./ProfileInfo.css";

function ProfileInfo({ onNext }) {
  const handleNextClick = () => {
    onNext();
  };
  return (
    <div className="d-flex flex-column    h-100 ps-5    ">
      <div className="title-container d-flex flex-column w-100 ">
        <h3>Personal Information</h3>
        <p>
          Your personal details help us create a better experience for you and
          enhance <br /> your professional connections.
        </p>
      </div>

      <div className="w-100">
        <div class="mb-3 w-75  ">
          <label for="fullname" class="form-label mb-1 ms-3">
            Full name
          </label>
          <input
            type="text"
            class="form-control input-text shadow-none rounded-5"
            id="fullname"
            placeholder="Sehar Kh"
          />
        </div>

        <div class="mb-3 w-75   ">
          <label for="Username" class="form-label mb-1 ms-3">
            Username
          </label>
          <input
            type="text"
            class="form-control  input-text shadow-none rounded-5"
            id="Username"
            placeholder="Sehar436"
          />
        </div>
        <div class="mb-3 w-75 d-none ">
          <label for="Email" class="form-label mb-1 ms-3">
            Email
          </label>
          <input
            type="email"
            class="form-control input-text shadow-none rounded-5"
            id="Email"
            placeholder="Sehar.kh@gmail.com"
          />
        </div>
        <div class="mb-3 w-75  ">
          <label for="description" class="form-label mb-1 ms-3">
            Description
          </label>
          <textarea
            class="form-control text-area-text shadow-none rounded-3"
            id="description"
            rows="3"
            placeholder="Tell us about your project in detail. What's the scope, goal, and impact? The more you share, the better we can match you with the perfect freelancer."
          />
          <div
            id="descriptionHelp"
            class="  description-help d-flex flex-row justify-content-end"
          >
            700 words
          </div>
        </div>
      </div>

      <div className="d-flex  w-75 flex-row justify-content-end align-items-center">
        <button
          style={{
            backgroundColor: "#F2F2F2",
            color: "#BDBDBD",

            border: "none",
            fontSize: "12px",
            fontFamily: "Roboto",
          }}
          className="  w-50   py-2   d-flex flex-row justify-content-center align-items-center  rounded-pill "
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProfileInfo;
