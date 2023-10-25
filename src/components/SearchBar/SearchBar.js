import React from "react";
import searchIcon from "../../assets/icons/searchIcon.svg";
import filterButton from "../../assets/icons/filterButton.svg";
import addicon from "../../assets/icons/add-symbol.svg";
import closeIcon from "../../assets/icons/cross.svg";
import congratsImage from "../../assets/images/congratulations.png";
import NewQuestionScreen from "../../pages/Client/NewQuestionScreen/NewQuestionScreen";
function SearchBar({ role }) {
  return (
    <div>
      <form
        class="d-flex w-100 mb-3 align-items-center align-items-center justify-content-around "
        role="search"
      >
        {role == "client" ? (
          <div className="bg-white search-box w-75 d-flex align-items-center justify-content-start me-3  rounded-5 px-3   ">
            <img src={searchIcon} alt="user" />
            <input
              type="search "
              class="search-box-text input-box rounded-5 px-2 bg-transparent text-align-center  w-100 ms-2"
              id="fullname"
              placeholder="Search Here"
            />
          </div>
        ) : (
          <div className="bg-white search-box w-100 d-flex align-items-center justify-content-start   rounded-5 px-3   ">
            <img src={searchIcon} alt="user" />
            <input
              type="search "
              class="search-box-text input-box rounded-5 px-2 bg-transparent text-align-center  w-100 ms-2"
              id="fullname"
              placeholder="Search Here"
            />
          </div>
        )}
        {role == "client" ? (
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            data-bs-toggle="modal"
            data-bs-target="#job-post-success"
            className="w-25 sign-in-button  rounded-5 p-2"
          >
            <img src={addicon} /> Create Job Post
          </button>
        ) : (
          <button
            className="search-button bg-white rounded-5 p-2"
            type="submit"
          >
            <img src={filterButton} />
          </button>
        )}
      </form>
      {/* Modal for Craeting Job */}
      <div class="modal  " tabindex="-1" id="create-job-post">
        <div class="modal-dialog modal-lg  ">
          <div class="modal-container modal-content">
            <NewQuestionScreen />
          </div>
        </div>
      </div>

      {/* Modal for Job creation success */}
      <div class="modal  " tabindex="-1" id="job-post-success">
        <div class="modal-dialog  bg-white modal-md rounded-3 ">
          <div class="modal-container modal-content  bg-white">
            <div class="modal-body    ">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex flex-row w-100 align-items-center justify-content-end">
                  <img src={closeIcon} />
                </div>
                <div className="d-flex flex-row align-items-center justify-content-center">
                  <img src={congratsImage} />
                </div>
                <div className="d-flex flex-row px-2 align-items-center justify-content-center">
                  <h5 className="congrats-text text-center">
                    Hello and welcome to VirtuVista! Our mission goes beyond
                    resumes—we strive to find you a Virtual Assistant who
                    genuinely complements your world. Are you ready to discover
                    your ideal match?
                  </h5>
                </div>
                <div className="d-flex flex-row px-2 align-items-center justify-content-center">
                  <p className="below-congrats   text-center">
                    This should take about 5-7 minutes of your time.
                  </p>
                </div>
              </div>
              <div class="  d-flex flex-row w-100 align-items-center justify-content-center border-0">
                <button
                  type="button"
                  className="job-skills  w-50 more-details-button d-flex flex-row aling-items-center justify-content-center rounded-pill py-2  "
                >
                  Cancel
                </button>
                <button
                  data-bs-toggle="modal"
                  data-bs-target="#create-job-post"
                  type="button"
                  class="sign-in-button w-50   rounded-5"
                >
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
