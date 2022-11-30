// react, router, mobx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// plugins, libs
import { throttle } from "throttle-debounce";

// local functions
import { createFilter } from "../../func/filter";
import { createParallaxY } from "../../func/parallax";

// interfaces
import IFilterOptions from "../../interfaces/IFilterOptions";
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";

// images
import UseAsset from "@/src/assets/WelcomeAssets/use.jpg";

export default function Benefit() {
  const benefitParallaxItems: IParallaxYOptions[] = [
    {
      elem: "#benefit-title",
      power: 6,
      startFrom: 40,
      block: 3,
      finishBefore: 5,
    },
  ];

  const benefitFilterItems: IFilterOptions[] = [
    {
      elem: "#benefit-text",
      filterType: "opacity",
      initialFilterValue: 0,
      startFrom: 55,
      finishAfter: 65,
    },
  ];

  useEffect(() => {
    benefitParallaxItems.forEach((item) => {
      window.addEventListener(
        "scroll",
        throttle(15, () => {
          createParallaxY(item);
        })
      );
    });
    benefitFilterItems.forEach((item) => {
      document.querySelector<HTMLElement>(
        item.elem
      )!.style.filter = `${item.filterType}(${item.initialFilterValue})`;

      window.addEventListener(
        "scroll",
        throttle(15, () => {
          createFilter(item);
        })
      );
    });
  }, []);

  return (
    <section
      id="Польза"
      className="relative flex justify-between flex-col lg:flex-row h-max z-30 rounded-[40px] overflow-hidden"
    >
      <div className="content-text">
        <div id="benefit-title">
          <h2 className="hello-title">Стоит ли тебе его использовать?</h2>
          <p className="hello-subtitle mb-[20px] lg:mb-[40px]">
            Что тебе даст использование приложения?
          </p>
        </div>
        <p id="benefit-text" className="text">
          В первую очередь оно подойдёт тем, кто собирается вести разного рода
          статистику. Если же у вас есть область, за которой вы хотите следить -
          думаю, вам стоит попробовать это приложение.
        </p>
        <a
          className="mr-auto button bg-app-400 dark:bg-app-450"
          href="#Аккаунт"
        >
          Создать аккаунт
        </a>
      </div>
      <div className="content-image">
        <img
          src={UseAsset}
          alt="UseAsset"
          className="rounded-t-[80px] lg:rounded-tr-none lg:rounded-l-full"
        />
      </div>
    </section>
  );
}
