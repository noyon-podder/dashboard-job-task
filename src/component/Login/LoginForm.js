import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillLockFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <Form>
      <Form.Group className="mb-3 input-field" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Username" />
        <BsFillPersonFill className="input-icon" />
      </Form.Group>

      <Form.Group className="mb-3 input-field" controlId="formBasicPassword">
        <Form.Control
          type={passwordShown ? "text" : "password"}
          placeholder="Password"
        />
        <BsFillLockFill className="input-icon" />
        {/* password toggle icon  */}
        {passwordShown ? (
          <BsFillEyeFill
            className="passwordShowHide"
            onClick={togglePassword}
          />
        ) : (
          <BsFillEyeSlashFill
            className="passwordShowHide"
            onClick={togglePassword}
          />
        )}
      </Form.Group>

      {/* <Button variant="primary" type="submit">
        Submit
      </Button> */}
      <button className="login-button">Login</button>
      <Link className="forgotten-password">Forgotten Password?</Link>
    </Form>
  );
};

export default LoginForm;
