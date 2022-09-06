import React from "react";
import NavBarLoggedIn from "../NavBarLoggedIn";
import Footer from "../../Footer";
import Badge from "../Badge";
import VolunteerProg from "../VolunteerProg";

export default function HomePage() {
  return (
    <React.Fragment>
      <NavBarLoggedIn />
      <VolunteerProg />
      <Badge />
      <Footer />
    </React.Fragment>
  );
}
