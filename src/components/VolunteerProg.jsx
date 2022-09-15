import { useEffect, useState } from "react";
import { volunteer } from "../enums";
import { renderLoading } from "../loaders";

export default function VolunteerProg() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  const renderVolunteerList = () => {
    return volunteer.map((item) => (
      <div className="col-sm-6 col-lg-4 p-0" key={item.id}>
        <div className="program-item position-relative overflow-hidden">
          <img src={item.image} alt={item.name} className="img-fluid w-100" />
          <div className="program-overlay">
            <div className="program-text text-dark">
              <h3>{item.title}</h3>
              <div className="d-flex">
                <h5 className="mx-2">{item.location}</h5>
              </div>
              <p className="lead">{item.date}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <section id="volunteer">
      <div className="container-fluid">
        <div className="row">
          {loading ? renderLoading() : renderVolunteerList()}
        </div>
      </div>
    </section>
  );
}
