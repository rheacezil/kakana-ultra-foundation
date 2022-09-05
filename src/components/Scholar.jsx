import React from "react";
import { Carousel } from "react-bootstrap";

export default function Scholar() {
  return (
    <section id="scholars" class="py-5">
      <div class="container-fluid">
        <div class="title text-center">
          <h2>Scholars of Ultra</h2>
          <span class="d-inline-block title-border"></span>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <Carousel className="w-50">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/scholar-1.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/scholar-2.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="images/scholar-3.png"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
