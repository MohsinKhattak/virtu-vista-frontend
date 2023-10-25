import "./App.css";
import react, { useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//pages
import ClientLogin from "./pages/Client/Login/Login";
import ClientSignUp from "./pages/Client/SignUp/SignUp";
import FreelancerLogin from "./pages/Freelancer/Login/Login";
import FreelancerSignup from "./pages/Freelancer/SignUp/SignUp";
import EmailVerification from "./pages/Freelancer/EmailVerification/EmailVerification";
import ForgetPassword from "./pages/Freelancer/ForgetPassword/ForgetPassword";
import ChooseUsername from "./pages/Freelancer/ChooseUsername/ChooseUsername";

import Dashboard from "./pages/Freelancer/Dashboard/Dashboard";

import Jobproposal from "./pages/Freelancer/Jobproposal/Jobproposal";
import ChatPage from "./pages/Freelancer/ChatPage/ChatPage";
import ProfileSetting from "./pages/Freelancer/ProfileSetting/ProfileSetting";
import NotificationPage from "./pages/Freelancer/NotificationPage/NotificationPage";
import RootLayout from "./components/Layout/RootLayout/RootLayout";
import MyJobsLayout from "./components/Layout/MyJobsLayout/MyJobsLayout";
import Profile from "./pages/Freelancer/Profile/Profile/Profile";
import JobProgress from "./components/job/JobProgress/JobProgress";
import SavedJobs from "./components/job/SavedJobs/SavedJobs";
import AppliedJobs from "./components/job/AppliedJobs/AppliedJobs";
import PersonalityQuestionaire from "./pages/Client/PersonalityQuestionaire/PersonalityQuestionaire";
import NewQuestionScreen from "./pages/Client/NewQuestionScreen/NewQuestionScreen";
import QuestionaireStart from "./pages/Client/QuestionaireStart/QuestionaireStart";
import FreelancerQuestionaire from "./pages/Freelancer/FreelancerQuestionaire/FreelancerQuestionaire";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<FreelancerLogin />} />
      <Route path="/sign-up" element={<FreelancerSignup />} />
      <Route path="/client-sign-up" element={<ClientSignUp />} />
      <Route path="/client-login" element={<ClientLogin />} />
      <Route path="/email-verification" element={<EmailVerification />} />
      <Route path="/forget-password" element={<ForgetPassword />} />
      <Route path="/choose-username" element={<ChooseUsername />} />
      <Route path="/questionaire-start" element={<QuestionaireStart />} />
      <Route path="personaily-questionaire" element={<NewQuestionScreen />} />
      <Route path="va-questionaire" element={<FreelancerQuestionaire />} />
      <Route path="profile" element={<Profile />} />
      <Route path="/profile-setting" element={<ProfileSetting />} />
      <Route element={<RootLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/job-proposal" element={<Jobproposal />} />
        <Route path="notifications" element={<NotificationPage />} />
        <Route path="chats" element={<ChatPage />} />
        <Route element={<MyJobsLayout />}>
          <Route path="/jobs/jobs-progress" element={<JobProgress />} />
          <Route path="/jobs/applied-jobs" element={<AppliedJobs />} />
          <Route path="/jobs/saved-jobs" element={<SavedJobs />} />
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
