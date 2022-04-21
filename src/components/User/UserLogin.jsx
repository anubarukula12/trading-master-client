import React, { useEffect, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const UserLogin = () => {
  let navigate=useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  useEffect(()=>{
    const token=localStorage.getItem('token');
    axios.post("http://localhost:5000/protected",{
        headers:{
            Authorization:token,
        }
    }).then(res=>{
        console.log(res)
        navigate('/protected')
    }).catch(err =>{
console.log(err);
navigate('/signin')
    })
},[])
  const onSubmit = (data) => {
    reset();
    console.log(data);
     axios
   .post("http://localhost:5000/users/login", data).then(user=>{
console.log(user);
localStorage.setItem('token',user.data.token)
navigate('/protected')
   }).catch(err=>{
     console.log(err);
   })
  
  };
  return (
    <Container>
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h3>Login in to your account</h3>
            <FacebookLoginButton onClick={() => alert("Hello")} />
            <GoogleLoginButton onClick={() => alert("Hello")} />
            <div className="mb-4">
              <hr data-content="AND" className="hr-text,solid" />
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                name="username"
                autoComplete="off"
                placeholder="Enter Username"
                {...register("username", {
                  required: "Username is Required!",
                })}
              />
              {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
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
