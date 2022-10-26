import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
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

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset()
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success("Please verify your email address.");
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
         updateUserProfile(profile)
           .then(() => {})
           .catch((error) => console.error(error));

    }

    const handleEmailVerification  = () => {
        verifyEmail()
        .then(() =>{})
        .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }

  return (
    // <Form onSubmit={handleSubmit}>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Your Name</Form.Label>
    //     <Form.Control name="name" type="text" placeholder="Your Name" />
    //   </Form.Group>
    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Photo URL</Form.Label>
    //     <Form.Control name="photoURL" type="text" placeholder="Photo URL" />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicEmail">
    //     <Form.Label>Email address</Form.Label>
    //     <Form.Control
    //       name="email"
    //       type="email"
    //       placeholder="Enter email"
    //       required
    //     />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicPassword">
    //     <Form.Label>Password</Form.Label>
    //     <Form.Control
    //       name="password"
    //       type="password"
    //       placeholder="Password"
    //       required
    //     />
    //   </Form.Group>

    //   <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //     <Form.Check
    //       type="checkbox"
    //       onClick={handleAccepted}
    //       label={
    //         <>
    //           Accept <Link to="/terms">Terms and conditions</Link>
    //         </>
    //       }
    //     />
    //   </Form.Group>

    //   <Button variant="primary" type="submit" disabled={accepted}>
    //     Register
    //   </Button>
    //   <Form.Text className="text-danger">{error}</Form.Text>
    // </Form>
    <Form onSubmit={handleSubmit}>
      <MDBContainer fluid className="my-5">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form2"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    onClick={handleAccepted}
                    label={
                      <>
                        Accept <Link to="/terms">Terms and conditions</Link>
                      </>
                    }
                  />
                </div>

                <MDBBtn className="w-100 mb-4" size="md">
                  sign up
                </MDBBtn>

                <p className="fw-bold m-2 text-danger">{error}</p>

                <div className="text-center">
                  <p>or sign up with:</p>

                  

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              class="w-100 rounded-4 shadow-4"
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Form>
  );
};

export default Register;
