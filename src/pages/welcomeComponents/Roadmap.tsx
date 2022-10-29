import React from "react";
import RoadmapAsset from "@/src/assets/WelcomeAssets/roadmap.jpg";

export default function Roadmap() {
  const roadmapText: string[] = [
    "Создание тем для счётчиков.",
    "Возможность менять фон на фото в первой секции приложения.",
    "Добавление таймеров для счёта времени.",
    "Система достижений.",
  ];
  return (
    <section
      id="Планы"
      className="relative flex flex-col lg:flex-row-reverse h-max bg-gradient-to-b from-app-200 dark:from-app-250 to-app-300 dark:to-app-350 z-40 rounded-[40px] overflow-hidden"
    >
      <div className="flex flex-col justify-center min-h-[60vh] lg:min-h-screen w-full lg:max-w-[70vw] 2xl:max-w-[50vw] content-padding">
        <div id="roadmap-title">
          <h2 className="hello-title lg:text-right">Планы.</h2>
          <p className="hello-subtitle mb-[20px] lg:mb-[40px] lg:text-right">
            Обновления, которые появятся в скором времени.
          </p>
        </div>
        <div className="flex flex-col rounded-2xl">
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
