import React from "react";

import Home from "./Pages/Home";
import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Header from "./components/Header";

function App() {
  return (
    <div className="w-full overflow-hidden px-6 sm:px-16">
      <Navbar />

      <Hero />
      <Header />
    </div>
  );
}

export default App;
