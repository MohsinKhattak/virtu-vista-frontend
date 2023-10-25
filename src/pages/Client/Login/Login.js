import React from "react";
import "./Login.css";
import logo from "../../../assets/images/virtu-vista-logo.png";
import { AuthForm } from "../../../components";

function Login() {
  return (
    <div className="container-fluid  client-side-main vh-100">
      <div className="row  h-100">
        <img src={logo} className="logo-png " alt="virtuVistaLogo" />

        <div className="offset-lg-6 col-lg-6 col-sm-12 py-5   d-flex flex-column align-items-center justify-content-center ">
          <AuthForm isSignUp={false} />
        </div>
      </div>
    </div>
  );
}

export default Login;
