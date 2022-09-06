import React from "react";
import { Container } from "react-bootstrap";

export default function Fundaraisers() {
  return (
    <>
      <section id="fundraisers" className="py-5">
        <Container>
          <div className="title  text-center pt-5">
            <h2 className="position-relative">Current Fundraisers</h2>
            <span className="d-inline-block title-border"></span>
          </div>
          <div className="row pt-4">
            <div className="col-md-6 col-lg-4 card position-relative border-0 my-3">
              <img
                src="images/fundraiser-1.png"
                className="pt-3"
                alt="blog 1"
              />
              <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                <button className="btn btn-warning">
                  <i className="bi bi-plus-lg"></i> Donate Now
                </button>
              </span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-warning text-dark justify-content-center"
                  role="progressbar"
                  aria-label="Warning striped example"
                  style={{ width: "60%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  60%
                </div>
              </div>
              <div className="card-body px-0">
                <h4 className="card-title">Project Ngiti</h4>
                <p className="card-text mt-3 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam quo fugit quia mollitia debitis nesciunt facere
                  totam esse perferendis accusantium illum dolore quaerat,
                  maxime unde.
                </p>
                <div className="d-flex pb-3">
                  <div className="w-50">
                    <i className="bi bi-bullseye text-warning"></i> Goal: ₱
                    50,000
                  </div>
                  <div className="w-50">
                    <i className="bi bi-bar-chart-line-fill text-warning"></i>{" "}
                    Raised: ₱ 30,000
                  </div>
                </div>
                <a href="#" className="btn btn-outline-dark">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 card position-relative border-0 my-3">
              <img
                src="images/fundraiser-2.png"
                className="pt-3"
                alt="blog 2"
              />
              <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                <button className="btn btn-warning">
                  <i className="bi bi-plus-lg"></i> Donate Now
                </button>
              </span>
              <div className="progress">
                <div
                  className="
              progress-bar progress-bar-striped
              progress-bar-animated bg-warning
              text-dark justify-content-center"
                  role="progressbar"
                  aria-label="Warning striped example"
                  style={{ width: "75%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  75%
                </div>
              </div>
              <div className="card-body px-0">
                <h4 className="card-title">Project Aral</h4>
                <p className="card-text mt-3 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam quo fugit quia mollitia debitis nesciunt facere
                  totam esse perferendis accusantium illum dolore quaerat,
                  maxime unde.
                </p>

                <div className="d-flex pb-3">
                  <div className="w-50">
                    <i className="bi bi-bullseye text-warning"></i> Goal: ₱
                    35,000
                  </div>
                  <div className="w-50">
                    <i className="bi bi-bar-chart-line-fill text-warning"></i>{" "}
                    Raised: ₱ 26,250
                  </div>
                </div>

                <a href="#" className="btn btn-outline-dark">
                  Read more
                </a>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 card position-relative border-0 my-3">
              <img
                src="images/fundraiser-3.png"
                className="pt-3"
                alt="blog 3"
              />
              <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                <button className="btn btn-warning">
                  <i className="bi bi-plus-lg"></i> Donate Now
                </button>
              </span>
              <div className="progress">
                <div
                  className="progress-bar progress-bar-striped progress-bar-animated bg-warning text-dark justify-content-center"
                  role="progressbar"
                  aria-label="Warning striped example"
                  style={{ width: "90%" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
              <div className="card-body px-0">
                <h4 className="card-title">Project Linis</h4>
                <p className="card-text mt-3 text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam quo fugit quia mollitia debitis nesciunt facere
                  totam esse perferendis accusantium illum dolore quaerat,
                  maxime unde.
                </p>
                <div className="d-flex pb-3">
                  <div className="w-50">
                    <i className="bi bi-bullseye text-warning"></i> Goal: ₱
                    25,000
                  </div>
                  <div className="w-50">
                    <i className="bi bi-bar-chart-line-fill text-warning"></i>{" "}
                    Raised: ₱ 22,500
                  </div>
                </div>
                <a href="#" className="btn btn-outline-dark">
                  Read more
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
