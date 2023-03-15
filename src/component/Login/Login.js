import React from "react";
import { Col, Row } from "react-bootstrap";
import shape from "../../assets/shape.png";
import "./Login.css";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="login-page">
      <Row>
        {/* Login Page  */}
        <Col md="6" sm="12" className="login-form">
          <div className="login-wrapper">
            <h2 className="login-title">Welcome</h2>
            <p className="login-text">Enter your username and password</p>

            {/* Login form component */}
            <LoginForm />
          </div>
        </Col>
        {/* login Banner */}
        <Col md="6" sm="12" className="login-banner-container">
          <div className="login-banner">
            <img src={shape} alt="" />
            <div className="login-banner-content">
              <h2 className="login-banner-title">
                360° Solution for Asset Management
              </h2>
              <p className="login-banner-text">
                Objectively implement intermandated e-business before focused
                networks. Appropriately.Intrinsicly whereas.
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
