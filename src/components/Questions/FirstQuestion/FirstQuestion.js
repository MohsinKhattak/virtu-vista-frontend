import React, { useState } from "react";
import badgeIcon from "../../../assets/icons/Badge.svg";
function FirstQuestion() {
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
      <p className="question">
        Describe your project's main goal and provide a brief overview of the
        scope and objectives. This will help us recommend freelancers who align
        with your vision.
      </p>
      <form
        class="d-flex w-100 mb-3 align-items-center align-items-center justify-content-around "
        role="search"
      >
        <div className="bg-white search-box  d-flex align-items-center justify-content-start   rounded-5 px-3   ">
          <input
            type="search "
            class="search-box-text d-flex justify-content-center align-items-center input-box rounded-5 px-2 bg-transparent text-align-center  w-100 ms-2"
            id="fullname"
            placeholder="Answer Here"
          />
        </div>
      </form>

      <p className="question">
        List the specific skills and expertise required for your project's
        success.
      </p>

      <div className="d-flex flex-row select-options-area justify-content-center">
        <div
          className={`questionnaire-check me-3 d-flex flex-row align-items-center px-5 py-1 rounded-pill ${
            isCheckedUI ? "selected" : ""
          }`}
          id="checkElementUI"
          onClick={handleUICheckboxClick}
        >
          User Interface Design
          <img src={badgeIcon} className="checkIcon" alt="Check Icon" />
        </div>
        <div
          className={`questionnaire-check me-3 d-flex flex-row align-items-center px-5 py-1 rounded-pill ${
            isCheckedFigma ? "selected" : ""
          }`}
          id="checkElementFigma"
          onClick={handleFigmaCheckboxClick}
        >
          Figma
          <img src={badgeIcon} className="checkIcon" alt="Check Icon" />
        </div>
      </div>
    </div>
  );
}

export default FirstQuestion;
