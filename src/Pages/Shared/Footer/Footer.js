import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <MDBFooter
      className="text-center text-lg-start text-muted"
      style={{ background: "#004990", color: "white", fontSize: "1.3rem" }}
    >
      <section className="d-flex justify-content-center justify-content-lg-around p-0 pb-2 border-bottom text-white">
        <div className=" d-none d-lg-block">          
            Get connected with us on social networks:          
        </div>

        <div>
          <Link to="/" className="me-4 text-white text-decoration-none ">
            <FaFacebook />
          </Link>
          <Link to="" className="me-4 text-white text-decoration-none">
            <FaTwitter />
          </Link>
          <Link to="" className="me-4 text-white text-decoration-none">
            <FaGoogle></FaGoogle>
          </Link>
          <Link to="" className="me-4 text-white text-decoration-none">
            <FaInstagram />
          </Link>
          <Link to="" className="me-4 text-white text-decoration-none">
            <FaLinkedin></FaLinkedin>
          </Link>
          <Link to="" className="me-4 text-white text-decoration-none">
            <FaGithub></FaGithub>
          </Link>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start ">
          <MDBRow className="mt-1">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Educare
              </h6>
              <p className="text-white">Best Online Learning Platform</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto text-center">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="#!" className="text-white text-decoration-none">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-white text-decoration-none">
                  React
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-white text-decoration-none">
                  Vue
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-white text-decoration-none">
                  Laravel
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 text-center">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/courses" className="text-white text-decoration-none">
                  courses
                </Link>
              </p>
              <p>
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
              </p>
              <p>
                <Link to="/faq" className="text-white text-decoration-none">
                  FAQ
                </Link>
              </p>
              <p>
                <Link to="/" className="text-white text-decoration-none">
                  About
                </Link>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4 text-center text-white"
            >
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <div className="flex">
                <MDBIcon icon="home" className="text-body" />
                <p className="text-white">Banani, Dhaka-1212</p>
              </div>
              <div className="flex">
                <MDBIcon icon="envelope" className="text-white bg-body" />
                <p className="text-white">farukkhanseu@gmail.com</p>
              </div>
              <div className="flex">
                <MDBIcon icon="phone" className="text-white" />
                <p className="text-white">+880-1728848078</p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <h2
        className="text-center p-4 text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", fontSize: "1.3rem" }}
      >
        Copyright {year}, Made With ❤️ By_
        <i class="fa fa-check" aria-hidden="true"></i>
        <span className="text-decoration-none fw-bold text-info">
          Md. Faruk Khan
        </span>{" "}
        <br />
        <span> All rights reserved.</span>
      </h2>
  
    </MDBFooter>
  );
};

export default Footer;
