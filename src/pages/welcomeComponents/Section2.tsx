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
      <div className="flex flex-col justify-center lg:max-w-[60vw] h-full mx-[5vw] lg:mr-0 lg:ml-auto lg:px-[60px] overflow-hidden">
        <div id="reason-title">
          <h2 className="mt-4 text-[6vh] lg:text-[12vh] text-ssp font-bold line-height-1 text-right lg:text-right">
            В чём смысл?
          </h2>
          <p className="mb-8 text-[1.5vh] lg:text-[2.5vh] text-raleway text-right lg:text-right opacity-80">
            Почему это приложение появилось на свет.
          </p>
        </div>
        <p
          id="reason-text"
          className="mb-8 text-[2.5vh] lg:text-[3.5vh] text-raleway text-right lg:text-right"
        >
          Мне всегда было интересно знать некоторые вещи о себе. Например,
          сколько печенек я съел? Использовать блокнот или заметки в телефоне не
          очень удобно, поэтому для этих целей я решил создать это приложение.
        </p>
        <a
          className="ml-auto mb-8 px-8 py-2 bg-neutral-100 hover:scale-95 text-[2vh] lg:text-[3vh] text-raleway rounded-2xl duration-200"
          href="#Польза"
        >
          А нужно ли оно мне?
        </a>
      </div>
      <div className="hidden lg:flex justify-center items-center w-full h-screen">
        <img
          src={ReasonAsset}
          alt="?"
          className=" h-2/3 object-cover rounded-r-3xl"
        />
      </div>
    </section>
  );
}
