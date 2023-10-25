import React, { useState } from "react";
import "./PersonalityQuestionaire.css";

import logoWithText from "../../../assets/images/virtu-vista-logo.png";
import FirstQuestion from "../../../components/Questions/FirstQuestion/FirstQuestion";
import SecondQuestion from "../../../components/Questions/SecondQuestion/SecondQuestion";

function PersonalityQuestionaire() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextClick = () => {
    if (currentQuestionIndex < 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="container-fluid py-5 px-5 vh-100">
      <div className="d-flex h-100 flex-column align-items-center justify-content-center">
        <div className="d-flex w-75 flex-row align-items-center justify-content-start">
          <button
            className="questionnaire-check text-secondary px-5   text-center   rounded-pill"
            onClick={handleBackClick}
          >
            Back
          </button>
        </div>
        <div className="upper-col h-25   w-100 d-flex flex-column align-items-center justify-content-end">
          <div className="logo-container">
            <img src={logoWithText} className="topbar-logo " alt="logo" />
          </div>
          <div className="d-flex profile-title-container flex-column align-items-center jusity-content-center">
            <h1 className="profile-title  ">Personality Questionaire</h1>
            <p className="profile-title-para text-center">
              Please answer the following questions to better understand your
              personality
            </p>
          </div>
        </div>

        <div className="lower-col h-75   w-100 d-flex flex-row align-items-start justify-content-center">
          <div className="right-col w-50 d-flex flex-column align-items-center justify-content-start  h-100    ">
            <div className="d-flex w-100  flex-column align-items-center justify-content-center">
              <p className="mb-1 questions-progress">
                {currentQuestionIndex + 1}/2
              </p>
              <div className="d-flex flex-row align-items-center justify-content-center w-25">
                <hr className="me-2 w-25 my-0" />
                <hr className=" w-25 my-0" />
              </div>

              {currentQuestionIndex === 0 ? (
                <FirstQuestion />
              ) : (
                <SecondQuestion />
              )}
            </div>
          </div>
        </div>
        <div className="d-flex w-75 flex-row align-items-center justify-content-end">
          <button
            className="questionnaire-check text-secondary px-5   text-center   rounded-pill"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default PersonalityQuestionaire;
