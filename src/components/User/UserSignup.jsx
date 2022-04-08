import React, { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
const UserSignup = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (event) => {
    event.preventDefault();
      if (
        enteredName.trim().length === 0 ||
        enteredUsername.trim().length === 0 ||
        enteredEmail.trim().length === 0 ||
        enteredPassword.trim().length === 0
      ) {
        setError({
          title: "Invalid input",
          message: "Please enter a valid name and age (non-empty values).",
        });
        return;
      }
      props.onAddUser(
        enteredName,
        enteredUsername,
        enteredEmail,
        enteredPassword
      );
      setEnteredName("");
      setEnteredUsername("");
      setEnteredEmail("");
      setEnteredPassword("");
    };
    const nameChangeHandler = (event) => {
      setEnteredName(event.target.value);
    };
    const usernameChangeHandler = (event) => {
      setEnteredUsername(event.target.value);
    };
    const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
      setEnteredPassword(event.target.value);
    };
    const errorHandler = () => {
      setError(null);
    };

  return (
    <Container>
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form onSubmit={addUserHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" value={enteredName} placeholder="Enter name" onChange={nameChangeHandler} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={enteredUsername}placeholder="Enter Username"onChange={usernameChangeHandler} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" value={enteredEmail} placeholder="Enter email" onChange={emailChangeHandler}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" value={enteredPassword} placeholder="Password" onChange={passwordChangeHandler}/>
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default UserSignup;
