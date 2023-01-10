// react, router, mobx
import React, { useEffect } from "react";

// plugins, libs
import { animate, inView } from "motion";

// images
import RoadmapAsset from "@/src/assets/WelcomeAssets/roadmap.jpg";

export default function Roadmap() {
  const roadmapText: string[] = [
    "Создание тем для счётчиков.",
    "Возможность кастомизировать фон в приложении.",
    "OAuth + восстановление пароля.",
    "Группировка счётчиков.",
    "Система достижений.",
    "Привязка почты.",
  ];

  useEffect(() => {
    inView("#roadmap-title", (elem) => {
      animate(
        elem.target,
        { filter: "opacity(1)", x: ["100px", "0px"] },
        { duration: 0.5, delay: 0.5 }
      );
    });
    inView("#roadmap", (elem) => {
      animate(
        elem.target,
        { filter: "opacity(1)", y: ["100px", "0px"] },
        { duration: 0.5, delay: 0.5 }
      );
    });
    if (window.innerWidth >= 1024) {
      window.addEventListener("pointermove", (event) => {
        document.querySelector<HTMLImageElement>(
          "#roadmap-image"
        )!.style.transform = `scale(1.1) translate(${
          -event.clientX / 75 + "px"
        }, ${-event.clientY / 50 + "px"})`;
      });
    }
  }, []);

  return (
    <section
      id="Планы"
      className="relative flex justify-center flex-col lg:flex-row-reverse h-max bg-gradient-to-b from-app-500 dark:from-app-550 to-app-600 dark:to-app-650 round rounded-t-none z-40 overflow-hidden"
    >
      <div className="content-data">
        <div id="roadmap-title" style={{ filter: "opacity(0)" }}>
          <h2 className="hello-title lg:text-right">Планы.</h2>
          <p className="hello-subtitle mb-[20px] lg:mb-[40px] lg:text-right">
            Обновления, которые появятся в скором времени.
          </p>
        </div>
        <div
          id="roadmap"
          className="flex flex-col rounded-2xl"
          style={{ filter: "opacity(0)" }}
        >
          {roadmapText.map((item) => {
            return (
              <p
                key={item}
                className="text m-0 px-[15px] py-[10px] lg:text-right dark:odd:bg-neutral-200/20 odd:bg-neutral-800/20 odd:rounded-full"
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
      <div className="content-image">
        <div className="image-crop">
          <img src={RoadmapAsset} alt="RoadmapAsset" id="roadmap-image" />
        </div>
      </div>
    </section>
  );
}
