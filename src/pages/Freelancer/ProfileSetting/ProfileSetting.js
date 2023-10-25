import React from "react";
import "./ProfileSetting.css";
import { Topbar } from "../../../components";
import avatar from "../../../assets/images/Avatar-Image.png";
import editIcon from "../../../assets/icons/edit-2.svg";
import addIcon from "../../../assets/icons/add-line.svg";
function ProfileSetting() {
  return (
    <div className="container-fluid   ">
      <div className="row d-flex flex-column  ">
        <div className="     w-100 ">
          <Topbar />
        </div>

        <div className="d-flex flex-row w-100 px-5  justify-content-center">
          <div className="d-flex flex-column   p-5    justify-content-start  ">
            <div className="d-flex flex-column   border-bottom  border-bottom mb-1 py-2  ">
              <h2 className="title-bold">Profile Setting</h2>
              <p className="company-name">
                Customize your profile to make it uniquely yours. Update your
                information, preferences, and privacy settings here to ensure a
                tailored experience that matches your professional identity.
                Your profile settings are your gateway to a seamless freelancing
                journey.
              </p>
            </div>
            <div className="d-flex flex-row   justify-content-between border-bottom mb-1 py-2">
              <div className="d-flex flex-row ">
                <img
                  src={avatar}
                  style={{ borderRadius: "50%" }}
                  className="me-3"
                />
                <div className="d-flex flex-column ">
                  <p className="company-name fw-bold my-1">Sehar kh</p>
                  <p className="company-name my-1">UI/UX Designer</p>
                  <p className="company-name my-1">Sehar@gmail.com</p>
                  <p className="company-name my-1">Phone no: (308) 555-0121</p>
                </div>
              </div>
              <div className="d-flex flex-column align-items-end justify-content-start">
                <button className="custom-edit-button p-2 rounded-5 d-flex flex-row align-items-center justify-content-center">
                  <img src={editIcon} />
                </button>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between border-bottom mb-1 py-2">
              <div className="d-flex flex-row ">
                <div className="d-flex flex-column ">
                  <p className="company-name fw-bold my-1">Experience</p>
                  <p className="company-name my-1">UI/UX Designer</p>
                  <p className="company-name my-1">Sehar@gmail.com</p>
                  <p className="company-name my-1">Phone no: (308) 555-0121</p>
                </div>
              </div>
              <div className="d-flex flex-row align-items-start justify-content-start">
                <button className="custom-edit-button me-1 p-2 rounded-5 d-flex flex-row align-items-center justify-content-center">
                  <img src={addIcon} />
                </button>
                <button className="custom-edit-button me-1 p-2 rounded-5 d-flex flex-row align-items-center justify-content-center">
                  <img src={editIcon} />
                </button>
              </div>
            </div>

            <div className="d-flex flex-row justify-content-between border-bottom mb-1 py-2">
              <div className="d-flex flex-row ">
                <div className="d-flex flex-column ">
                  <p className="company-name fw-bold my-1">Experience</p>
                  <div className="d-flex flex-row">
                    <div className="job-skills rounded-pill px-3 py-1  me-2">
                      Figma
                    </div>
                    <div className="job-skills rounded-pill px-3 py-1  me-2">
                      User Interface Design
                    </div>
                    <div className="job-skills rounded-pill px-3 py-1  me-2">
                      Figma
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex flex-row align-items-start justify-content-start">
                <button className="custom-edit-button me-1 p-2 rounded-5 d-flex flex-row align-items-center justify-content-center">
                  <img src={addIcon} />
                </button>
                <button className="custom-edit-button me-1 p-2 rounded-5 d-flex flex-row align-items-center justify-content-center">
                  <img src={editIcon} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSetting;
