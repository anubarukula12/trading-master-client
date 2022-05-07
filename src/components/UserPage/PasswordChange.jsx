import React from "react";
import { FormGroup } from "react-bootstrap";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import DashBoard from "./DashBoard";
import { useForm } from "react-hook-form";
import axios from 'axios';
const PasswordChange=() =>{
const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const onSubmit = (data) => {
    // axios
    //   .post("http://localhost:5000/users/register", data)

    //   .then(res => {
    //       setSuccessMessage(res.data)
       
    //   })
    //   .catch((error) => {
    //     if(error.response){
    //       setErrorMessage(error.response.data);
    //     }
  
    //   });
    console.log("data is",data);
    }
  return (
    <div>
      <Container>
        <DashBoard />
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3">
                <Form.Label>Oldpassword:</Form.Label>
                <Form.Control
                  type="text"
                  name="oldpwd"
          
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Newpassword:</Form.Label>
                <Form.Control
                  type="text"
                  name="newpwd"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>ConfirmNewpassword:</Form.Label>
                <Form.Control
                  type="text"
                  name="confnewpwd"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="form-control"
         
              >
                UpdatePassword{" "}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default PasswordChange;
