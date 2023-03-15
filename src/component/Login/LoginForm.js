import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import {
  BsFillEyeFill,
  BsFillEyeSlashFill,
  BsFillLockFill,
  BsFillPersonFill,
} from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./LoginForm.css";

const LoginForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const navigate = useNavigate();

  //password toggle function
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  //login data handel function
  const handleLoginData = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    

    const userEmail = "eve.holt@reqres.in";
    const userPassword = "5cityslicka";

    if (email === userEmail && password === userPassword) {
      form.reset();
      navigate('/dashboard');
      toast.success("User Login Successfully");
    } else {
        form.reset();
      toast.error("Pleas enter correct information!!!");
    }
  };
  return (
    <Form onSubmit={handleLoginData}>
      <Form.Group className="mb-3 input-field" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Username" name="email" />
        <BsFillPersonFill className="input-icon" />
      </Form.Group>

      <Form.Group className="mb-3 input-field" controlId="formBasicPassword">
        <Form.Control
          type={passwordShown ? "text" : "password"}
          placeholder="Password"
          name="password"
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
      <button type="submit" className="login-button">
        Login
      </button>
      <Link className="forgotten-password">Forgotten Password?</Link>
    </Form>
  );
};

export default LoginForm;
