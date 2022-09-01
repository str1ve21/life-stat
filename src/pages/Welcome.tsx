import React from "react";
import Navbar from "./allComponents/Navbar";
import Section1 from "./welcomeComponents/Section1";
import Section2 from "./welcomeComponents/Section2";

export default function WelcomePage() {
  return (
    <main
      id="page"
      className="h-screen min-w-[300px] overflow-y-auto scroll-smooth"
    >
      <Navbar />
      <Section1 />
      <Section2 />
    </main>
  );
}
