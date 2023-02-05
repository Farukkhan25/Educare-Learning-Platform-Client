import React from 'react';
import slide1 from "../../assets/videos/background_video.mp4";
import slide2 from "../../assets/images/about-us.png";
import slide3 from "../../assets/images/kids-learning.png";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

const CarouselSection = () => {
 return (
   <Carousel pause={false} fade>
     <Carousel.Item interval={7000}>
       <video
         className="d-block w-100 "
         style={{
           height: "65vh",
         }}
         src={slide1}
         alt="First slide"
         autoPlay
         loop
         muted
       />
       <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
         <div className="text-center" id="slide1">
           <h3 className="text-light fw-bolder">
             Transform your life through education
           </h3>
           <p className="text-light fw-bold">
             Discover Your Interests and Develop New Skills for a Fulfilling
             Life
           </p>
         </div>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         style={{
           height: "65vh",
         }}
         src={slide2}
         alt="Second slide"
       />

       <Carousel.Caption
         className="d-flex h-100 align-items-center justify-content-center"         
       >
         <div className="text-center" id="slide2">
           <h3 className=" text-light fw-bolder">
             Master Your Skills <br /> The Ultimate Learning Platform
           </h3>
           <p className="fw-bold text-light">
             Unlock Your Potential with Interactive and Engaging Courses
           </p>
         </div>
       </Carousel.Caption>
     </Carousel.Item>
     <Carousel.Item>
       <img
         className="d-block w-100"
         style={{ height: "65vh" }}
         src={slide3}
         alt="Third slide"
       />

       <Carousel.Caption className="d-flex h-100 align-items-center justify-content-center">
         <div className="text-center">
           <h3 className="text-light fw-bolder">
             Empower Your Career To Accelerate Your Growth
           </h3>
           <p className="text-light fw-bold">
             Advance Your Career with In-Demand Skills and Expert Instruction
           </p>
         </div>
       </Carousel.Caption>
     </Carousel.Item>
   </Carousel>
 );

};

export default CarouselSection;