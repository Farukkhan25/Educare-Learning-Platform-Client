import React from "react";
import { Container, Row, Col } from "reactstrap";
import BackgroundVideoPlayer from "react-background-video-player";
import "./features.css";
import videoBg from "../../assets/videos/background_video2.mp4";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "These popular free courses all have top ratings and can be completed in 8 hours or less. There are short courses and online degrees, depending on what you're after, and you can access course content for free for 14-day periods.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "We are here for you from technology support to eLearning academic advisors. ... List of all full-time programs that are available to take online. Find more free online learning courses. We provide maximum scheduling flexibility.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "Earn a career credential or prepare for a certification with Professional Certificate programs on Educare. It's an excellent choice for free courses with certificates because of the high quality of the learning content. ",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <div className="overlay"></div>
      <div className="content">
        <Container className=" p-4">          
          <Row>
            {FeatureData.map((item, index) => (
              <Col lg="4" md="6" key={index}>
                <div className="single__feature text-center">
                  <h2 className="mb-3">
                    <i class={item.icon}></i>
                  </h2>
                  <div className=" bg-body p-4">
                    <h6>{item.title}</h6>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <video src={videoBg} autoPlay loop muted />
    </section>
  );
};

export default Features;
