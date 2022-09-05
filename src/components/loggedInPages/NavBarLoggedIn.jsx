import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavBarLoggedIn() {
  return (
    <Navbar bg="warning" expand="lg" className="bg-warning py-4 fixed-top">
      <Container>
        <NavLink
          to="/"
          className="navbar-brand d-fle align-items-center justify-content-between"
        >
          <img src="images/site-icon-dark.png" alt="site icon" />
          <span id="brand-name" className="mx-3">
            ULTRA Foundation
          </span>
        </NavLink>

        <Navbar.Toggle className="border-0">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse>
          <ul className="navbar-nav ms-auto text-center">
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-dark">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-dark">
                My Badges
              </NavLink>
            </li>
            <li className="nav-item px-2 py-2">
              <NavLink to="/" className="nav-link text-dark">
                Logout
              </NavLink>
            </li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
