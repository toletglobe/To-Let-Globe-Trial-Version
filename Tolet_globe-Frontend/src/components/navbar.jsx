import { Link } from "react-router-dom";
import Logo from "../assets/img/Favicon.png";
import { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "../style/navbar.css";
import axios from "./blog/axiosConfig";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");

  const handleNavLinkClick = (link) => {
    setActiveLink(link);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoggedInStatus = async () => {
    await axios
      .post("/logInStatus")
      .then((response) => {
        console.log("LOG IN STATUS", response.data.isLoggedIn);
        if (response.data.isLoggedIn) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
        // Redirect to the /blogs page
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error actions, e.g., show error message
      });
  };

  const handleLogout = async () => {
    await axios
      .post("/logout")
      .then((response) => {
        setIsLoggedIn(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error actions, e.g., show error message
      });
  };

  useEffect(() => {
    checkLoggedInStatus();
  }, []);

  return (
    <Navbar expand="lg" className="navbar-container">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" />
        </Link>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          style={{ color: "white" }}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/"
              className={`nav-link ${activeLink === "home" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/service"
              className={`nav-link ${activeLink === "service" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("service")}
            >
              Service
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/blogs"
              className={`nav-link ${activeLink === "blog" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("blog")}
            >
              Blog
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact"
              className={`nav-link ${activeLink === "contact" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("contact")}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about"
              className={`nav-link ${activeLink === "about" ? "active" : ""}`}
              onClick={() => handleNavLinkClick("about")}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/property"
              className={`nav-link ${
                activeLink === "propertyListing" ? "active" : ""
              }`}
              onClick={() => handleNavLinkClick("propertyListing")}
            >
              Property Listing
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className={`nav-link ${activeLink === "login" ? "active" : ""} ${
                isLoggedIn ? "d-none" : ""
              }`}
              onClick={() => handleNavLinkClick("login")}
            >
              Login
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/login"
              className={`nav-link ${activeLink === "login" ? "active" : ""} ${
                isLoggedIn ? "" : "d-none"
              }`}
              onClick={handleLogout}
            >
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
};
