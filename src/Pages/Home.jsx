import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Feature from "../components/Feature";
import HowItWorks from "../components/HowItWorks";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="overflow-y-hidden">
      <Navbar />
      <Hero />
      <Feature />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default Home;
