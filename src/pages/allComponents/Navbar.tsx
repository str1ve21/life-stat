import React from "react";

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
    <nav className="fixed flex w-full h-[60px] backdrop-blur-lg bg-white/20 shadow-sm lg:shadow-lg z-[999]">
      <div className="flex justify-around items-center w-full uppercase text-[2vh] lg:text-xl bg-clip-text bg-gradient-to-b from-app-600 to-app-100">
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
