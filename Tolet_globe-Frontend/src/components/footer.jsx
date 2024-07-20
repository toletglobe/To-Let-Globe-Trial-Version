import { Col, Container, Row } from "react-bootstrap";
import "../style/footer.css";
import image1 from "../assets/img/logo.jpeg";
export const Footer = () => {
  return (
    <Container className="footer-container">
      <footer className="text-center text-lg-start text-muted">
        <section className="footer-section">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Reach us</h6>
                <Row className="mb-1 mt-2">
                  <Col md={2}>
                    <i
                      className="fas fa-phone me-3"
                      style={{ color: "white" }}
                    ></i>
                  </Col>
                  <Col>
                    <p className="add-text"> +91-8707727347</p>
                  </Col>
                </Row>
                <Row className="mb-1 mt-1">
                  <Col md={2}>
                    <i
                      className="fas fa-envelope me-3"
                      style={{ color: "white" }}
                    ></i>
                  </Col>
                  <Col>
                    <p className="add-text"> hello@toletglobe.in</p>
                  </Col>
                </Row>
                <Row className="mb-1 mt-1">
                  <Col md={2}>
                    <i
                      className="fas fa-home me-3"
                      style={{ color: "white" }}
                    ></i>
                  </Col>
                  <Col>
                    <p className="add-text">
                      D1/122 vipulkhand,Gomtinagar Lucknow, Uttar Pradesh
                    </p>
                  </Col>
                </Row>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Quick Links</h6>
                <p>
                  <a href="/about" className="footer-link">
                    About US
                  </a>
                </p>
                <p>
                  <a href="/service" className="footer-link">
                    Services
                  </a>
                </p>
                <p>
                  <a href="/blog" className="footer-link">
                    Blogs
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-link">
                    Projects
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Services</h6>
                <p>
                  <a href="#!" className="footer-link">
                    Paying Guest
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-link">
                    Flat and Houses
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-link">
                    Offices
                  </a>
                </p>
                <p>
                  <a href="#!" className="footer-link">
                    Shops and Godown
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 mt-3 text-center">
                <Row>
                  <img
                    src={image1}
                    alt="logo"
                    style={{
                      width: "90px",
                      height: "auto",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  />
                </Row>
                <Row>
                  <p
                    style={{
                      textAlign: "center",
                      fontSize: "12px",
                      color: "#999",
                    }}
                  >
                    One-stop solution for all your brokerage free rental needs{" "}
                  </p>
                </Row>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center footer-tag p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)", color: "white" }}
        >
          <a className="footer-link fw-bold" href="/">
            © 2023 To-Let Globe -- Lucknow
          </a>
          <div className="footer-icon">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
          </div>
        </div>
      </footer>
    </Container>
  );
};
