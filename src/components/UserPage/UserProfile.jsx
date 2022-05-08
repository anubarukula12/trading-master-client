import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import DashBoard from "./DashBoard";
const UserProfile = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:5000/userprofile", {
        headers: {
          "x-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        setData(res.data);
        console.log("userdata is", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {data && (
        <Container>
          <DashBoard />
          <Row>
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            >
              <h2>
                {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
              </h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={
                      data.name.charAt(0).toUpperCase() + data.name.slice(1)
                    }
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Username:</Form.Label>
                  <Form.Control type="text" value={data.user_name} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control type="email" value={data.email} />
                </Form.Group>
              </Form>
              <Link
        className="btn btn-link"
        to={"/passwordchange"}
      >
         <Button variant="primary" type="submit" className="form-control">
                ChangePassword{" "}
              </Button>
      </Link>
             
            </Col>
          </Row>
        </Container>
      )}{" "}
    </div>
  );
};

export default UserProfile;
