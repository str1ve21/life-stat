import React, { useEffect } from "react";

// img
import ReasonAsset from "@/src/assets/WelcomeAssets/reason.jpg";

//func
import { createParallaxY } from "../../func/parallax";
import { createFilter } from "../../func/filter";

// interfaces
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";
import IFilterOptions from "../../interfaces/IFilterOptions";

export default function Section2() {
  // const reasonParallaxItems: IParallaxYOptions[] = [
  //   {
  //     elem: "#reason-title",
  //     power: 2,
  //     startFrom: 0,
  //     initialTranslateY: -300,
  //     finishAfter: 300,
  //   },
  // ];
  // const reasonFilterItems: IFilterOptions[] = [
  //   {
  //     elem: "#reason-text",
  //     filterType: "opacity",
  //     initialFilterValue: 0,
  //     startFrom: window.outerHeight / 2,
  //     finishAfter: 200,
  //   },
  // ];
  // useEffect(() => {
  //   reasonParallaxItems.forEach((item) => {
  //     createParallaxY(item);
  //   });
  //   reasonFilterItems.forEach((item) => {
  //     createFilter(item);
  //   });
  // }, []);
  return (
    <section
      id="Смысл"
      className="relative flex flex-row-reverse h-[80vh] lg:h-screen bg-gradient-to-b from-app-100 to-app-200 z-20"
    >
      <div className="flex flex-col justify-center lg:max-w-[70vw] 2xl:max-w-[50vw] content-padding overflow-hidden">
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
          className="mr-auto lg:mr-0 lg:ml-auto button bg-neutral-100"
          href="#Польза"
        >
          А нужно ли оно мне?
        </a>
      </div>
      <div className="hidden lg:flex justify-center items-center w-full h-screen">
        <img
          src={ReasonAsset}
          alt="ReasonAsset"
          className=" h-2/3 object-cover rounded-r-3xl"
        />
      </div>
    </section>
  );
}
