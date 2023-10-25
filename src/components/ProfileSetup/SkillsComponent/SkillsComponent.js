import React from "react";
import "./SkillsComponent.css";
import crossIcon from "../../../assets/icons/cross.svg";
function SkillsComponent({ onNext }) {
  const handleNextClick = () => {
    onNext();
  };
  return (
    <div className="d-flex flex-column    h-100 ps-5    ">
      <div className="title-container d-flex flex-column w-100 ">
        <h3>Skills</h3>
        <p>
          Highlight your strengths through listed skills to connect with clients
          seeking <br />
          your unique talents.
        </p>
      </div>

      <div class="mb-3 w-75   ">
        <label for="addskill" class="form-label mb-1 ms-3">
          Add Skills
        </label>
        <input
          type="text"
          class="form-control  input-text shadow-none rounded-5"
          id="addskill"
          placeholder="UI/UX Designer"
        />
      </div>

      <div className="d-flex mb-3 flex-row  align-items-center justify-content-start">
        <button className="skill-button me-1 d-flex rounded-5 flex-row align-items-center justify-content-center">
          User Interface
          <img src={crossIcon} className="ms-1" />
        </button>

        <button className="skill-button me-1 d-flex rounded-5 flex-row align-items-center justify-content-center">
          UI
          <img src={crossIcon} className="ms-1" />
        </button>

        <button className="skill-button me-1 d-flex rounded-5 flex-row align-items-center justify-content-center">
          Design
          <img src={crossIcon} className="ms-1" />
        </button>
      </div>
      <div className="d-flex  w-75 flex-row justify-content-end align-items-center">
        <button
          onClick={handleNextClick}
          className=" sign-in-button w-50   py-2   d-flex flex-row justify-content-center align-items-center  rounded-pill "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SkillsComponent;
