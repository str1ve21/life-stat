import React from "react";
import Navbar from "./allComponents/Navbar";
import Section1 from "./welcomeComponents/Section1";
import Section2 from "./welcomeComponents/Section2";
import Section3 from "./welcomeComponents/Section3";
import Section4 from "./welcomeComponents/Section4";

export default function WelcomePage() {
  return (
    <main id="page" className="min-w-[300px] scroll-smooth">
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </main>
  );
}
