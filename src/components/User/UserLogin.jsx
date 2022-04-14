import React,{useState} from "react";
import { useForm } from "react-hook-form";
import { FacebookLoginButton } from "react-social-login-buttons";
import { GoogleLoginButton } from "react-social-login-buttons";
import { Col, Container, Row,Form,Button} from "react-bootstrap";
const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  return (
    <Container>
      <Row>
        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
          <Form>
            <h3>Login in to your account</h3>
            <FacebookLoginButton onClick={() => alert("Hello")} />
            <GoogleLoginButton onClick={() => alert("Hello")} />
            <div className="mb-4">
                <hr data-content="AND" className="hr-text,solid"/>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
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
export default UserLogin;
