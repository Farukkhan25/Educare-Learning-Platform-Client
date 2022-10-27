import React, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import AboutUs from "../../../components/About-us/AboutUs";
import ChooseUs from "../../../components/Choose-us/ChooseUs";
import Company from "../../../components/Company-section/Company";
import AllCourses from "../../../components/Courses-section/AllCourses";
import Features from "../../../components/Feature-section/Features";
import FreeCourse from "../../../components/Free-course-section/FreeCourse";
import HeroSection from "../../../components/Hero-Section/HeroSection";
import Newsletter from "../../../components/Newsletter/Newsletter";
import Testimonials from "../../../components/Testimonial/Testimonials";
import Header from "../../Shared/Header/Header";

const Home = () => {
  return (
    <Fragment>
      <HeroSection />
      <Company />
      <AboutUs />
      <AllCourses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
    </Fragment>
  );
};

export default Home;
