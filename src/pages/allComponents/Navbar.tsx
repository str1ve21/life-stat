import React from "react";

export default function Navbar() {
  const linksArray: string[] = ["Welcome", "About", "Account", "Links"];
  return (
    <nav className="fixed flex h-[60px] w-full lg:h-full lg:w-[60px] bg-white shadow-lg z-[999]">
      <div className="w-full flex justify-around items-center uppercase lg:text-vertical-rl text-[4vw] lg:text-xl">
        {linksArray.map((item: string) => {
          return (
            <a className="w-max" href={"#" + item} key={item}>
              {item}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
