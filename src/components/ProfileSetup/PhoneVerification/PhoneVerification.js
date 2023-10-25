import React, { useState } from "react";
import "./PhoneVerification.css";
import crossIcon from "../../../assets/icons/cross.svg";
function PhoneVerification() {
  const [showInput, setShowInput] = useState(false);
  function toggleInput() {
    setShowInput(!showInput);
  }
  return (
    <div className="d-flex flex-column    h-100 ps-5    ">
      <div className="title-container d-flex flex-column w-100 ">
        <h3>Phone Number verification</h3>
        <p>
          Verify your phone number to enhance account security and credibility.
        </p>
      </div>

      {showInput ? (
        ""
      ) : (
        <div>
          <div class="mb-3 w-75   ">
            <label for="phonenumber" class="form-label mb-1 ms-3">
              Enter Phone Number
            </label>
            <input
              type="text"
              class="form-control  input-text shadow-none rounded-5"
              id="phone-number"
              placeholder="(308) 555-0121"
            />
          </div>

          <div className="d-flex  w-100 flex-row justify-content-center align-items-center">
            <button
              onClick={toggleInput}
              className=" sign-in-button w-25    py-2   d-flex flex-row justify-content-center align-items-center  rounded-pill "
            >
              Send
            </button>
          </div>
        </div>
      )}

      {showInput ? (
        <div>
          <div class="mb-3 w-25  ">
            <label for="addskill" class="form-label mb-1 ms-3">
              Enter Code
            </label>
            <div className="d-flex flex-row align-items-center justify-content-start">
              <input
                type="text"
                class="phone-verify-ib form-control rounded-4 ms-3 text-center d-flex flex-row align-items-center justify-content-center   shadow-none   "
                id="addskill"
                maxLength={1}
              />
              <input
                type="text"
                class="phone-verify-ib form-control rounded-4 ms-3 text-center d-flex flex-row align-items-center justify-content-center   shadow-none   "
                id="addskill"
                maxLength={1}
              />
              <input
                type="text"
                class="phone-verify-ib form-control rounded-4 ms-3 text-center d-flex flex-row align-items-center justify-content-center   shadow-none   "
                id="addskill"
                maxLength={1}
              />
              <input
                type="text"
                class="phone-verify-ib form-control rounded-4 ms-3 text-center d-flex flex-row align-items-center justify-content-center   shadow-none   "
                id="addskill"
                maxLength={1}
              />
            </div>
          </div>
          <div className="d-flex  w-100 flex-row justify-content-center align-items-center">
            <button className=" resend-button w-25    py-2   d-flex flex-row justify-content-center align-items-center  rounded-pill ">
              Resend Verification
            </button>
            <button className=" sign-in-button w-25    py-2   d-flex flex-row justify-content-center align-items-center  rounded-pill ">
              Confirm
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default PhoneVerification;
