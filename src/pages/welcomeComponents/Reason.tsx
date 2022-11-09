// react, router, mobx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// plugins, libs
import { throttle } from "throttle-debounce";

//local functions
import { createParallaxY } from "../../func/parallax";
import { createFilter } from "../../func/filter";

// interfaces
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";
import IFilterOptions from "../../interfaces/IFilterOptions";

// images
import ReasonAsset from "@/src/assets/WelcomeAssets/reason.jpg";

export default function Reason() {
  const location = useLocation();

  const reasonParallaxItems: IParallaxYOptions[] = [
    {
      elem: "#reason-title",
      power: 1.5,
      startFrom: 20,
      initialTranslateY: -130,
      finishAfter: 40,
    },
  ];

  const reasonFilterItems: IFilterOptions[] = [
    {
      elem: "#reason-text",
      filterType: "opacity",
      initialFilterValue: 0,
      startFrom: 35,
      finishAfter: 45,
    },
  ];

  useEffect(() => {
    reasonParallaxItems.forEach((item) => {
      window.addEventListener(
        "scroll",
        throttle(15, () => {
          createParallaxY(item);
        })
      );
    });
    reasonFilterItems.forEach((item) => {
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
  }, [location.pathname]);

  return (
    <section
      id="Смысл"
      className="relative flex flex-col lg:flex-row-reverse h-max bg-gradient-to-b from-app-300 dark:from-app-350 to-app-400 dark:to-app-450 z-20 rounded-[40px] overflow-hidden"
    >
      <div className="flex flex-col justify-center min-h-[700px] lg:min-h-screen w-full lg:max-w-[70vw] 2xl:max-w-[50vw] content-padding">
        <div id="reason-title">
          <h2 className="hello-title lg:text-right">В чём смысл?</h2>
          <p className="hello-subtitle mb-[20px] lg:mb-[40px] lg:text-right">
            Почему это приложение появилось на свет.
          </p>
        </div>
        <p id="reason-text" className="text lg:text-right">
          Мне всегда было интересно знать некоторые вещи о себе. Например,
          сколько раз я гулял? Использовать блокнот или заметки в телефоне не
          очень удобно, поэтому для этих целей я решил создать это приложение.
        </p>
        <a
          className="mr-auto lg:mr-0 lg:ml-auto button bg-neutral-100 dark:bg-neutral-800"
          href="#Польза"
        >
          А нужно ли оно мне?
        </a>
      </div>
      <div className="flex justify-center lg:justify-end items-center w-full lg:min-h-[700px] lg:h-screen px-[40px] lg:p-0">
        <img
          src={ReasonAsset}
          alt="ReasonAsset"
          className="h-[20vh] lg:h-2/3 object-cover rounded-t-full lg:rounded-tl-none lg:rounded-r-full"
        />
      </div>
    </section>
  );
}
