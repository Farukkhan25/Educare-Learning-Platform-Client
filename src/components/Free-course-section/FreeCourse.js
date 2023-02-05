import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Gradient } from "react-gradient";
import courseImg01 from "../../assets/images/web-development.png";
import courseImg02 from "../../assets/images/kids-learning.png";
import courseImg03 from "../../assets/images/seo.png";
import courseImg04 from "../../assets/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Basic Web Development Course",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Coding for Junior Basic Course",
    imgUrl: courseImg02,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "03",
    title: "Search Engine Optimization - Basic",
    imgUrl: courseImg03,
    students: 5.3,
    rating: 1.7,
  },

  {
    id: "04",
    title: "Basic UI/UX Design - Figma",
    imgUrl: courseImg04,
    students: 5.3,
    rating: 1.7,
  },
];

const FreeCourse = () => {
  return (
    <Gradient
      gradients={[
        ["#A2E2B9", "#F1B8FF"],
        ["#E9E871", "#A576FF"],
      ]}
      property="background"
      duration={6000}
      // transition="linear"
      angle="90deg"
    >
      <section>
        <Container className="bg-body p-4">
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h2 className="fw-bold">Our Free Courses</h2>
            </Col>

            {freeCourseData.map((item) => (
              <Col lg="3" md="4" className="mb-4" key={item.id}>
                <FreeCourseCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Gradient>
  );
};

export default FreeCourse;
