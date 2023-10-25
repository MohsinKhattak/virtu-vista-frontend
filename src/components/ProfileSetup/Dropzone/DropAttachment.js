import React from "react";
import Dropzone from "react-dropzone";
import "./DropAttachment.css";
function DropAttachment() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <div
          {...getRootProps()}
          className="w-75 dropzone-container rounded-4   d-flex flex-column align-items-center "
        >
          <input {...getInputProps()} />
          <p className="drag-drop-files  mb-1 mt-4">
            Drag & Drop your files here
          </p>
          <p className="OR-text my-1">OR</p>
          <button className="w-25 sign-in-button rounded-pill    ">
            Browse Files
          </button>
        </div>
      )}
    </Dropzone>
  );
}

export default DropAttachment;
