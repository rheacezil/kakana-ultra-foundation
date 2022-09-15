import React, { useEffect, useState } from "react";
import "./auth.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db, facebookProvider, googleProvider } from "../../../firebase";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";
import * as actionUser from "../../../redux/actions/actionUser";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [invalidUser, setInvalidUser] = useState(false);

  const [user] = useAuthState(auth);
  const [userLists] = useCollection(db.collection("loginUser"));
  const { loginUser } = bindActionCreators(actionUser, useDispatch());
  const navigate = useNavigate();
  const activeUser = useSelector((state) => state.activeUser);

  useEffect(() => {
    if (user || activeUser.email) {
      // navigate home page
      // navigate("/");
    }
  });
  const checkIfValid = () => {
    let isValid = false;
    // Check if there's no user created
    if (userLists.docs.length === 0) {
      setInvalidUser(true);
      return false;
    }
    // Check if user exist
    userLists.docs.forEach((user) => {
      if (user.data().email === email && user.data().password === password) {
        setInvalidUser(false);
        isValid = true;
      } else {
        setInvalidUser(true);
      }
    });
    //return statement
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkIfValid()) {
      loginUser({ email });
    }
  };

  const facebookSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(facebookProvider).catch((e) => alert(e.message));
  };

  const googleSignIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(googleProvider).catch((error) => alert(error.message));
  };
  console.log(user);
  return (
    <div id="login" className="page-content d-flex align-items-center">
      <Container className="d-flex justify-content-center">
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
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    size="sm"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={invalidUser}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Invalid User
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-4" controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    size="sm"
                    placeholder="Enter Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isInvalid={invalidUser}
                  ></Form.Control>
                  <Form.Control.Feedback type="invalid">
                    Invalid User
                  </Form.Control.Feedback>
                </Form.Group>
                <div className="form-row">
                  <div className="col-lg-10">
                    <Button
                      variant="primary"
                      type="submit"
                      className="btn btn-warning w-100"
                    >
                      Login
                    </Button>
                    <hr />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-10">
                    <button
                      onClick={facebookSignIn}
                      className="btn btn-outline-warning text-dark w-100 mb-3"
                    >
                      <FontAwesomeIcon icon={faFacebook} /> Login with Facebook
                    </button>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-lg-10">
                    <button
                      onClick={googleSignIn}
                      className="btn btn-outline-warning text-dark w-100 mb-5"
                    >
                      <FontAwesomeIcon icon={faGoogle} /> Login with Google
                    </button>
                  </div>
                </div>

                <Link to="/" className="text-muted">
                  Forgot password?
                </Link>
                <p>
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-muted">
                    Register here.
                  </Link>
                </p>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
