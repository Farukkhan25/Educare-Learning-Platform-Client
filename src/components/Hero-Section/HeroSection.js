import React from "react";
import { useContext } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img1.png";
import { themeContext } from "../../contexts/Context";
import "./hero-section.css";

const HeroSection = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <section
      className="hero-bg"
      style={
        darkMode
          ? { backgroundColor: "#050122" }
          : { backgroundColor: "#FFC665" }
      }
    >
      <Container
        className="bg-light rounded-3"
        style={
          darkMode
            ? { backgroundColor: "#023d7c" }
            : { backgroundColor: "#FFC665" }
        }
      >
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your Suitable Schedule
              </h2>
              <p className="mb-5 fw-bold" style={{ textAlign: "justify" }}>
                <span className="fw-bolder">
                  Transform your life through education.
                </span>{" "}
                <br /> Learners around the world are launching new careers,
                advancing in their fields, and enriching their lives. Power the
                future with learning for everyone. We’ve got everything you need
                to deliver flexible and effective skills development for your
                entire workforce.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
