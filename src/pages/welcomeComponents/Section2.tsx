import React, { useEffect } from "react";

//func
import { createParallaxY } from "../../func/parallax";
import { createFilter } from "../../func/filter";

// interfaces
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";
import IFilterOptions from "../../interfaces/IFilterOptions";

export default function Section2() {
  const reasonParallaxItems: IParallaxYOptions[] = [
    {
      scrollBlock: "#page",
      elem: "#reason-title",
      power: 2,
      startFrom: -200,
      initialTranslateY: -300,
      finishAfter: 300,
    },
  ];
  const reasonFilterItems: IFilterOptions[] = [
    {
      scrollBlock: "#page",
      elem: "#reason-text",
      filterType: "opacity",
      initialFilterValue: 0,
      startFrom: window.outerHeight / 2,
      finishAfter: 200,
    },
  ];
  useEffect(() => {
    reasonParallaxItems.forEach((item) => {
      createParallaxY(item);
    });
    reasonFilterItems.forEach((item) => {
      createFilter(item);
    });
  }, []);
  return (
    <section id="Reason" className="relative h-max bg-neutral-100 z-20">
      <div className="lg:w-full mx-[5vw] lg:mx-0 lg:pl-[120px] lg:pr-[60px] overflow-hidden">
        <div className="flex flex-col lg:w-[66vw] mx-auto">
          <div id="reason-title">
            <h2 className="mt-4 text-[6vh] lg:text-[12vh] text-ssp line-height-1">
              В чём смысл?
            </h2>
            <p className="mb-8 text-[1.5vh] lg:text-[2.5vh] text-raleway opacity-80">
              Почему это приложение появилось на свет.
            </p>
          </div>
          <p
            id="reason-text"
            className="mb-8 text-[2.5vh] lg:text-[3.5vh] text-raleway"
          >
            Мне всегда было интересно знать некоторые вещи о себе. Например,
            сколько печенек я съел? Надеяться на то, что я буду знать об этом
            после сморти мне не очень нравилось, а использовать блокнот или
            заметки в телефоне не очень удобно. Для этих целей я решил создать
            это приложение, возможно, не одному мне оно пригодится.
          </p>
          <a
            className="mr-auto mb-8 px-8 py-2 border-8 border-app-600 hover:border-app-100 text-[2vh] lg:text-[3vh] text-raleway rounded-2xl duration-200"
            href="#Benefit"
          >
            А нужно ли оно мне?
          </a>
        </div>
      </div>
    </section>
  );
}
