import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/web-design.png";
import courseImg2 from "../../assets/images/graphics-design.png";
import courseImg3 from "../../assets/images/ui-ux.png";
import "./courses.css";
import CourseCard from "./CourseCard";
import { Gradient } from "react-gradient";

const coursesData = [
  {
    id: "1",
    title: "Web Design BootCamp-2022 for Beginners",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg1,
  },

  {
    id: "2",
    title: "Professional Graphics Design",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg2,
  },

  {
    id: "3",
    title: "UI/UX BootCamp for Beginners in 2022",
    lesson: 12,
    students: 12.5,
    rating: 5.9,
    imgUrl: courseImg3,
  },
];

const AllCourses = () => {
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
      <section style={{ height: "100vh" }}>
        <Container className="bg-body p-4 rounded-3" style={{ height: "80vh" }}>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="course__top d-flex justify-content-between align-items-center">
                <div className="course__top__left w-50 pt-4">
                  <h2>Our Popular Courses</h2>
                  <p style={{ textAlign: "justify" }}>
                    Our online courses provide you with an affordable and
                    flexible way to learn new skills and study new and emerging
                    topics.
                  </p>
                </div>

                <div className="w-50 text-end">
                  <button className="btn">See All</button>
                </div>
              </div>
            </Col>
            {coursesData.map((item) => (
              <Col lg="4" md="6" sm="6">
                <CourseCard key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Gradient>
  );
};

export default AllCourses;
