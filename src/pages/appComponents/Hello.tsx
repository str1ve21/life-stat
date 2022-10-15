import React from "react";
import { Link } from "react-router-dom";

// img
import IconAsset from "@/src/assets/logo.svg";

export default function WelcomePage() {
  return (
    <section className="flex flex-col justify-center min-h-[50vh] px-[40px] py-[20px] bg-neutral-100">
      <Link
        to="/"
        className="absolute top-[20px] left-[40px] flex items-center h-[48px]"
      >
        <img src={IconAsset} alt="Logo" className="h-full rounded-lg" />
        <span className="ml-4 text-[2vh] lg:text-3xl text-ssp">LifeStat</span>
      </Link>
      <h1 className="text-[6vh] lg:text-[12vh] text-ssp font-bold">
        Welcome back, str1ve!
      </h1>
      <div id="buttons" className="flex flex-wrap gap-[20px]">
        <button
          onClick={() => {
            document
              .querySelector<HTMLDialogElement>("#addCounterDialog")!
              .showModal();
          }}
          className="px-8 py-2 bg-emerald-200 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200"
        >
          Добавить
        </button>
        <button className="px-8 py-2 bg-amber-200 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200">
          Изменить
        </button>
        <button className="px-8 py-2 bg-rose-200 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200">
          Удалить
        </button>
        <button className="px-8 py-2 bg-blue-200 hover:scale-95 text-[1vh] lg:text-[2vh] text-raleway rounded-2xl duration-200">
          Настройки
        </button>
      </div>
    </section>
  );
}
