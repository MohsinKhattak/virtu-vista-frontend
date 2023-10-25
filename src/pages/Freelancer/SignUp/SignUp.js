import React from "react";
import "./SignUp.css";
import logo from "../../../assets/images/virtu-vista-logo.png";
import personWithLaptop from "../../../assets/images/person-using-laptop.png";
import { AuthForm } from "../../../components";

function SignUp() {
  return (
    <div className="container-fluid main-div vh-100">
      <div className="row  h-100">
        <div className="col-lg-6 col-sm-12 py-5 h-100    d-flex flex-column align-items-center ps-5 justify-content-center ">
          <div className="w-75   d-flex ps-5    flex-row align-items-center justify-content-start  ">
            <img src={logo} className="logo" alt="virtuVistaLogo" />
          </div>
          <AuthForm isSignUp={true} />
        </div>

        <div className=" col-lg-6 col-sm-12 d-lg-flex   align-items-end d-none  justify-content-center">
          <img
            src={personWithLaptop}
            className="right-col-image  w-75"
            alt="person-using-laptop"
          />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
