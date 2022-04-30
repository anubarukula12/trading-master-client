import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import DashBoard from "./DashBoard";
const UserProfile = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:5000/userProfile", {
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
          <Row>
            <Col
              lg={5}
              md={6}
              sm={12}
              className="p-5 m-auto shadow-sm rounded-lg"
            ><h2>{ data.name.charAt(0).toUpperCase() + data.name.slice(1)}Profile</h2>
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
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" value={data.email} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={data.password} />
                </Form.Group>
              </Form>

              <Button variant="primary" type="submit" className="form-control">
                EDIT{" "}
              </Button>
            </Col>
          </Row>
        </Container>
      )}{" "}
    </div>
  );
};

export default UserProfile;
