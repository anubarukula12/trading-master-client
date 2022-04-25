import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
const AboutUs = () =>{
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
            <h2>About Us</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus autem hic excepturi aspernatur neque natus delectus dolore odio, fugiat et iusto voluptas voluptates rerum? Amet dolores veritatis consequatur placeat enim!
        Cum nisi temporibus blanditiis reiciendis culpa nulla perferendis aspernatur distinctio consequuntur deserunt! Repellendus, esse ea ex omnis dolorem, eaque eius minima temporibus eum rem saepe vel voluptatum reiciendis minus? Maiores!
        Commodi accusamus incidunt saepellitia, et omnis similique rerum voluptates repudiandae laborum adipisci atque optio maiores. Reprehenderit consequuntur nam assumenda.

        </p></Col>
        </Row></Container></div>
    )
}
export default AboutUs;