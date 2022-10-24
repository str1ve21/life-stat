import React, { useEffect } from "react";

// img
import welcomeAssetPC from "@/src/assets/WelcomeAssets/PC_Interface.png";
import welcomeAssetPhone from "@/src/assets/WelcomeAssets/Phone_Interface.png";

//func
import { createParallaxY } from "../../func/parallax";

// interfaces
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";
import { createFilter } from "../../func/filter";

export default function Section1() {
  // const welcomeParallaxItems: IParallaxYOptions[] = [
  //   {
  //     elem: "#welcome-text",
  //     power: 2,
  //     startFrom: 50,
  //     finishAfter: 500,
  //   },
  //   {
  //     elem: "#welcome-image",
  //     power: 5,
  //     startFrom: 100,
  //     finishAfter: 300,
  //   },
  // ];
  // useEffect(() => {
  //   welcomeParallaxItems.forEach((item) => {
  //     createParallaxY(item);
  //   });
  // }, []);
  return (
    <section
      id="Главная"
      className="relative flex h-screen bg-neutral-100 z-10"
    >
      <div className="flex flex-col justify-between w-full content-padding pb-0">
        <div
          id="welcome-text"
          className="flex flex-col justify-center items-center h-[60vh] md:h-[70vh] w-full z-[12]"
        >
          <h1 className="hello-title text-center">Приложение LifeStat.</h1>
          <h2 className="hello-subtitle text-center mt-[20px]">
            Облегчит ведение статистики в разы.
          </h2>
        </div>
        <div
          id="welcome-image"
          className="flex justify-center items-center h-[40vh] lg:h-[30vh] z-[13]"
        >
          <img
            className="hidden lg:block w-2/3 mt-auto object-contain object-center"
            src={welcomeAssetPC}
            alt="PC App interface"
          />
          <img
            className="block lg:hidden h-full object-contain object-center"
            src={welcomeAssetPhone}
            alt="Phone App interface"
          />
        </div>
      </div>
    </section>
  );
}
