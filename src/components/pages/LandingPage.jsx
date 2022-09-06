import React from "react";
import Footer from "../Footer";
import Fundaraisers from "../Fundaraisers";
import Hero from "../Hero";
import NavigationBar from "../NavigationBar";
import Scholar from "../Scholar";

export default function LandingPage() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <Fundaraisers />
      <Scholar />
      <Footer />
    </div>
  );
}
