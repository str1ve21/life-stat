import React from "react";
import { Link } from "react-router-dom";

export default function Section4() {
  return (
    <section
      id="Аккаунт"
      className="relative h-screen bg-gradient-to-b from-app-200 to-app-300 z-40"
    >
      <div className="flex justify-center items-center h-full lg:w-full mx-[5vw] lg:mx-0 lg:pl-[120px] lg:pr-[60px] overflow-hidden">
        <Link
          className="px-8 py-2 bg-neutral-100 hover:scale-95 text-[2vh] lg:text-[3vh] text-raleway rounded-2xl duration-200"
          to="/app"
        >
          App
        </Link>
      </div>
    </section>
  );
}
