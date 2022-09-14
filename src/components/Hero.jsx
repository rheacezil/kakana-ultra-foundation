import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section id="hero" className="vh-100">
      <div className="container h-100 d-flex align-items-center justify-content-center">
        <div className="text-center active">
          <p className="text-white lead fw-light">Get involved now!</p>
          <h1 className="text-white py-2 mb-5">
            “You have not lived today until you have done something for someone
            who can never repay you.”
          </h1>
          <Link to="/signup" className="btn btn-lg btn-warning mx-2 fw-light">
            Join Us!
          </Link>
          <Link to="/donate" className="btn btn-lg btn-warning mx-2 fw-light">
            Donate
          </Link>
        </div>
      </div>
    </section>
  );
}
