import React, { useEffect } from "react";
import { throttle } from "throttle-debounce";
import RoadmapAsset from "@/src/assets/WelcomeAssets/roadmap.jpg";

// func
import { createFilter } from "../../func/filter";
import { createParallaxY } from "../../func/parallax";

// interfaces
import IFilterOptions from "../../interfaces/IFilterOptions";
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";

export default function Roadmap() {
  const roadmapText: string[] = [
    "Создание тем для счётчиков.",
    "Возможность кастомизировать фон в первой секции приложения.",
    "Добавление таймеров для счёта времени.",
    "Система достижений.",
    "Группировка счётчиков.",
    "Анимации.",
  ];

  const benefitParallaxItems: IParallaxYOptions[] = [
    {
      elem: "#roadmap-title",
      power: 2,
      startFrom: window.outerHeight * 2.7,
      initialTranslateY: -window.outerHeight / 3,
      finishAfter: window.outerHeight / 3,
    },
  ];
  const benefitFilterItems: IFilterOptions[] = [
    {
      elem: "#roadmap",
      filterType: "opacity",
      initialFilterValue: 0,
      startFrom: window.outerHeight * 3.3,
      finishAfter: window.outerHeight / 4,
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
  }, []);
  return (
    <section
      id="Планы"
      className="relative flex flex-col lg:flex-row-reverse h-max bg-gradient-to-b from-app-500 dark:from-app-550 to-app-600 dark:to-app-650 z-40 rounded-[40px] overflow-hidden"
    >
      <div className="flex flex-col justify-center min-h-[70vh] lg:min-h-screen w-full lg:max-w-[70vw] 2xl:max-w-[50vw] content-padding">
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
      <div className="flex justify-center lg:justify-start items-center px-[40px] lg:p-0 w-full lg:h-screen">
        <img
          src={RoadmapAsset}
          alt="RoadmapAsset"
          className="h-[20vh] lg:h-2/3 object-cover rounded-t-full lg:rounded-tl-none lg:rounded-r-full"
        />
      </div>
    </section>
  );
}
