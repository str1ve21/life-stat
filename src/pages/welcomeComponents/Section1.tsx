import React, { useEffect } from "react";
import { throttle } from "throttle-debounce";

// img
import welcomeAssetPC from "@/src/assets/WelcomeAssets/PC_Interface.png";
import welcomeAssetPhone from "@/src/assets/WelcomeAssets/Phone_Interface.png";

//func
import { createParallaxY } from "../../func/parallax";

// interfaces
import IParallaxYOptions from "../../interfaces/IParallaxYOptions";

export default function Section1() {
  const welcomeParallaxItems: IParallaxYOptions[] = [
    {
      elem: "#welcome-text",
      power: 2,
      startFrom: 50,
      finishAfter: 500,
    },
    {
      elem: "#welcome-image",
      power: 5,
      startFrom: 100,
      finishAfter: 300,
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
    return () => {
      welcomeParallaxItems.forEach((item) => {
        window.removeEventListener(
          "scroll",
          throttle(15, () => {
            createParallaxY(item);
          })
        );
      });
    };
  }, []);
  return (
    <section id="Главная" className="relative h-screen z-10 overflow-hidden">
      <div className="flex flex-col justify-between w-full h-full content-padding pb-0">
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
          className="flex justify-center items-end h-max max-h-[40vh] z-[13]"
        >
          <img
            className="hidden lg:block w-2/3 object-contain object-center"
            src={welcomeAssetPC}
            alt="PC App interface"
            loading="lazy"
          />
          <img
            className="block lg:hidden h-full object-contain object-center"
            src={welcomeAssetPhone}
            alt="Phone App interface"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
