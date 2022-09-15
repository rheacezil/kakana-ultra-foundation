import React, { useEffect, useState } from "react";
import { badges } from "../enums";
import { renderLoading } from "../loaders";
import Footer from "./Footer";

export default function Badge() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const renderBadges = () => {
    return badges.map((item) => (
      <div className="col-lg-2 col-md-4 col-sm-6 pb-4" key={item.id}>
        <div className="card shadow text-center">
          <div className="card-body">
            <img src={item.image} className="img-fluid" alt={item.title} />
          </div>
          <div className="card-footer bg-white">
            <p className=" mt-3">{item.title}</p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <React.Fragment>
      <section className="py-5">
        <div className="container" style={{ paddingTop: "105px" }}>
          <div className="title text-center">
            <h2>My Badges</h2>
            <span className="d-inline-block title-border"></span>
          </div>

          <div className="row pt-5">
            {loading ? renderLoading() : renderBadges()}
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
}
