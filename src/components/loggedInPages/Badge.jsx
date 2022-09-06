import React from "react";
import Footer from "../Footer";

export default function Badge() {
  return (
    <React.Fragment>
      <section className="py-5">
        <div className="container" style={{ paddingTop: "105px" }}>
          <div className="title text-center">
            <h2>My Badges</h2>
            <span className="d-inline-block title-border"></span>
          </div>

          <div className="row pt-5">
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-1.png"
                    className="img-fluid"
                    alt="educate"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">EDUCATE</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-2.png"
                    className="img-fluid"
                    alt="generosity"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">GENEROSITY</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-3.png"
                    className="img-fluid"
                    alt="volunteerism"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">VOLUNTEERISM</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-4.png"
                    className="img-fluid"
                    alt="give-love"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">GIVE LOVE</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-5.png"
                    className="img-fluid"
                    alt="nutrition"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">NUTRITION</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/bagde-6.png"
                    className="img-fluid"
                    alt="community"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">COMMUNITY</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-7.png"
                    className="img-fluid"
                    alt="eco-friend"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">ECO-FRIEND</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-8.png"
                    className="img-fluid"
                    alt="donate blood"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">DONATE BLOOD</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-9.png"
                    className="img-fluid"
                    alt="clean-up"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">CLEAN-UP</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-10.png"
                    className="img-fluid"
                    alt="paw mate"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">PAW-MATE</p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-6 pb-4">
              <div className="card shadow text-center">
                <div className="card-body">
                  <img
                    src="images/badge-11.png"
                    className="img-fluid"
                    alt="home-builder"
                  />
                </div>
                <div className="card-footer bg-white">
                  <p className=" mt-3">HOME BUILDER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
