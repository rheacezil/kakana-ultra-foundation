import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { badges } from "../enums";

export default function VolunteerProg() {
  const renderVolPrograms = () => {
    return volPrograms.map((item) => (
      <div className="col-sm-6 col-lg-4 p-0" key={item.id}>
        <div className="program-item position-relative overflow-hidden">
          <img src={item.image} alt={item.name} className="img-fluid w-100" />
          <div className="program-overlay">
            <div className="program-text text-dark">
              <h3>{item.name}</h3>
              <div className="d-flex">
                <FontAwesomeIcon icon={faLocationDot} className="mt-1" />
                <h5 className="mx-2">{item.location}</h5>
              </div>
              <p className="lead">{item.location}</p>
              {/* <span className="text-primary">
                <FontAwesomeIcon icon={faPenToSquare} />
              </span>

              <span className="mx-3 text-danger">
                <FontAwesomeIcon
                  icon={faTrashCan}
                  value={volPrograms[item.id]}
                />
              </span> */}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const volPrograms = [
    {
      id: 1,
      image: "images/program-1.png",
      name: "Feeding Program and Palaro",
      location: "Tabogon, Cebu",
      date: "October 2021",
    },
    {
      id: 2,
      image: "images/program-2.png",
      name: "Trinity Advocacy",
      location: "Cebu City, Cebu",
      date: "November 2016",
    },
    {
      id: 3,
      image: "images/program-3.png",
      name: "Brain Booster Program",
      location: "Tondo, Manila",
      date: "February 2020",
    },
    {
      id: 4,
      image: "images/program-4.png",
      name: "Feeding Program",
      location: "Tondo, Manila",
      date: "February 2020",
    },
    {
      id: 5,
      image: "images/program-5.png",
      name: "After School Teacher Hero Program",
      location: "Tondo, Manila",
      date: "February 2020",
    },
    {
      id: 6,
      image: "images/program-6.png",
      name: "Brain Booster Program",
      location: "Tondo, Manila",
      date: "February 2020",
    },
  ];

  const renderBadges = () => {
    return badges.map((item) => (
      <div className="col-lg-2 col-md-4 col-sm-6 pb-4" key={item.id}>
        <div className="card shadow text-center">
          <div className="card-body">
            <img src={item.image} className="img-fluid" alt={item.name} />
          </div>
          <div className="card-footer bg-white">
            <p className="lead mt-3">{item.name}</p>
          </div>
        </div>
      </div>
    ));
  };
  return (
    <>
      {/* <section id="volunteer-programs" style={{ paddingTop: "82px" }}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 col-lg-4 p-0">
              <div class="program-item position-relative overflow-hidden">
                <img
                  src="images/program-1.png"
                  alt="program 1"
                  class="img-fluid w-100"
                />
                <div class="program-overlay">
                  <div class="program-text text-dark">
                    <h3>Feeding Program and Palaro</h3>
                    <div class="d-flex">
                      <i class="h5 bi bi-geo-alt"></i>
                      <h5 class="mx-2">Tabogon, Cebu</h5>
                    </div>
                    <p class="lead">October 2021</p>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>

                    <span className="mx-3 text-danger">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4 p-0">
              <div class="program-item position-relative overflow-hidden">
                <img
                  src="images/program-2.png"
                  alt="program 2"
                  class="img-fluid w-100"
                />
                <div class="program-overlay">
                  <div class="program-text text-dark">
                    <h3>Trinity Advocacy</h3>
                    <div class="d-flex">
                      <i class="h5 bi bi-geo-alt"></i>
                      <h5 class="mx-2">Cebu City, Cebu</h5>
                    </div>
                    <p class="lead">November 2016</p>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>

                    <span className="mx-3 text-danger">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-0">
              <div class="program-item position-relative overflow-hidden">
                <img
                  src="images/program-3.png"
                  alt="program 3"
                  class="img-fluid w-100"
                />
                <div class="program-overlay">
                  <div class="program-text text-dark">
                    <h3>Brain Booster Program</h3>
                    <div class="d-flex">
                      <i class="h5 bi bi-geo-alt"></i>
                      <h5 class="mx-2">Tondo, Manila</h5>
                    </div>
                    <p class="lead">February 2020</p>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>

                    <span className="mx-3 text-danger">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-0">
              <div class="program-item position-relative overflow-hidden">
                <img
                  src="images/program-4.png"
                  alt="program 4"
                  class="img-fluid w-100"
                />
                <div class="program-overlay">
                  <div class="program-text text-dark">
                    <h3>Feeding Program</h3>
                    <div class="d-flex">
                      <i class="h5 bi bi-geo-alt"></i>
                      <h5 class="mx-2">Tondo, Manila</h5>
                    </div>
                    <p class="lead">February 2020</p>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>

                    <span className="mx-3 text-danger">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-0">
              <div class="program-item position-relative overflow-hidden">
                <img
                  src="images/program-5.png"
                  alt="program 5"
                  class="img-fluid w-100"
                />
                <div class="program-overlay">
                  <div class="program-text text-dark">
                    <h3>After School Teacher Hero Program</h3>
                    <div class="d-flex">
                      <i class="h5 bi bi-geo-alt"></i>
                      <h5 class="mx-2">Tondo, Manila</h5>
                    </div>
                    <p class="lead">February 2020</p>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>

                    <span className="mx-3 text-danger">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-0">
              <div class="program-item position-relative overflow-hidden">
                <img
                  src="images/program-6.png"
                  alt="program 6"
                  class="img-fluid w-100"
                />
                <div class="program-overlay">
                  <div class="program-text text-dark">
                    <h3>Brain Booster Program</h3>
                    <div class="d-flex">
                      <i class="h5 bi bi-geo-alt"></i>
                      <h5 class="mx-2">Tondo, Manila</h5>
                    </div>
                    <p class="lead">February 2020</p>
                    <span className="text-primary">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </span>

                    <span className="mx-3 text-danger">
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section id="volunteer-programs" style={{ paddingTop: "82px" }}>
        <div class="container-fluid">
          <div class="row">{renderVolPrograms()}</div>
        </div>
      </section>

      <section id="badges" className="py-5">
        <div className="container">
          <div className="title text-center">
            <h2>My Badges</h2>
            <span className="d-inline-block title-border"></span>
          </div>

          <div className="row pt-5">{renderBadges()}</div>
        </div>
      </section>
    </>
  );
}