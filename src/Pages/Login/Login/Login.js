import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { ButtonGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from "react-hot-toast";

import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

import {
  FaGoogle,
  FaGithub,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const { providerLogin } = useContext(AuthContext);
    const [error, setError] = useState('');
  const { signIn, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
      signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
          form.reset();
          setError('');
        if (user.emailVerified) {
            navigate(from, {replace: true});
          }
        else {
            toast.error(
              "Your email is not verified. Please verify your email address."
            );
          }
      })
        .catch((error) => {
            console.error(error);
            setError(error.message);
        })    
       .finally(() => {
                setLoading(false);
            })
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };


  return (
    // <div>
    //   <div>
    //     <Form onSubmit={handleSubmit}>
    //       <Form.Group className="mb-3" controlId="formBasicEmail">
    //         <Form.Label>Email address</Form.Label>
    //         <Form.Control
    //           name="email"
    //           type="email"
    //           placeholder="Enter email"
    //           required
    //         />
    //       </Form.Group>

    //       <Form.Group className="mb-3" controlId="formBasicPassword">
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control
    //           name="password"
    //           type="password"
    //           placeholder="Password"
    //           required
    //         />
    //       </Form.Group>

    //       <Button variant="primary" type="submit">
    //         Login
    //       </Button>
    //       <Form.Text className="text-danger">{error}</Form.Text>
    //     </Form>
    //   </div>

    //   <div>
    //     <ButtonGroup vertical>
    //       <Button
    //         onClick={handleGoogleSignIn}
    //         className="mb-2"
    //         variant="outline-primary"
    //       >
    //         {" "}
    //         <FaGoogle></FaGoogle> Login with Google
    //       </Button>
    //       <Button variant="outline-dark">
    //         {" "}
    //         <FaGithub></FaGithub> Login with Github
    //       </Button>
    //     </ButtonGroup>
    //   </div>
    // </div>

    <MDBContainer breakpoint="md" className="p-3 my-5">
      <MDBRow>
        <MDBCol col="10" md="12" lg="6">
          <img
            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
            class="img-fluid"
            alt="Phone image"
          />
        </MDBCol>

        <MDBCol col="4" md="12" lg="6" onSubmit={handleSubmit}>
          <MDBInput
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="email"
            size="lg"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="password"
            size="lg"
          />

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
            />
            <a href="!#">Forgot password?</a>
          </div>

          <MDBBtn className="mb-4 w-100" size="lg">
            Sign in
          </MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center text-danger fw-bold mx-3 mb-0">{error}</p>
          </div>

          <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
            Don't have an account?{" "}
            <Link to="/register" style={{ color: "#393f81" }}>
              Register here
            </Link>
          </p>

          <div className="divider d-flex align-items-center justify-content-center my-4">
            <p className="text-center fw-bold mx-3 mb-3">
              ----------------------OR----------------------
            </p>
          </div>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#dd4b39" }}
            onClick={handleGoogleSignIn}
          >
            <MDBIcon fab icon="google" className="mx-2" />
            Sign in with Google
          </MDBBtn>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#55acee" }}
          >
            <MDBIcon fab icon="github" className="mx-2" />
            Sign in with Github
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;
