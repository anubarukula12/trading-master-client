import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUser } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../Utils/css/styles.css";

const UserLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [successmessage, setSuccessMessage] = useState("");
  const [errormessage, setErrorMessage] = useState("");
  const onSubmit = async (data) => {
    reset();
    console.log(data);

    await axios
      .post("http://localhost:5000/users/login", data)
      .then((res) => {
        console.log("response data in login", res.data.user.role);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("role", res.data.user.role);
        localStorage.setItem("user_id",res.data.user.id);
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data);
        }
      });
  };
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (localStorage.getItem("token") && role === "user") {
      navigate("/dashboard");
    } else {
      if (localStorage.getItem("token") && role === "admin") {
        navigate("/adminnavbar");
      }
    }
  });
  return (
    <Container>
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {errormessage && (
                <h3 className="bg-danger text-white p-3 m-auto shadow-lg rounded-lg">
                  {errormessage}
                </h3>
              )}
              <p style={{ fontSize: "20px" }}>
                <FaUser />
                Login in to your account
              </p>
              <FacebookLoginButton onClick={() => alert("Hello")} />
              <GoogleLoginButton onClick={() => alert("Hello")} />
              <div className="mb-4">
                <hr data-content="AND" className="hr-text,solid" />
              </div>
              <Form.Label>Username</Form.Label>
              <Form.Control
                className={`${errors.username && "invalid"}`}
                type="text"
                name="username"
                autoComplete="off"
                placeholder="Enter Username"
                {...register("username", {
                  required: "Username is Required!",
                })}
                onKeyUp={() => {
                  setSuccessMessage("");
                  setErrorMessage("");
                }}
              />
              {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={`${errors.password && "invalid"}`}
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                {...register("password", {
                  required: "Password is Required!",
                })}
              />
              <small>
                <a href="forgetPasswordController">ForgotPassword</a>
              </small>
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </Form.Group>
            <Button variant="primary" type="submit" className="form-control">
              LogIn
            </Button>
            <p>
              Don't have an account?
              <span className="line">
                <a href="/signup" className="text-decoration-none">
                  Sign Up
                </a>
              </span>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default UserLogin;
