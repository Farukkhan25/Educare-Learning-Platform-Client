import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assets/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container className="bg-body p-4 rounded-3">
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p className="text-bold">
                We’re a leading marketplace platform for learning and teaching
                online. Explore some of our most popular content and learn
                something new. Gain new skills and earn a certificate of
                completion. Our free online courses provide you with an
                affordable and flexible way to learn new skills and study new
                and emerging topics.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/Rim14e5_Hwc"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
