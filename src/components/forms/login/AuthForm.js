import React, { useState } from "react";
import "./AuthForm.css";

//icons
import emailSender from "../../../assets/icons/sms-tracking.svg";
import lockKey from "../../../assets/icons/key.svg";
import googleLogo from "../../../assets/icons/google_24.svg";
import passwordEye from "../../../assets/icons/eye-slash.svg";
import userIcon from "../../../assets/icons/user.svg";
import locataion from "../../../assets/icons/location.svg";
import phone from "../../../assets/icons/phone-icon.png";
import { Link } from "react-router-dom";
const AuthForm = ({ isSignUp }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    location: "USA",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };
  return (
    <div className=" form-container    px-4 rounded-5 d-flex flex-column align-items-center justify-content-center">
      {isSignUp ? (
        <div className=" d-flex w-100 flex-column align-items-start justify-content-center">
          <h5 className="welcome-text mb-2">
            Join VirtuVista AI to Unlock
            <br /> Opportunities!
          </h5>
          <p className="welcome-text below-welcome">
            Sign up with Google or Email
          </p>
        </div>
      ) : (
        <div className=" d-flex w-100 flex-column align-items-start justify-content-center">
          <h5 className="welcome-text ">Welcome back to our App</h5>

          <p className="welcome-text below-welcome">
            Sign In with Google or Email
          </p>
        </div>
      )}
      {isSignUp ? (
        <>
          <div class=" w-100">
            <label for="fullname" class="form-label">
              Full Name
            </label>
            <div className="bg-white d-flex align-items-center justify-content-start border rounded-5 px-3  ">
              <img src={userIcon} alt="user" />
              <input
                type="text"
                class="input-box rounded-5 px-2    w-100 ms-2"
                id="fullname"
                placeholder="John Doe"
                onChange={handleChange}
                value={formData.fullname}
              />
            </div>
          </div>
          <div className="w-100">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <div className="bg-white d-flex align-items-center justify-content-start border rounded-5 px-3">
              <img src={phone} alt="phone" className="phone-icon" />
              <input
                type="text"
                className="input-box rounded-5 px-2 w-100 ms-2"
                id="phone"
                placeholder="+92-312-345678"
                onChange={handleChange}
                value={formData.phone}
              />
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      <div class=" w-100">
        <label for="email" class="form-label">
          Email address
        </label>
        <div className="bg-white d-flex align-items-center justify-content-start border rounded-5 px-3  ">
          <img src={emailSender} alt="email" />
          <input
            type="email"
            class="input-box rounded-5 px-2    w-100 ms-2"
            id="email"
            placeholder="name@example.com"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
      </div>
      <div class=" w-100">
        <label for="password" class="form-label">
          Password
        </label>
        <div className="bg-white d-flex align-items-center justify-content-start border rounded-5 px-3  ">
          <img src={lockKey} alt="lockkey" />
          <input
            type="password"
            class="input-box rounded-5 px-2    w-100 ms-2"
            id="password"
            placeholder="********"
            onChange={handleChange}
            value={formData.password}
          />
          <img src={passwordEye} alt="eyelash" />
        </div>
        <div
          class="form-text  d-flex justify-content-end w-100"
          id="basic-addon4"
        >
          {isSignUp ? (
            ""
          ) : (
            <a className="forget-password" href="#">
              Forget Password?
            </a>
          )}
        </div>
      </div>
      {isSignUp ? (
        <div class=" w-100">
          <label for="Location" class="form-label">
            Location
          </label>
          <div className="bg-white  d-flex align-items-center justify-content-start border rounded-5 px-3 mb-2 ">
            <img src={locataion} alt="location" />
            <select
              class="input-box rounded-5 px-2    w-100 ms-2"
              id="Location"
              onChange={handleChange}
              value={formData.location}
            >
              <option selected>USA</option>
              <option value="1">Pakistan</option>
              <option value="2">India</option>
              <option value="3">Austrailia</option>
            </select>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="w-100">
        {isSignUp ? (
          <Link to="/choose-username" state={{ data: formData }}>
            <button className="sign-in-button w-100 rounded-5 ">Sign up</button>
          </Link>
        ) : (
          <button className="sign-in-button w-100 rounded-5 ">Sign In</button>
        )}
      </div>
      <div className=" w-100 d-flex flex-row align-items-between justify-content-center">
        <hr
          style={{ height: "1px", width: "144px" }}
          className="  text-secondary"
        />
        <p
          style={{
            fontSize: "12px ",
            lineHeight: "24px",
            fontWeight: "400",
            fontFamily: "Roboto",
          }}
          className="text-secondary  mx-3"
        >
          OR
        </p>
        <hr
          style={{ height: "1px", width: "144px" }}
          className="  text-secondary"
        />
      </div>

      <div className="w-100 mb-2">
        {isSignUp ? (
          <button className="sign-in-button google-button w-100 rounded-5 ">
            <img src={googleLogo} /> Continue with Google
          </button>
        ) : (
          <button className="sign-in-button google-button w-100 rounded-5 ">
            <img src={googleLogo} /> Continue with Google
          </button>
        )}
      </div>
      <div>
        {isSignUp ? (
          <p className="remember-password">
            Already have an account?
            <a className="forget-password ms-1" href="#">
              Sign In
            </a>
          </p>
        ) : (
          <p className="remember-password">
            Dont have an account?
            <a className="forget-password ms-1" href="#">
              Sign up
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
