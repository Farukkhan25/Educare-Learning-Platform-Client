import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";

const Register = () => {
  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const { createUser, updateUserProfile, verifyEmail } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        handleEmailVerification();
        toast.success("Please verify your email address.");
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleEmailVerification = () => {
    verifyEmail()
      .then(() => {
        toast.success("Please check your email for verification link");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  return (
    <form onSubmit={handleSubmit}>
    <MDBContainer breakpoint="md" className="my-5">
      <MDBRow className=" g-5 align-items-center">
        <MDBCol col="6" md="12" lg="6">
          <img
            src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4320.jpg?w=826&t=st=1666860644~exp=1666861244~hmac=6d992bd520b859c5a64d13102afca25b86fb8afa9423a6319aa8d1d8b9bec8e9"
            class="w-100 rounded-4 shadow-4"
            alt=""
            fluid
          />
        </MDBCol>
        <MDBCol col="6" md="12" lg="6">
          <MDBCard
            className="my-5 cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <MDBCardBody className="p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBInput
                wrapperClass="mb-4"
                label="Full name"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                type="text"
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Photo URL"
                id="photoURL"
                name="photoURL"
                placeholder="PhotoURL"
                type="text"
              />

              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                name="password"
                id="password"
                placeholder="*******"
                type="password"
              />

              <div className="d-flex justify-content-center mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  type="checkbox"
                  id="flexCheckDefault"
                  onClick={handleAccepted}
                  label={
                    <>
                      Accept <Link to="/terms">Terms and conditions</Link>
                    </>
                  }
                />
              </div>

              <MDBBtn
                className="w-100 mb-4"
                size="md"
                type="submit"
                disabled={!accepted}
              >
                Sign up
              </MDBBtn>

              <p className="fw-bold m-2 text-danger">{error}</p>

              <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                Already have an account?{" "}
                <Link to="/login" style={{ color: "#393f81" }}>
                  Login
                </Link>
              </p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
     </form>
  );
};

export default Register;
