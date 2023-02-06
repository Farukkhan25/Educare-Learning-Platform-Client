import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React, { useContext, useState } from "react";
import { ButtonGroup, FormGroup } from "react-bootstrap";
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
  MDBInputGroup,
} from "mdb-react-ui-kit";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { themeContext } from "../../../contexts/Context";

const Login = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const { signIn, setLoading, providerLogin, resetPassword } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

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
        setError("");
        if (user.emailVerified) {
          navigate(from, { replace: true });
        } else {
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
      });
  };

  const handleReset = () => {
    resetPassword(userEmail)
      .then(() => {
        toast.success("Please check your email");
      })
      .catch((error) => toast.error(error.message));
  };

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  const handleGithubSignIn = () => {
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  return (
    <MDBContainer breakpoint="md" className="p-3 my-5">
      <form onSubmit={handleSubmit}>
        <MDBRow className=" g-5 align-items-center">
          <MDBCol col="10" md="12" lg="6">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
              className="img-fluid"
              alt="Phone image"
            />
          </MDBCol>

          <MDBCol col="4" md="12" lg="6">
            <div
              className="p-3 rounded-4"
              style={{
                background: darkMode ? "#333333" : "#000033",
                color: darkMode ? "#ffffff" : "white",
              }}
            >
              <h2 className="text-white text-center py-2">Login</h2>
              <MDBInput
                onBlur={(event) => setUserEmail(event.target.value)}
                wrapperClass="mb-4"
                label="Email address"
                id="email"
                type="email"
                size="lg"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                id="password"
                type="password"
                size="lg"
              />

              <div className="d-flex justify-content-between mx-4 mb-4 text-decoration-none">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <Link to="" onClick={handleReset}>
                  Forgot password?
                </Link>
              </div>

              <MDBBtn className="mb-4 w-100" size="lg" type="submit">
                Sign in
              </MDBBtn>
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center text-danger fw-bold mx-3 mb-0">
                  {error}
                </p>
              </div>

              <p className="mb-5 pb-lg-2" style={{ color: "white" }}>
                Don't have an account?{" "}
                <Link to="/register" style={{ color: "#00CCFF" }}>
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
                onClick={handleGithubSignIn}
              >
                <MDBIcon fab icon="github" className="mx-2" />
                Sign in with Github
              </MDBBtn>
            </div>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
};

export default Login;
