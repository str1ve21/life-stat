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
    <header className="fixed flex w-full h-[88px] content-padding py-0 backdrop-blur-lg bg-white/40 z-[100]">
      <a href="#" className="flex items-center h-[48px] my-auto">
        <img src={IconAsset} alt="Logo" className="h-full rounded-lg" />
        <span className="ml-4 text-logo">LifeStat</span>
      </a>
      <nav className="flex justify-around items-center w-max ml-auto text-nav bg-clip-text bg-gradient-to-b from-app-600 to-app-100">
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
