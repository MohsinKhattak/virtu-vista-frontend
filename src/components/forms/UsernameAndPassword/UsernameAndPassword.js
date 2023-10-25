import React, { useState } from "react";
import "./UsernameAndPassword.css";
import emailSender from "../../../assets/icons/sms-tracking.svg";
import userIcon from "../../../assets/icons/user.svg";
import { Link } from "react-router-dom";

const UsernameAndPassword = ({ isUserName, data }) => {
  const [username, setUsername] = useState("");
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const addUsernameToData = () => {
    const updatedData = { ...data, username };
    return updatedData;
  };

  return (
    <div className="form-container pt-4 pb-2 px-4 rounded-5 d-flex flex-column align-items-center justify-content-center">
      <div className="d-flex w-100 flex-column align-items-start justify-content-center">
        {isUserName ? (
          <h5 className="welcome-text mb-2">Enter Username</h5>
        ) : (
          <h5 className="welcome-text mb-2">Forgot Your Password?</h5>
        )}

        {isUserName ? (
          <p className="welcome-text below-welcome">
            Choose a unique username that represents your professional <br />
            identity.
          </p>
        ) : (
          <p className="welcome-text below-welcome">
            No worries! We'll help you regain access to your account. Please
            <br /> enter the email address associated with your account
          </p>
        )}
      </div>
      {isUserName ? (
        <div className="w-100 mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <div className="bg-white d-flex align-items-center justify-content-start border rounded-5 px-3">
            <img src={userIcon} alt="user-icon" />
            <input
              type="text"
              className="input-box rounded-5 px-2 w-100 ms-2"
              id="username"
              placeholder="Sehar.kh68687"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
        </div>
      ) : (
        <div className="w-100 mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <div className="bg-white d-flex align-items-center justify-content-start border rounded-5 px-3">
            <img src={emailSender} alt="email" />
            <input
              type="email"
              className="input-box rounded-5 px-2 w-100 ms-2"
              id="email"
              placeholder="name@example.com"
            />
          </div>
        </div>
      )}

      <div className="w-100">
        <Link to="/va-questionaire" state={{ data: addUsernameToData() }}>
          <button className="sign-in-button w-100 rounded-5">Submit</button>
        </Link>
      </div>

      {isUserName ? (
        ""
      ) : (
        <div className="my-2">
          <p className="remember-password">
            Remember Password?
            <a className="forget-password ms-1" href="#">
              Sign In
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default UsernameAndPassword;
