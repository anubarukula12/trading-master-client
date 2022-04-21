import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import "../../Utils/css/styles.css";
const UserSignup = () => {
  //Form validations
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [successmessage, setSuccessMessage] = useState("")
  const [errormessage, setErrorMessage] = useState("")
  const onSubmit = (data) => {
    console.log(data);
    reset();
    axios
      .post("http://localhost:5000/users/register", data)

      .then(res => {
          setSuccessMessage(res.data)
       
      })
      .catch((error) => {
        if(error.response){
          setErrorMessage(error.response.data);
        }
        // setErrorMessage(error.response.data);
      });
  };
  return (
    <Container>
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form onSubmit={handleSubmit(onSubmit)}>
          <h3>Create your account</h3>
            {successmessage && <h2 className="text-success">{successmessage}</h2>}
            {errormessage && <h2 className="text-danger">{errormessage}</h2>}
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                className={`${errors.name && "invalid"}`}
                type="text"
                name="name"
                placeholder="Enter name"
                autoComplete="off"
                {...register("name", {
                  required: "Name is Required!",
                  minLength: {
                    value: 3,
                    message: "Minimun required length is 3",
                  },
                })}
                onKeyUp={() => {
                  setSuccessMessage("");
                  setErrorMessage("");
                  trigger("name");
                }}
              />
              {errors.name && (
                <small className="text-danger">{errors.name.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className={`${errors.username && "invalid"}`}
                type="text"
                placeholder="Enter Username"
                autoComplete="off"
                name="username"
                {...register("username", {
                  required: "Username is Required!",
                  minLength: {
                    value: 3,
                    message: "Minimun required length is 3",
                  },
                })}
                onKeyUp={() => {
                  trigger("username");
                }}
              />
              {errors.username && (
                <small className="text-danger">{errors.username.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className={`${errors.email && "invalid"}`}
                type="text"
                placeholder="Enter email"
                name="email"
                autoComplete="off"
                {...register("email", {
                  required: "Email is Required!",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address!",
                  },
                })}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={`${errors.password && "invalid"}`}
                type="password"
                placeholder="Password"
                name="password"
                autoComplete="off"
                {...register("password", {
                  required: "password is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  trigger("password");
                }}
              />
              {errors.password && (
                <small className="text-danger">{errors.password.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicconfPassword">
              <Form.Label>ConfirmPassword</Form.Label>
              <Form.Control
                className={`${errors.confirmpassword && "invalid"}`}
                type="password"
                placeholder="Password"
                name="confirmpassword"
                {...register("confirmpassword", {
                  required: "Confirmpassword is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  trigger("confirmpassword");
                }}
              />
              {errors.confirmpassword && (
                <small className="text-danger">
                  {errors.confirmpassword.message}
                </small>
              )}
            </Form.Group>
            <Button variant="primary" type="submit" className="form-control">
              SignUp
            </Button>
            <p>
              Already registered?
              <span className="line">
                <a href="/signin"  className="text-decoration-none">Sign In</a>
              </span>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default UserSignup;
