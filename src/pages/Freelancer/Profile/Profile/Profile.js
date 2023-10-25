import React, { useState } from "react";
import "./Profile.css";
//logo
import logoWithText from "../../../../assets/images/virtu-vista-logo-with-text.png";

//components
import LeftColumn from "../../../../components/ProfileSetup/LeftColumn/LeftColumn";
import ProfilePhoto from "../../../../components/ProfileSetup/PhotoUpload/PhotoUpload";
import { ExperienceComponent } from "../../../../components";
import SkillsComponent from "../../../../components/ProfileSetup/SkillsComponent/SkillsComponent";
import PhoneVerification from "../../../../components/ProfileSetup/PhoneVerification/PhoneVerification";
import ProfileInfo from "../../../../components/ProfileSetup/ProfileInfo/ProfileInfo";
function Profile() {
  const [step, setStep] = useState(1);

  // Function to go to the next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Render the appropriate component based on the current step
  const renderComponent = () => {
    switch (step) {
      case 1:
        return <ProfileInfo onNext={nextStep} />;
      case 2:
        return <ProfilePhoto onNext={nextStep} />;
      case 3:
        return <ExperienceComponent onNext={nextStep} />;
      case 4:
        return <SkillsComponent onNext={nextStep} />;
      case 5:
        return <PhoneVerification onNext={nextStep} />;

      default:
        return <Profile onNext={nextStep} />;
    }
  };

  return (
    <div className="container-fluid   vh-100">
      <div className="d-flex h-100 flex-column align-items-center justify-content-center">
        <div className="upper-col h-25   w-100 d-flex flex-column align-items-center justify-content-end">
          <div className="logo-container">
            <img src={logoWithText} alt="virtu-vista-logo" />
          </div>
          <div className="d-flex profile-title-container flex-column align-items-center jusity-content-center">
            <h1 className="profile-title  ">Profile</h1>
            <p className="profile-title-para text-center">
              Fill in your details to create an authentic profile that showcases
              your skills and personality. Be part of a <br />
              thriving community of freelancers and clients who collaborate to
              achieve remarkable outcomes.
            </p>
          </div>
        </div>

        <div className="lower-col h-75 w-100 d-flex flex-row align-items-center justify-content-center">
          <LeftColumn />

          <div className="right-col w-50   h-100   pt-5  ">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
