import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

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
    <header className="fixed flex w-full h-max content-padding backdrop-blur-[8px] bg-white/75 z-[100] rounded-b-[40px]">
      <a href="#" className="flex items-center h-[40px] lg:h-[50px] my-auto">
        <img src={IconAsset} alt="Logo" className="h-full rounded-lg" />
        <span className="ml-[10px] lg:ml-[20px] text-logo">LifeStat</span>
      </a>
      <nav className="hidden lg:flex justify-around items-center w-max ml-auto mr-[40px] text-nav bg-clip-text bg-gradient-to-r from-app-600 to-app-100">
        {linksArray.map((item: string) => {
          return (
            <a
              className="ml-[20px] w-max hover:text-transparent text-raleway duration-200"
              href={"#" + item}
              key={item}
            >
              {item}
            </a>
          );
        })}
      </nav>
      <ThemeSwitcher></ThemeSwitcher>
    </header>
  );
}
