import React, { useContext, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { AuthContext } from "../../../contexts/AuthProvider";
import { themeContext } from "../../../contexts/Context";
import Toggle from "../../../components/Toggle/Toggle";
import { Gradient } from "react-gradient";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState("light");
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const toggleMode = () => {
    // if (mode === "light") {
    //   setMode("dark");
    //   document.body.style.backgroundColor = "#050122";
    // } else {
    //   setMode("light");
    //   document.body.style.backgroundColor = "white";
    // }

    console.log("Theme Changed");
    theme.dispatch({ type: "toggle" });
  };

  return (
    // <Gradient
    //   gradients={[
    //     ["#A2E2B9", "#F1B8FF"],
    //     ["#FFC665", "#A576FF"],
    //   ]}
    //   property="background"
    //   duration={4000}
    //   // transition="linear"
    //   angle="90deg"
    // >

    <Navbar
      collapseOnSelect
      // className="mb-4"
      expand="lg"
      // bg="light"
      variant="light"
      style={
        darkMode
          ? { backgroundColor: "#050122", color: "white" }
          : { background: "linear-gradient(to right, #FFC665, #A7DFBB)" }
      }
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className=" text-decoration-none ">
            <span>
              <img src="./logo.png" alt="" style={{ height: "40px" }} />
            </span>
            <span className="ps-1 pe-4 fw-bolder">Educare</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/courses" className=" text-decoration-none fw-bold">
              Courses
            </Link>
            <Link to="/blog" className="mx-3 text-decoration-none fw-bold">
              Blog
            </Link>
            <Link to="/faq" className=" text-decoration-none fw-bold">
              FAQ
            </Link>
          </Nav>
          <Nav className="d-flex align-items-center justify-content-center">
            <>
              {user?.uid ? (
                <>
                  <span className="pe-2 ">{user?.displayName}</span>
                  <Button
                    variant="light"
                    className=" text-decoration-none fw-bold"
                    style={{ height: "40px" }}
                    onClick={handleLogOut}
                  >
                    {" "}
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login" className=" text-decoration-none fw-bold">
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="mx-2 text-decoration-none fw-bold"
                  >
                    Register
                  </Link>
                </>
              )}
            </>
            <Link className="px-2" to="/profile">
              {user?.photoURL ? (
                <Tippy content={user?.displayName}>
                  <Image
                    style={{ height: "47px" }}
                    roundedCircle
                    src={user?.photoURL}
                  ></Image>
                </Tippy>
              ) : (
                <FaUser></FaUser>
              )}
            </Link>
          </Nav>
        </Navbar.Collapse>

        <div className="mx-3">
          {/* <div
            className={`form-check form-switch text-${
              mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={toggleMode}
              type="checkbox"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Dark Mode
            </label>
          </div> */}
          <Toggle />
        </div>
      </Container>
    </Navbar>
    // </Gradient>
  );
};

export default Header;
