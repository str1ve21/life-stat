import React, { useEffect } from "react";
import { throttle } from "throttle-debounce";
import { useLocation } from "react-router-dom";

// img
import UseAsset from "@/src/assets/WelcomeAssets/use.jpg";

// func
import { createFilter } from "../../func/filter";
import { createParallaxY } from "../../func/parallax";

// interfaces
import IFilterOptions from "../../interfaces/IFilterOptions";
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";

export default function Benefit() {
  const location = useLocation();

  const benefitParallaxItems: IParallaxYOptions[] = [
    {
      elem: "#benefit-title",
      power: 1.5,
      startFrom: 40,
      initialTranslateY: -131,
      finishAfter: 60,
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
    return () => {
      benefitParallaxItems.forEach((item) => {
        window.removeEventListener("scroll", () => {
          createParallaxY(item);
        });
      });
      benefitFilterItems.forEach((item) => {
        window.removeEventListener("scroll", () => {
          createFilter(item);
        });
      });
    };
  }, [location.pathname]);
  return (
    <section
      id="Польза"
      className="relative flex flex-col lg:flex-row h-max z-30 rounded-[40px] overflow-hidden"
    >
      <div className="flex flex-col justify-center min-h-[700px] lg:min-h-screen w-full lg:max-w-[70vw] 2xl:max-w-[50vw] content-padding">
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
      <div className="flex justify-center lg:justify-end items-center px-[40px] lg:p-0 w-full lg:h-screen">
        <img
          src={UseAsset}
          alt="UseAsset"
          className="h-[20vh] lg:h-2/3 object-cover rounded-t-full lg:rounded-tr-none lg:rounded-l-full"
        />
      </div>
    </section>
  );
}
