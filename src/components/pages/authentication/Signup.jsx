import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="signup" className="page-content d-flex align-items-center">
      <div className="container d-flex justify-content-center">
        <div className="row g-0">
          <div className="col-lg-6 d-none d-sm-block">
            <img
              src="images/signup.png"
              className="img-fluid w-100 h-100"
              alt="cover"
            />
          </div>
          <div className="col-lg-5 px-5 p-lg-5">
            <img
              src="images/site-icon-dark.png"
              className="mb-3 my-3"
              alt="site icon"
            />
            <span id="brand-name" className="fw-bold fs-3 pt-3">
              Ultra Foundation
            </span>

            <p className="lead">Be one of us!</p>
            <form>
              <div className="form-row d-flex row-reverse pb-1">
                <div className="col-lg-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                  />
                </div>
                <div className="col-lg-5 px-1">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
              </div>
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
                  <Link to="/login" className="btn btn-warning w-100">
                    Register
                  </Link>
                  <hr />
                </div>
              </div>

              <div className="form-row">
                <div className="col-lg-10">
                  <button className="btn btn-outline-warning text-dark w-100 mb-3">
                    <FontAwesomeIcon icon={faFacebook} />
                    Sign Up with Facebook
                  </button>
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-10">
                  <button className="btn btn-outline-warning text-dark w-100 mb-5">
                    <FontAwesomeIcon icon={faGoogle} /> Sign Up with Google
                  </button>
                </div>
              </div>

              <p>
                Been here before?{" "}
                <Link to="/login" className="text-muted">
                  Login.
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
