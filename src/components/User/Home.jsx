import React from "react";
import { Col, Container, Row } from "react-bootstrap";
const Home = () => {
  return (
    <div>
      <Container id="container">
        <Row>
          <Col
            lg={5}
            md={6}
            sm={12}
            className="p-5 m-auto shadow-sm rounded-lg .ml-3"
          >
            <h2></h2>
            <p>
              <b color="blue">Trading Master</b> system is designed for uploading / adding  eod stock ratings pulled from other downstream systems and perform various actions on stocks and come up with their own ratings.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Home;
