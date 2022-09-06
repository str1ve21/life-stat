import React from "react";

export default function Navbar() {
  const linksArray: string[] = [
    "Welcome",
    "Reason",
    "Benefit",
    "Account",
    "Roadmap",
    "Links",
  ];
  return (
    <nav className="fixed flex h-[60px] w-full lg:h-full lg:w-[60px] bg-white shadow-md lg:shadow-lg z-[999]">
      <div className="hidden lg:flex justify-around items-center w-full uppercase lg:text-vertical-rl text-[2vh] lg:text-xl bg-clip-text bg-gradient-to-b from-app-600 to-app-100">
        {linksArray.map((item: string) => {
          return (
            <a
              className="w-max hover:text-transparent duration-200"
              href={"#" + item}
              key={item}
            >
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
