import React from "react";

// img
import IconAsset from "@/src/assets/logo.svg";

export default function Navbar() {
  const linksArray: string[] = [
    "Главная",
    "Смысл",
    "Польза",
    "Аккаунт",
    "Планы",
    "Ссылки",
  ];
  return (
    <header className="fixed flex w-full h-[80px] px-[60px] backdrop-blur-lg bg-white/40 z-[999]">
      <a href="#" className="flex items-center h-[48px] my-auto">
        <img src={IconAsset} alt="Logo" className="h-full rounded-lg" />
        <span className="ml-4 text-[2vh] lg:text-3xl text-ssp">LifeStat</span>
      </a>
      <nav className="flex justify-around items-center w-max ml-auto uppercase text-[2vh] lg:text-xl bg-clip-text bg-gradient-to-b from-app-600 to-app-100">
        {linksArray.map((item: string) => {
          return (
            <a
              className="ml-6 w-max hover:text-transparent text-raleway duration-200"
              href={"#" + item}
              key={item}
            >
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
