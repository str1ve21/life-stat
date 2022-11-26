// react, router, mobx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

// plugins, libs
import { throttle } from "throttle-debounce";

//local functions
import { createParallaxY } from "../../func/parallax";

// interfaces
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";

// images
import welcomeAssetPC from "@/src/assets/WelcomeAssets/PC_Interface.png";
import welcomeAssetTablet from "@/src/assets/WelcomeAssets/Tablet_Interface.png";
import welcomeAssetPhone from "@/src/assets/WelcomeAssets/Phone_Interface.png";

export default function Hello() {
  const welcomeParallaxItems: IParallaxYOptions[] = [
    {
      elem: "#welcome-text",
      power: 1.5,
      startFrom: 0,
      initialTranslateY: -140,
      finishAfter: 50,
    },
    {
      elem: "#welcome-image",
      power: 5,
      startFrom: 10,
      initialTranslateY: -25,
      finishAfter: 50,
    },
  ];

  useEffect(() => {
    welcomeParallaxItems.forEach((item) => {
      window.addEventListener(
        "scroll",
        throttle(15, () => {
          createParallaxY(item);
        })
      );
    });
  }, []);

  return (
    <section id="Главная" className="relative h-screen z-10 overflow-hidden">
      <div className="flex flex-col justify-between w-full h-full content-padding">
        <div
          id="welcome-text"
          className="flex flex-col justify-end h-full w-full mb-[80px] z-[12]"
        >
          <h1 className="hello-title text-center">
            Приложение{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-br from-app-600 to-app-100">
              LifeStat
            </span>
            .
          </h1>
          <h2 className="hello-subtitle text-center mt-[20px]">
            Облегчит ведение статистики в разы.
          </h2>
        </div>
        <div id="welcome-image" className="flex justify-center h-[50vh] z-[13]">
          <img
            className="hidden xl:block h-full object-contain object-center"
            src={welcomeAssetPC}
            alt="PC App interface"
          />
          <img
            className="hidden md:block xl:hidden h-full object-contain object-center"
            src={welcomeAssetTablet}
            alt="Tablet App interface"
          />
          <img
            className="block md:hidden h-full object-contain object-center"
            src={welcomeAssetPhone}
            alt="Phone App interface"
          />
        </div>
      </div>
    </section>
  );
}
