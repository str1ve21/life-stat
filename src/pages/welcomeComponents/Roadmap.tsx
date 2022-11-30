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
import RoadmapAsset from "@/src/assets/WelcomeAssets/roadmap.jpg";

export default function Roadmap() {
  const roadmapText: string[] = [
    "Создание тем для счётчиков.",
    "Возможность кастомизировать фон в приложении.",
    "OAuth + восстановление пароля.",
    "Система достижений.",
    "Группировка счётчиков.",
    "Анимации.",
  ];

  const benefitParallaxItems: IParallaxYOptions[] = [
    {
      elem: "#roadmap-title",
      power: 6,
      startFrom: 60,
      block: 4,
      finishBefore: 5,
    },
  ];

  const benefitFilterItems: IFilterOptions[] = [
    {
      elem: "#roadmap",
      filterType: "opacity",
      initialFilterValue: 0,
      startFrom: 75,
      finishAfter: 95,
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
      id="Планы"
      className="relative flex justify-between flex-col lg:flex-row-reverse h-max bg-gradient-to-b from-app-500 dark:from-app-550 to-app-600 dark:to-app-650 z-40 rounded-[40px] overflow-hidden"
    >
      <div className="content-text">
        <div id="roadmap-title">
          <h2 className="hello-title lg:text-right">Планы.</h2>
          <p className="hello-subtitle mb-[20px] lg:mb-[40px] lg:text-right">
            Обновления, которые появятся в скором времени.
          </p>
        </div>
        <div id="roadmap" className="flex flex-col rounded-2xl">
          {roadmapText.map((item) => {
            return (
              <p
                key={item}
                className="text m-0 p-[10px] lg:text-right odd:bg-neutral-200/20 odd:dark:bg-neutral-800/20 odd:rounded-2xl"
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="content-image">
        <img
          src={RoadmapAsset}
          alt="RoadmapAsset"
          className="rounded-t-[80px] lg:rounded-tl-none lg:rounded-r-full"
        />
      </div>
    </section>
  );
}
