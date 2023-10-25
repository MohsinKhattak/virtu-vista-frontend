import React, { useState } from "react";
import logoWithText from "../../../assets/images/virtu-vista-logo.png";
import "../PersonalityQuestionaire/PersonalityQuestionaire.css";
const questions = [
  {
    question: "What industry does your business operate in?",
    options: [
      "Technology",
      "Healthcare",
      "Real Estate",
      "E-commerce",
      "Other (please specify)",
    ],
  },
  {
    question: "What challenges do you aim to solve with a VA?",
    options: [
      "Email Management",
      "Data Entry",
      "Customer Service",
      "Calendar Management ",
      "Other (please specify)",
    ],
  },
  {
    question: "How many hours per week do you expect your VA to work?",
    options: ["1-10", "11-20", "21-30", "31-40", "41+"],
  },
  {
    question:
      "During what hours would you need your VA to be available? Please specify your time zone.",
    options: ["Morning", "Afternoon", "Evening", "Flexible"],
  },
  {
    question:
      "Are there particular skills or certifications you'd appreciate in a VA?",
    options: ["Yes (please specify)", "No"],
  },
  {
    question: "What's your budget range for VA services?",
    options: ["Below $5/hr", "$5-$8/hr", "$8-$12/hr", "$12+/hr"],
  },
  {
    question: "What is your comfort level with the budget you've set?",
    options: ["Fixed", "Moderately Flexible", "Highly Flexible"],
  },
  {
    question: "What would make you consider this VA service successful?",
  },
  {
    question:
      "You're almost there! Based on your responses, we will shortlist the top 3 VA profiles that best fit your needs. Ready to proceed?",
    options: [
      "Yes, I'm ready for the interviews",
      "No, I need more information",
    ],
  },
];
function NewQuestionScreen() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill(null)
  );

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      console.log(currentQuestion.question);
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionClick = (option) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestionIndex] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Modify the condition for displaying the custom input box
  const isCustomInputVisible =
    currentQuestion.options &&
    (selectedOptions[currentQuestionIndex] === "Other (please specify)" ||
      selectedOptions[currentQuestionIndex] === "Yes (please specify)" ||
      currentQuestion.question ===
        "What would make you consider this VA service successful?");

  return (
    <div className="container-fluid py-5 px-5 vh-100">
      <div className="d-flex h-100 flex-column align-items-center justify-content-center">
        <div className="d-flex w-75 flex-row align-items-center justify-content-start">
          <button
            className="questionnaire-check text-secondary px-5 text-center rounded-pill"
            onClick={handleBackClick}
          >
            Back
          </button>
        </div>

        <div className="upper-col h-25 w-100 d-flex flex-column align-items-center justify-content-end">
          <div className="logo-container">
            <img src={logoWithText} className="topbar-logo" alt="logo" />
          </div>
          <div className="d-flex profile-title-container flex-column align-items-center justify-content-center">
            <h1 className="profile-title">VirtuVista AI Client Matching</h1>
            <p className="profile-title-para text-center">
              Please answer the following questions to find your ideal match.
            </p>
          </div>
        </div>

        <div className="lower-col h-75 w-100 d-flex flex-row align-items-start justify-content-center">
          <div className="right-col w-100 d-flex flex-column align-items-center justify-content-start h-100">
            <div className="d-flex w-100 flex-column align-items-center justify-content-center">
              <p className="mb-1 questions-progress">
                {currentQuestionIndex + 1}/{questions.length}
              </p>
              <div className="d-flex flex-row align-items-center justify-content-center w-25">
                <hr className="me-2 w-25 my-0" />
                <hr className="w-25 my-0" />
              </div>

              <div className="question-container d-flex w-100 flex-column align-items-center">
                <p className="question-text">{currentQuestion.question}</p>
                {currentQuestion.options && (
                  <div className="options-list d-flex flex-wrap w-75 align-items-center justify-content-center">
                    {currentQuestion.options.map((option, index) => (
                      <div key={index}>
                        <button
                          className={`questionnaire-check me-3 d-flex flex-row mb-3 align-items-center px-5 py-1 rounded-pill ${
                            selectedOptions[currentQuestionIndex] === option
                              ? "selected"
                              : ""
                          }`}
                          onClick={() => handleOptionClick(option)}
                        >
                          {option}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
                {isCustomInputVisible && (
                  <div className="custom-input-container d-flex flex-row align-items-center justify-content-center w-100">
                    <input
                      className="w-75 rounded-2 p-2 custom-input-box shadow-none"
                      placeholder="please specify"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex w-75 flex-row align-items-center justify-content-end">
          <button
            className="questionnaire-check text-secondary px-5 text-center rounded-pill"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewQuestionScreen;
