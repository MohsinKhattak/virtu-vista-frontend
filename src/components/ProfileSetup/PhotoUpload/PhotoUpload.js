import React from "react";
import "./PhotoUpload.css";
import DropAttachment from "../Dropzone/DropAttachment";
function PhotoUpload({ onNext }) {
  const handleNextClick = () => {
    onNext();
  };
  return (
    <div className="d-flex flex-column    h-100 ps-5    ">
      <div className="title-container d-flex flex-column w-100 ">
        <h3>Personal Information</h3>
        <p>
          Your personal details help us create a better experience for you and
          enhance <br /> your professional connections.
        </p>
      </div>

      <div className="w-100 d-flex flex-column align-items-start ">
        <label for="profilephoto" class="form-label mb-1 ms-3">
          Profile Photo
        </label>
        <div className="file-upload w-100  mb-3  d-flex flex-column align-items-start justify-content-center">
          <DropAttachment />
        </div>
      </div>

      <div className="d-flex  w-75 flex-row justify-content-end align-items-center">
        <button
          onClick={handleNextClick}
          className="  w-50   py-2    sign-in-button rounded-pill "
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default PhotoUpload;
