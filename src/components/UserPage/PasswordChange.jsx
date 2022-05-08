import { React, useState } from "react";
import { FormGroup } from "react-bootstrap";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import DashBoard from "./DashBoard";
import { useForm } from "react-hook-form";
import axios from "axios";
const PasswordChange = () => {
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
  // const id=localStorage.getItem("user_id")
   console.log("the data in the client",data);
  reset();
    await axios
      .post(`http://localhost:5000/user/changepassword`, data,{
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      // /${id}
      .then((res) => {
        setSuccessMessage(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response)
          setErrorMessage(error.response.data);
         
        }
      });
  };
  return (
      <Container>
        <DashBoard />
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg"
          >
            {successmessage && <h5 className="bg-success text-white p-3 m-auto shadow-lg rounded-lg">{successmessage}</h5>}
            {errormessage && <h5 className="bg-danger text-white p-3 m-auto shadow-lg rounded-lg">{errormessage}</h5>}
            <Form onSubmit={handleSubmit(onSubmit)}>
             <Form.Group className="mb-3" controlId="formBasicOldPassword">
              <Form.Label>OldPassword</Form.Label>
              <Form.Control
                className={`${errors.password && "invalid"}`}
                type="password"
                placeholder="oldPassword"
                name="Oldpassword"
                autoComplete="off"
                {...register("oldpassword", {
                  required: "oldpassword is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  setSuccessMessage("");
                  setErrorMessage("");
                  trigger("oldpassword");
                }}
             />
          {/* <InputGroup.Append>
          //     <InputGroup.Text>
          //         <i onClick={clickHandler} class={showPass ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
          //     </InputGroup.Text>
          // </InputGroup.Append> */}
              {errors.oldpassword && (
                <small className="text-danger">{errors.oldpassword.message}</small>
              )}
            </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>NewPassword</Form.Label>
              <Form.Control
                className={`${errors.password && "invalid"}`}
                type="newpassword"
                placeholder="NewPassword"
                name="newpassword"
                autoComplete="off"
                {...register("newpassword", {
                  required: "Newpassword is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  setSuccessMessage("");
                  setErrorMessage("");
                  trigger("newpassword");
                }}
              />
              {errors.newpassword && (
                <small className="text-danger">{errors.newpassword.message}</small>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicconfPassword">
              <Form.Label>ConfirmNewPassword</Form.Label>
              <Form.Control
                className={`${errors.confirmpassword && "invalid"}`}
                type="confirmpassword"
                placeholder="confirmPassword"
                name="confirmpassword"
                {...register("confirmpassword", {
                  required: "Confirmpassword is Required!",
                  minLength: {
                    value: 8,
                    message: "Minimun required length is 8",
                  },
                })}
                onKeyUp={() => {
                  setSuccessMessage("");
                  setErrorMessage("");
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
                UpdatePassword{" "}
              </Button></Form></Col></Row></Container>
      
)}
export default PasswordChange;
