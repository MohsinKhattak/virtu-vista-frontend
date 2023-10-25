import React from "react";
import targetImage from "../../../assets/images/target.png";
function DashboardGreet() {
  return (
    <div className="d-flex mb-3 flex-row col-lg-12  rounded-3 justify-content-around dashboard-welcome px-2   py-3">
      <div className="d-flex w-75 flex-column justify-content-center align-items-start">
        <h5 className="greetings-title">Good morning Sehar Kh!</h5>
        <p className="greetings-text">
          Welcome to a new day of possibilities! Your dashboard is here to help
          you navigate your freelancing journey with ease. Let's make it a
          productive and successful day together!
        </p>
      </div>
      <div className="d-flex  flex-column justify-content-start align-items-between">
        <img src={targetImage} />
      </div>
    </div>
  );
}

export default DashboardGreet;
