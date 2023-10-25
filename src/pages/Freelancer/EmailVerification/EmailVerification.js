import React from "react";

import logo from "../../../assets/images/virtu-vista-logo.png";
import emailPng from "../../../assets/images/email-verification.png";
import "./EmailVerification.css";
function EmailVerification() {
  return (
    <div className=" vh-100 justify-content-center d-flex">
      <div className="d-flex   w-100  h-100 flex-column align-items-center justify-content-center">
        <div className="w-100   d-flex ps-5 mb-3   flex-column align-items-center justify-content-start  ">
          <img src={logo} className="vvlogo" alt="virtuVistaLogo" />
        </div>

        <div className="w-100 d-flex flex-row  align-items-center justify-content-center">
          <h6 className="check-inbox-text">
            Check your inbox to verify your email
          </h6>
        </div>
        <div className="d-flex   w-100 flex-row align-items-center ps-3 justify-content-center">
          <img src={emailPng} className="email-png-img ms-5" alt="email-png" />
        </div>

        <div className="d-flex  flex-column align-items-center justify-content-center">
          <p className="text-center thank-you-text">
            Thank you for signing up with VirtuVista AI! To complete the
            registration process and <br />
            gain access to your account, please verify your email address.
          </p>
          <p className="not-you-text">
            sehar.kh@gmail.com Not you?
            <span className="sign-up-again-text"> Sign up Again</span>
          </p>
        </div>

        <div className="w-75 d-flex flex-row align-items-center justify-content-center">
          <button className="button resend-button w-25 rounded-5">
            Resend Email Verificataion
          </button>
          <button className="button go-to-email w-25 rounded-5 ms-2">
            Go to email inbox
          </button>
        </div>
      </div>
    </div>
  );
}

export default EmailVerification;
