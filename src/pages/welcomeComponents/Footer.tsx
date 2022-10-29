import React from "react";
import CatAsset from "@/src/assets/cat.png";

export default function Footer() {
  const textArray: string[] = [
    "Версия: 1.0.1022.",
    "Разработка FrontEnd: str1ve.",
    "Разработка BackEnd: SAwckA.",
    "Спасибо charlesdeluvio, freestocks, Med Badr  Chemmaoui за фото. Источник Unsplash.",
    "Контакты в нижнем правом углу.",
  ];
  return (
    <footer
      id="Ссылки"
      className="relative flex flex-col h-max z-[60] overflow-hidden content-padding"
    >
      <div>
        <h2 className="title">Информация.</h2>
        <h3 className="subtitle">Полезные ссылки, информация и контакты.</h3>
      </div>
      {textArray.map((item) => {
        return (
          <p
            key={item}
            className="text mb-[10px] p-[10px] odd:bg-neutral-200/50 odd:dark:bg-neutral-800/50 odd:rounded-2xl"
          >
            {item}
          </p>
        );
      })}
      <div className=" ml-[40px]">
        <p className="text mb-0 mt-[40px] lg:mt-[80px] text-right">
          Блог на{" "}
          <a
            rel="noreferrer"
            href="https://boosty.to/str1ve"
            target="_blank"
            className="text-app-100"
          >
            Boosty
          </a>
          .
        </p>
        <p className="text mb-0 mt-[10px] lg:mt-[20px] text-right">
          Сделано с ❤️{" "}
          <a
            rel="noreferrer"
            href="https://t.me/str1ve"
            target="_blank"
            className="text-app-100"
          >
            str1ve
          </a>{" "}
          и{" "}
          <a
            href="https://t.me/sawcka"
            className="text-app-100"
            target="_blank"
            rel="noreferrer"
          >
            SAwckA
          </a>
          .
        </p>
      </div>
      <img
        onClick={() => {
          alert("Meow!");
        }}
        src={CatAsset}
        alt="Cat :3"
        className="absolute bottom-[0px] left-[20px] md:left-[40px] lg:left-[60px] h-[40px] lg:h-[80px]"
      />
    </footer>
  );
}
