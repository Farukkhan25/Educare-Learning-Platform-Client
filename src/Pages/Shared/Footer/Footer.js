import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <Link to="/" className="me-4 text-reset ">
            <MDBIcon fab icon="facebook-f" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </Link>
          <Link to="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </Link>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                Educare
              </h6>
              <p>Best Online Learning Platform</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4 text-center">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="#!" className="text-reset">
                  Angular
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  React
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Vue
                </Link>
              </p>
              <p>
                <Link to="#!" className="text-reset">
                  Laravel
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 text-center">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/courses" className="text-reset">
                  courses
                </Link>
              </p>
              <p>
                <Link to="/blog" className="text-reset">
                  Blog
                </Link>
              </p>
              <p>
                <Link to="/faq" className="text-reset">
                  FAQ
                </Link>
              </p>
              <p>
                <Link to="/" className="text-reset">
                  About
                </Link>
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4 text-end"
            >
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Banani, Dhaka-1212
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                programmingherofaruk@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 880-1728848078
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2022 Copyright :
        <Link
          className="text-reset fw-bold"
          to="https://www.facebook.com/faruk0077"
        >
          Md. Faruk Khan
        </Link>
      </div>
    </MDBFooter>
  );
};

export default Footer;
