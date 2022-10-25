import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Topics from "../Topics/Topics";

const Courses = () => {
  return (
    <Container>
      <Row>
        <Col lg="3" className="d-none d-lg-block">
          <LeftSideNav></LeftSideNav>
        </Col>

        <Col lg="9">
          <Topics></Topics>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
