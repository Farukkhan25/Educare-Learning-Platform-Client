import React, { useContext } from "react";
import { themeContext } from "../../contexts/Context";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";
import img from "../../assets/images/testimonial01.png";

const Testimonials = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <div className="img"></div>
      <Container
        className="bg-body p-4 mt-5 t-rounded-3" style={{
    borderBottom: "2px solid blue",
    borderBottomLeftRadius: "15px",
    borderBottomRightRadius: "15px",    
  }}      
      >
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-100" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4">Our Students Voice</h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Excellent course of materials
                      </h6>
                      <p>
                        Course materials are quite impressive. Huge collections
                        with quality videos, which are easy to understand.
                        Examples included given the bright view. I have learnt
                        to get interactive through practical teaching with
                        technology. The new ways of teaching using different
                        platforms allow learners to discover the answer
                        themselves by a forum discussion and explore how to use
                        tools such as videos to become more independent
                        learners.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Introduced to various tools
                      </h6>
                      <p>
                        The course has introduced me to various tools that are
                        very useful to my training. I could explore using them
                        to make my lesson more interactive. Enjoyed the course!
                        I learned many new things: a) use of several multimedia,
                        such as various presentation tools, images and youtube
                        videos embedding, and screen casting; b) I also learned
                        about importance of student collaboration and use of
                        discussion forums, twitter polls, and wiki projects.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        Introduced me to various tools
                      </h6>
                      <p>
                        The course has introduced me to various tools that are
                        very useful to my training. I could explore using them
                        to make my lesson more interactive. Really loved the
                        fact that this course offered me an opportunity to
                        realise, explore and apply a range of technology based
                        software, platforms and tools that can aid in making my
                        students' learning experience more engaging in the
                        future.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
