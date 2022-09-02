import React, { useEffect } from "react";

// img
import welcomeAssetPC from "@/WelcomeAssets/PC_Interface.png";
import welcomeAssetPhone from "@/WelcomeAssets/Phone_Interface.png";

//func
import { createParallaxY } from "../../func/parallax";

// interfaces
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";

export default function Section1() {
  const welcomeParallaxItems: IParallaxYOptions[] = [
    {
      scrollBlock: "#page",
      elem: "#welcome-text",
      power: 2,
      startFrom: 50,
    },
    {
      scrollBlock: "#page",
      elem: "#welcome-image",
      power: 5,
      startFrom: 100,
    },
  ];
  useEffect(() => {
    welcomeParallaxItems.forEach((item) => {
      createParallaxY(item);
    });
  }, []);
  return (
    <section id="Welcome" className="relative flex h-screen bg-neutral-100">
      <div className="flex flex-col justify-between w-full mx-[5vw] md:px-[120px]">
        <div
          id="welcome-text"
          className="flex flex-col justify-center items-center h-1/2 md:h-3/5 w-full z-10"
        >
          <h1 className="text-[6vh] lg:text-[12vh] text-ssp text-center">
            Приложение LifeStat.
          </h1>
          <h2 className="text-[3vh] lg:text-[6vh] text-raleway text-center opacity-80">
            Облегчит ведение статистики в разы.
          </h2>
        </div>
        <div
          id="welcome-image"
          className="flex justify-center items-center h-1/2 lg:h-2/5 w-full z-20"
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
