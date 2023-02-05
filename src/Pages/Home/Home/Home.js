import React, { Fragment, useState } from "react";
import AboutUs from "../../../components/About-us/AboutUs";
import ChooseUs from "../../../components/Choose-us/ChooseUs";
import Company from "../../../components/Company-section/Company";
import AllCourses from "../../../components/Courses-section/AllCourses";
import Features from "../../../components/Feature-section/Features";
import FreeCourse from "../../../components/Free-course-section/FreeCourse";
import HeroSection from "../../../components/Hero-Section/HeroSection";
import Newsletter from "../../../components/Newsletter/Newsletter";
import Testimonials from "../../../components/Testimonial/Testimonials";
import CarouselSection from "../../../components/Carousel/CarouselSection";

const Home = () => {
  return (
    <Fragment>
      <CarouselSection />
      <HeroSection />
      <Company />
      <AllCourses />
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <AboutUs />
      <Newsletter />
    </Fragment>
  );
};

export default Home;
