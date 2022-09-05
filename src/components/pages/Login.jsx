import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

export default function Login() {
  return (
    <>
      <div id="login" className="page-content d-flex align-items-center">
        <Container className=" d-flex justify-content-center">
          <div>
            <div className="row g-0">
              <div className="col-lg-6 d-none d-sm-block">
                <img
                  src="images/hero-cover-1.png"
                  className="img-fluid h-100"
                  alt="cover"
                />
              </div>
              <div className="col-lg-5 px-5 p-5">
                <img
                  src="images/site-icon-dark.png"
                  className="mb-3"
                  alt="site icon"
                />
                <span id="brand-name" className="fw-bold fs-3 pt-3">
                  Ultra Foundation
                </span>

                <p className="lead">Sign in to your account</p>
                <form>
                  <div className="form-row">
                    <div className="col-lg-10">
                      <input
                        type="email"
                        className="form-control my-3"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-10">
                      <input
                        type="password"
                        className="form-control my-3"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-10">
                      <Link to="/home" className="btn btn-warning w-100">
                        Login
                      </Link>
                      <hr />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col-lg-10">
                      <button className="btn btn-outline-warning text-dark w-100 mb-3">
                        <FontAwesomeIcon icon={faFacebook} /> Login with
                        Facebook
                      </button>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col-lg-10">
                      <button className="btn btn-outline-warning text-dark w-100 mb-5">
                        <FontAwesomeIcon icon={faGoogle} /> Login with Google
                      </button>
                    </div>
                  </div>

                  <Link to="#" className="text-muted">
                    Forgot password?
                  </Link>
                  <p>
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-muted">
                      Register here.
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
