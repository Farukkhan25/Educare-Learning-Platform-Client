import React, { useContext, useState } from "react";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [mode, setMode] = useState("light");

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#050122";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <Navbar
      collapseOnSelect
      className="mb-4"
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/" className=" text-decoration-none ">
            <span>
              <img src="./logo.png" alt="" style={{ height: "40px" }} />
            </span>
            <span className="ps-1 pe-4">Educare</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Link to="/courses" className=" text-decoration-none">
              Courses
            </Link>
            <Link to="/blog" className="mx-3 text-decoration-none">
              Blog
            </Link>
            <Link to="/faq" className=" text-decoration-none">
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
                    style={{ height: "40px" }}
                    onClick={handleLogOut}
                  >
                    Log out
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">Login</Link>
                  <Link to="/register" className="mx-2">
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
          <div
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
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
