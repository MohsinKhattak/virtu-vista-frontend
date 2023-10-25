import React, { useState } from "react";
import badgeIcon from "../../../assets/icons/Badge.svg";
import "./SecondQuestion.css";
function SecondQuestion() {
  const [isCheckedUI, setIsCheckedUI] = useState(false); // State for "User Interface Design" button
  const [isCheckedFigma, setIsCheckedFigma] = useState(false); // State for "Figma" button

  const handleUICheckboxClick = () => {
    setIsCheckedUI(!isCheckedUI);
  };

  const handleFigmaCheckboxClick = () => {
    setIsCheckedFigma(!isCheckedFigma);
  };
  return (
    <div>
      <div className="mb-3">
        <p className="question">Tell us about the project's nature.</p>
        <div className="d-flex flex-row select-options-area justify-content-center">
          <div
            className={`questionnaire-check me-3 d-flex flex-row align-items-center px-5 py-1 rounded-pill ${
              isCheckedUI ? "selected" : ""
            }`}
            id="checkElementUI"
            onClick={handleUICheckboxClick}
          >
            Short Term Project
            <img src={badgeIcon} className="checkIcon" alt="Check Icon" />
          </div>
          <div
            className={`questionnaire-check me-3 d-flex flex-row align-items-center px-5 py-1 rounded-pill ${
              isCheckedFigma ? "selected" : ""
            }`}
            id="checkElementFigma"
            onClick={handleFigmaCheckboxClick}
          >
            Long Term Project
            <img src={badgeIcon} className="checkIcon" alt="Check Icon" />
          </div>
        </div>
      </div>

      <div className="mb-3">
        <p className="question">
          Tell us our budget or set the stage for compensation
        </p>
        <div className="d-flex flex-row select-options-area justify-content-center">
          <div
            className={`questionnaire-check me-3 d-flex flex-row align-items-center px-5 py-1 rounded-pill ${
              isCheckedUI ? "selected" : ""
            }`}
            id="checkElementUI"
            onClick={handleUICheckboxClick}
          >
            Projet Based
            <img src={badgeIcon} className="checkIcon" alt="Check Icon" />
          </div>
          <div
            className={`questionnaire-check me-3 d-flex flex-row align-items-center px-5 py-1 rounded-pill ${
              isCheckedFigma ? "selected" : ""
            }`}
            id="checkElementFigma"
            onClick={handleFigmaCheckboxClick}
          >
            Hourly
            <img src={badgeIcon} className="checkIcon" alt="Check Icon" />
          </div>
        </div>
      </div>

      <div className="d-flex ps-5 w-100 flex-row align-items-center justify-content-between">
        <div className="d-flex mb-3 w-50 flex-column align-items-start justify-content-center">
          <label for="username" class="custom-label color-purple">
            To
          </label>
          <div className="d-flex flex-row bg-white align-items-center border rounded-4 px-2">
            <input
              type="text"
              class="input-box ib-placeholder rounded-4 px-2  w-100   "
              id="username"
              placeholder="$22"
            />
          </div>
        </div>
        <div className="d-flex mb-3 w-50 flex-column align-items-start  justify-content-center">
          <label for="username" class="custom-label color-purple">
            From
          </label>
          <div className="d-flex flex-row bg-white align-items-center border rounded-4 px-2">
            <input
              type="text"
              class="input-box ib-placeholder rounded-4 px-2  w-100   "
              id="username"
              placeholder="$22"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondQuestion;
