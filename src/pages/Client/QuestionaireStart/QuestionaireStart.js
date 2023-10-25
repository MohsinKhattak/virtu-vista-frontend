import React, { useState } from "react";
import logoWithText from "../../../assets/images/virtu-vista-logo.png";
import { Link } from "react-router-dom";

function QuestionaireStart() {
  return (
    <div className="container-fluid py-5 px-5 vh-100">
      <div className="d-flex h-100 flex-column align-items-center justify-content-center">
        <div className="upper-col h-25   w-100 d-flex flex-column align-items-center justify-content-end">
          <div className="logo-container">
            <img src={logoWithText} className="topbar-logo " alt="logo" />
          </div>
          <div className="d-flex profile-title-container flex-column align-items-center jusity-content-center">
            <h1 className="profile-title  ">Personality Questionaire</h1>
            <p className="profile-title-para text-center">
              Hello and welcome to VirtuVista! Our mission goes beyond
              resumes—we strive to find you
              <br /> a Virtual Assistant who genuinely complements your world.
              Are you ready to discover your ideal match?"
            </p>
          </div>
        </div>

        <div className="lower-col h-75 w-100 d-flex flex-row align-items-start justify-content-center">
          <div className="right-col w-50 d-flex flex-column align-items-center justify-content-start h-100">
            <div className="d-flex w-100 flex-column align-items-center justify-content-center">
              <p className="mb-1 questions-progress">1 / 9</p>
              <div className="d-flex flex-row align-items-center justify-content-center w-25">
                <hr className="me-2 w-25 my-0" />
                <hr className="w-25 my-0" />
              </div>
              <div className="question-container">
                <p className="question-text">
                  This should take about 5-7 minutes of your time.
                </p>
              </div>
            </div>
            <div className="d-flex flex-row align-items-center justify-content-start">
              <Link to="/personaily-questionaire">
                <button className="sign-in-button d-flex flex-row align-items-center jsutify-content-center py-3 px-5 rounded-5">
                  Start
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionaireStart;
