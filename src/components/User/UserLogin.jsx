import React, {useState,useContext, useEffect } from "react";
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
    trigger,
  } = useForm();
  const [successmessage, setSuccessMessage] = useState("");
  const [errormessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    reset();
    console.log(data);
  const res= await axios
      .post("http://localhost:5000/users/login", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      })
      .catch((error) => {
        if (error.response) {
          setErrorMessage(error.response.data);
        }
      });
  };
  useEffect(()=>{

    console.log("the token in the login",localStorage.getItem('token'));
  if(localStorage.getItem('token')){
    navigate('/dashboard')
  }
  });
  return (
    <Container id="container">
      <Row>
        <Col
          lg={5}
          md={6}
          sm={12}
          className="p-5 m-auto shadow-sm rounded-lg .ml-3"
        >
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              {errormessage && <h2 className="text-danger">{errormessage}</h2>}
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
