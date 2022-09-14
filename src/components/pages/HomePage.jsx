import React from "react";
import Footer from "../Footer";
import Badge from "../Badge";
import VolunteerProg from "../VolunteerProg";
import NavigationBar from "../NavigationBar";

export default function HomePage() {
  return (
    <React.Fragment>
      <NavigationBar />
      <VolunteerProg />
      <Badge />
    </React.Fragment>
  );
}
