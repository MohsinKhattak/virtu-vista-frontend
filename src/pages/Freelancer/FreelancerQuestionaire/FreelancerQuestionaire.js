import React, { useState, useEffect } from "react";
import logoWithText from "../../../assets/images/virtu-vista-logo.png";
import { useLocation } from "react-router-dom";
import axios from "axios";
const questions = [
  {
    question: "Professional Experience",
    options: [
      "Less than 1 year",
      "1-2 years",
      "2-5 years",
      "5-10 years",
      "Over 10 years",
    ],
    multiSelect: false,
  },
  {
    question: "Technical Skills",
    options: [
      "Microsoft Office Suite",
      "Google Workspace",
      "Trello",
      "Asana",
      "Mailchimp",
      "Slack",
      "Zoom",
      "WordPress",
      "Canva",
      "CRM Tools",
      "None",
      "Other (please specify)",
    ],
    multiSelect: true,
  },
  {
    question: "Task Competency",
    options: [
      "Email Management",
      "Calendar Management",
      "Data Entry",
      "Customer Support",
      "Cold Calling",
      "Social Media Management",
      "Market Research",
      "Financial Management",
      "Sales and Marketing",
      "Other (please specify)",
    ],
    multiSelect: true,
  },
  {
    question: "Industry Familiarity",
    options: [
      "Healthcare",
      "E-commerce",
      "Real Estate",
      "IT Services",
      "Financial Services",
      "Education",
      "Travel",
      "Non-Profit",
      "Other (please specify)",
    ],
    multiSelect: true,
  },
  {
    question: "Education and Certifications",
    options: [
      "High School / Secondary School",
      "Associate's Degree or Equivalent",
      "Bachelor's Degree",
      "Master's Degree or Higher",
      "Vocational/Trade School or Certification",
      "Yes (please specify)",
      "No",
    ],
    multiSelect: false,
  },
  {
    question: "Communication Proficiency",
    options: ["Beginner", "Intermediate", "Advanced", "Native-level"],
    multiSelect: false,
  },
  {
    question: "Work Preferences",
    options: [
      "Less than 10 hours",
      "10-20 hours",
      "20-30 hours",
      "30-40 hours",
      "40+ hours",
    ],
  },
  {
    question: "Preferred Working Time Frames (in GMT)",
    options: [
      "00:00 - 06:00",
      "06:00 - 12:00",
      "12:00 - 18:00",
      "18:00 - 24:00",
    ],
    multiSelect: true,
  },
  {
    question: "Teamwork Preference",
    options: [
      "Work Solo",
      "Collaborate with Team",
      "Lead/Manage Tasks",
      "Interact with Clients/Stakeholders",
    ],
  },
  {
    question: "Budget Preference",
    options: ["Below $5/hr", "$5-$8/hr", "$8-$12/hr", "$12+/hr"],
  },
  {
    question: "Budget Preferences",
    options: [
      "Fixed: I have a minimum rate I can't go below",
      "Moderately Flexible: I can adjust my rate for the right opportunity",
      "Highly Flexible: I'm open to negotiation for a great match",
    ],
  },
  {
    question: "Cultural Fit",
    options: [
      "Task-Oriented",
      "Relationship-Oriented",
      "Innovator",
      "Detail-Oriented",
      "Big Picture Thinker",
      "Collaborative",
      "Independent",
      "Client-Focused",
      "Adaptable",
    ],
    multiSelect: true,
  },
  {
    question: "Services as a VA",
    options: [
      "Basic Administrative Tasks (e.g., data entry, email management)",
      "Specialized Skills (e.g., social media management, customer service)",
      "Project Management (e.g., coordinating multiple tasks, overseeing projects)",
      "Content Strategy (e.g., content creation, blog management)",
      "End-to-End Management (e.g., managing entire processes, strategic planning)",
      "Specialized Technical Skills (e.g., web development, data analysis)",
    ],
    multiSelect: true,
  },
];
function FreelancerQuestionnaire(props) {
  const location = useLocation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState(
    Array(questions.length).fill([])
  );
  const [isCompleted, setIsCompleted] = useState(false);

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
      // Combine the answers with data from the previous screen
      const updatedData = { ...location.state, answers: selectedOptions };
      submitDataToBackend(updatedData);
      console.log(updatedData);
    }
  };

  const submitDataToBackend = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/virtual-assistant/addVA",
        data
      );

      if (response.status === 201) {
        console.log("Success");
        console.log("Response from the backend:", response.data);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleBackClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleOptionClick = (option) => {
    const updatedSelectedOptions = [...selectedOptions[currentQuestionIndex]];

    if (questions[currentQuestionIndex].multiSelect) {
      const optionIndex = updatedSelectedOptions.indexOf(option);
      if (optionIndex === -1) {
        updatedSelectedOptions.push(option);
      } else {
        updatedSelectedOptions.splice(optionIndex, 1);
      }
    } else {
      updatedSelectedOptions[0] = option;
    }

    const newSelectedOptions = [...selectedOptions];
    newSelectedOptions[currentQuestionIndex] = updatedSelectedOptions;
    setSelectedOptions(newSelectedOptions);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="container-fluid py-5 px-5 vh-100">
      <div className="d-flex h-100 flex-column align-items-center justify-content-center">
        <div className="d-flex w-75 flex-row align-items-center justify-content-start">
          {currentQuestionIndex > 0 && (
            <button
              className="questionnaire-check text-secondary px-5 text-center rounded-pill"
              onClick={handleBackClick}
            >
              Back
            </button>
          )}
        </div>

        <div className="upper-col h-25 w-100 d-flex flex-column align-items-center justify-content-end">
          <div className="logo-container">
            <img src={logoWithText} className="topbar-logo" alt="logo" />
          </div>
          <div className="d-flex profile-title-container flex-column align-items-center justify-content-center">
            <h1 className="profile-title">
              Virtual Assistant Skills and Experience Questionnaire
            </h1>
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
                            currentQuestion.multiSelect
                              ? selectedOptions[currentQuestionIndex].includes(
                                  option
                                )
                                ? "selected"
                                : ""
                              : selectedOptions[currentQuestionIndex][0] ===
                                option
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
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex w-75 flex-row align-items-center justify-content-end">
          <button
            className="questionnaire-check text-secondary px-5 text-center rounded-pill"
            onClick={handleNextClick}
          >
            {isCompleted ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default FreelancerQuestionnaire;
